<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Open Source Trouble Ticketing System - README</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Custom styles to complement Tailwind */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #121212;
            color: #e0e0e0;
        }
        .container {
            max-width: 960px;
        }
        .card {
            background-color: #1e1e1e;
            border: 1px solid #333;
        }
        h1, h2, h3 {
            color: #ffffff;
            font-weight: 600;
        }
        h2 {
            border-bottom: 1px solid #333;
            padding-bottom: 0.5rem;
        }
        .feature-icon {
            background-color: #007bff;
        }
        code {
            background-color: #2c2c2c;
            color: #d1d5db; /* gray-300 */
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.9em;
        }
        pre {
            background-color: #2c2c2c;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            border: 1px solid #444;
        }
        pre code {
            padding: 0;
            background: none;
            color: inherit;
        }
    </style>
</head>
<body class="antialiased">

    <div class="container mx-auto p-4 md:p-8">

        <!-- Header Section -->
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-2">New Open Source Trouble Ticketing System</h1>
            <p class="text-lg text-gray-400">
                A simple, self-hosted, and browser-based trouble ticketing system. Manage your support tickets with ease, directly in your web browser.
            </p>
        </header>

        <!-- Key Features Section -->
        <section class="mb-12">
            <h2 class="text-3xl mb-6">Key Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Ticket Management</h3>
                    <p class="text-gray-400">Create, edit, update, and delete support tickets.</p>
                </div>
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Persistent Client-Side Storage</h3>
                    <p class="text-gray-400">Tickets are saved in IndexedDB and persist between sessions.</p>
                </div>
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Search and Filtering</h3>
                    <p class="text-gray-400">Easily find tickets by creator, title, description, and severity.</p>
                </div>
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Sorting Options</h3>
                    <p class="text-gray-400">Organize tickets by creation date, last update, severity, or creator.</p>
                </div>
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Dashboard Analytics</h3>
                    <p class="text-gray-400">Get a quick overview with stats on total, open, and closed tickets.</p>
                </div>
                <!-- Feature Card -->
                <div class="card p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">Customizable Branding</h3>
                    <p class="text-gray-400">Easily replace the <code>logo.png</code> to use your own branding.</p>
                </div>
            </div>
        </section>

        <!-- Getting Started Section -->
        <section class="mb-12">
            <h2 class="text-3xl mb-6">Getting Started</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6 rounded-lg">
                    <h3 class="text-2xl font-semibold mb-3">Option 1: Quick Install (Windows)</h3>
                    <ol class="list-decimal list-inside text-gray-300 space-y-2">
                        <li>Download the <code>installation-script.bat</code> file.</li>
                        <li>Run the script. It will download files to <code>%appdata%\nostts\</code> and create desktop shortcuts.</li>
                    </ol>
                </div>
                <div class="card p-6 rounded-lg">
                    <h3 class="text-2xl font-semibold mb-3">Option 2: Manual Setup</h3>
                     <ol class="list-decimal list-inside text-gray-300 space-y-2">
                        <li>Download or clone the repository to your local machine.</li>
                        <li>Open the <code>index.html</code> file in a modern web browser.</li>
                    </ol>
                </div>
            </div>
        </section>

        <!-- How to Use Section -->
        <section class="mb-12">
            <h2 class="text-3xl mb-6">How to Use</h2>
            <div class="card p-6 rounded-lg space-y-4 text-gray-300">
                <p><strong>Viewing Tickets:</strong> The main dashboard displays a summary of your tickets, and the full list is shown below.</p>
                <p><strong>Creating a Ticket:</strong> Click the "New Ticket" button, fill out the form, and click "Save Ticket".</p>
                <p><strong>Editing a Ticket:</strong> Find the ticket you want to modify, click the "Edit" button, change the necessary information, and save.</p>
                <p><strong>Deleting a Ticket:</strong> Click the "Delete" button on the ticket you wish to remove and confirm the action.</p>
                <p><strong>Searching & Filtering:</strong> Use the controls at the top of the page to search, filter, or sort. Click "Reset" to clear all filters.</p>
            </div>
        </section>

        <!-- Technical Overview Section -->
        <section class="mb-12">
            <h2 class="text-3xl mb-6">Technical Overview</h2>
            <div class="card p-8 rounded-lg">
                <h3 class="text-2xl font-semibold mb-4">Architecture</h3>
                <ul class="list-disc list-inside space-y-2 mb-6 text-gray-300">
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
                    <li><strong>Database:</strong> IndexedDB for client-side storage</li>
                    <li><strong>Backend:</strong> None. This is a fully client-side application.</li>
                </ul>

                <h3 class="text-2xl font-semibold mb-4">Data Model</h3>
                <p class="mb-4 text-gray-400">Each ticket is stored with the following fields:</p>
                <pre><code>{
  "id": "1678886400000",
  "creator": "John Doe",
  "title": "Server is down",
  "description": "The main web server is not responding to pings.",
  "severity": "Critical",
  "status": "Open",
  "createdAt": "2025-03-15T12:00:00.000Z",
  "updatedAt": "2025-03-15T12:00:00.000Z"
}</code></pre>


</body>
</html>
