const products = [
  {
    id: 1,
    name: "Italian Burrata Pizza",
    size: "12-Inch",
    image: "assets/images/food-icon/pic12.png",
    description: "Traditional Italian pizza with fresh burrata.",
    ingredients: "Mushrooms, Bell Peppers, Onions, Basil",
    price: 12
  },
  {
    id: 2,
    name: "Shanghai Noodles",
    size: "Large Bowl",
    image: "assets/images/food-icon/pic13.png",
    description: "Wheat noodles tossed in classic sauce.",
    ingredients: "Green onions, Soy sauce, Sesame oil",
    price: 13
  }
];

function renderProductsTable(products) {
  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = "";

  if (!products || !products.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center text-muted py-4">
          No inventory records found
        </td>
      </tr>
    `;
    return;
  }

  products.forEach(product => {
    const lowStockBadge = product.low_stock
      ? `<span class="badge bg-danger">Low</span>`
      : `<span class="badge bg-success">OK</span>`;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="fw-semibold">${product.name}</td>

      <td>${product.category}</td>

      <td class="fw-semibold">
        ₦${Number(product.unit_price).toLocaleString()}
      </td>

      <td>${product.quantity_in}</td>

      <td>${product.quantity_out}</td>

      <td class="fw-semibold">
        ${product.quantity_bal}
      </td>

      <td>${product.measurement}</td>

      <td>${lowStockBadge}</td>
    `;

    tbody.appendChild(row);
  });
}

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

function fetchInventory() {
  const params = new URLSearchParams({
    from_date: fromDate || "",
    to_date: toDate || "",
    category: selectedCategory || "",
    sort_order: sortOrder || ""
  });

  fetch(`https://api.e3restaurant.com/search-inventory?${params.toString()}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      // ✅ pass the actual data
      renderProductsTable(data.success);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Failed to load inventory");
    });
}
