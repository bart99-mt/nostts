New Open Source Trouble Ticketing System<br><br><br>
Technical Documentation<br>
<br><br>Overview<br>
The New Open Source Trouble Ticketing System is a self-hosted, browser-based application for managing support tickets. It uses modern web technologies (HTML, CSS, JavaScript) and IndexedDB for persistent data storage.<br>
<br>Architecture<br>
•	Frontend: HTML, CSS, and JavaScript.<br>
•	Database: IndexedDB for client-side storage.<br>
•	No backend: All logic and data storage happen in the browser.<br>
<br>Key Features<br>
•	Ticket Management: Create, edit, update, and delete tickets.<br>
•	Persistent Storage: Tickets are saved in IndexedDB and persist between browser sessions.<br>
•	Search and Filter: Search by creator, title, or description. Filter by severity.<br>
•	Sorting: Sort tickets by creation date, update time, severity, or creator.<br>
•	Dashboard: View statistics on total, open, and closed tickets.<br>
•	Branding: Customizable logo via logo.png.<br>
<br><br>Data Model<br>
Each ticket contains the following fields:<br>
•	id: Unique identifier (auto-generated).<br>
•	creator: Name or identifier of the ticket creator.<br>
•	title: Short title of the ticket.<br>
•	description: Detailed description of the issue.<br>
•	severity: One of Low, Medium, High, or Critical.<br>
•	status: One of New, Open, In Progress, Resolved, or Closed.<br>
•	createdAt: Date and time the ticket was created.<br>
•	updatedAt: Date and time the ticket was last updated.<br>
<br>How It Works<br>
1.	Initialization<br>
o	When the page loads, the application checks for an existing IndexedDB database.<br>
o	If none exists, it creates one and sets up the required data structure.<br>
2.	Ticket Operations<br>
o	Create: Adds a new ticket to the database.<br>
o	Edit: Updates an existing ticket.<br>
o	Delete: Removes a ticket from the database.<br>
3.	Display and Filtering<br>
o	Load Tickets: Retrieves all tickets from the database.<br>
o	Filter: Applies search and severity filters as specified by the user.<br>
o	Sort: Sorts tickets according to the selected field.<br>
4.	Statistics<br>
o	Update Stats: Calculates and displays total, open, and closed tickets.<br>
Security and Privacy<br>
•	No server communication: All data remains on the user’s device.<br>
•	No authentication: Anyone with access to the browser can use the system.<br>
•	Private data: Tickets are only accessible from the browser where they were created.<br>
Customization<br>
•	Branding: Replace logo.png to change the logo.<br>
•	CSS: Modify style.css to change the look and feel.<br>
•	JavaScript: Extend script.js for additional features.<br>
Compatibility<br>
•	Supported Browsers: Modern browsers that support IndexedDB (Chrome, Firefox, Edge, Safari).<br>
•	No installation required: Just open index.html in your browser.<br>
Version Control and Updates<br>
•	IndexedDB Versioning: The database schema is versioned to support future updates.<br>
•	Data Preservation: Upgrades to the application will preserve existing tickets as long as the browser data is not cleared<br>
