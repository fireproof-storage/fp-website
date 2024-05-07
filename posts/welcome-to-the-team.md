---
title: Welcome to the Team
metaDescription: Read about goals and principles that align our efforts.
date: 2024-05-03
author: J Chris Anderson
summary: Read about goals and principles that align our efforts.
tags:
  - business
  - roadmap
---


Fireproof is first and foremost designed to make it trivial for developers of any skill level to enhance legacy sites with live data, or write new collaborative apps. The number one goal is making Fireproof the easiest option for someone just starting their web programming journey and the most powerful way expert developers can extend legacy apps and write backend-independent components.

We are informed by CouchDB (sync), SQLite (zero setup), IPFS (data anywhere) and Supabase (go-to-market). Fireproof is optimized to be lightweight and easy to install, so we take care that every line of code in the package matters. We ship rich JSDoc and type hints, and our examples, starter kits, and APIs are designed so developers fall into the right patterns because they are the easiest.

Our experience with NoSQL, IPFS, and browser implementation teaches us that the most inclusive communities and technologies win. We foster outside contributions, from docs and design to plugins and core improvements.

The database architecture is aligned with this purpose. Below the core is the lightweight encrypted blockstore, which can be swapped with other implementations like a public or private blockstore, as well as leverage IPFS and WebRTC community code.

The core has that Merkle integrity that I won’t say more about here except that we can’t accomplish that first goal, making Fireproof easy for everyone, without it. Because it’s what makes it so traditional business processes can be brought to the edge and the browser.

The open-source connectors experience makes it easy for Fireproof to work with any backend. As a developer first you build an app with the React `use-fireproof` module or the JS `@fireproof/core` module. Then you connect it to the cloud. Today that means installing a connector module like Netlify or PartyKit, and configuring it with your installation details. It’s important that we maintain this option in the long term, and adding new connectors will be a source of partner marketing and audience building.

However, we believe 95% of users who connect to anything will use the default, which is included in the core module:

```js
database.connect("jchris@fireproof.storage")
```

Which sends an email with a link, and when you click it, you drop into the dashboard with a live view of the data from whatever app you were developing. The data is 2-way editable, so you can refine schema in the dashboard, etc. In the long run, the dashboard will get to be more beginner-friendly with eg markdown RTF fields, LLM integration, etc. More like a data notebook than a dashboard. Remember Futon?

The concept of conversion rate drives our every decision. For instance, the docs are on use-fireproof.com b/c we know that a .com can give us reach our dev marketing .storage domain won’t have. We have a `use-fireproof` entrypoint module for React devs because typing `@fireproof/core` is more work than necessary. We default to polyfilled builds because getting quirky webcrypto compatibility right is not a beginner task. We think of our adoption on-ramp like an e-commerce flow, it’s worth fine-tuning.

The road to big-time success requires that Fireproof become one of the most-talked-about databases of 2024/25, and proves itself to be the right fit for the new style of app, so that it can be a top choice through the end of the decade or longer. This wave of development is more valuable than the apps and games of the 2010s, so to become a darling of industry, we have to appeal to the folks in the driver’s seat. Luckily, these days that is more and more a front-end developer, where Fireproof has home-field advantage.

To get there, part of our go-to-market plan is Fireproof Day, a movement driven by evangelist content. We’ll contract thought leaders to build amazing example apps in targeted domains, as well as the conference talk to go with them. We’ll take the show on the road, and use the local audiences we draw to seed local Fireproof developer groups, with a monthly event budget, and a backlog of cool demos and slide decks to talk through. Hosting your local Fireproof Day will be an aspirational goal, and we’ll make it easy. To do this right we need to invest in marketing, community, and developer relations. Outside of engineering, this is where the team will be growing in the early months.
