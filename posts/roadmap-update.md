---
title: Roadmap Update
date: 2024-03-15
author: J Chris Anderson
summary: Progress and Plans on the Road to 1.0
tags:
  - company
  - technology
---

We accomplished almost everything listed in our [Roadmap to 1.0](https://fireproof.storage/posts/roadmap-to-1.0/) post, so it’s time to check in with our progress and plans.

First, some wins we didn’t plan for:

Fireproof was lucky to have some [Solid](https://www.solidjs.com/) open-source contributions from Dan Sanchez who wrote a SolidJS adapter, but also saw the opportunity to improve our build. He migrated our multi-repo from the nest of `esbuild` scripts it had become to a clean declarative approach with `tsup`. All while preserving our hard-won universal browser build outputs. With this in place, he was able to add the Solid adapter, which uses the same API surface as our React adapter, but with the Solid approach to reactivity. [Read more about the Solid adapter.](https://fireproof.storage/posts/contributor-spotlight:-daniel-sanchez-solid/)

![Photos from the invitational](/static/img/invitational.jpeg)

The [NodeConf Invitational](https://hackmd.io/@vAd9erdfQx2EAWwHBUaKcA/SJ7WPTBYp) was a super fun way to get back together with old friends and hear the latest tech from Deno, Socket, Fireproof, and more. We also got to have dinner with [Sunil Pai from PartyKit](https://www.partykit.io) in London, and see the adventurous Nuno Job, Pail creator Alan Shaw, and [James Governor](https://redmonk.com/team/james-governor/)! To mark the occasion we shared t-shirts and hats with real-world developers, and they love our simple message: realtime database, runs anywhere.

Second, a quick recap of the roadmap accomplishments:
- PartyKit integration: We used this in our February workshop and it was easy for everyone.
- In-memory filesystem adapter: This allows Fireproof to replicate encrypted blocks from memory to other async connectors.
- Edge functions mode: use any connector as main storage, which is useful when the runtime has no local storage APIs, like in Cloudflare Workers or Netlify functions.
- Multi-package cleanup and CI/CD: Bam! 0.17 is much more solid now.
- Build and bundle optimizations: We didn't do anything intentional here but it's down by more than half to 90kb so we must be doing something right.
- Extract the encrypted block store: This turned out to be a great idea, [check out the readme if you need to run IPLD code on a multi-writer data anywhere encrypted sync layer.](https://www.npmjs.com/package/@fireproof/encrypted-blockstore)
- Compaction enhancements: we now load online blocks in the case of multi-writer delete conflicts, making Fireproof more robust under concurrent compaction.

Still cooking:

- Netlify supports blob storage but needs a solution for realtime metadata. It can be used today with the PartyKit adapter or the upcoming AWS web socket adapter.
- Executable feature specification for 1.0: we are still in learning mode, and while we don't plan to unintentionally churn the API, we don't want to set expectations that we won't until we have automated assurance that we can't. This would be a great place for a community contribution.
- Build our own cloud.

## What’s next?

### AWS Websocket sync

The AWS connector started with just validated S3 uploads, but has expanded to include cloud CRDT tracking in DynamoDB, and API Gateway for websockets. We are [using SAM templates so it's easy for you to deploy.](https://github.com/fireproof-storage/valid-cid-s3-bucket) Thanks to [Dhrub Soni](https://twitter.com/Dhruvsoni1802) for his work adding the CRDT and websocket layers. What's cool is that you can mix and match these layers, so you can use AWS storage with PartyKit notifications, or use the websocket layer with eg Netlify storage.

### Fireproof Cloud

The purpose of our cloud is to make it easier to get started with Fireproof. Building your first web feature is already about as easy as it can get, but when you need to sync or save, we have to be easier than the easiest adapter. It won't take long to build this and it will mean we can offer industry-leading ease of adoption.

### Grow our team

There are a handful of people in the world (you know who you are) who deeply understand our tech stack, data structures, and design constraints. If the risk is right for you, and you know what it takes to make a startup happen, this is your opportunity to reshape web development.

