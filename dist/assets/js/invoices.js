// Sample invoice data
const invoices = [
  {
    id: "#IN9023",
    customer: "Ethan Walker",
    avatar: "assets/images/users/avatar-8.jpg",
    created: "15 Mar, 2025 10:30 AM",
    due: "22 Mar, 2025",
    amount: 1250.75,
    status: "Unpaid", // Paid, Unpaid, Overdue
    method: "Credit Card"
  },
  {
    id: "#IN3147",
    customer: "Sophia Adams",
    avatar: "assets/images/users/avatar-9.jpg",
    created: "07 Feb, 2025 02:45 PM",
    due: "15 Feb, 2025",
    amount: 980.0,
    status: "Overdue",
    method: "PayPal"
  },
  {
    id: "#IN7654",
    customer: "Daniel Carter",
    avatar: "assets/images/users/avatar-10.jpg",
    created: "28 Jan, 2025 11:10 AM",
    due: "05 Feb, 2025",
    amount: 715.25,
    status: "Paid",
    method: "Wire Transfer"
  },
  // Add more invoices here...
];

// Badge class mapping
const statusClass = {
  Paid: "badge-soft-success",
  Unpaid: "badge-soft-warning",
  Overdue: "badge-soft-danger",
};

// Render function with "view" instead of "edit"
function renderInvoiceTable(data) {
  const tbody = document.getElementById("invoiceTableBody");
  if (!tbody) return;

  tbody.innerHTML = ""; // clear existing rows

  data.forEach(inv => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><a href="invoice-details.html" class="fw-medium">${inv.id}</a></td>
      <td>
        <div class="d-flex align-items-center">
          <img src="${inv.avatar}" alt="" class="avatar-xs rounded-circle me-2">
          <div>
            <h5 class="fs-14 m-0 fw-normal">${inv.customer}</h5>
          </div>
        </div>
      </td>
      <td>${inv.created}</td>
      <td>${inv.due}</td>
      <td>$${inv.amount.toLocaleString()}</td>
      <td>
        <span class="badge ${statusClass[inv.status] || 'badge-soft-secondary'}">${inv.status}</span>
      </td>
      <td>${inv.method}</td>
      <td>
        <button type="button" class="btn btn-sm btn-soft-primary me-1" title="View Details">
          <i class="bx bx-show fs-16"></i>
        </button>
        <button type="button" class="btn btn-sm btn-soft-danger" title="Delete Invoice">
          <i class="bx bx-trash fs-16"></i>
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// Initial render
renderInvoiceTable(invoices);
