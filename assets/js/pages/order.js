const orders = [
  {
    orderNo: "ORD-001",
    customer: "Erma D. Rumph",
    items: [
      { name: "Margherita Pizza", qty: 1, price: 16 },
      { name: "Cheeseburger", qty: 2, price: 10 }
    ],
    paymentMethod: "Online POS",
    paymentStatus: "success", // success | pending | failed
    orderDate: "15-02-2024, 04:27 pm",
    address: "44 Hide A Way Orlando.",
    status: "Ready To Pick"
  }
];

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function paymentIcon(status) {
  if (status === "success") return `<i class="ri-check-double-line text-success"></i>`;
  if (status === "pending") return `<i class="ri-restart-line text-warning"></i>`;
  return `<i class="ri-close-line text-danger"></i>`;
}

function statusBadge(status) {
  const map = {
    "Ready To Pick": "warning",
    "Out Of Delivery": "primary",
    "Delivered": "success",
    "Cancel": "danger",
    "Progress": "info"
  };

  const color = map[status] || "secondary";
  return `<span class="badge border border-${color} text-${color} px-2 py-1 fs-11">${status}</span>`;
}

function renderIssuedInventory(orders) {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  if (!orders.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" class="text-center text-muted py-4">
          No orders found
        </td>
      </tr>
    `;
    return;
  }

  orders.forEach(order => {
    const itemsHTML = order.items.map((item, i) => `
      <p class="${i === order.items.length - 1 ? "mb-0" : "mb-1"}">
        <span class="fw-semibold text-dark me-1">${i + 1}.</span>${item.name}
      </p>
    `).join("");

    const qtyHTML = order.items.map((item, i) => `
      <p class="${i === order.items.length - 1 ? "mb-0" : "mb-1"}">${item.qty}</p>
    `).join("");

    const priceHTML = order.items.map((item, i) => `
      <p class="${i === order.items.length - 1 ? "mb-0" : "mb-1"}">
        ${formatCurrency(item.price)}
      </p>
    `).join("");

    const totalPrice = order.items.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );

    tbody.innerHTML += `
      <tr>
        <td>#${order.orderNo}</td>

        <td>
          <a href="#!" class="link-primary fw-medium">${order.customer}</a>
        </td>

        <td>${itemsHTML}</td>

        <td>${qtyHTML}</td>

        <td>${priceHTML}</td>

        <td>${formatCurrency(totalPrice)}</td>

        <td>
          ${order.paymentMethod}
          ${paymentIcon(order.paymentStatus)}
        </td>

        <td>${order.orderDate}</td>

        <td>${order.address || "-"}</td>

        <td>${statusBadge(order.status)}</td>

        <td>
          <div class="d-flex gap-3">
            <a href="#!" class="text-muted view-order" data-id="${order.orderNo}">
              <i class="ri-eye-line fs-20"></i>
            </a>
            <a href="#!" class="link-dark edit-order" data-id="${order.orderNo}">
              <i class="ri-edit-line fs-20"></i>
            </a>
            <a href="#!" class="link-danger delete-order" data-id="${order.orderNo}">
              <i class="ri-delete-bin-5-line fs-20"></i>
            </a>
          </div>
        </td>
      </tr>
    `;
  });
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

  const params = new URLSearchParams({
    page,
    limit: issuedInventoryState.limit,
    ...issuedInventoryState.filters
  });

  try {
    const res = await fetch(
      `https://api.e3restaurant.com/get-issued-inventory-history?${params.toString()}`,
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
