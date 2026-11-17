function renderInventorySkeleton(inventoryCount = 3, itemsPerInventory = 2) {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = "";

  for (let i = 0; i < inventoryCount; i++) {
    // 🔹 Inventory header skeleton
    tbody.innerHTML += `
      <tr class="table-light">
        <td colspan="6">
          <div class="skeleton skeleton-text w-50"></div>
        </td>
        <td colspan="2"></td>
        <td>
          <div class="skeleton skeleton-badge"></div>
        </td>
      </tr>
    `;

    // 🔹 Item skeleton rows
    for (let j = 0; j < itemsPerInventory; j++) {
      tbody.innerHTML += `
        <tr class="skeleton-row">
          <td class="ps-4">
            <div class="skeleton skeleton-text w-75"></div>
          </td>
          <td><div class="skeleton skeleton-text w-75"></div></td>
          <td><div class="skeleton skeleton-text w-50"></div></td>
          <td><div class="skeleton skeleton-text w-25"></div></td>
          <td><div class="skeleton skeleton-text w-25"></div></td>
          <td><div class="skeleton skeleton-text w-25"></div></td>
          <td><div class="skeleton skeleton-text w-50"></div></td>
          <td><div class="skeleton skeleton-badge"></div></td>
          <td></td>
        </tr>
      `;
    }
  }
}

function renderProductsTable(inventories) {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = "";

  inventories.forEach(inv => {
    // 1️⃣ Inventory header
    tbody.insertAdjacentHTML("beforeend", renderInventoryHeader(inv));

    // 2️⃣ Inventory items
    inv.items.forEach(item => {
      tbody.insertAdjacentHTML(
        "beforeend",
        renderInventoryItem(item, inv.ID)
      );
    });
  });
}

function renderInventoryItem(item, inventoryId) {
  return `
    <tr class="inventory-item" data-group="inventory-${inventoryId}">
      <td class="ps-4">• ${item.name}</td>
      <td>${item.category}</td>
      <td>₦${Number(item.unit_price).toLocaleString()}</td>
      <td>${item.quantity_in}</td>
      <td>${item.quantity_out}</td>
      <td class="fw-semibold">${item.quantity_bal}</td>
      <td>${item.measurement}</td>
      <td>
        <span class="badge ${
          item.quantity_bal <= item.low_stock ? "bg-danger" : "bg-success"
        }">
          ${item.quantity_bal <= item.low_stock ? "Low" : "OK"}
        </span>
      </td>
      <td></td>
    </tr>
  `;
}

function renderInventoryHeader(inv) {
  const imageUrl = `https://admin.e3restaurant.com/image/${inv.url}`;

  return `
    <tr class="table-light fw-semibold inventory-header">
      <td colspan="6">
        <button class="btn btn-sm btn-link toggle-items" data-id="${inv.ID}">
          <i class="ri-arrow-down-s-line"></i>
        </button>
        <strong>${inv.supplier}</strong>
        <span class="text-muted ms-2">
          (${new Date(inv.CreatedAt).toLocaleDateString()})
        </span>
      </td>

      <td colspan="2"></td>

      <td class="d-flex gap-1 justify-content-end">
        <!-- 👁 View -->
        <button
          class="btn btn-sm btn-outline-secondary view-receipt-btn"
          data-url="${imageUrl}"
          title="View receipt"
        >
          <i class="ri-image-line"></i>
        </button>

        <!-- ⬇ Download -->
        <a
          class="btn btn-sm btn-outline-secondary"
          href="${imageUrl}"
          download
          title="Download receipt"
        >
          <i class="ri-download-line"></i>
        </a>

        <!-- 🖨 Print -->
        <button
          class="btn btn-sm btn-outline-dark"
          onclick="printReceipt('${imageUrl}')"
          title="Print receipt"
        >
          <i class="ri-printer-line"></i>
        </button>
      </td>
    </tr>
  `;
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".toggle-items");
  if (!btn) return;

  const id = btn.dataset.id;
  const rows = document.querySelectorAll(`[data-group="inventory-${id}"]`);
  const icon = btn.querySelector("i");

  rows.forEach(r => r.classList.toggle("d-none"));
  icon.classList.toggle("ri-arrow-down-s-line");
  icon.classList.toggle("ri-arrow-right-s-line");
});

document.addEventListener("click", e => {
  const btn = e.target.closest(".view-receipt");
  if (!btn) return;

  const url = btn.dataset.url;
  const link = document.createElement("a");
  link.href = `https://admin.e3restaurant.com/image/${url}`;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

function printReceipt(imageUrl) {
  const win = window.open("", "_blank");
  win.document.write(`
    <html>
      <head>
        <title>Inventory Receipt</title>
      </head>
      <body style="text-align:center">
        <img src="${imageUrl}" style="max-width:100%">
        <script>
          window.onload = () => window.print();
        </script>
      </body>
    </html>
  `);
}

document.getElementById("itemSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  document.querySelectorAll(".inventory-item").forEach(row => {
    const text = row.textContent.toLowerCase();
    row.classList.toggle("d-none", !text.includes(q));
  });
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = e.target.dataset.id;
    console.log("Add to cart:", productId);
  }
});

// Example categories
const inventoryCategories = [
    "Grains & Cereals",
    "Vegetables",
    "Fruits",
    "Meat",
    "Fish & Seafood",
    "Drinks",
    "Alcoholic Beverages",
    "Spices & Seasonings",
    "Oils & Fats",
    "Packaged Goods"
];

// Populate category dropdown dynamically
const categoryMenu = document.getElementById("categorySortMenu");
inventoryCategories.forEach(cat => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="dropdown-item" href="#!" data-category="${cat}">${cat}</a>`;
    categoryMenu.appendChild(li);
});

let selectedCategory = "";
let sortOrder = "asc";
let fromDate = "";
let toDate = "";

// Apply date filter
document.getElementById("applyDateFilter").addEventListener("click", () => {
    fromDate = document.getElementById("fromDate").value;
    toDate = document.getElementById("toDate").value;

    if (!fromDate || !toDate) {
        alert("Please select both From and To dates");
        return;
    }

    updateParam("from", filters.from);
    updateParam("to", filters.to);

    fetchInventory();
});

const categoryButton = document.getElementById("categoryDropdownBtn");
const orderButton = document.getElementById("orderDropdownBtn");

function getParams() {
  return new URLSearchParams(window.location.search);
}

function updateParam(key, value) {
  const params = getParams();

  if (!value) {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}

let filters = {
  from: "",
  to: "",
  category: "",
  order: ""
};

function loadFiltersFromURL() {
  const params = getParams();

  filters.from = params.get("from") || "";
  filters.to = params.get("to") || "";
  filters.category = params.get("category") || "";
  filters.order = params.get("order") || "";

  // Update UI labels
  if (filters.category) {
    document.getElementById("categoryDropdownBtn").textContent =
      filters.category;
  }

  if (filters.order) {
    document.getElementById("orderDropdownBtn").textContent =
      filters.order === "asc" ? "Ascending" : "Descending";
  }

  if (filters.from) document.getElementById("fromDate").value = filters.from;
  if (filters.to) document.getElementById("toDate").value = filters.to;
}

loadFiltersFromURL();
fetchInventory();

// Category click
document.addEventListener("click", e => {
    const categoryItem = e.target.closest("[data-category]");
    if (!categoryItem) return;

    e.preventDefault();
    selectedCategory = categoryItem.dataset.category;
    updateParam("category", filters.category);

    categoryButton.textContent = selectedCategory;
    fetchInventory();
});

// Order click
document.addEventListener("click", e => {
    const orderItem = e.target.closest("[data-order]");
    if (!orderItem) return;

    e.preventDefault();
    
  filters.order = item.dataset.order;
  updateParam("order", filters.order);

  document.getElementById("orderDropdownBtn").textContent =
    filters.order === "asc" ? "Ascending" : "Descending";

    fetchInventory();
});

function fetchInventory(page = 1) {
  renderInventorySkeleton(); // 👈 show loader immediately

  const params = new URLSearchParams({
    from_date: fromDate,
    to_date: toDate,
    category: selectedCategory,
    sort_order: sortOrder,
    page,
    limit: 30
  });

  fetch(`https://api.drockbar.com/get-supplied-inventory?${params.toString()}`, {
    credentials: "include"
  })
    .then(res => res.json())
    .then(data => {
      renderProductsTable(data.success);
      renderInventoryPagination(data.pagination);
    })
    .catch(err => console.error(err));
}

function renderInventoryPagination(pagination) {
  const ul = document.getElementById("inventoryPagination");
  ul.innerHTML = "";

  const {
    CurrentPage,
    TotalPages,
    PreviousPage,
    NextPage
  } = pagination;

  // ⬅ Previous
  ul.innerHTML += `
    <li class="page-item ${CurrentPage <= 1 ? "disabled" : ""}">
      <a class="page-link" href="javascript:void(0);" data-page="${PreviousPage}">
        <i class="ri-arrow-left-s-line"></i>
      </a>
    </li>
  `;

  // Page numbers (max 5 visible)
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
      <a class="page-link" href="javascript:void(0);" data-page="${NextPage}">
        <i class="ri-arrow-right-s-line"></i>
      </a>
    </li>
  `;
}

document.addEventListener("click", e => {
  const link = e.target.closest(".page-link");
  if (!link) return;

  const page = Number(link.dataset.page);
  if (!page || page < 1) return;

  fetchInventory(page);
});

document.addEventListener("click", e => {
  const btn = e.target.closest(".view-receipt-btn");
  if (!btn) return;

  const imageUrl = btn.dataset.url;
  const img = document.getElementById("receiptImage");

  img.src = imageUrl;

  const modal = new bootstrap.Modal(
    document.getElementById("receiptModal")
  );
  modal.show();
});
