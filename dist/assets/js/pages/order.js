function formatCurrency(amount) {
  return `₦${Number(amount).toLocaleString()}`;
}

function viewIssueImage(url) {
  const img = document.getElementById("imagePreview");

  img.src = url;

  const modal = new bootstrap.Modal(
    document.getElementById("imagePreviewModal")
  );
  modal.show();
}

function renderIssuedInventorySkeleton(rows = 5) {
  const tbody = document.getElementById("issuedInventoryContainer");
  tbody.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    tbody.innerHTML += `
      <tr>
        <td><div class="skeleton skeleton-md"></div></td>
        <td><div class="skeleton skeleton-md"></div></td>
        <td><div class="skeleton skeleton-md"></div></td>
        <td>
          <div class="skeleton skeleton-sm skeleton-mb"></div>
          <div class="skeleton skeleton-sm skeleton-mb"></div>
          <div class="skeleton skeleton-sm"></div>
        </td>
        <td><div class="skeleton skeleton-md"></div></td>
        <td><div class="skeleton skeleton-md"></div></td>
        <td><div class="skeleton skeleton-sm" style="width:60px"></div></td>
      </tr>
    `;
  }
}

function renderIssuedInventory(issues) {
  const tbody = document.getElementById("issuedInventoryContainer");
  tbody.innerHTML = "";

  issues.forEach(issue => {
    const itemsHTML = issue.items.map((item, i) => `
      <div class="mb-1">
        <strong>${i + 1}.</strong> ${item.name}
        <span class="text-muted">(${item.quantity_issued} ${item.measurement})</span>
      </div>
    `).join("");

    const totalValue = issue.items.reduce(
      (sum, i) => sum + (i.quantity_issued * i.unit_price),
      0
    );

    const imageUrl = issue.url
      ? `https://invetory.e3restaurant.com/image/${issue.url}`
      : null;

    tbody.innerHTML += `
      <tr>
        <td>#${issue.ID}</td>
        <td>${issue.issued_by_name}</td>
        <td>${issue.reason}</td>
        <td>${itemsHTML}</td>
        <td>₦${totalValue.toLocaleString()}</td>
        <td>${new Date(issue.CreatedAt).toLocaleString()}</td>
        <td>
          ${
            imageUrl
              ? `<a href="javascript:void(0)"
                    class="text-primary fw-medium"
                    onclick="viewIssueImage('${imageUrl}')">
                    View
                </a>`
              : "-"
          }
        </td>
      </tr>
    `;
  });
}

let networkBanner = null;

function showNetworkBanner({ text, bg, color }) {
  const banner = document.createElement("div");
  banner.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${bg};
    color: ${color};
    padding: 12px 16px;
    border-radius: 6px;
    z-index: 9999;
    font-size: 14px;
  `;
  banner.innerText = text;

  document.body.appendChild(banner);

  setTimeout(() => banner.remove(), 3000);
}

let issuedInventoryState = {
  page: 1,
  limit: 30,
  totalPages: 1,
  filters: {
    search: "",
    reference: "",
    issued_by: "",
    from_date: "",
    to_date: ""
  }
};

async function fetchIssuedInventory(page = 1) {
  issuedInventoryState.page = page;
    
  // 👇 SHOW LOADER
  renderIssuedInventorySkeleton(5);

  const query = buildIssuedInventoryQuery(page);
  const params = new URLSearchParams({
    page,
    limit: issuedInventoryState.limit,
    ...issuedInventoryState.filters
  });

  try {
    const res = await fetch(
      `https://api.drockbar.com/get-issued-inventory-history?${query}`,
      {
        method: "GET",
        credentials: "include", // 🔐 required for auth middleware
        headers: {
          "Accept": "application/json"
        }
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to load issued inventory");
    }

    issuedInventoryState.totalPages = data.pagination.TotalPages;

    renderIssuedInventory(data.success);
    renderIssuedPagination(data.pagination);

  } catch (err) {
    console.error(err);
    showNetworkBanner({
      text: `⚠️ ${err.message}`,
      bg: "#FFF3CD",
      color: "#664D03"
    });
  }
}

function renderIssuedPagination(pagination) {
  const ul = document.getElementById("issuedPagination");
  ul.innerHTML = "";

  const { CurrentPage, TotalPages } = pagination;

  // ⬅ Previous
  ul.innerHTML += `
    <li class="page-item ${CurrentPage <= 1 ? "disabled" : ""}">
      <a class="page-link" href="javascript:void(0);" data-page="${CurrentPage - 1}">
        <i class="ri-arrow-left-s-line"></i>
      </a>
    </li>
  `;

  // Page numbers (max 5)
  const start = Math.max(1, CurrentPage - 2);
  const end = Math.min(TotalPages, CurrentPage + 2);

  for (let i = start; i <= end; i++) {
    ul.innerHTML += `
      <li class="page-item ${i === CurrentPage ? "active" : ""}">
        <a class="page-link" href="javascript:void(0);" data-page="${i}">
          ${i}
        </a>
      </li>
    `;
  }

  // ➡ Next
  ul.innerHTML += `
    <li class="page-item ${CurrentPage >= TotalPages ? "disabled" : ""}">
      <a class="page-link" href="javascript:void(0);" data-page="${CurrentPage + 1}">
        <i class="ri-arrow-right-s-line"></i>
      </a>
    </li>
  `;
}

document.addEventListener("click", e => {
  const link = e.target.closest(".page-link");
  if (!link || !link.dataset.page) return;

  const page = Number(link.dataset.page);
  if (page < 1 || page > issuedInventoryState.totalPages) return;

  fetchIssuedInventory(page);
});

document.addEventListener("DOMContentLoaded", () => {
  fetchIssuedInventory(1);
});


function buildIssuedInventoryQuery(page = 1) {
  const params = new URLSearchParams();

  const issuedBy = document.getElementById("filterIssuedBy").value;
  const reference = document.getElementById("filterReference").value.trim();
  const search = document.getElementById("filterSearch").value.trim();
  const fromDate = document.getElementById("filterFromDate").value;
  const toDate = document.getElementById("filterToDate").value;

  if (issuedBy) params.append("issued_by", issuedBy);
  if (reference) params.append("reference", reference);
  if (search) params.append("search", search);
  if (fromDate) params.append("from_date", fromDate);
  if (toDate) params.append("to_date", toDate);

  params.append("page", page);
  params.append("limit", 15);

  return params.toString();
}

document.getElementById("applyFilters").addEventListener("click", () => {
  fetchIssuedInventory(1);
});

document.getElementById("resetFilters").addEventListener("click", () => {
  document.getElementById("filterIssuedBy").value = "";
  document.getElementById("filterReference").value = "";
  document.getElementById("filterSearch").value = "";
  document.getElementById("filterFromDate").value = "";
  document.getElementById("filterToDate").value = "";

  fetchIssuedInventory(1);
});