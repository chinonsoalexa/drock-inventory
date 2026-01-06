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