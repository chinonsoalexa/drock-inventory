const CATEGORY_ICON_MAP = {
  // RAW FOOD
  "Grains & Cereals": "fa-solid fa-wheat-awn",   // or fa-seedling
  "Tubers & Roots": "fa-solid fa-carrot",
  "Vegetables (Fresh)": "fa-solid fa-leaf",
  "Fruits": "fa-solid fa-apple-whole",
  "Oils & Fats": "fa-solid fa-oil-can",
  "Spices & Seasonings": "fa-solid fa-pepper-hot",

  // PROTEINS
  "Red Meat": "fa-solid fa-drumstick-bite",
  "Poultry": "fa-solid fa-egg",                  // closest to poultry
  "Fish & Seafood": "fa-solid fa-fish",

  // SEMI / PROCESSED
  "Soup Bases & Sauces": "fa-solid fa-bowl-food",
  "Noodles & Pasta": "fa-solid fa-bowl-rice",   // closest
  "Canned & Packaged Foods": "fa-solid fa-box-open",

  // DRINKS
  "Water": "fa-solid fa-droplet",
  "Soft Drinks": "fa-solid fa-cup-straw",
  "Juices & Smoothies": "fa-solid fa-glass-whiskey", // closest
  "Hot Beverages": "fa-solid fa-mug-hot",
  "Beer & Stout": "fa-solid fa-beer-mug-empty",
  "Wine": "fa-solid fa-wine-bottle",
  "Spirits & Liquor": "fa-solid fa-wine-glass",

  // SUPPLIES
  "Packaging Materials": "fa-solid fa-box",
  "Cleaning Supplies": "fa-solid fa-broom",
  "Cooking Gas & Fuel": "fa-solid fa-fire"
};

function getCategoryIcon(category) {
  return CATEGORY_ICON_MAP[category] || "ri-store-2-line";
}

const CATEGORY_COLOR_MAP = {
  "Vegetables (Fresh)": "text-success",
  "Fruits": "text-warning",
  "Red Meat": "text-danger",
  "Fish & Seafood": "text-info",
  "Beer & Stout": "text-warning",
  "Spirits & Liquor": "text-dark",
  "Cleaning Supplies": "text-secondary"
};

const cartContainer = document.getElementById("cartItems");
const totalItemsEl = document.getElementById("totalItems");

let products1 = [];
let currentPage1 = 1;
const pageLimit = 15;

function getCategoryColor(category) {
  return CATEGORY_COLOR_MAP[category] || "text-primary";
}

let currentCategory = "all";
let productsToShow = [];
let batchSize = 21; // 3 rows of 7 items
let lastIndex = 0;
let searchQuery = "";
let retryInterval = null;

// Slider logic
let currentPage = 0;
const pages = document.querySelectorAll(".menu-page");

function updateSlide() {
  track.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Eye click event
document.addEventListener("click", e => {
  const eye = e.target.closest(".menu-eye");
  if (!eye) return;

  const name = eye.dataset.name;
  renderMenu(products, name, true);

  // Example API call
  // fetch(`/api/menu?category=${encodeURIComponent(name)}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
});

// document.addEventListener("DOMContentLoaded", function() {
//     var e = document.querySelectorAll(".plus"),
//         n = document.querySelectorAll(".minus");

//     function i(e, n) {
//         var i = 1 === n ? e.previousElementSibling : e.nextElementSibling,
//             t = parseInt(i.value),
//             s = parseInt(i.min),
//             e = parseInt(i.max);
//         s <= (n = t + n) && n <= e && (i.value = n)
//     }
//     e.forEach(function(e) {
//         e.addEventListener("click", function() {
//             i(e, 1)
//         })
//     }), n.forEach(function(e) {
//         e.addEventListener("click", function() {
//             i(e, -1)
//         })
//     })
// });

// Cart container event delegation
cartContainer.addEventListener("click", e => {
  const id = parseInt(e.target.closest("[data-id]")?.dataset.id, 10);
  if (!id) return;

  const item = cartState.find(i => i.ID === id);
  if (!item) return;

  // + / - buttons
  if (e.target.closest(".plus")) {
    if (item.qty < item.quantity_bal) item.qty++;
  } else if (e.target.closest(".minus")) {
    if (item.qty > 1) item.qty--;
  } else if (e.target.closest(".remove-item")) {
    cartState = cartState.filter(i => i.ID !== id);
  }

  saveCart();
  renderCart();
});

cartContainer.addEventListener("input", e => {
  if (!e.target.classList.contains("cart-qty-input")) return;

  const id = parseInt(e.target.dataset.id, 10);
  const max = parseInt(e.target.dataset.max, 10);
  const item = cartState.find(i => i.ID === id);
  if (!item) return;

  let val = parseInt(e.target.value, 10);
  if (isNaN(val) || val < 1) val = 1;
  else if (val > max) val = max;

  item.qty = val;
  e.target.value = val;

  saveCart();
  renderSummary();
});

const CART_KEY = "e3_cart_inventory";

let cartState = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartState));
}

async function addToCart(product) {
  // match using ID (uppercase) because that’s what your products use
  const existing = cartState.find(i => i.ID === product.ID);

  if (existing) {
    if (existing.qty < existing.quantity_bal) existing.qty++; // enforce stock limit
  } else {
    cartState.push({ ...product, qty: 1 });
  }

  saveCart();

  // Update “Added: X” badge in menu
  updateAddedQty(product.ID);
  updateCartItemPrice(product.ID);

  renderCart();

  // optional: server sync
  try {
    await uploadCartItem(product);
  } catch {}
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const product = products1.find(p => p.ID === id);

  addToCart(product);
});

function renderCart() {
  cartContainer.innerHTML = "";

  if (!cartState.length) {
    cartContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="ri-shopping-cart-line fs-1 text-muted"></i>
        <p class="mt-2 fw-semibold text-muted">Your Inventory is empty</p>
      </div>
    `;
    renderSummary();
    return;
  }

  cartState.forEach(item => {
    const qtyInCart = item.qty || 1; // fallback to 1 if undefined
    const { priceText, quantityText } = formatInventoryDisplay(item);

    cartContainer.innerHTML += `
      <div class="mt-3 border rounded p-2" data-id="${item.ID}">
        <div class="d-flex gap-3 align-items-center">

          <!-- Category Icon -->
          <i class="${getCategoryIcon(item.category)} fs-2 ${getCategoryColor(item.category)}"></i>

          <!-- Item Info -->
          <div>
            <strong>${item.name}</strong>
            <p class="mb-1">${item.category}</p>
          </div>

          <!-- Quantity Controls -->
          <div class="ms-auto input-step d-flex align-items-center">
            <button class="minus btn btn-light" data-id="${item.ID}">-</button>
            <input 
              type="number"
              value="${qtyInCart}" 
              min="1" 
              max="${item.quantity_bal}" 
              class="form-control text-center mx-1 cart-qty-input" 
              data-id="${item.ID}" 
              data-max="${item.quantity_bal}">
            <button class="plus btn btn-light" data-id="${item.ID}">+</button>
          </div>
        </div>

        <!-- Stock / Divider -->
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <strong class="cart-item-price" data-id="${item.ID}">
            ${quantityText}
          </strong>
          <button class="btn btn-soft-danger remove-item" data-id="${item.ID}">
            <i class="ri-delete-bin-5-line"></i>
          </button>
        </div>

        <!-- Optional: Stock Info -->
        <small class="text-muted d-block mt-1">
          Available: ${item.quantity_bal} ${item.measurement}
        </small>
      </div>
    `;
  });

  renderSummary();

  // 🔹 Enforce max quantity dynamically
  document.querySelectorAll(".cart-qty-input").forEach(input => {
    input.addEventListener("input", e => {
      const max = parseInt(input.dataset.max, 10);
      let val = parseInt(input.value, 10);
      if (isNaN(val) || val < 1) input.value = 1;
      else if (val > max) input.value = max;
    });
  });
}

const TAX_RATE = 0.125;
const DELIVERY_FEE = 0;

function renderSummary() {
  // Total unique items issued
  const totalItems = cartState.length;

  // Total quantity issued
  const totalQuantity = cartState.reduce((sum, item) => sum + item.qty, 0);

  // Low stock count (items with quantity_bal <= low_stock)
  const lowStockCount = cartState.filter(item => item.quantity_bal - item.qty <= item.low_stock).length;

  document.getElementById("summary-items").textContent =
    `${totalItems} Item${totalItems !== 1 ? "s" : ""}`;

  document.getElementById("summary-quantity").textContent =
    totalQuantity;

  document.getElementById("summary-lowstock").textContent =
    lowStockCount > 0 ? `${lowStockCount} Low` : "None";
}

renderCart();

const menuContainer = document.getElementById("menuContainer");

function formatNumberToNaira(number) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2
    }).format(number);
}

function formatInventoryDisplay(item) {
  const pricePerUnit = formatNumberToNaira(item.unit_price);
  const quantity = item.quantity_bal ?? item.quantity_in;
  const unit = item.measurement;

  return {
    priceText: `${pricePerUnit} / ${unit}`,
    quantityText: `${quantity} ${unit} available`
  };
}

function updateCartItemPrice(id) {
  const item = cartState.find(i => i.id === id);
  if (!item) return;

  const priceEl = document.querySelector(
    `.cart-item-price[data-id="${id}"]`
  );

  if (priceEl) {
    priceEl.textContent = formatNumberToNaira(item.price * item.qty);
  }
}

function updateAddedQty(productId) {
  // Loop through all rendered cards
  document.querySelectorAll('.card[data-id]').forEach(card => {
    const id = Number(card.dataset.id);
    if (id !== productId) return;

    const qtyEl = card.querySelector('.added-qty');
    const cartItem = cartState.find(c => c.id === id);

    if (cartItem) {
      qtyEl.textContent = `Added: ${cartItem.qty}`;
      // 🔥 update item price
      updateCartItemPrice(cartItem.id);
    } else {
      qtyEl.textContent = ''; // hide if removed
    }
  });
}

function getStockClass(item) {
  if (item.quantity_bal <= item.low_stock && item.low_stock > 0) {
    return "text-danger fw-bold";
  }
  return "text-success";
}

function renderMenu(products, category = "all", reset = false) {
  // 1️⃣ Filter by category
  let filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  // 2️⃣ Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  productsToShow = filtered;

  // 3️⃣ Reset state
  if (reset) {
    lastIndex = 0;
    menuContainer.innerHTML = "";
  }

  // 4️⃣ Pagination
  const nextBatch = productsToShow.slice(lastIndex, lastIndex + batchSize);

  // 5️⃣ Empty state
  if (!nextBatch.length && reset) {
    menuContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="ri-search-line fs-1 text-muted"></i>
        <p class="mt-2 fw-semibold text-muted">
          No menu item found
        </p>
      </div>
    `;
    document.getElementById("view-more-btn").style.display = "none";
    return;
  }

  // 6️⃣ Render items
  nextBatch.forEach(item => {
    const qtyInCart = cartState.find(c => c.id === item.ID)?.qty || 0;
    const { priceText, quantityText } = formatInventoryDisplay(item);

    menuContainer.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div class="card cardd" data-id="${item.ID}">
          
          <div class="card-body cardd-body py-2">

            <div class="d-flex gap-3 align-items-start">

              <!-- SMALL IMAGE -->
              <div class="menu-image-wrapper position-relative rounded bg-light flex-shrink-0 add-to-cart" data-id="${item.ID}">
                <i class="${getCategoryIcon(item.category)} fs-2 ${getCategoryColor(item.category)}"></i>
              </div>

              <!-- CONTENT -->
              <div class="flex-grow-1">

                <a href="#!" class="text-dark fs-15 fw-semibold d-block mb-1 add-to-cart" data-id="${item.ID}">
                  ${highlightMatch(item.name, searchQuery)}
                </a>

                <p class="fs-6 mb-1 add-to-cart" data-id="${item.ID}">
                  ${highlightMatch(item.category, searchQuery)}
                </p>

                <div class="d-flex justify-content-between align-items-center ${getStockClass(item)} add-to-cart" data-id="${item.ID}">
                  <span class="fw-bold fs-6">
                    ${quantityText}
                  </span>

                  <button
                    class="btn btn-soft-primary btn-sm add-to-cart"
                    data-id="${item.ID}">
                    <i class="ri-shopping-basket-2-line"></i>
                  </button>
                </div>

                <p class="text-success fw-semibold mb-0 added-qty">
                  ${qtyInCart ? `Added: ${qtyInCart}` : ''}
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  });


  lastIndex += batchSize;

  // 7️⃣ Toggle Load More button
  const btn = document.getElementById("view-more-btn");
  btn.style.display =
    lastIndex >= productsToShow.length ? "none" : "inline-block";
}

document.getElementById("menuSearch").addEventListener("input", e => {
  searchQuery = e.target.value;
  renderMenu(products, currentCategory, true);
});

let searchTimer;
menuSearch.addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value;
    renderMenu(products, currentCategory, true);
  }, 300);
});

function highlightMatch(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<mark class="px-1">$1</mark>`);
}

// Handle View More button click
document.getElementById("view-more-btn").addEventListener("click", () => {
  renderMenu(products, currentCategory, false);
});

const skeletonContainer = document.getElementById("menuSkeleton");

function showMenuSkeleton(count = 6) {
  skeletonContainer.innerHTML = "";

  for (let i = 0; i < count; i++) {
    skeletonContainer.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div class="card cardd">
          <div class="card-body py-2">

            <div class="d-flex gap-3 align-items-start">

              <!-- Image skeleton -->
              <div class="skeleton skeleton-image"></div>

              <!-- Content skeleton -->
              <div class="flex-grow-1">
                <div class="skeleton skeleton-text lg"></div>
                <div class="skeleton skeleton-text md"></div>

                <div class="d-flex justify-content-between align-items-center mt-2">
                  <div class="skeleton skeleton-text sm"></div>
                  <div class="skeleton skeleton-text sm"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    `;
  }

  skeletonContainer.style.display = "flex";
  menuContainer.style.display = "none";
}

function hideMenuSkeleton() {
  skeletonContainer.style.display = "none";
  menuContainer.style.display = "flex";
}

// Initial load
// renderMenu(products, "all", true);
async function fetchInventory({
  category = "",
  search = "",
  supplier = "",
  fromDate = "",
  toDate = "",
  page = 1,
  reset = false
} = {}) {
  try {
    showMenuSkeleton(9);

    const params = new URLSearchParams({
      page,
      limit: pageLimit
    });

    if (category) params.append("category", category);
    if (search) params.append("search", search);
    if (supplier) params.append("supplier", supplier);
    if (fromDate) params.append("from_date", fromDate);
    if (toDate) params.append("to_date", toDate);

    const res = await fetch(
      `https://api.e3restaurant.com/get-inventory?${params.toString()}`,
      {
        credentials: "include" // IMPORTANT since you use middleware
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch inventory");

    products1 = reset
      ? data.success
      : [...products1, ...data.success];

    renderMenu(products1, "all", reset);

    currentPage = data.pagination.CurrentPage;
    updateLoadMoreBtn(data.pagination);

  } catch (err) {
    console.error(err);
    menuContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="ri-error-warning-line fs-1 text-danger"></i>
        <p class="mt-2 text-muted">${err.message}</p>
      </div>
    `;
  } finally {
    hideMenuSkeleton();
  }
}

function updateLoadMoreBtn(pagination) {
  const btn = document.getElementById("view-more-btn");
  if (!btn) return;

  btn.style.display =
    pagination.CurrentPage >= pagination.TotalPages
      ? "none"
      : "inline-block";
}

document.getElementById("view-more-btn")?.addEventListener("click", () => {
  fetchInventory({
    page: currentPage1 + 1
  });
});

fetchInventory({ reset: true });

const NOTIFICATION_KEY = "notification_permission_asked";

if (
  "Notification" in window &&
  Notification.permission === "default" &&
  !localStorage.getItem(NOTIFICATION_KEY)
) {
  Notification.requestPermission().finally(() => {
    // Mark that we've asked — regardless of yes/no
    localStorage.setItem(NOTIFICATION_KEY, "true");
  });
}

(function () {
  let banner = null;

  function removeBanner() {
    if (banner) {
      banner.remove();
      banner = null;
    }
  }

  function showBanner({ message, bgColor, textColor }) {
    removeBanner();

    banner = document.createElement("div");
    banner.textContent = message;

    Object.assign(banner.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "10px 16px",
      backgroundColor: bgColor,
      color: textColor,
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      cursor: "pointer",
      zIndex: "9999",
      transition: "opacity 0.3s ease"
    });

    banner.addEventListener("click", removeBanner);
    document.body.appendChild(banner);
  }

  // Offline
  window.addEventListener("offline", () => {
    showBanner({
      message: "⚠️ Poor network connection. Please check your internet.",
      bgColor: "#FFF3CD",      // soft warning yellow
      textColor: "#664D03"
    });
  });

  // Online
  window.addEventListener("online", () => {
    playRestoreSound();

    showDesktopNotification(
      "Network restored",
      "Connection is back. You can continue working."
    );

    showBanner({
      message: "✅ Network restored.",
      bgColor: "#D1E7DD",      // soft success green
      textColor: "#0F5132"
    });
  });

  // Optional: show warning immediately if page loads offline
  if (!navigator.onLine) {
    showBanner({
      message: "⚠️ Poor network connection. Please check your internet.",
      bgColor: "#FFF3CD",
      textColor: "#664D03"
    });
  }
})();

window.addEventListener("online", () => {
  setTimeout(() => {
    if (networkBanner) networkBanner.remove();
  }, 4000);
});

function playRestoreSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 880; // pleasant chime tone
    gain.gain.value = 0.08;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {
    // silently fail if audio blocked
  }
}

function showDesktopNotification(title, body) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  const n = new Notification(title, {
    body,
    icon: "/favicon.ico" // optional
  });

  n.onclick = () => n.close();
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

// Place order for products added to cart
// Place order for products added to cart
// Place order for products added to cart
// Place order for products added to cart

function setButtonLoading(btn, loading) {
  if (loading) {
    btn.dataset.original = btn.innerHTML;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing...`;
    btn.classList.add("disabled");
  } else {
    btn.innerHTML = btn.dataset.original;
    btn.classList.remove("disabled");
  }
}

document.getElementById("cancelCart").addEventListener("click", (e) => {
  e.preventDefault();

  if (!cartState.length) return;

  if (confirm("Do you want to clear the cart?")) {
    cartState = [];
    showNetworkBanner({
      text: "✅ Inventory cleared.",
      bg: "#E2E3E5",
      color: "#41464B"
    });
    saveCart();
    renderCart();
  }
});

const placeOrderBtn = document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  // 1️⃣ Validate cart
  if (!cartState.length) {
    showNetworkBanner({
      text: "⚠️ Your Inventory is empty.",
      bg: "#F8D7DA",
      color: "#842029"
    });
    return;
  }

  // 2️⃣ Check network (keep illusion)
  if (!navigator.onLine) {
    showNetworkBanner({
      text: "⚠️ Poor network connection. Please try again.",
      bg: "#FFF3CD",
      color: "#664D03"
    });
    return;
  }

  // 3️⃣ Loading state
  setButtonLoading(placeOrderBtn, true);

  try {
    // 4️⃣ Simulate API call (replace later)
    // await fakePlaceOrderRequest(cartData);

    // 5️⃣ Success
    cartState = [];
    saveCart();
    renderCart();

    showDesktopNotification(
      "✅ Order placed",
      "Your order was placed successfully."
    );

    showNetworkBanner({
      text: "✅ Order placed successfully.",
      bg: "#D1E7DD",
      color: "#0F5132"
    });

  } catch (err) {
    // 6️⃣ Failure (looks like network issue)
    showNetworkBanner({
      text: "⚠️ Unable to place order. Please check your network.",
      bg: "#FFF3CD",
      color: "#664D03"
    });
  } finally {
    setButtonLoading(placeOrderBtn, false);
  }
});

const SAVED_DB_NAME = "e3_offline_inventory_save_db";
const SAVED_DB_VERSION = 2;
const SAVED_STORE = "saved_carts";

function openSavedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SAVED_DB_NAME, SAVED_DB_VERSION);
    request.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(SAVED_STORE)) {
        db.createObjectStore(SAVED_STORE, {
          keyPath: "id",
          autoIncrement: true
        });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveCartLocally(cart, label = null) {
  if (!cart.length) return;

  // If no label provided, ask the user
  if (!label) {
    label = prompt("Enter Table / Customer Name for this cart:", `Table ${new Date().toLocaleTimeString()}`);
    if (!label) {
      label = `Saved at ${new Date().toLocaleTimeString()}`; // fallback
    }
  }

  const db = await openSavedDB();
  const tx = db.transaction(SAVED_STORE, "readwrite");
  tx.objectStore(SAVED_STORE).add({
    cart,
    label,
    createdAt: Date.now()
  });
  tx.oncomplete = () => renderSavedCarts();
}

async function getSavedCarts() {
  const db = await openSavedDB();
  return new Promise(resolve => {
    const tx = db.transaction(SAVED_STORE, "readonly");
    const store = tx.objectStore(SAVED_STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
  });
}

async function removeSavedCart(id) {
  const db = await openSavedDB();
  const tx = db.transaction(SAVED_STORE, "readwrite");
  tx.objectStore(SAVED_STORE).delete(id);
  tx.oncomplete = () => renderSavedCarts();
}

async function renderSavedCarts() {
  const container = document.getElementById("savedCartsMenu");
  const carts = await getSavedCarts();

  container.innerHTML = "";

  if (!carts.length) {
    container.innerHTML = `<div class="text-muted text-center fs-13">No saved carts</div>`;
    return;
  }

  carts.forEach(c => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-2 p-2 border rounded";
    div.innerHTML = `
      <span class="text-truncate">${c.label}</span>
      <div class="d-flex gap-1">
        <button class="btn btn-sm btn-success restore-cart-btn" data-id="${c.id}">
          <i class="ri-folder-check-line"></i>
        </button>
        <button class="btn btn-sm btn-danger delete-cart-btn" data-id="${c.id}">
          <i class="ri-delete-bin-5-line"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

document.getElementById("saveCartBtn").addEventListener("click", async () => {
  if (!cartState.length) return alert("Inventory is empty!");
  await saveCartLocally(cartState);
    if (!cartState.length) return;

    cartState = [];
    saveCart();
    renderCart();
  showNetworkBanner({
    text: "✅ Inventory saved locally.",
    bg: "#D1E7DD",
    color: "#0F5132"
  });
});

document.addEventListener("click", async e => {
  const restoreBtn = e.target.closest(".restore-cart-btn");
  if (restoreBtn) {
    const id = Number(restoreBtn.dataset.id);
    const carts = await getSavedCarts();
    const saved = carts.find(c => c.id === id);
    if (!saved) return;

    // 🔹 Step 1: auto-save current Inventory if it has items (prompt user for label)
    if (cartState.length) {
      await saveCartLocally(cartState); // prompt will appear here
    }

    // 🔹 Step 2: replace cartState with saved Inventory
    cartState = saved.cart;
    saveCart();
    renderCart();

    showNetworkBanner({
      text: "✅ Inventory restored. Previous Inventory auto-saved.",
      bg: "#D1E7DD",
      color: "#0F5132"
    });
  }

  const deleteBtn = e.target.closest(".delete-cart-btn");
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    if (confirm("Delete this saved cart?")) {
      await removeSavedCart(id);
      showNetworkBanner({
        text: "🗑️ Saved Inventory deleted.",
        bg: "#FFF3CD",
        color: "#664D03"
      });
    }
  }
});

renderSavedCarts();
