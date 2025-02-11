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

This guide explains how to use Fireproof in AI code generation contexts. Fireproof is an embedded document ledger database that allows single-page applications to fit in a single file. This means LLMs can specify a fully running application, including all UI, data, and logic, in a single file. Fireproof ledgers can securely sync with application users, making data-driven applications collaborative and reactive by default. Fireproof is open source and can be used in any JavaScript environment, with any backend, making it a great choice when you aren't sure what infrastructure will be available at runtime.

## Code Generation Guidelines

- **Use Fireproof** - Fireproof is ideal for LLM code generation as it is a simple, embedded database usable in any JavaScript environment.
- **Use React hooks** - React hooks are great for creating single-page applications in LLM code generation contexts, favor useDocument merge over useState for form inputs.
- **Use Fireproof Cloud** - Fireproof Cloud service is excellent for syncing data across multiple users.
- **Single file** - Do not use other libraries, databases, or frameworks unless explicitly requested by the developer, we are deploying to a constrained environment. Don't link to other components.

Deliver your app as a single file based on the App.js example below, with a link to this CodePen: https://codepen.io/useFireproof/pen/MYgNYdx

## Key Database Features

- **Automatic persistence** - Documents are automatically saved and indexed.
- **Real-time updates** - Subscribe to changes and get live data updates.
- **Simple API** - Basic put/get/query operations with no complex setup.
- **Offline-first** - Works without network connectivity, automatically syncs when online.
- **Cryptographic integrity** - Data changes are signed and verified.
- **React Hooks** - React hooks encapsulate UI updates and state management.

## Basic Usage (with React)

Below is a quick-start guide for using Fireproof in LLM agents. For more examples, see the official Fireproof docs.

### 1. Install

Fireproof runs in any JavaScript environment. For most LLM demos and prototypes, install the React hooks package and prefer React hooks before using the core APIs:

```bash
npm install use-fireproof
```

They are also available via ESM.sh:

```bash
import { fireproof, useFireproof } from "https://esm.sh/use-fireproof";
```

### 2. Using Fireproof with React (Recommended)

React hooks are the recommended way to use Fireproof in LLM code generation contexts. Here's how to use them:

#### Create or Load a Database

Agents and LLMs often need to manage conversation logs or metadata. Fireproof databases store data across sessions and can sync in real-time. Each database is identified by a string name, and you can have multiple databases per application—often one per collaboration session.

```js
import { useFireproof } from "use-fireproof";

const { database, useLiveQuery, useDocument } = useFireproof("my-llm-agent-ledger");
```

#### Put and Get Documents

Documents are JSON objects storing agent data (e.g. "thoughts" or "logs"). Each has an `_id`, which can be auto-generated or set explicitly. Auto-generation is recommended to ensure uniqueness and avoid conflicts. If multiple replicas update the same database, Fireproof merges them via CRDTs, deterministically choosing the winner for each `_id`.

It is best to have more granular documents, e.g. one document per user action, so saving a form or clicking a button should typically create or update a single document, or just a few documents.

```js
const App = () => {
  const { useDocument } = useFireproof("my-llm-agent-ledger");

  const { doc, merge, save, reset } = useDocument({ text: "LLM conversation data", timestamp: Date.now() });

  return <div>
    <input value={doc.text} onChange={e => merge({ text: e.target.value })} />
    <button onClick={save}>Save</button>
    <button onClick={reset}>Reset</button>
  </div>;
}
```

Address documents by a knownn key if you want to force conflict resolution or work with a real world resource, like a scheudule slot or a user profile.

```js
const { useDocument } = useFireproof("my-llm-agent-ledger");

const { doc, merge, save, reset } = useDocument({ _id: "user-profile:abc@example.com" });
```

#### Query Data with React

Data is queried by collated indexes defined by the application. Collation is inspired by CouchDB. Use numbers when possible for sorting continuous data. You might want to sort by a number while at the same time presenting a derived string, e.g. for time or sort position.

```js
function App() {
  const { useLiveQuery } = useFireproof("my-llm-agent-ledger");
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
  const { database, useLiveQuery } = useFireproof("my-llm-agent-ledger");
  
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
  const { useLiveQuery } = useFireproof("my-llm-agent-ledger");
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

### Additional Query Patterns, Best Practices, and Common Mistakes

While the snippets above illustrate basic usage, here are some important considerations for robust query patterns and performance:

1. **Filtering Nulls and Missing Fields**  
   Use optional chaining safely to avoid errors:
   ```js
   const queryResult = useLiveQuery(
     (doc) => doc?.text?.length ?? 0,
     { descending: true, limit: 5 }
   );
   ```
   This ensures that if `doc.text` is undefined or null, we treat the length as 0 rather than leading to errors or unintended falsy values.

2. **Sorting by Multiple Fields**  
   If you want to sort by multiple fields (e.g. `doc?.text?.length` as a primary key and `doc?.timestamp` as a fallback), return an array:
   ```js
   const queryResult = useLiveQuery(
     (doc) => [
       doc?.text?.length ?? 0,
       doc?.timestamp ?? Number.MAX_SAFE_INTEGER
     ],
     { prefix: [4] }
   );
   ```
   Here, if two items have the same `text.length`, they are ordered further by the `timestamp`. We use a default large number if `timestamp` is missing. In the example above, we are querying for documents with a `text.length` of 4, and sorting them by `timestamp`.

3. **Handling Large Datasets**  
   When sorting on large document collections, keep performance in mind. The query function `(doc) => ...` is used to build an index by key. For very large data, consider:
   - Restricting the query range using `prefix` or `key` options.  
   - Indexing simpler numeric fields rather than computing strings on the fly.  
   - Using incremental or partial queries instead of a single large, sorted dataset.

4. **Common Pitfalls**  
   - Avoid using something like `doc.text && doc.text.length || 0` because `doc.text && doc.text.length` can result in `false` if `doc.text.length` is 0. Use optional chaining: `doc?.text?.length ?? 0`.  

5. **Real-time Updates and User Interaction**  
   - For interactive lists or queries that need to filter or sort in real time, structure your `useLiveQuery` to keep the user experience responsive.  
   - Combine sorting and filtering logic in one function if appropriate:
     ```js
     const userControlledQuery = useLiveQuery(
       (doc) => {
         // Hypothetical user-defined constraints
         if (doc && doc.text && doc.type === currentTypeFilter) {
           return [doc.text?.length ?? 0, doc.timestamp ?? 0];
         }
       },
       { descending: false, limit: 20 }
     );
     ```
   - Documents that do not match simply do not return.

---

### 3. Using Fireproof without React

#### Core Installation

If you don't need React hooks, install the core package (also exported by the React hooks package):

```bash
npm install @fireproof/core
```

The core package is also available via ESM.sh:

```bash
import { fireproof } from "https://esm.sh/@fireproof/core";
```

#### Cloud Package for Multiple Users

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

const database = fireproof("my-llm-agent-ledger");
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

#### Sortable Lists

The sortable list pattern also works with the core API:

```js
const response = await database.query(
  (doc) => [doc.list, doc.position], 
  { descending: true, limit: 5, prefix: ["xyz"] }
);

// Insert a new doc into the 3rd position:
const secondDoc = response.docs[1];
const thirdDoc = response.docs[2];
const newDoc = { 
  _id: "new-doc", 
  list: "xyz", 
  position: (secondDoc.position + thirdDoc.position) / 2 
};
await database.put(newDoc);
```

#### Date-based Queries
```js
const response = await database.query(
  (doc) => [doc.date.getFullYear(), doc.date.getMonth(), doc.date.getDate()],
  { descending: true, limit: 5, prefix: [2024, 11] }
);
```

#### Real-time Updates
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
    save: saveNewTodo,
    reset: resetNewTodo
  } = useDocument({
    todo: "",
    completed: false,
    createdAt: Date.now()
  });

  const result = useLiveQuery("createdAt", { limit: 10, descending: true });

  const handleInputChange = (e) => {
    mergeNewTodo({ todo: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNewTodo();
    resetNewTodo();
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
        {result.docs.map((doc) => (
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
  const { doc: newPalette, merge: mergeNewPalette, save: saveNewPalette, reset: resetNewPalette } = useDocument({ name: "", colors: ["#ff0000", "#00ff00", "#0000ff"], timestamp: Date.now() });
  const queryResult = useLiveQuery("timestamp", { descending: true, limit: 10 });

  const handleColorChange = (index, color) => {
    const updatedColors = [...newPalette.colors];
    updatedColors[index] = color;
    mergeNewPalette({ colors: updatedColors });
  };

  const handleNameChange = (e) => {
    mergeNewPalette({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mergeNewPalette({ timestamp: Date.now() });
    saveNewPalette();
    resetNewPalette();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Color Palette Creator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Palette Name"
          value={newPalette.name}
          onChange={handleNameChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="grid grid-cols-3 gap-2">
          {newPalette.colors.map((color, index) => (
            <input
              key={index}
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              className="w-full h-10 border rounded"
            />
          ))}
        </div>
        <button type="submit" className="mt-3 w-full bg-blue-500 text-white py-2 rounded">Save Palette</button>
      </form>
      <h2 className="text-lg font-semibold mt-6">Saved Palettes</h2>
      <div className="grid gap-3 mt-3">
        {queryResult.docs.map((palette, paletteIndex) => (
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
