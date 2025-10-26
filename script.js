let db;

const request = indexedDB.open("TroubleTicketDB", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const store = db.createObjectStore("tickets", { keyPath: "id" });
  store.createIndex("creator", "creator", { unique: false });
  store.createIndex("title", "title", { unique: false });
  store.createIndex("description", "description", { unique: false });
  store.createIndex("createdAt", "createdAt", { unique: false });
  store.createIndex("updatedAt", "updatedAt", { unique: false });
  store.createIndex("severity", "severity", { unique: false });
  store.createIndex("status", "status", { unique: false });
};

request.onsuccess = (event) => {
  db = event.target.result;
  loadTickets();
  updateStats();
};

function getFormValues() {
  return {
    id: document.getElementById("ticket-id").value
      ? Number(document.getElementById("ticket-id").value)
      : Date.now(),
    creator: document.getElementById("creator").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    severity: document.getElementById("severity").value,
    status: document.getElementById("status").value,
    createdAt: document.getElementById("ticket-id").value
      ? document.getElementById("ticket-id").dataset.createdAt
      : new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

document.getElementById("ticket-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const ticket = getFormValues();
  const transaction = db.transaction(["tickets"], "readwrite");
  const store = transaction.objectStore("tickets");
  store.put(ticket);
  hideModal();
  loadTickets();
  updateStats();
  showToast(ticket.id ? "Ticket updated!" : "Ticket created!");
});

function loadTickets() {
  const search = document.getElementById("search").value.toLowerCase();
  const severityFilter = document.getElementById("filter-severity").value;
  const sortField = document.getElementById("sort").value;

  const transaction = db.transaction(["tickets"], "readonly");
  const store = transaction.objectStore("tickets");
  const request = store.getAll();

  request.onsuccess = (event) => {
    let tickets = event.target.result;

    // Filtering
    if (severityFilter) {
      tickets = tickets.filter(t => t.severity === severityFilter);
    }
    // Searching
    if (search) {
      tickets = tickets.filter(t =>
        t.creator.toLowerCase().includes(search) ||
        t.title.toLowerCase().includes(search) ||
        t.description.toLowerCase().includes(search)
      );
    }
    // Sort tickets in descending order
    tickets.sort((a, b) => {
      if (sortField === "severity") {
        const order = ["Low", "Medium", "High", "Critical"];
        return order.indexOf(b.severity) - order.indexOf(a.severity);
      }
      if (sortField === 'createdAt' || sortField === 'updatedAt') {
        return new Date(b[sortField]) - new Date(a[sortField]);
      }
      if (typeof a[sortField] === 'string') {
        return b[sortField].localeCompare(a[sortField]);
      }
      return b[sortField] - a[sortField]; // Fallback for numeric
    });
    displayTickets(tickets);
  };
}

function displayTickets(tickets) {
  const ticketList = document.getElementById("ticket-list");
  ticketList.innerHTML = "";
  if (!tickets.length) {
    ticketList.innerHTML = "<p>No tickets found.</p>";
    return;
  }
  tickets.forEach(ticket => {
    const div = document.createElement("div");
    div.className = "ticket";
    div.innerHTML = `
      <div>
        <span class="severity ${ticket.severity}">${ticket.severity}</span>
        <span class="status">${ticket.status}</span>
      </div>
      <h3>${ticket.title}</h3>
      <p>${ticket.description}</p>
      <p><strong>Creator:</strong> ${ticket.creator}</p>
      <p><strong>Created:</strong> ${new Date(ticket.createdAt).toLocaleString()}</p>
      <p><strong>Updated:</strong> ${new Date(ticket.updatedAt).toLocaleString()}</p>
      <div class="actions">
        <button data-id="${ticket.id}" data-action="edit">Edit</button>
        <button class="delete" data-id="${ticket.id}" data-action="delete">Delete</button>
      </div>
    `;
    ticketList.appendChild(div);
  });
}

document.getElementById('ticket-list').addEventListener('click', (e) => {
  const target = e.target;
  const id = Number(target.dataset.id);

  if (target.dataset.action === 'edit') {
    const transaction = db.transaction(["tickets"], "readonly");
    const store = transaction.objectStore("tickets");
    const request = store.get(id);
    request.onerror = (e) => console.error("Error fetching ticket:", e.target.error);
    request.onsuccess = (e) => showModal(e.target.result);
  }

  if (target.dataset.action === 'delete') {
    if (!confirm("Delete this ticket?")) return;
    const transaction = db.transaction(["tickets"], "readwrite");
    const store = transaction.objectStore("tickets");
    const request = store.delete(id);
    request.onerror = (e) => console.error("Error deleting ticket:", e.target.error);
    request.onsuccess = () => {
      loadTickets();
      updateStats();
      showToast("Ticket deleted.");
    };
  }
});

const modal = document.getElementById("ticket-modal");

function showModal(ticket = null) {
  modal.style.display = "flex";
  if (ticket) {
    document.getElementById("ticket-id").value = ticket.id;
    document.getElementById("ticket-id").dataset.createdAt = ticket.createdAt;
    document.getElementById("creator").value = ticket.creator;
    document.getElementById("title").value = ticket.title;
    document.getElementById("description").value = ticket.description;
    document.getElementById("severity").value = ticket.severity;
    document.getElementById("status").value = ticket.status;
  } else {
    document.getElementById("ticket-form").reset();
    document.getElementById("ticket-id").value = "";
  }
}

function hideModal() {
  modal.style.display = "none";
  document.getElementById("ticket-form").reset();
  document.getElementById("ticket-id").value = "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById("show-create-form").addEventListener("click", () => showModal());
modal.querySelector(".close-button").addEventListener("click", hideModal);

document.getElementById("search").addEventListener("input", loadTickets);
document.getElementById("filter-severity").addEventListener("change", loadTickets);
document.getElementById("sort").addEventListener("change", loadTickets);
document.getElementById("reset-filters").addEventListener("click", () => {
  document.getElementById("search").value = "";
  document.getElementById("filter-severity").value = "";
  document.getElementById("sort").value = "createdAt";
  loadTickets();
});

function updateStats() {
  const transaction = db.transaction(["tickets"], "readonly");
  const store = transaction.objectStore("tickets");
  const request = store.getAll();
  request.onsuccess = (event) => {
    const tickets = event.target.result;
    document.getElementById("total-tickets").textContent = `Total: ${tickets.length}`;
    document.getElementById("open-tickets").textContent = `Open: ${tickets.filter(t => t.status !== "Closed").length}`;
    document.getElementById("closed-tickets").textContent = `Closed: ${tickets.filter(t => t.status === "Closed").length}`;
  };
}
