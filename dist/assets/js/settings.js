  // Sample customer data
  let customers = [
    { id: 1, name: "Ethan Walker", email: "ethan@mail.com", status: "Active" },
    { id: 2, name: "Sophia Adams", email: "sophia@mail.com", status: "Suspended" },
    { id: 3, name: "Daniel Carter", email: "daniel@mail.com", status: "Active" },
  ];

  const customerTableBody = document.querySelector("#customerTable tbody");

  // Function to render customers
  function renderCustomers() {
    customerTableBody.innerHTML = ""; // clear existing rows

    customers.forEach(customer => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>
          <span class="badge ${customer.status === 'Active' ? 'bg-success' : 'bg-secondary'}">
            ${customer.status}
          </span>
        </td>
        <td>
          <button class="btn btn-sm btn-primary me-1" onclick="viewCustomer(${customer.id})">
            <i class="bx bx-show fs-16"></i>
          </button>
          <button class="btn btn-sm btn-warning me-1" onclick="toggleCustomerStatus(${customer.id})">
            <i class="bx bx-user-x fs-16"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteCustomer(${customer.id})">
            <i class="bx bx-trash fs-16"></i>
          </button>
        </td>
      `;
      customerTableBody.appendChild(tr);
    });
  }

  // View customer details
  function viewCustomer(id) {
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    alert(`Customer Details:\n\nName: ${customer.name}\nEmail: ${customer.email}\nStatus: ${customer.status}`);
  }

  // Toggle active/suspended status
  function toggleCustomerStatus(id) {
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    customer.status = customer.status === "Active" ? "Suspended" : "Active";
    renderCustomers();
  }

  // Delete customer
  function deleteCustomer(id) {
    customers = customers.filter(c => c.id !== id);
    renderCustomers();
  }

  // Add customer
  document.getElementById("addCustomerBtn").addEventListener("click", () => {
    const name = prompt("Enter customer name:");
    const email = prompt("Enter customer email:");
    if (!name || !email) return alert("Name and email are required!");
    const newCustomer = {
      id: customers.length ? customers[customers.length - 1].id + 1 : 1,
      name,
      email,
      status: "Active"
    };
    customers.push(newCustomer);
    renderCustomers();
  });

  // Initial render
  renderCustomers();