---
title: Roadmap to 1.0
author: J Chris Anderson
date: 2023-12-04
metaDescription: Roadmap to the stable Fireproof feature set
summary: One year of development has taught us about the features that are most important to our users.
tags:
  - roadmap
  - tech
---

This year I’m thankful that Fireproof has become a useful database for local-first apps. I wouldn’t start a new project today without it. 

Building in the open has been great for the community of users, developers, and customers who depend on us. Outside questions and contributions are where the energy that drives learning comes from, and the best code is always learning. This roadmap reflects what we've learned so far, but community feedback always has the most influence on our priorities.

I love spending time helping contributors so if you care about CRDTs and want to learn, we should be on a call or something. Ping me in the Fireproof Discord.

## Just Released

- [PartyKit integration](https://www.npmjs.com/package/@fireproof/partykit)

Fireproof 0.14 saw the package split into the core database and the connectors, including a new PartyKit adapter. [Read about the adapter and see an example on the PartyKit blog.](https://blog.partykit.io/posts/fireproof-database-connector) We've been using this for app development lately, and so far the Durable Objects approach is an easy fit. Coming soon, we can use PartyKit storage to make this connector a complete solution (right now it uses S3 or Netlify for storage.)

- [In-memory filesystem adapter](https://github.com/fireproof-storage/fireproof/blob/main/packages/fireproof/src/store-memory.ts)

Allows Fireproof to replicate encrypted blocks from memory to other async connectors like PartyKit, Netlify, or S3. Just one option for running Fireproof in edge functions. Coming soon: Cloudflare kv support for edge functions, so they can commit to storage before responding.

## In-flight

- [Netlify](https://www.npmjs.com/package/@fireproof/netlify)

Currently supports blob storage but needs a solution for realtime metadata. You can use it today alongside the PartyKit adapter. This runs on Netlify Edge functions and syncs to the browser.

- [Multi-package cleanup and CI/CD](https://github.com/fireproof-storage/fireproof/tree/main/packages)

The 0.14 release split the package into core and connectors, but upgrading each package run tests and automatically publish would be a big improvement. There is also some code-level refactoring to be done in the connectors and storage adapters. It's a prime spot for a contributor to jump in and learn the codebase.

## Coming Soon

- Build and bundle optimizations

We currently ship npm packages for browser and node, as well as IIFE builds for HTML apps. Supporting the entire JS ecosystem is tough, and involves real engineering (for instance to bring some cut-down dependencies in-house). If you have strong opinions about how to do this, we'd love to hear from you.

- Extract the encrypted block store.

The block store interface is compatible with any code that is written expecting a global IPFS network for content delivery. In an encrypted context globally addressable CIDs don't make sense -- instead, you need to decrypt the block index first, and then fetch encrypted blocks on demand. Fireproof implements a transaction block store with encrypted CAR files, which can be useful to anyone wanting to move in-the-clear IFPS apps to encrypted storage. Hopefully, by extracting the block store as an independent module, it's also easy for others to add compatibility with advanced crypto like WNFS and UCAN.

- Executable feature spec for 1.0

Our goal is to never ship a 2.0, which means we need to define compatibility for 1.0, so we can add features without breaking existing apps. At the simplest, this means writing a new small test suite that we guarantee to support for the long term. Then we can anchor docs etc from this code.

## Please Contribute

- CSV and REST API

Adding REST access from a serverless function runtime like Lambda, PartyKit, or Netlify is pretty simple, so why not do it with flare? CSV output would be great for ease of use in the Python world.

- Compaction enhancements

Compaction is currently non-destructive, but we are gonna want a way to garbage-collect old versions of documents. This is a great place to learn about CRDTs and the Fireproof architecture.

- Cloud event queue logic

There is an entire programming model that can be made from cloud Fireproof instances subscribing to each other's updates, filtering, and validating input. If you are the type of developer who can see around the bend, help us explore these new programming models.

## Thank You!

If you got this far, you are a Fireproof superfan. Thank you and we'd love to hear what you are thinking of building.