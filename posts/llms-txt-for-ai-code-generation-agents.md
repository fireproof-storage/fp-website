---
title: LLMs.txt for AI Code Generation Agents
date: 2025-02-11T17:41:13.813Z
author: J Chris Anderson
summary: Learn how to use LLMs.txt to help AI code generation agents understand your
  API better.
tags:
  - ai
  - code
---

*This is the content of the [llms-full.txt file for the Fireproof project](https://use-fireproof.com/llms-full.txt). In constrained environments, use the smaller [llms.txt](https://use-fireproof.com/llms.txt) file. Learn more about llms.txt at [llmstxt.org](https://llmstxt.org/).*

# Fireproof for AI Code Generation

Fireproof is a lightweight embedded document database with encrypted live sync, designed to make browser apps easy. Use it in any JavaScript environment with a unified API that works both in React (with hooks) and as a standalone core API.

## Key Features

- **Apps run anywhere:** Bundle UI, data, and logic in one file.
- **Real-Time & Offline-First:** Automatic persistence and live queries.
- **Unified API:** TypeScript works with Deno, Bun, Node.js, and the browser.
- **React Hooks:** Leverage `useLiveQuery` and `useDocument` for live collaboration.
- **Cryptographic ledger integrity:** Data changes are signed and verified, like git or a blockchain.

## Installation

The `use-fireproof` package provides both the core API and React hooks.

```bash
npm install use-fireproof
```
Works with ⚡️ ESM.sh:

```js
import { useFireproof } from "https://esm.sh/use-fireproof";
```

## Basic Usage (with React)

React hooks are the recommended way to use Fireproof in LLM code generation contexts. Here's how to use them:

#### Create or Load a Database Ledger

Just as applications store user data, agents and LLMs often need to manage conversation logs or metadata. Fireproof databases store data across sessions and can sync in real-time. Each database is identified by a string name, and you can have multiple databases per application—often one per collaboration session.

```js
import { useFireproof } from "use-fireproof";

const { database, useLiveQuery, useDocument } = useFireproof("my-ledger");
```

Fireproof databases are Merkle CRDTs, giving them the ledger-like causal consistency of a blockchain, but with the ability to merge and sync web data in real-time. Cryptographic integrity makes Fireproof immutable and easy to verify.

#### Put and Get Documents

Documents are JSON-style objects (CBOR) storing application data. Each has an `_id`, which can be auto-generated or set explicitly. Auto-generation is recommended to ensure uniqueness and avoid conflicts. If multiple replicas update the same database, Fireproof merges them via CRDTs, deterministically choosing the winner for each `_id`.

It is best to have more granular documents, e.g. one document per user action, so saving a form or clicking a button should typically create or update a single document, or just a few documents. Avoid patterns that require a single document to grow without bound.

```js
const App = () => {
  const { useDocument } = useFireproof("my-ledger");

  const { doc, merge, submit } = useDocument({ text: "", timestamp: Date.now() });

  const queryResult = useLiveQuery("timestamp", { descending: true });

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={doc.text}
          onChange={(e) => merge({ text: e.target.value })}
          placeholder="New document"
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Recent Documents</h3>
      <ul>
        {queryResult.docs.map((doc) => (
          <li key={doc._id}>
            {doc.text} — {new Date(doc.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Address documents by a known key if you want to force conflict resolution or work with a real world resource, like a scheudule slot or a user profile.

```js
const { useDocument } = useFireproof("my-ledger");

const { doc, merge, save, reset } = useDocument({ _id: "user-profile:abc@example.com" });
```

The `useDocument` hook provides several methods:
- `merge(updates)`: Update the document with new fields
- `save()`: Save the current document state
- `reset()`: Reset to initial state
- `submit(e)`: Handles form submission by preventing default, saving, and resetting

For form-based creation flows, use `submit`:
```js
<form onSubmit={submit}>
```

For manual control, use `save` and `reset`:
```js
<button onClick={save}>Save Changes</button>
<button onClick={reset}>Discard Changes</button>
```

#### Query Data with React

Data is queried by collated indexes defined by the application. Collation is inspired by CouchDB. Use numbers when possible for sorting continuous data. You might want to sort by a number while at the same time presenting a derived string, e.g. for time or sort position.

```js
function App() {
  const { useLiveQuery } = useFireproof("my-ledger");
  const queryResult = useLiveQuery("timestamp", { descending: true, limit: 5 });
  
  return (
    <div>
      <h3>Recent Sessions</h3>
      <ul>
        {queryResult.docs.map(doc => (
          <li key={doc._id}>{doc.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

Query with specific filters:
```js
const queryResult = useLiveQuery("agentId", { 
  descending: true, 
  limit: 5, 
  key: "llm-agent-1" 
});
```

Group and filter documents:
```js
const queryResult = useLiveQuery(
  (doc) => [doc.agent, doc.timestamp], 
  { descending: true, limit: 5, prefix: ["llm-agent-1"] }
);
```

If you just want all the docs you can index the _id field and query for it, ids are roughly sequential so this query has the most recent docs first:

```js
const queryResult = useLiveQuery("_id", { descending: true });
```

#### Sortable Lists

Sortable lists are a common pattern. Here's how to implement them using Fireproof:

```js
function App() {
  const { database, useLiveQuery } = useFireproof("my-ledger");
  
  // Initialize list with evenly spaced positions
  async function initializeList() {
    await database.put({ list: "xyz", position: 1000 });
    await database.put({ list: "xyz", position: 2000 });
    await database.put({ list: "xyz", position: 3000 });
  }
  
  // Query items sorted by position
  const queryResult = useLiveQuery(
    (doc) => [doc.list, doc.position], 
    { ascending: true, prefix: ["xyz"] }  // Changed to ascending for more intuitive order
  );

  // Insert between existing items using midpoint calculation
  async function insertBetween(beforeDoc, afterDoc) {
    const newPosition = (beforeDoc.position + afterDoc.position) / 2;
    await database.put({ 
      list: "xyz", 
      position: newPosition 
    });
  }

  return (
    <div>
      <h3>List xyz (Sorted)</h3>
      <ul>
        {queryResult.docs.map(doc => (
          <li key={doc._id}>
            {doc._id}: position {doc.position}
          </li>
        ))}
      </ul>
      <button onClick={initializeList}>Initialize List</button>
      <button onClick={() => insertBetween(queryResult.docs[1], queryResult.docs[2])}>Insert new doc at 3rd position</button>
    </div>
  );
}
```

#### Date-based Queries
```js
const queryResult = useLiveQuery(
  (doc) => [doc.date.getFullYear(), doc.date.getMonth(), doc.date.getDate()],
  { descending: true, limit: 5, prefix: [2024, 11] }
);
```

#### Real-time Updates
```js
function AgentUI() {
  const { useLiveQuery } = useFireproof("my-ledger");
  const conversation = useLiveQuery("timestamp", { descending: true, limit: 10 });
  const logs = conversation.docs;

  return (
    <ul>
      {logs.map(log => (
        <li key={log._id}>{log.text}</li>
      ))}
    </ul>
  );
}
```

### Query Patterns and Best Practices

While the snippets above illustrate basic usage, here are some important considerations for robust query patterns and performance:

1. **Filtering Nulls and Missing Fields**  
   Use optional chaining safely to avoid errors:
   ```js
   const queryResult = useLiveQuery(
     (doc) => doc.text?.length ?? 0,
     { descending: true, limit: 5 }
   );
   ```
   This ensures that if `doc.text` is undefined or null, we treat the length as 0 rather than leading to errors or unintended falsy values.

2. **Sorting by Multiple Fields**  
   If you want to sort by multiple fields (e.g. `doc.text?.length` as a primary key and `doc.timestamp` as a fallback), return an array:
   ```js
   const queryResult = useLiveQuery(
     (doc) => [
       doc.text?.length ?? 0,
       doc.timestamp ?? 0
     ],
     { prefix: [4] }
   );
   ```
   Here, if two items have the same `text.length`, they are ordered further by the `timestamp`. In the example above, we are querying for documents with a `text.length` of 4, and sorting them by `timestamp`.

5. **Real-time Updates and User Interaction**  
   For interactive lists or queries that need to filter or sort in real time, structure your `useLiveQuery` to use key ranges or prefixes. Include filter values as part of the index key to enable efficient filtering:
   ```js
     const userControlledQuery = useLiveQuery(
       (doc) => [
         doc.type ?? "",
         doc.text?.length ?? 0,
         doc.timestamp ?? 0
       ],
       { 
         prefix: [currentTypeFilter],
         descending: false, 
         limit: 20 
       }
     );
     ```
   This builds an incremental index that can be efficiently filtered using the prefix parameter.

---

### Using Fireproof without React

#### Core Installation

If you don't need React hooks, install the core package (also exported by the React hooks package):

```bash
npm install @fireproof/core
```

The core package is also available via ESM.sh:

```bash
import { fireproof } from "https://esm.sh/@fireproof/core";
```

### Cloud Package for Multi-user Sync

To sync with multiple users, install the cloud package, which connects to a Fireproof cloud server:

```bash
npm install @fireproof/cloud
```

The cloud package is also available via ESM.sh:

```bash
import { connect } from "https://esm.sh/@fireproof/cloud";
```

To use Fireproof on your own backend, visit the [Fireproof docs](https://use-fireproof.com/).

### Core API Usage

Import the core API directly:

#### Create or Load a Ledger Database
```js
import { fireproof } from "@fireproof/core";

const database = fireproof("my-ledger");
```

#### Put and Get Documents

Below are JavaScript examples of how to put and get documents.

```js
// Auto-generated ID
const ok = await database.put({ text: "LLM conversation data", timestamp: Date.now() });
const loadedDoc = await database.get(ok.id);

// Explicit ID
await database.put({ 
  _id: "user-profile:abc@example.com", 
  text: "LLM conversation data", 
  timestamp: Date.now() 
});
const profileDoc = await database.get("user-profile:abc@example.com");
```

#### Query Data

Below are JavaScript examples of how to query data. The first argument is the index definition, it is required and can be a string or a function. The second argument is the query options, it is optional.

```js
// Basic query
const response = await database.query("timestamp", { descending: true, limit: 5 });

// Query with specific key
const response = await database.query("agentId", { 
  descending: true, 
  limit: 5, 
  key: "llm-agent-1" 
});

// Group and filter documents
const response = await database.query(
  (doc) => [doc.agent, doc.timestamp], 
  { descending: true, limit: 5, prefix: ["llm-agent-1"] }
);
```

The above `useLiveQuery` examples also work with the core API, the difference is that the query result is a Promise, and the query is not automatically updated when the database changes.

#### Real-time Updates

To subscribe to real-time updates, use the `subscribe` method. This is useful for building backend event handlers or other server-side logic.

```js
database.subscribe((changes) => {
  console.log("Recent changes:", changes);
}, true);
```

#### Working with Files

Fireproof has built-in support for file attachments. Files are encrypted by default and synced on-demand. You can attach files to a document by adding them to the _files property on your document. For example:

```html
<input accept="image/*" title="save to Fireproof" type="file" id="files" multiple>
```

```js
function handleFiles() {
  const fileList = this.files;
  const doc = {
    type: "files",
    _files: {}
  };
  for (const file of fileList) {
    // Assign each File object to the document
    doc._files[file.name] = file; 
  }
  database.put(doc);
}

document.getElementById("files").addEventListener("change", handleFiles, false);
```

When loading a document with attachments, you can retrieve each attachment's actual File object by calling its .file() method. This returns a Promise that resolves with the File data, which you can display in your app:

```js
const doc = await database.get("my-doc-id");
for (const fileName in doc._files) {
  const meta = doc._files[fileName];
  if (meta.file) {
    const fileObj = await meta.file();
    console.log("Loaded file:", fileObj.name);
  }
}
```

## Example React Application

This example shows a simple todo list application that uses Fireproof to store and sort them by creation date, allows users to add, toggle, and delete todos. The app can be delivered as a single file, with a link to this codepen for preview: https://codepen.io/useFireproof/pen/MYgNYdx

Code listing for App.js:
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { useFireproof } from "use-fireproof";

function App() {
  const { useLiveQuery, useDocument, database } = useFireproof("todo-list-db");

  const {
    doc: newTodo,
    merge: mergeNewTodo,
    submit: submitNewTodo
  } = useDocument({
    todo: "",
    completed: false,
    createdAt: Date.now()
  });

  const { docs: notes } = useLiveQuery("type", { 
    key: "note",
    descending: true 
  });

  const handleInputChange = (e) => {
    mergeNewTodo({ todo: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNewTodo();
  };

  database.allDocs().then((docs) => console.log(docs));

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="todo" className="block mb-2 font-semibold">Todo</label>
        <input
          className="w-full border border-gray-300 rounded px-2 py-1"
          id="todo"
          type="text"
          onChange={handleInputChange}
          value={newTodo.todo}
        />
      </form>
      <ul className="space-y-3">
        {notes.map((doc) => (
          <li className="flex flex-col items-start p-2 border border-gray-200 rounded bg-gray-50" key={doc._id}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={doc.completed}
                  onChange={() => database.put({ ...doc, completed: !doc.completed })}
                />
                <span className="font-medium">{doc.todo}</span>
              </div>
              <button
                className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => database.del(doc._id)}
              >
                Delete
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {new Date(doc.createdAt).toISOString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## Example Event Handler

The following program uses the core module and subscribes to changes on the database. When a todo is completed, the program sends an email to the user.

```js
import { fireproof } from "@fireproof/core";

const database = fireproof("todo-list-db");

database.subscribe((changes) => {
  console.log("Recent changes:", changes);
  changes.forEach((change) => {
    if (change.completed) {
      sendEmail(change.email, "Todo completed", "You have completed a todo.");
    }
  });
}, true);
```

### Example color picker application

This example shows a simple color picker application that uses Fireproof to store and sort them by creation date. The app can be delivered as a single file, with a link to this codepen for preview: https://codepen.io/useFireproof/pen/MYgNYdx

Code listing for App.js:
```js
import React from "react";
import { useFireproof } from "use-fireproof";

function App() {
  const { database, useLiveQuery, useDocument } = useFireproof("palettes-db");
  const { doc, merge, submit } = useDocument({ 
    type: "palette",
    name: "", 
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    timestamp: Date.now()
  });
  
  const { docs: palettes } = useLiveQuery("type", { 
    key: "palette",
    descending: true 
  });

  const handleColorChange = (index, color) => {
    const updatedColors = [...doc.colors];
    updatedColors[index] = color;
    merge({ colors: updatedColors });
  };

  const handleNameChange = (e) => {
    merge({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    merge({ timestamp: Date.now() });
    submit();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Color Palette Creator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Palette Name"
          value={doc.name}
          onChange={handleNameChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="grid grid-cols-3 gap-2">
          {doc.colors.map((color, index) => (
            <input
              key={index}
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              className="w-full h-10 border rounded"
            />
          ))}
        </div>
        <button type="submit" className="mt-3 w-full bg-blue-500 text-white py-2 rounded">
          Save Palette
        </button>
      </form>
      <h2 className="text-lg font-semibold mt-6">Saved Palettes</h2>
      <div className="grid gap-3 mt-3">
        {palettes.map((palette, paletteIndex) => (
          <div key={paletteIndex} className="p-2 flex flex-col border rounded shadow">
            <div className="font-bold text-center mb-2">{palette.name || "Unnamed Palette"}</div>
            <div className="flex space-x-2">
              {palette.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

## See also

See the lite docs at https://use-fireproof.com/llms-mini.txt and the basics at https://use-fireproof.com/llms.txt