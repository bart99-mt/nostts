To quickly start using this project as it is, download the "installation-srcipt.bat" and launch it. The script will download the whole repository and unpack it into "%appdata%\nostts\" then create a desktop shortcuts to the index.html and .docx files. No elevated previleges required. <br><br>
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
5. Security and Privacy<br>
•	No server communication: All data remains on the user’s device.<br>
•	No authentication: Anyone with access to the browser can use the system.<br>
•	Private data: Tickets are only accessible from the browser where they were created.<br>
6. Customization<br>
•	Branding: Replace logo.png to change the logo.<br>
•	CSS: Modify style.css to change the look and feel.<br>
•	JavaScript: Extend script.js for additional features.<br>
7. Compatibility<br>
•	Supported Browsers: Modern browsers that support IndexedDB (Chrome, Firefox, Edge, Safari).<br>
•	No installation required: Just open index.html in your browser.<br>
8. Version Control and Updates<br>
•	IndexedDB Versioning: The database schema is versioned to support future updates.<br>
•	Data Preservation: Upgrades to the application will preserve existing tickets as long as the browser data is not cleared<br>

User Manual:<br>
New Open Source Trouble Ticketing System<br>
Introduction<br>
Welcome to the New Open Source Trouble Ticketing System! This web-based application helps you create, track, and manage support tickets directly in your browser. All your data is stored securely and privately on your computer—no server or internet connection is required after setup.<br>
Getting Started<br>
1.	Open the Application<br>
o	Double-click the index.html file to open it in your web browser.<br>
o	The system will load and display the main dashboard.<br>
2.	Viewing Tickets<br>
o	The dashboard shows a summary of all tickets.<br>
o	You can see the total number of tickets, as well as how many are open or closed.<br>
o	The list of tickets appears below the dashboard.<br>
Creating a Ticket<br>
1.	Click "New Ticket"<br>
o	Click the “New Ticket” button above the ticket list.<br>
o	A form will appear where you can enter ticket details.<br>
2.	Fill in Ticket Details<br>
o	Creator: Enter your name or identifier.<br>
o	Title: Give your ticket a brief title.<br>
o	Description: Describe the issue or request.<br>
o	Severity: Select the severity level (Low, Medium, High, Critical).<br>
o	Status: Set the initial status (usually “New”).<br>
o	Click "Save Ticket" to submit.<br>
Editing a Ticket<br>
1.	Find the Ticket<br>
o	Locate the ticket you want to edit in the list.<br>
2.	Click "Edit"<br>
o	Click the “Edit” button on the ticket card.<br>
o	The ticket details will load into the form.<br>
3.	Make Changes<br>
o	Update any field as needed.<br>
o	Click "Save Ticket" to update.<br>
Deleting a Ticket<br>
1.	Find the Ticket<br>
o	Locate the ticket you want to delete.<br>
2.	Click "Delete"<br>
o	Click the “Delete” button on the ticket card.<br>
o	Confirm deletion if prompted.<br>
Searching, Filtering, and Sorting<br>
•	Search: Use the search box to find tickets by creator, title, or description.<br>
•	Filter by Severity: Select a severity level to show only tickets of that type.<br>
•	Sort: Choose to sort tickets by creation date, update time, severity, or creator.<br>
•	Reset Filters: Click “Reset” to clear all filters and sorting.<br>
Tips<br>
•	Your data is private: All tickets are stored in your browser and will not be lost between sessions (unless you clear browser data).<br>
•	No login required: Anyone using your computer can create or manage tickets.<br>
•	Replace logo.png with your own logo for custom branding.<br>
