---
title: 'From Local-First to Data Anywhere: Fireproof in 2023'
date: 2024-01-01T20:15:19.984Z
author: J Chris Anderson
summary: Where we started, and how far we've come
tags:
  - company
  - technology
---

Starting a database company around a new technology is a risky enterprise, but I'm heartened by the feeling that what I'm building is **discovered**, not invented. This is borne out by the simultaneous introduction of a stream of new local-first database projects in 2023. Many of them are based on new SQLite storage engine capabilities or extend the Postgres ecosystem to the edge. As a veteran of the edge with my work on CouchDB and Couchbase ([$BASE](https://www.couchbase.com/mobile)) Mobile, I know the market and the players. When we started no one thought like us, but today significant portions of your everyday life are powered by the technologies we created. Even so, the local-first approach has remained an exotic niche, but that changed in 2023. It's exciting to see this way of thinking get its day in the sun.

## Local-first

Local-first for me has always encompassed both **a technical architecture** and **an ethos.** Hypercard, for those who remember it, was one great way that anyone could build apps to solve real problems. Want to organize the neighborhood potluck? Hypercard. Want to build a payroll tracker for your small business? Hypercard. Apps were simple then, and it made sense to build them yourself. The world has evolved, but to me, the web at its easiest today is the new Hypercard.

Local-first is central to this ethos, as simple apps written by and for real users **shouldn't need to connect to anything to get started.** Start with code and UI (I bet your new AI buddy can help with that) and define the data and behavior you need. This is common sense, but we've lost our way in deep stacks of remote dependencies. By building apps that run great before you even decide on a cloud provider, your code is more robust to inevitable platform changes. Local-first databases are key to unlocking this approach.

## Data Anywhere

But local-first isn’t enough. An app that only runs on your laptop can only go so far; sooner or later, you’re going to want live data with your friends, to implement chat, collaboration, even real-time cursors. There are exciting new technologies on this front too, with runtimes like Cloudflare Workers and Durable Objects providing serverless abstractions that fit user expectations. If you want to try this kind of coding out, [PartyKit](https://www.partykit.io) has an easy dev kit with a killer shared memory model. This new compute paradigm fits local-first apps like a glove.

With Fireproof, I am building a document database to bridge between local-first and these new cloud runtimes. You can think of it as if SQLite were in TypeScript, but inspired by CouchDB instead of Postgres. The cryptographic [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) storage model ensures all replicas converge and share the same immutable block addresses. This hard replication strategy ensures you always know what your collaborators are working with, so beyond local-first, Fireproof brings your data anywhere.

Data anywhere means users can verify the data they accept from other replicas, and each database provides a converging changelog, allowing snapshot rollback and undo at the data layer, across collaborative contexts. All while the changes are archived to **any cloud** and shared over **any channel.** This means businesses can use Fireproof anywhere, just by installing an npm module into their existing front-end environment, and configuring their existing cloud. Fireproof is designed to be adopted by developers who need to get something done, because they know it can work in their context.

Today's Fireproof ([version 0.15.1](https://www.npmjs.com/package/@fireproof/core)) is just the beginning. The goal is to build something as lightweight and powerful as jQuery, that can be adopted across the web, whatever the framework or backend. I published the [roadmap to 1.0](https://fireproof.storage/posts/roadmap-to-1.0/) recently if you want to get the big picture.

In the long run, the codebase can easily be shrunk to half its current size, making it smaller than SQLite but built for the browser. I expect local-first is here to stay, and Fireproof aims to be the strongest document database in the category, bridging your data anywhere. Imagine a world of independent web widgets, easily woven into existing apps and sites. Fireproof aims to be the least complex and lowest-cost database for feature development and support on the web, whether in a greenfield app or when extending an existing web view.

## Thanks

We look forward to 2024 and have a hearty thanks to the people who have joined me along the way. Before I even started the original project code, my wife **Meghan Sinnott** believed in me. **Mikeal Rogers,** who I've worked with on open-source for years, acted as a technical advisor, helping me start the project right. **Alan Shaw** is credited with implementing the core CRDT engine and continues to enhance its reliability and performance. Along with others in the IPFS ecosystem, without his contributions, the project would not have been possible. Thanks also to **Travis Vachon** for setting up the original multi-repo configuration. **Tim O'Reilly’s** early feedback on the project helped me see what it would take to make my dream legible to the rest of the world.

As Fireproof advanced from a determined hunch, through alpha and then beta, I've been blessed with amazing allies from industry joining the effort. Thanks to **Anna Weihl** for kicking off the initial operations team and setting our customers up for success. The first major outside technical contributor, **Dhruv Soni,** joined the project due to his distributed database research and has been instrumental in creating example applications and building core database features. 

More recently, **Eric Jensen** has started helping with product management and customer development; his background with the team that built Oracle’s response to Couchbase gives him deep insight into the market dynamics Fireproof must solve. **Akasha Rose’s** help setting up the community spaces and inspiring Fireproof use-cases means we are ready for a fast-growing 2024. **Steven Mih,** CEO of Ahana, has provided wise counsel that is accelerating the business. Thanks also to early investor **Charlie Songhurst** — it's always great to meet someone who sees the opportunity.
