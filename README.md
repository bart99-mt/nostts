# nostts
New Open Source Trouble Ticketing System
Technical Documentation<br>
Overview
The New Open Source Trouble Ticketing System is a self-hosted, browser-based application for managing support tickets. It uses modern web technologies (HTML, CSS, JavaScript) and IndexedDB for persistent data storage.
Architecture
•	Frontend: HTML, CSS, and JavaScript.
•	Database: IndexedDB for client-side storage.
•	No backend: All logic and data storage happen in the browser.
Key Features
•	Ticket Management: Create, edit, update, and delete tickets.
•	Persistent Storage: Tickets are saved in IndexedDB and persist between browser sessions.
•	Search and Filter: Search by creator, title, or description. Filter by severity.
•	Sorting: Sort tickets by creation date, update time, severity, or creator.
•	Dashboard: View statistics on total, open, and closed tickets.
•	Branding: Customizable logo via logo.png.
Data Model
Each ticket contains the following fields:
•	id: Unique identifier (auto-generated).
•	creator: Name or identifier of the ticket creator.
•	title: Short title of the ticket.
•	description: Detailed description of the issue.
•	severity: One of Low, Medium, High, or Critical.
•	status: One of New, Open, In Progress, Resolved, or Closed.
•	createdAt: Date and time the ticket was created.
•	updatedAt: Date and time the ticket was last updated.
How It Works
1.	Initialization
o	When the page loads, the application checks for an existing IndexedDB database.
o	If none exists, it creates one and sets up the required data structure.
2.	Ticket Operations
o	Create: Adds a new ticket to the database.
o	Edit: Updates an existing ticket.
o	Delete: Removes a ticket from the database.
3.	Display and Filtering
o	Load Tickets: Retrieves all tickets from the database.
o	Filter: Applies search and severity filters as specified by the user.
o	Sort: Sorts tickets according to the selected field.
4.	Statistics
o	Update Stats: Calculates and displays total, open, and closed tickets.
Security and Privacy
•	No server communication: All data remains on the user’s device.
•	No authentication: Anyone with access to the browser can use the system.
•	Private data: Tickets are only accessible from the browser where they were created.
Customization
•	Branding: Replace logo.png to change the logo.
•	CSS: Modify style.css to change the look and feel.
•	JavaScript: Extend script.js for additional features.
Compatibility
•	Supported Browsers: Modern browsers that support IndexedDB (Chrome, Firefox, Edge, Safari).
•	No installation required: Just open index.html in your browser.
Version Control and Updates
•	IndexedDB Versioning: The database schema is versioned to support future updates.
•	Data Preservation: Upgrades to the application will preserve existing tickets as long as the browser data is not cleared.
