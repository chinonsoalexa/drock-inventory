// Menu data
const menuCategories = [
  { name: "Drinks", img: "assets/images/food-icon/pos1.png" },
  { name: "Wine", img: "assets/images/food-icon/pos2.png" },
  { name: "Liqueur", img: "assets/images/food-icon/pos3.png" },
  { name: "Brandy", img: "assets/images/food-icon/pos4.png" },
  { name: "Whisky", img: "assets/images/food-icon/pos5.png" },
  { name: "Vodka", img: "assets/images/food-icon/pos6.png" },
  { name: "Champagne", img: "assets/images/food-icon/pos7.png" },
  { name: "Tots", img: "assets/images/food-icon/pos8.png" },
  { name: "Beer", img: "assets/images/food-icon/pos9.png" },
  { name: "Cocktails", img: "assets/images/food-icon/pos10.png" },
  { name: "Swallow", img: "assets/images/food-icon/pos11.png" },
  { name: "Soup", img: "assets/images/food-icon/pos12.png" },
  { name: "Protein", img: "assets/images/food-icon/pos13.png" },
  { name: "Pepper Soup", img: "assets/images/food-icon/pos14.png" },
  { name: "Breakfast", img: "assets/images/food-icon/pos15.png" },
  { name: "E3 Source", img: "assets/images/food-icon/pos16.png" },
  { name: "Sea Food Dishes", img: "assets/images/food-icon/pos17.png" },
  { name: "E3 Special", img: "assets/images/food-icon/pos18.png" },
  { name: "Delicacies", img: "assets/images/food-icon/pos19.png" },
  { name: "Pasta Dishes", img: "assets/images/food-icon/pos20.png" },
  { name: "Rice", img: "assets/images/food-icon/pos21.png" },
  { name: "Salad", img: "assets/images/food-icon/pos22.png" },
  { name: "Egg Dishes", img: "assets/images/food-icon/pos23.png" },
  { name: "Continental Fruits", img: "assets/images/food-icon/pos24.png" },
  { name: "Mocktails", img: "assets/images/food-icon/pos25.png" },
  { name: "Cereals", img: "assets/images/food-icon/pos26.png" },
];

const ITEMS_PER_PAGE = 9;
const track = document.getElementById("menuTrack");

// Render menu pages
function renderCategories() {
  for (let i = 0; i < menuCategories.length; i += ITEMS_PER_PAGE) {
    const page = document.createElement("div");
    page.className = "menu-page";

    const row = document.createElement("div");
    row.className = "row";

    menuCategories.slice(i, i + ITEMS_PER_PAGE).forEach(item => {
      row.innerHTML += `
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="card">
            <div class="card-body p-2">
              <div class="d-flex align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-2">
                  <div class="rounded bg-warning-subtle border avatar d-flex align-items-center justify-content-center">
                    <img src="${item.img}" alt="">
                  </div>
                  <span class="fw-semibold fs-16">${item.name}</span>
                </div>
                <a href="#!" class="menu-eye" data-name="${item.name}">
                  <i class="ri-eye-line fs-16"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    page.appendChild(row);
    track.appendChild(page);
  }
}

renderCategories();

// Slider logic
let currentPage = 0;
const pages = document.querySelectorAll(".menu-page");

function updateSlide() {
  track.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Arrow buttons
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateSlide();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateSlide();
  }
});

// Eye click event
document.addEventListener("click", e => {
  const eye = e.target.closest(".menu-eye");
  if (!eye) return;

  const name = eye.dataset.name;
  console.log("Clicked:", name);

  // Example API call
  // fetch(`/api/menu?category=${encodeURIComponent(name)}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
});

document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll(".plus"),
        n = document.querySelectorAll(".minus");

    function i(e, n) {
        var i = 1 === n ? e.previousElementSibling : e.nextElementSibling,
            t = parseInt(i.value),
            s = parseInt(i.min),
            e = parseInt(i.max);
        s <= (n = t + n) && n <= e && (i.value = n)
    }
    e.forEach(function(e) {
        e.addEventListener("click", function() {
            i(e, 1)
        })
    }), n.forEach(function(e) {
        e.addEventListener("click", function() {
            i(e, -1)
        })
    })
});

// Cart data and rendering
// Cart data and rendering
// Cart data and rendering
// Cart data and rendering
const cartData = [
  {
    id: 1,
    name: "Italian Burata Pizza",
    size: "12-Inch",
    image: "assets/images/food-icon/pic12.png",
    price: 12,
    oldPrice: 15,
    qty: 1
  },
  {
    id: 2,
    name: "Meat Tacos",
    size: "3 tacos",
    image: "assets/images/food-icon/pic15.png",
    price: 30,
    oldPrice: 34,
    qty: 2
  },
  {
    id: 3,
    name: "Veg Indian Thali",
    size: "Single Person",
    image: "assets/images/food-icon/pic19.png",
    price: 38,
    oldPrice: 30,
    qty: 2
  }
];

const cartContainer = document.getElementById("cartItems");
const totalItemsEl = document.getElementById("totalItems");

const CART_KEY = "e3_cart";

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

function addToCart(product) {
  const existing = cartState.find(i => i.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cartState.push({ ...product, qty: 1 });
  }

  saveCart();
  renderCart();
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const product = menuData.find(p => p.id === id);

  addToCart(product);
});

function renderCart() {
  cartContainer.innerHTML = "";

  if (!cartState.length) {
    cartContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="ri-shopping-cart-line fs-1 text-muted"></i>
        <p class="mt-2 fw-semibold text-muted">Your cart is empty</p>
      </div>
    `;
    renderSummary();
    return;
  }

  cartState.forEach(item => {
    cartContainer.innerHTML += `
      <div class="mt-3 border rounded p-2" data-id="${item.id}">
        <div class="d-flex gap-3 align-items-center">
          <img src="${item.image}" class="avatar-xl rounded bg-light">
          <div>
            <strong>${item.name}</strong>
            <p class="mb-1">${item.size}</p>
          </div>

          <div class="ms-auto input-step d-flex">
            <button class="minus btn btn-light" data-id="${item.id}">-</button>
            <input value="${item.qty}" readonly class="form-control text-center mx-1">
            <button class="plus btn btn-light" data-id="${item.id}">+</button>
          </div>
        </div>

        <hr>

        <div class="d-flex justify-content-between">
          <strong>₦${(item.price * item.qty).toFixed(2)}</strong>
          <button class="btn btn-soft-danger remove-item" data-id="${item.id}">
            <i class="ri-delete-bin-5-line"></i>
          </button>
        </div>
      </div>
    `;
  });

  renderSummary();
}

document.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);
  if (!id) return;

  const item = cartState.find(i => i.id === id);
  if (!item) return;

  if (e.target.classList.contains("plus")) item.qty++;
  if (e.target.classList.contains("minus") && item.qty > 1) item.qty--;

  if (e.target.classList.contains("remove-item")) {
    cartState = cartState.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
});

const TAX_RATE = 0.125;
const DELIVERY_FEE = 0;

function renderSummary() {
  const items = cartState.reduce((s, i) => s + i.qty, 0);
  const subtotal = cartState.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY_FEE;

  document.getElementById("summary-items").textContent =
    `${items} Item${items !== 1 ? "s" : ""}`;

  document.getElementById("summary-subtotal").textContent =
    `₦${subtotal.toFixed(2)}`;

  document.getElementById("summary-delivery").textContent =
    `₦${DELIVERY_FEE.toFixed(2)}`;

  document.getElementById("summary-tax").textContent =
    `₦${tax.toFixed(2)}`;

  document.getElementById("summary-total").textContent =
    `₦${total.toFixed(2)}`;
}

document.getElementById("cancelCart").addEventListener("click", () => {
  if (!cartState.length) return;

  if (confirm("Clear cart?")) {
    cartState = [];
    saveCart();
    renderCart();
  }
});

renderCart();

const menuData = [
  {
    id: 1,
    name: "Italian Burata Pizza",
    size: "12-Inch",
    image: "assets/images/food-icon/pic12.png",
    rating: 4.3,
    veg: false,
    price: 12,
    oldPrice: 15,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Shanghai Noodles",
    size: "Large bowl",
    image: "assets/images/food-icon/pic13.png",
    rating: 4.1,
    veg: true,
    price: 13,
    oldPrice: 15
  },
  {
    id: 3,
    name: "Veg Indian Thali",
    size: "Single Person",
    image: "assets/images/food-icon/pic19.png",
    rating: 4.5,
    veg: true,
    price: 14,
    oldPrice: 15
  },
  {
    id: 4,
    name: "Meat Tacos",
    size: "3 tacos",
    image: "assets/images/food-icon/pic15.png",
    rating: 4.3,
    veg: false,
    price: 15,
    oldPrice: 17,
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Spaghetti",
    size: "Large bowl",
    image: "assets/images/food-icon/pic16.png",
    rating: 4.2,
    veg: true,
    price: 13,
    oldPrice: 15,
    badge: "Best Seller"
  },
  {
    id: 6,
    name: "Chocolate Cake",
    size: "Single",
    image: "assets/images/food-icon/pic17.png",
    rating: 4.2,
    veg: false,
    price: 10,
    oldPrice: 12
  }
];

const menuContainer = document.getElementById("menuContainer");

function renderMenu(data) {
  menuContainer.innerHTML = "";

  data.forEach(item => {
    menuContainer.innerHTML += `
      <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="position-relative text-center bg-light">
              <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">

              ${item.badge ? `
                <span class="position-absolute top-0 start-0 p-2">
                  <span class="badge bg-danger fs-11">${item.badge}</span>
                </span>
              ` : ""}
            </div>

            <div class="d-flex align-items-center justify-content-between gap-2 mt-3">
              <div>
                <a href="#!" class="text-dark fs-16 fw-semibold">${item.name}</a>
                <p class="fs-5 fw-normal mb-0">${item.size}</p>
              </div>

              <div class="text-end">
                <p class="badge bg-light fs-13 mb-1 text-dark py-1 px-2">
                  <i class="ri-star-fill text-warning me-1"></i>${item.rating}/5
                </p>
                <p class="mb-0">
                  <i class="ri-circle-fill ${item.veg ? "text-success" : "text-danger"} me-1 fs-12"></i>
                  ${item.veg ? "Veg" : "Non veg"}
                </p>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <p class="text-primary mb-1 fs-14">Regular Price</p>
                <p class="text-dark fw-semibold fs-16 mb-0">
                  $${item.price.toFixed(2)}
                  <small class="text-decoration-line-through text-muted ms-1">
                    $${item.oldPrice.toFixed(2)}
                  </small>
                </p>
              </div>

              <div class="d-flex gap-1">
                <button class="btn btn-soft-primary avatar-sm add-to-cart" data-id="${item.id}">
                  <i class="ri-shopping-basket-2-line fs-20"></i>
                </button>
                <button class="btn btn-soft-danger avatar-sm">
                  <i class="ri-heart-2-line fs-20"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

renderMenu(menuData);

document.addEventListener("click", e => {
  if (e.target.closest(".add-to-cart")) {
    const id = Number(e.target.closest(".add-to-cart").dataset.id);
    const product = menuData.find(p => p.id === id);

    console.log("Add to cart:", product);
    // integrate with your cartData here
  }
});
