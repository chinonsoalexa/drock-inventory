function formatCurrency(amount) {
  return `₦${Number(amount).toLocaleString()}`;
}

function renderIssuedInventory(issues) {
  const tbody = document.getElementById("issuedInventoryBody");

  if (!tbody) {
    console.error("issuedInventoryBody not found in DOM");
    return;
  }

  tbody.innerHTML = "";

  if (!issues || !issues.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center text-muted py-4">
          No issued inventory found
        </td>
      </tr>
    `;
    return;
  }

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

    tbody.innerHTML += `
      <tr>
        <td>#${issue.ID}</td>
        <td>${issue.issued_by_name}</td>
        <td>${issue.reason}</td>
        <td>${itemsHTML}</td>
        <td>₦${totalValue.toLocaleString()}</td>
        <td>${new Date(issue.CreatedAt).toLocaleString()}</td>
        <td>
          ${issue.url ? `<a href="${issue.url}" target="_blank">View</a>` : "-"}
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
  limit: 15,
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
  const query = buildIssuedInventoryQuery(page);
  const params = new URLSearchParams({
    page,
    limit: issuedInventoryState.limit,
    ...issuedInventoryState.filters
  });

  try {
    const res = await fetch(
      `https://api.e3restaurant.com/get-issued-inventory-history?${query}`,
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

function renderIssuedInventory(issues) {
  const container = document.getElementById("issuedInventoryContainer");
  container.innerHTML = "";

  if (!issues.length) {
    container.innerHTML = `<p class="text-muted">No issued inventory found.</p>`;
    return;
  }

  issues.forEach(issue => {
    const itemsHtml = issue.items.map(item => `
      <li>
        ${item.name} — <strong>${item.quantity_issued}</strong> ${item.measurement}
      </li>
    `).join("");

    container.innerHTML += `
      <div class="card mb-3">
        <div class="card-body">
          <h6 class="mb-1">${issue.reason}</h6>
          <small class="text-muted">
            Issued by ${issue.issued_by_name} • ${new Date(issue.created_at).toLocaleDateString()}
          </small>

          <ul class="mt-2">
            ${itemsHtml}
          </ul>

          ${issue.url ? `<a href="${issue.url}" target="_blank">View attachment</a>` : ""}
        </div>
      </div>
    `;
  });
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