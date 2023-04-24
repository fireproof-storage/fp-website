---
title: How to build apps with ChatGPT
metaDescription: AI is even better at writing code when you point it in the right direction.
date: 2023-04-23
author: J Chris Anderson
summary: AI is even better at writing code when you point it in the right direction.
tags:
  - AI
  - apps
  - React
---
We've been having fun writing apps using GPT, so we want to share some things that worked.

First of all, Fireproof is newer than the cutoff date of many of today's models. To make your AI into a Fireproof expert, we found kicking off your prompt with one line of gpt speak (acutally a tiny JS program) helps tremendously. Paste this to GPT 4 or 3.5 to enable it to write apps using Fireproof:

```
Fireproof/API/Usage: import { Fireproof, Listener, Index } from '@fireproof/core'; const db = fireproof.storage('app-db-name'); const ok = await db.put({ any: 'json' }); const doc = await db.get(ok.id); await db.del(doc._id); const all = await db.allDocuments(); all.rows.map(({key, value}) => value); const listener = new Listener(db); listener.on('*', updateReactStateFn); const index = new Index(db, (doc, map) => map(doc.any, {custom: Object.keys(doc)})); const result = await index.query({range : ['a', 'z']}); result.rows.map(({ key }) => key);
```

![Screenshot of party invite app written by ChatGPT running on CodePen](/static/img/screen-shot-2023-04-23-at-2.26.45-pm.png)

In the same prompt, describe the app you want to build. Here are some examples that worked for us:

* Create a react app using Fireproof for tracking party invites. It should have a text input that creates a new document with the guest name, and an Index that lists all guests in a &lt;ul&gt;. ([Running copy here.](https://codepen.io/jchrisa/pen/zYmogWO))
* Build a React app that allows you to create profiles for dogs, and browse to each profile. It should be optimized for mobile. Use Tailwind.
* Build a photo grid app with drag and drop ordering that references photos by url. Use Tailwind and render all photos as squares. Keep grid arrangement in Fireproof with one document for each gallery, that is: 4-16 photos arranged into a layout.
* Build an app using React, Fireproof, MagicLink, and Tailwind that allows user to create one-question multiple choice polls and collect the answers.
* Create a note taking app using React, Tailwind, and Fireproof that stores each note as a large text string in a Fireproof document, and uses an Index to split the text of the documents into tokens for full text search. The app has an input field to search the documents via an index query.

Please share your successes with us!