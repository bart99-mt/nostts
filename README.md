# New Open Source Trouble Ticketing System

A simple, self-hosted, and browser-based trouble ticketing system. Manage your support tickets with ease, directly in your web browser.

---

## Key Features

* **Ticket Management**: Create, edit, update, and delete support tickets.
* **Persistent Client-Side Storage**: Tickets are saved in your browser's IndexedDB and persist between sessions.
* **Search and Filtering**: Easily find tickets by creator, title, description, and severity.
* **Sorting Options**: Organize tickets by creation date, last update, severity, or creator.
* **Dashboard Analytics**: Get a quick overview with stats on total, open, and closed tickets.
* **Customizable Branding**: Easily replace the `logo.png` to use your own branding.

---

## Getting Started

### Option 1: Quick Install (Windows)

1.  Download the `installation-script.bat` file.
2.  Run the script. It will download the necessary files to `%appdata%\nostts\` and create desktop shortcuts.

### Option 2: Manual Setup

1.  Download or clone the repository to your local machine.
2.  Open the `index.html` file in a modern web browser (Chrome, Firefox, Edge, Safari).

---

## How to Use

* **Viewing Tickets**: The main dashboard displays a summary of your tickets, and the full list is shown below.
* **Creating a Ticket**: Click the "New Ticket" button, fill out the form, and click "Save Ticket".
* **Editing a Ticket**: Find the ticket you want to modify, click the "Edit" button, change the necessary information, and save.
* **Deleting a Ticket**: Click the "Delete" button on the ticket you wish to remove and confirm the action.
* **Searching & Filtering**: Use the controls at the top of the page to search, filter, or sort. Click "Reset" to clear all filters.

---

## Technical Overview

### Architecture

* **Frontend**: HTML, CSS, JavaScript
* **Database**: IndexedDB for client-side storage
* **Backend**: None. This is a fully client-side application.

### Data Model

Each ticket is stored with the following fields. Here is an example:

```json
{
  "id": "1678886400000",
  "creator": "John Doe",
  "title": "Server is down",
  "description": "The main web server is not responding to pings.",
  "severity": "Critical",
  "status": "Open",
  "createdAt": "2025-03-15T12:00:00.000Z",
  "updatedAt": "2025-03-15T12:00:00.000Z"
}
