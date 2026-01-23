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

  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${product.image}" class="avatar-lg" alt="${product.name}">
      </td>

      <td>
        <div>
          <p class="fw-semibold mb-0">${product.name}</p>
          <small class="text-muted">${product.size || ""}</small>
        </div>
      </td>

      <td>${product.description}</td>

      <td>${product.ingredients}</td>

      <td class="fw-semibold">$${product.price.toFixed(2)}</td>

      <td>
        <button 
          class="btn btn-sm btn-primary add-to-cart-btn"
          data-id="${product.id}">
          Add to Cart
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

renderProductsTable(products);

document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = e.target.dataset.id;
    console.log("Add to cart:", productId);
  }
});
