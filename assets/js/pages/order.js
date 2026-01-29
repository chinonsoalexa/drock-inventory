function formatCurrency(amount) {
  return `₦${Number(amount).toLocaleString()}`;
}

function renderIssuedInventory(issues) {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  if (!issues.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" class="text-center text-muted py-4">
          No issued inventory found
        </td>
      </tr>
    `;
    return;
  }

  issues.forEach(issue => {
    const items = issue.items || [];

    // 🧾 Item names
    const itemsHTML = items.length
      ? items.map((item, i) => `
          <p class="${i === items.length - 1 ? "mb-0" : "mb-1"}">
            <span class="fw-semibold me-1">${i + 1}.</span>${item.name}
          </p>
        `).join("")
      : `<span class="text-muted">No items</span>`;

    // 🔢 Quantities
    const qtyHTML = items.length
      ? items.map((item, i) => `
          <p class="${i === items.length - 1 ? "mb-0" : "mb-1"}">
            ${item.quantity_issued}
          </p>
        `).join("")
      : "-";

    // 💰 Unit prices
    const priceHTML = items.length
      ? items.map((item, i) => `
          <p class="${i === items.length - 1 ? "mb-0" : "mb-1"}">
            ${formatCurrency(item.unit_price)}
          </p>
        `).join("")
      : "-";

    // 🧮 Total value
    const totalValue = items.reduce(
      (sum, item) => sum + item.quantity_issued * item.unit_price,
      0
    );

    tbody.innerHTML += `
      <tr>
        <td>#${issue.reference || issue.ID}</td>

        <td>
          <span class="fw-medium">${issue.issued_by_name}</span>
        </td>

        <td>${itemsHTML}</td>

        <td>${qtyHTML}</td>

        <td>${priceHTML}</td>

        <td class="fw-semibold">
          ${formatCurrency(totalValue)}
        </td>

        <td>
          ${issue.reason}
        </td>

        <td>
          ${new Date(issue.CreatedAt).toLocaleDateString()}
        </td>

        <td>
          ${"https://invetory.e3restaurant.com/image/" + issue.url
            ? `<a href="https://invetory.e3restaurant.com/image/${issue.url}" target="_blank" class="link-primary">View</a>`
            : "-"}
        </td>

        <td>
          <span class="badge bg-success-subtle text-success">
            Issued
          </span>
        </td>

        <td>
          <div class="d-flex gap-3">
            <a href="#!" class="text-muted view-issue" data-id="${issue.ID}">
              <i class="ri-eye-line fs-20"></i>
            </a>
          </div>
        </td>
      </tr>
    `;
  });
}

let networkBanner = null;

function showNetworkBanner({ text, bg, color }) {
  if (networkBanner) networkBanner.remove();

  networkBanner = document.createElement("div");
  networkBanner.textContent = text;

  Object.assign(networkBanner.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 14px",
    background: bg,
    color,
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 6px 16px rgba(0,0,0,.15)",
    cursor: "pointer",
    zIndex: 9999
  });

  networkBanner.onclick = () => networkBanner.remove();
  document.body.appendChild(networkBanner);
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