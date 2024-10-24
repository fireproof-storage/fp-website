---
title: "Contributor Spotlight: Daniel Sanchez, Solid"
date: 2024-02-19T15:12:04.405Z
author: Meghan Sinnott
summary: Solid developer makes Solid adapter for Fireproof.
tags:
  - crdt
  - apps
  - Solid
---
> “Managing state is the hardest part of any complex application, but Solid arms you with all the tools you need and makes it enjoyable to manage,” - Daniel Sanchez

![Dan Sanchez](/static/img/88a1bfe9-5701-46bf-bb36-1558ccf8379c_1_105_c.jpeg)

[Daniel Sanchez](https://github.com/thedanchez) is a software engineer who specializes in frontend development and is passionate about Solid. Having worked with React for many years, he believes it has a very bright future as it is easier to step into, reason about, has better performance, and sees the community support behind it skyrocketing.

While chatting with co-workers about open-source projects he discovered CRDTs and was fascinated by the possibility of mergable workable data. A co-worker mentioned how Fireproof uses CRDTs. Dan was new to database sync and [web APIs for cryptography](https://w3c.github.io/webcrypto/), two defining features of Fireproof. He quickly discovered Fireproof is a natural fit for Solid, because it is an embedded database so it doesn’t require the developer to step outside the tool box and add to the stack. But at that point Fireproof only shipped a ReactJS adapter, so Dan stepped into his first major open-source project as a contributor, and within just two months of first diving into the backend, he’s added a [Solid adapter](https://github.com/fireproof-storage/fireproof/tree/main/packages/solid-js) and [examples](https://github.com/fireproof-storage/fireproof/blob/ad83dc4aae5810027f2f2cacf4702afdd05f3cc6/examples/solid-js/src/pages/TodoList.tsx#L5)!

![code screenshot of app.tsx](/static/img/app-tsx-screenshot.jpg)

Check out the screenshot to see how clean the code to your Solid apps can be.

His heavy lift included two major additions. First, he added [tsup](https://tsup.egoist.dev/#what-can-it-bundle) – a bundler powered by esbuild. It allowed us to replace the spaghetti of build scripts that had evolved from Fireproof’s first modules to a better, declarative and more readable bundling structure. Now the build is easier to reason about and more similar across packages. Thanks Dan for cleaning the house here! Second, alongside adding the Solid adapter implementation, he worked hard to enable full integration testing capabilities by finding the polyfills required to do so. This took a lot of experimentation, and the resulting changes in Fireproof’s code layout also enabled some new features like memory mode and [edge function support](https://github.com/fireproof-storage/fireproof/issues/86). With this work done, we can now write tests that give us more robust confidence in the end product. Moreover, we can replicate the work so that other adapters can reap the benefits of full integration testing like Fireproof’s React adapter.

Another area Dan spent time on was general housekeeping by creating top-level scripts for the Fireproof monorepo to improve the Fireproof contributor experience. You can now sidecar watch scripts alongside the example app scripts for both React and Solid. You can see the clean test output by running \`pnpm i && pnpm build\` in the repository root. We are close to enabling full recursive builds which will make the project even more resilient against test failures and API drift. [Click here](https://github.com/fireproof-storage/fireproof/actions/workflows/ci.yaml) to see the automated tests that run on every git commit.

Dan also pointed out some API design improvements along the way and did the work for Fireproof to support TypeScript generics which enhanced the developer experience not just for Solid users, but React and others, as well via enabling static object typing for documents and queries!

So now that we have adapters for two popular, modern frontend libraries, what apps are we excited to see people build? Bike messenger hailing, team chat, and copilot workflows are just a few ideas. If you’re building something, let us know! We’ve got limited-edition handmade Fireproof stickers and patches ready to mail for the first five people who reach out. Don’t worry, Dan, we’ve got some special goodies set aside for you…

Send us an email at [customer-success@fireproof.storage](mailto:customer-success@fireproof.storage)

If you're a developer interested in contributing, find us on [GitHub](https://github.com/fireproof-storage/fireproof)

Join Dan and other Solid community members on our [Discord](https://discord.gg/DbSXGqvxFc)
