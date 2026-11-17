  // Sample inventory items
  const inventoryItems = [
    { id: 1, name: "Chicken Breast", category: "Meat", quantity: 50, unit: "kg", reorderLevel: 20, supplier: "Fresh Farms Co.", lastRestocked: "2024-02-15" },
    { id: 2, name: "Salmon Fillet", category: "Seafood", quantity: 30, unit: "kg", reorderLevel: 10, supplier: "Oceanic Supplies", lastRestocked: "2024-02-20" },
    { id: 3, name: "Broccoli", category: "Vegetables", quantity: 40, unit: "kg", reorderLevel: 15, supplier: "Green Fields", lastRestocked: "2024-02-25" },
    { id: 4, name: "Olive Oil", category: "Condiments", quantity: 25, unit: "liters", reorderLevel: 10, supplier: "Mediterranean Oils", lastRestocked: "2024-03-02" },
    { id: 5, name: "Flour", category: "Baking", quantity: 100, unit: "kg", reorderLevel: 60, supplier: "Baker's Delight", lastRestocked: "2024-03-05" },
    { id: 6, name: "Cheddar Cheese", category: "Dairy", quantity: 20, unit: "kg", reorderLevel: 10, supplier: "Dairy Best", lastRestocked: "2024-03-10" },
    { id: 7, name: "Tomatoes", category: "Vegetables", quantity: 60, unit: "kg", reorderLevel: 30, supplier: "Fresh Veggies Inc.", lastRestocked: "2024-03-15" },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("categoryFilter");

    // Get unique categories
    const categories = [...new Set(inventoryItems.map(i => i.category))];

    // Populate category dropdown
    categories.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categoryFilter.appendChild(option);
    });

    // Render inventory table
    function renderInventoryTable(items) {
      const tbody = document.getElementById("inventoryTableBody");
      const totalCell = document.getElementById("totalStockCell");
      tbody.innerHTML = "";

      let totalStock = 0;

      items.forEach(item => {
        const tr = document.createElement("tr");

        if(item.quantity <= item.reorderLevel){
          tr.style.backgroundColor = "#fff4f4"; // highlight low stock
        }

        tr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.category}</td>
          <td>${item.quantity} ${item.unit}</td>
          <td>${item.reorderLevel} ${item.unit}</td>
          <td>${item.supplier}</td>
          <td>${item.lastRestocked}</td>
          <td>
            <div class="d-flex gap-3">
              <a href="#!" class="text-muted"><i class="ri-eye-line align-middle fs-20"></i></a>
              <a href="#!" class="link-dark"><i class="ri-edit-line align-middle fs-20"></i></a>
              <a href="#!" class="link-danger"><i class="ri-delete-bin-5-line align-middle fs-20"></i></a>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
        totalStock += item.quantity;
      });

      totalCell.textContent = totalStock + " units";
    }

    // Initial render
    renderInventoryTable(inventoryItems);

    // Filter by category
    categoryFilter.addEventListener("change", () => {
      const selected = categoryFilter.value;
      if(!selected) {
        renderInventoryTable(inventoryItems);
      } else {
        const filtered = inventoryItems.filter(item => item.category === selected);
        renderInventoryTable(filtered);
      }
    });
  });

    function parseQuantity(input) {
    if (typeof input === "number") return { value: input, unitType: "unitless" };
    if (!input || typeof input !== "string") return { value: 0, unitType: "unitless" };

    const str = input.toLowerCase().trim();

    // Extract numeric value
    const match = str.match(/([\d.,\/]+)\s*([a-z]+)/);
    if (!match) return { value: 0, unitType: "unitless" };

    let [_, rawValue, unit] = match;

    // Handle fractions like "1/2"
    let value = rawValue.includes("/") ? eval(rawValue) : parseFloat(rawValue.replace(",", "."));

    // Weight units → normalize to kg
    const weightUnits = {
        kg: 1,
        g: 1 / 1000,
        mg: 1 / 1000000,
        lb: 0.453592,
        lbs: 0.453592,
        oz: 0.0283495,
    };

    // Volume units → normalize to liters
    const volumeUnits = {
        l: 1,
        liter: 1,
        liters: 1,
        ml: 1 / 1000,
        cl: 1 / 100,
        cup: 0.24,
        tbsp: 0.015,
        tbs: 0.015,
        tsp: 0.005,
        shot: 0.044,
    };

    // Count units → normalize to pieces
    const countUnits = {
        pcs: 1,
        piece: 1,
        pieces: 1,
        dozen: 12,
    };

    if (weightUnits[unit]) return { value: value * weightUnits[unit], unitType: "weight" };
    if (volumeUnits[unit]) return { value: value * volumeUnits[unit], unitType: "volume" };
    if (countUnits[unit]) return { value: value * countUnits[unit], unitType: "count" };

    // Default: return raw number
    return { value, unitType: "unitless" };
    }

    console.log(parseQuantity("1 kg"));        // { value: 1, unitType: "weight" }
    console.log(parseQuantity("500 g"));       // { value: 0.5, unitType: "weight" }
    console.log(parseQuantity("2 liters"));    // { value: 2, unitType: "volume" }
    console.log(parseQuantity("750 ml"));      // { value: 0.75, unitType: "volume" }
    console.log(parseQuantity("1 cup"));       // { value: 0.24, unitType: "volume" }
    console.log(parseQuantity("2 tbsp"));      // { value: 0.03, unitType: "volume" }
    console.log(parseQuantity("1 dozen"));     // { value: 12, unitType: "count" }
    console.log(parseQuantity("3 pcs"));       // { value: 3, unitType: "count" }
    console.log(parseQuantity("5"));           // { value: 5, unitType: "unitless" }
    console.log(parseQuantity("1/2 tsp"));     // { value: 0.0025, unitType: "volume" }

    const items = [
  { name: "Flour", quantity: "500 g" },
  { name: "Sugar", quantity: "1.2 kg" },
  { name: "Milk", quantity: "750 ml" },
  { name: "Eggs", quantity: "1 dozen" },
];

let totalWeight = 0;
let totalVolume = 0;
let totalCount = 0;

items.forEach(i => {
  const q = parseQuantity(i.quantity);
  if (q.unitType === "weight") totalWeight += q.value;
  else if (q.unitType === "volume") totalVolume += q.value;
  else if (q.unitType === "count") totalCount += q.value;
});

console.log("Total weight (kg):", totalWeight);  // 1.7 kg
console.log("Total volume (L):", totalVolume);   // 0.75 L
console.log("Total count:", totalCount);         // 12
