---
title: How to index and query your Fireproof data with JavaScript
metaDescription: Map reduce makes it easy to query any data.
summary: Map reduce makes it easy to query any data.
tags:
  - Index
  - Query
---

Fireproof uses map indexes to chain data to other lookup keys. This way you can find your data by any key you want. This is the basis of most database query capabilities you may be familiar with.

### React hook

The easiest way to use Fireproof is with the `useFireproof` React hook. This hook provides a simple interface for creating and querying Fireproof databases. In the context of a basic app, you might see code like this:

```js
import { useFireproof } from '@fireproof/react'

export default TodoApp = () => {
  const { database, useLiveQuery } = useFireproof('todo-app')
  const todos = useLiveQuery((doc) => doc.date).rows.map((row) => row.doc)
  const [newTodo, setNewTodo] = useState('')

  return (
    <div>
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => database.put({text: newTodo, date: Date.now(), completed: false})}>Save</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => database.put({...todo, completed: !todo.completed})} />
            {todo.text}
          </li>
        ))}
    </div>
  )
}
```

Behind the scenes, that is defining and querying an index. The function `(doc) => doc.date` is a map function that defines the index, sorting the todos by date. More complex map functions can emit more than one key per function, and can pair a custom value with the key, which is useful for numerical aggregation. See below for examples.

The `useLiveQuery` hook will re-run the query function whenever the index changes. This means that the `todos` variable will always be up to date with the latest data.

### Defining indexes

To define custom indexes for your Fireproof database, you can use the `Index` constructor along with a synchronous function that defines the database. This function should be run before any asynchronous calls are made.

Here's an example of defining indexes using the `Index` constructor, for a database that stores todos on multiple lists:

```js
const allLists = new Index(database, function (doc, map) {
  if (doc.type === 'list') map(doc.type, doc)
})

const todosByList = new Index(database, function (doc, map) {
  if (doc.type === 'todo' && doc.listId) {
    map([doc.listId, doc.createdAt], doc)
  }
})
```

In this example, we define two custom indexes: `allLists` and `todosByList`. The `allLists` index maps all documents with a type property of `'list'`, while the `todosByList` index maps all documents with a type property of `'todo'` and a `listId` property, using a compound key of `[listId, createdAt]`.

One of the advantages of defining custom indexes is the ability to normalize your data for indexing. This allows you to handle data variety and schema drift by normalizing any data to the desired index. For example, you could normalize data to lowercase or remove special characters before indexing.

With the ability to define custom indexes for any JSON data, you can handle data of any variety, making Fireproof an ideal solution for applications with complex data requirements.

### Querying indexed Data

To access JSON data in Fireproof, you can use the put, get, and delete methods. Once you have defined indexes for your data, you can use queries to search and retrieve data quickly.

Fireproof runs queries locally, making data processing faster than traditional cloud databases. You can query indexes with a variety of parameters, including range.

Below are some examples of how to query indexes in Fireproof:

```js
// Example 1: Querying all lists
const result = await allLists.query()
// Or in case you have more types of documents in your database
const result = await allLists.query({ key: 'list' })

// Example 2: Querying all todods from a list
const result = await database.todosByList.query({ prefix: listId })
// You can also specify a range
const result = await database.todosByList.query({ range: [[listId, NaN], [listId, Infinity]] })
```

In the first example, `fetchAllLists` queries the `allLists` index for all lists. Because the type is hard-coded in the example, you'd get the same result just by querying the index without any parameters.

The second example queries the `todosByList` index for all todos belonging to a specific list. In the second option we see that `NaN` and `Infinity` can be used to specify the beginning and end of a range.

