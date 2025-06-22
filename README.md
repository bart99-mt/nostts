```markdown
# New Open Source Trouble Ticketing System

A simple, self-hosted, and browser-based trouble ticketing system. Manage your support tickets with ease, directly in your web browser. This is a fully client-side application with no backend, meaning all data is stored locally in your browser.

## Key Features

-   **Ticket Management**: Create, edit, update, and delete support tickets.
-   **Persistent Client-Side Storage**: Tickets are saved in your browser's IndexedDB and persist between sessions.
-   **Search and Filtering**: Easily find tickets by creator, title, or description, and filter by severity.
-   **Sorting Options**: Organize tickets by creation date, last update, severity, or creator.
-   **Dashboard Analytics**: Get a quick overview with stats on total, open, and closed tickets.
-   **Customizable Branding**: Easily replace the `logo.png` to use your own branding.
-   **No Backend Required**: This is a fully client-side application, ensuring your data stays private on your machine.
-   **Modern Browser Support**: Works in all modern browsers that support IndexedDB, including Chrome, Firefox, Edge, and Safari.

## Getting Started

### Option 1: Quick Install (Windows)

1.  Download the `installation-script.bat` file.
2.  Run the script. It will download the necessary files to `%appdata%\ostts\` and create desktop shortcuts.

### Option 2: Manual Setup

1.  Download or clone the repository to your local machine.
2.  Open the `index.html` file in a modern web browser.

## How to Use

-   **Viewing Tickets**: The main dashboard displays a summary of your tickets, and the full list is shown below.
-   **Creating a Ticket**: Click the "New Ticket" button, fill out the form, and click "Save Ticket."
-   **Editing a Ticket**: Find the ticket you want to modify, click the "Edit" button, change the necessary information, and save.
-   **Deleting a Ticket**: Click the "Delete" button on the ticket you wish to remove and confirm the action.
-   **Searching & Filtering**: Use the controls at the top of the page to search, filter, or sort. Click "Reset" to clear all filters.

## Technical Overview

### Architecture

-   **Frontend**: HTML, CSS, JavaScript
-   **Database**: IndexedDB for client-side storage
-   **Backend**: None. This is a fully client-side application.

### How It Works

When the application is loaded, it checks for an existing IndexedDB database named "TroubleTicketDB". If the database doesn't exist, it is created with a "tickets" object store. All ticket operations (create, edit, delete) are handled as transactions within the IndexedDB database. The ticket list is dynamically rendered on the page, and any filtering or sorting actions will re-fetch and re-display the data accordingly.

### Data Model

Each ticket is stored as an object in the IndexedDB database with the following fields:

| Field       | Type   | Description                                                                    |
| :---------- | :----- | :----------------------------------------------------------------------------- |
| `id`        | Number | Unique identifier, generated using `Date.now()`.                               |
| `creator`   | String | The name of the person who created the ticket.                                 |
| `title`     | String | The title of the ticket.                                                       |
| `description` | String | A detailed description of the issue.                                           |
| `severity`  | String | The severity of the ticket. Can be one of: Low, Medium, High, Critical.        |
| `status`    | String | The current status of the ticket. Can be one of: New, Open, In Progress, Resolved, Closed. |
| `createdAt` | String | The date and time the ticket was created, in ISO 8601 format.                  |
| `updatedAt` | String | The date and time the ticket was last updated, in ISO 8601 format.             |

## Security and Privacy

-   **No Server Communication**: All data is stored locally in the user's browser and is never sent to a server.
-   **No Authentication**: The application does not have an authentication system. Anyone with access to the browser can view and manage the tickets.
-   **Data Privacy**: Tickets are only accessible from the browser profile in which they were created. Clearing browser data will permanently delete all tickets.

## Customization

-   **Branding**: To use your own logo, simply replace the `logo.png` file with your own image.
-   **Styling**: The look and feel of the application can be customized by modifying the `style.css` file.
-   **Functionality**: Additional features can be added by editing the `script.js` file.
```
