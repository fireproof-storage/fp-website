
---
title: Beta is available
date: 2023-08-18
author: J Chris Anderson
summary: Take a closer look at the quickest way to add live data to your app.
tags:
  - post
---
Today we shipped a [fresh codebase written in TypeScript](https://www.npmjs.com/package/@fireproof/core), that is compatible with existing [`useFireproof` React hook](https://www.npmjs.com/package/use-fireproof) installs. Some highlights:

- 1/3 the lines of code (from 3410 to 1137!)
- Tree shakeable imports
- Exported types for IDE inline documentation

Everything is cleaner about this new beta, except the `esbuild` output is seeing public feedback for the first time. [Experts are encouraged to help with the bundler effort](https://github.com/fireproof-storage/fireproof/issues/1). One of the big lessons I learned as a co-founder of Couchbase, is that in infrastructure software it’s better to optimize for simpler implementations, and upgrade them all the time, than to build complex irreplaceable systems. This aligns with Fred Brook’s advice in the Mythical Man Month to “write one to throw away.”

The main new feature is that it's much easier to reason about the code. Here's a quick tour (of 0.11.2). First, almost [all the code is in the `src` directory.](https://github.com/fireproof-storage/fireproof/tree/8e7fdfccb629f366098d7ea81ed4be3848953d73/packages/fireproof/src) The `fireproof.ts` file is the entry point, and it exports the main `fireproof` and `index` functions, separately for tree-shaking. [`Database.ts`](https://github.com/fireproof-storage/fireproof/blob/main/packages/fireproof/src/database.ts) implements the public API, and orchestrates the CRDT's write queue and listeners. The [CRDT class](https://github.com/fireproof-storage/fireproof/blob/main/packages/fireproof/src/crdt.ts) uses Alan Shaw's [Pail library](https://github.com/alanshaw/pail) which is compatible with [w3clock](https://github.com/web3-storage/w3clock) so we can broadcast updates. The CRDT class also manages [indexes](https://github.com/fireproof-storage/fireproof/blob/main/packages/fireproof/src/index.ts), which use [Mikeal Roger's Prolly Trees](https://github.com/mikeal/prolly-trees) for sharable index data structures, driven by a map function architecture inspired by CouchDB.

The rest of the implementation is behind-the-scenes. The TransactionBlockstore class uses [pluggable Loaders](https://github.com/fireproof-storage/fireproof/blob/main/packages/fireproof/src/transaction.ts) which track updates as [logs of CAR files](https://github.com/fireproof-storage/fireproof/blob/8e7fdfccb629f366098d7ea81ed4be3848953d73/packages/fireproof/src/loader.ts#L50) and can [compact](https://github.com/fireproof-storage/fireproof/blob/8e7fdfccb629f366098d7ea81ed4be3848953d73/packages/fireproof/src/crdt-helpers.ts#L90) the database to a single CAR file.

The only real API difference to look out for is a consequence of optimizing for tree-shaking. Instead of importing a global object and instantiation the database from there, and indexes from the database, your import `fireproof` and `index` at the top level, so for apps that don't need indexes, they don't have to load the code. It looks like this now:

```js
import { fireproof, index } from '@fireproof/core'

const db = fireproof('my-app')
const ok = await db.put({ fieldName: 'value' })
// index on doc.fieldName
const myIndex = index(db, 'fieldName')
const result = await myIndex.query()
```

To anyone who is caught by this change, thank you for being an early adopter, your feedback is making Fireproof better.

### Beta release status

The latest versions of [`@fireproof/core`](https://www.npmjs.com/package/@fireproof/core) and [`use-fireproof`](https://www.npmjs.com/package/use-fireproof) are now available on npm. We are updating the website and documentation at the time of this writing. 

Existing demos will be rolled to the new package soon, but it's worth noting that upgrading the `use-fireproof` package should "just work" in your existing apps. [There's a known issue with a workaround for create-react-app](https://github.com/fireproof-storage/fireproof/issues/2)

Features that are not yet implemented in the beta:

- Snapshot and undo APIs: The underlying data structures are still there, but we didn't want to implement API support without a real world use case. Except undo to be added during the demo app upgrade cycle.
- Sync: This was mostly an application-level proof of concept anyway. When sync shows up in beta it will be based on the identity capabilities that come from our focus on the `connect()` API.
- Forked and branched databases: Same as snapshot — the new architecture means we don't run into forks during normal operation, so we can move the fork handling to the `connect()` feature.
- Vector and full-text integration: The alpha versions of these features are also application-level integrations - the hope is to have a plugin API so eg a vector index can bring its own data structure but take advantage of Fireproof's transactions and storage. Expect vector support to be added during the demo app upgrade cycle.

Help with any of these would be amazing. But the real joy of open source is the features you bring that I wouldn't have thought of. [Pull requests welcome!](https://github.com/fireproof-storage/fireproof)



