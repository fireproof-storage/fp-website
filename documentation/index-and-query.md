---
title: How to index and query your Fireproof data with JavaScript
metaDescription: Map reduce makes it easy to query any data.
summary: Map reduce makes it easy to query any data.
tags:
  - Index
  - Query
---

### Defining indexes

To define custom indexes for your Fireproof database, you can use the `Index` constructor along with a synchronous function that defines the database. This function should be run before any asynchronous calls are made.

Here's an example of defining indexes using the `Index` constructor:

```js
const defineIndexes = (database) => {
  database.allLists = new Index(database, function (doc, map) {
    if (doc.type === 'list') map(doc.type, doc)
  })

  database.todosByList = new Index(database, function (doc, map) {
    if (doc.type === 'todo' && doc.listId) {
      map([doc.listId, doc.createdAt], doc)
    }
  })

  return database
}
```

In this example, we define two custom indexes: `allLists` and `todosByList`. The `allLists` index maps all documents with a type property of `'list'`, while the `todosByList` index maps all documents with a type property of `'todo'` and a `listId` property, using a compound key of `[listId, createdAt]`.

One of the advantages of defining custom indexes is the ability to normalize your data for indexing. This allows you to handle data variety and schema drift by normalizing any data to the desired index. For example, you could normalize data to lowercase or remove special characters before indexing.

With the ability to define custom indexes for any JSON data, you can handle data of any variety, making Fireproof an ideal solution for applications with big data requirements.

### Querying indexed Data

To access JSON data in Fireproof, you can use the put, get, and delete methods. Once you have defined indexes for your data, you can use queries to search and retrieve data quickly.

Fireproof runs queries locally, making data processing faster than traditional cloud databases. You can query indexes with a variety of parameters, including range.

Below are some examples of how to query indexes in Fireproof:

```js
// Example 1: Querying all lists
const fetchAllLists = async () => {
  const lists = ready && database.allLists
    ? await database.allLists.query({ range: ['list', 'listx'] })
    : { rows: [] }
  return lists.rows.map(({ value }) => value)
}

// Example 2: Querying a list with its todos
const fetchListWithTodos = async (_id) => {
  if (!ready || !database.todosByList) {
    return Promise.resolve({ list: { title: '', type: 'list', _id: '' }, todos: [] })
  }

  const list = await database.get(_id)
  const todos = await database.todosByList.query({
    range: [
      [_id, '0'],
      [_id, '9'],
    ],
  })
  return { list, todos: todos.rows.map((row) => row.value) }
}
```

In the first example, `fetchAllLists` queries the `allLists` index for all lists using a range of `['list', 'listx']`. The result is returned as an array of lists.

In the second example, `fetchListWithTodos` queries the `todosByList` index for all todos belonging to a specific list using the list's `_id`. The query uses a range of `[[listId, '0'], [listId, '9']]`, where listId is the `_id` of the list. The result is returned as an object containing the list and an array of todos belonging to that list.

Overall, querying indexed data in Fireproof allows for efficient and speedy data processing and retrieval.

