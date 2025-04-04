---
title: Kingdoms Forged In Fire
date: 2024-07-09T00:36:46.389Z
author: Eric Jensen
summary: As we enter the AI era, there’s another important trend underway – the
  shifting development focus to the frontend, keeping data near the users, where
  it is created and used.
tags:
  - frontend
  - applications
  - web
  - architecture
---

The story of software has been one of successive waves of technology, each one transforming the existing landscape. From the earliest computers, to gigantic mainframes, to the rise of video games and embedded devices, the personal computer, the cloud, mobile devices, and now AI, new waves of technology disrupt the previous ones.

![A wizard uses fire magic to build a beautiful castle ](/static/img/dall·e-2024-07-08-17.36.14-a-wizard-sitting-at-a-desk-in-a-large-dark-warehouse.-they-have-a-laptop-in-front-of-them-and-are-using-fire-magic-to-build-a-large-scale-model-of-an.webp "Forged In Fire")

As we enter the AI era, there’s another important trend underway – the shifting development focus to the frontend, keeping data near the users, where it is created and used. In her recent series of articles on frontend developers as the “newest new kingmakers,” [Kate Holterhoff](https://redmonk.com/kholterhoff/author/kholterhoff/) provided a comprehensive and compelling analysis of what’s driving this trend, and where it’s heading. This post will elaborate a few of the key points from these articles, how it will continue to unfold against the backdrop of AI, and the role [Fireproof](https://fireproof.storage/) is playing. It’s worth starting with the forces accelerating this from the backend. In a [recent article](https://redmonk.com/kholterhoff/2024/04/26/whither-serverless-compute/), Kate says:

> “The future of compute will not occur at remote data centers, but will instead take place locally and close to the user … This shift matters because streaming data is finicky … making edge computing, in the sense of data processing occurring at a relative position near the user, absolutely essential.”\
> (quote is slightly condensed)

This means the complex, cumbersome, and expensive backend data architectures of recent years will become less relevant, as data moves closer to the user. We will need simpler data structures going forward, and much more of them. But that’s only one aspect – these edge processing nodes will themselves be simpler, lighter weight, and possibly more expensive per operation than the massive cloud behemoths we have today, requiring a significant portion of the data processing and storage to shift to the frontend itself.

Fortunately, there’s plenty of room for that. Even the humble iPhone 12 has approximately [10,000 times the processing power](https://www.pcmag.com/news/space-wars-the-cray-2-supercomputer-vs-the-iphone-12) of the fastest computers of yore. Also, there is a bit of cognitive dissonance here – performing data processing operations for a single user is typically a very small task, especially for a machine designed to stream 4K video, constantly interact with dozens of connected services, and play resource intensive video games.

Data processing only starts to get challenging when you’re trying to do it for millions of users concurrently, in milliseconds, because after you’re done the data still has to make the trip back to the user – 1,000s of miles away. All the ingredients needed for this transition to accelerate are already here, starting with Fireproof, which built on local-first principles to become the first ‘[data anywhere](https://fireproof.storage/posts/from-local-first-to-data-anywhere:-fireproof-in-2023/)’ database.

As Fireproof’s [J Chris Anderson](https://twitter.com/jchris) says, **“the web runtime becomes the new container”,** simplifying application development and hardening security. Instead of applications shipping as opaque containers, the mature web runtimes allow code to run at the edge and in the browser. These applications will be more self-contained and easier to reason about, while taking advantage of today’s secure software delivery best practices.

The [first Kingmaker article](https://redmonk.com/kholterhoff/2024/02/15/frontend-developers-the-newest-new-kingmakers/) talks about an ongoing ‘Renaissance’ at the frontend, powered by increasingly sophisticated developers tools, direct access to a kaleidoscope of services via API, and a bevy of companies providing ‘Backend-as-a-Service’ type offerings aimed directly at frontend devs. Another driving force here – frontend developers are the ultimate custodians of the user experience (UX). From Kate:

> “The frontend developer’s image and popular appeal has also undergone a makeover. These engineers have a hand in the design sphere, needing to be able to navigate the Adobe suite and Figma to ensure the design and UX team’s mocks-ups are translated into pixel perfect code for desktop and mobile devices.”

A great UX is about much more than the design – it must be implemented with careful attention to detail, to ensure the vision shared with the design team is realized. Clarity, consistency, and visual appeal may come from the design, but they must be implemented faithfully by the frontend team. Responsiveness and reliability matter as much or more, and are 100% in the software engineering domain. By enabling developers to deploy full functioning web applications locally in minutes, and iterate on them faster than ever before, Fireproof aids frontend teams in [delivering stellar UX.](https://fireproof.storage/posts/streamlining-database-development-to-eliminate-the-innovation-bottleneck/)

![A programmer collaborating with an AI on their laptop](/static/img/screenshot-2024-07-08-at-6.10.22 pm.png "A Fire Wizard IRL")

In the [most recent](https://redmonk.com/kholterhoff/2024/03/28/the-future-of-frontend-is-already-here/) Kingmakers article, Kate elaborates on what’s coming next, the trend from BaaS to newer startups like PartyKit, and backend abstractions layers increasingly tailored for direct frontend integration. Frontend developers' existing expertise leveraging 3rd party APIs directly, instead of via a backend intermediary, have paved the way for LLMs to be integrated directly into frontend apps. She writes: 

> “Like any shift the transition to elevate the frontend has been uneven, but in the particular case of software development it has also been accompanied by a redistribution of roles and a blurring of the lines that traditionally separated front from back end, client from server, and static from interactive.”


In the new frontier of AI-enabled web applications, the lines between different types of developers are already blurry, and will continue to erode. What will be left is a large and growing developer population that is empowered to create the next generation of software we’ll all use. If you’d like to be part of all this before it explodes, now is the time!

[](https://fireproof.storage/service-and-support/)[We’ll show you how.](https://fireproof.storage/service-and-support/)
