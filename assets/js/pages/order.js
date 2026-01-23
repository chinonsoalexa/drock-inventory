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

function renderOrdersTable(orders) {
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

renderOrdersTable(orders);
