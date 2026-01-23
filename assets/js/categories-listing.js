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

function renderMenuCategoriesGrid() {
  const container = document.getElementById("menuCategoriesContainer");
  if (!container) return;

  container.innerHTML = ""; // clear existing

  menuCategories.forEach(cat => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-xl-3 mb-3"; // spacing for rows

    col.innerHTML = `
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center gap-3">
            <img src="${cat.img}" alt="${cat.name}" class="img-fluid" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">
            <div>
              <a href="#!" class="fw-semibold text-dark fs-18">${cat.name}</a>
              <p class="mb-0">${cat.name}</p>
            </div>
            <div class="ms-auto">
              <a href="#!" class="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center">
                <i class="ri-eye-line align-middle fs-16 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// Call once on page load
renderMenuCategoriesGrid();
