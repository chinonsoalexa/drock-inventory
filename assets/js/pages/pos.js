// Menu data
const menuData = [
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
function renderMenu() {
  for (let i = 0; i < menuData.length; i += ITEMS_PER_PAGE) {
    const page = document.createElement("div");
    page.className = "menu-page";

    const row = document.createElement("div");
    row.className = "row";

    menuData.slice(i, i + ITEMS_PER_PAGE).forEach(item => {
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

renderMenu();

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

function renderCart() {
  cartContainer.innerHTML = "";

  if (cartData.length === 0) {
    cartContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="ri-shopping-cart-line fs-1 text-muted"></i>
        <p class="mt-2 text-muted fw-semibold">Your cart is empty</p>
      </div>
    `;
    renderSummary(); // still update totals
    return;
  }

  cartData.forEach(item => {
    cartContainer.innerHTML += `
      <div class="mt-3 border border-light p-2 rounded" data-id="${item.id}">
        <div class="d-flex flex-wrap align-items-center gap-3">

          <div class="rounded bg-light avatar-xl d-flex align-items-center justify-content-center">
            <img src="${item.image}" class="avatar-xl" alt="">
          </div>

          <div>
            <a href="#!" class="text-dark fs-15 fw-bold">${item.name}</a>
            <p class="fs-14 my-1">${item.size}</p>
          </div>

          <div class="ms-lg-auto">
            <div class="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex">
              <button class="minus bg-light border-0 fs-20" data-id="${item.id}">-</button>
              <input type="number" value="${item.qty}" readonly class="text-center border-0 bg-body-secondary">
              <button class="plus bg-light border-0 fs-20" data-id="${item.id}">+</button>
            </div>
          </div>

        </div>

        <hr>

        <div class="d-flex align-items-center justify-content-between px-1">
          <p class="fw-semibold fs-16 mb-0">
            $${(item.price * item.qty).toFixed(2)}
            <small class="text-decoration-line-through text-muted ms-1">
              $${item.oldPrice.toFixed(2)}
            </small>
          </p>

          <button class="btn btn-soft-danger avatar-sm remove-item" data-id="${item.id}">
            <i class="ri-delete-bin-5-line fs-20"></i>
          </button>
        </div>
      </div>
    `;
  });

  renderSummary();
}

const TAX_RATE = 0.125;
const DELIVERY_FEE = 0;

function renderSummary() {
  const totalItems = cartData.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cartData.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY_FEE;

  document.getElementById("summary-items").textContent =
    `${totalItems} Item${totalItems !== 1 ? "s" : ""}`;

  document.getElementById("summary-subtotal").textContent =
    `₦${subtotal.toFixed(2)}`;

  document.getElementById("summary-delivery").textContent =
    `₦${DELIVERY_FEE.toFixed(2)}`;

  document.getElementById("summary-tax").textContent =
    `₦${tax.toFixed(2)}`;

  document.getElementById("summary-total").textContent =
    `₦${total.toFixed(2)}`;
}

document.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("plus")) {
    const item = cartData.find(i => i.id === id);
    item.qty++;
  }

  if (e.target.classList.contains("minus")) {
    const item = cartData.find(i => i.id === id);
    if (item.qty > 1) item.qty--;
  }

  if (e.target.closest(".remove-item")) {
    cartData = cartData.filter(i => i.id !== id);
  }

  renderCart();
});

document.getElementById("cancelCart").addEventListener("click", () => {
  if (!cartData.length) return;

  if (confirm("Are you sure you want to clear the cart?")) {
    cartData = [];
    renderCart();
  }
});

document.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);

  // Increase qty
  if (e.target.classList.contains("plus")) {
    const item = cartData.find(i => i.id === id);
    item.qty++;
    renderCart();
  }

  // Decrease qty
  if (e.target.classList.contains("minus")) {
    const item = cartData.find(i => i.id === id);
    if (item.qty > 1) item.qty--;
    renderCart();
  }

  // Remove item
  if (e.target.closest(".remove-item")) {
    const index = cartData.findIndex(i => i.id === id);
    cartData.splice(index, 1);
    renderCart();
  }
});

renderCart();
