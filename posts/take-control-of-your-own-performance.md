---
title: Take Control of Your Own Performance
date: 2024-10-04T22:57:47.728Z
author: Eric Jensen
summary: "Web apps built using local first principles provide responsive, fluid
  user interfaces that people love. Utilized by high profile mega-hits such as
  Canva, Figma, and Notion, local first is getting quite a bit of attention.
  This article explores how Fireproof builds on existing concepts to create a
  new type of 'data anywhere' application. "
tags:
  - web
  - architecture
  - use-case
---
Web apps built using [local first](https://localfirstweb.dev/) principles provide responsive, fluid user interfaces that people love. Utilized by high profile mega-hits such as Canva, Figma, and Notion, local first is getting quite a bit of attention. Investors have noticed as well, and are willing to pay a premium in this space. Fireproof builds on existing concepts to create a new type of [data anywhere](https://fireproof.storage/posts/from-local-first-to-data-anywhere:-fireproof-in-2023/) application. The pure JavaScript zero config database enables designers and front end teams to start creating immediately, and evolve the data model in parallel with the user interface. This creates an environment that is naturally conducive to [creating top-tier user experiences](https://fireproof.storage/posts/how-fireproof-can-optimize-your-online-customer-experience/). 

## People love the responsive, fluid interfaces local-first apps provide. Investors are taking notice.

One of the latest products to use Fireproof is [Quick Check](https://usequickcheck.com/). I recently sat down with its creator, [Selem Delul](https://fireproof.storage/authors/selem-delul/). Here’s a fun fact I learned while talking with Selem – did you know anything can be a check? [It’s true](https://www.straightdope.com/21341724/can-you-write-a-check-on-any-old-piece-of-paper)! You mischievous, chaotic tricksters out there can continue using doors and cows for your banking needs – for the rest of us, there's Quick Check. When asked why he chose Fireproof, he said: 

> "Fireproof enables me to deliver the features users want, iterate and ship quickly, and sell the product at a tiny fraction of competitor prices."
> — Selem Delul

Selem and others building new apps with Fireproof today are part of the latest emerging trend – a shift towards data storage and processing on the client application side, especially for data that directly relates to application and user state.

The advantages are numerous — we already mentioned shorter development cycle and faster time to market, as well as lower operating cost. Another major advantage of flexibility in connecting to the backend. Once the app is functioning locally, developers understand exactly what they need from the backend. They can [build to precise specifications](https://fireproof.storage/posts/the-fireproof-effect/). Starting with Fireproof avoids dangerous guesswork that can result in sluggish sites, or worse — operating costs too high to be competitive. You can even choose to have [multiple backends](https://use-fireproof.com/docs/connect) for different customers, if your customers’ needs vary in terms of performance, cost, or partner vendors. 

> Side note — this eliminates the risk of vendor lock-in!

Saving the best for last: Fireproof levels the playing field of web development by enabling those whose skills reside mainly on the front end to launch and scale applications, without needing to undertake the arduous journey to Full Stack.

![The Fireproof Way](/static/img/fireproof-way.jpg "The Fireproof Way")

These benefits shine brightly in the finance sector, where Fireproof’s transaction-level encryption, CRDT support, and ability to store sensitive data in separate, isolated storage with extra security measures are especially attractive. When demands for custom software are high, opportunities come and go in the blink of an eye, and data represents a competitive advantage, [Fireproof becomes indispensable](https://fireproof.storage/posts/use-case:-hedge-fund-strategy-approval-workflow-for-live-trading-desk/). 

With just a few lines of Fireproof code, any web application becomes locally persistent, allowing individuals and teams to iterate on the design and feature. For apps with straightforward backend requirements, adding in PartyKit, now a [subsidiary of Cloudflare](https://blog.cloudflare.com/cloudflare-acquires-partykit/), is only a lines more. AWS S3 is also available for enterprise customers, and many more options are on the way, when [Fireproof Cloud](https://fireproof.storage/posts/beyond-the-cloud/) arrives later this year. If you’d like to get started now, check out the demos and tutorials on [GitHub](https://github.com/fireproof-storage/fireproof) and hop into [Discord](https://discord.gg/DbSXGqvxFc) to tell us what you’re working on!

## Starting with Fireproof avoids dangerous guesswork that can result in sluggish sites, or worse — operating costs too high to be competitive. 

The Fireproof Way makes web development better, but it’s not a panacea. Scaling is still tough, especially for data intensive projects. Integrating with existing tools is never a cakewalk – everything has its own unique characteristics and idiosyncrasies. For these and other hard problems, we’ve created Fireproof Build, a services team that delivers outcomes, not project plans. If you need help with the hard stuff, [give us a shout](https://fireproof.storage/service-and-support/)!