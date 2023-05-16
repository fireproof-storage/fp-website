---
title: 0.6.0 release - React hooks, Sync, Encryption
date: 2023-05-16T20:19:20.256Z
author: J Chris Anderson
summary: React hooks, sync and encryption released, big dataset support, cloud
  services, and React server components coming soon.
tags:
  - post
---
We have been hard at work on 0.6.0, which is [now available on npm.](https://www.npmjs.com/package/@fireproof/core) The biggest change is that we extracted [React support to its own module.](https://www.npmjs.com/package/@fireproof/react)\
\
Features:

* Sync (IPLD block level, WebRTC transport, docs coming with next transport update)
* [**useLiveQuery** and **useLiveDocument** hooks for React](https://fireproof.storage/documentation/usefireproof-hook-for-react/)
* [Encryption enabled by default](https://fireproof.storage/documentation/encryption/)

As part of developing sync we built a [2-player Animal Game demo](https://game.fireproof.storage/). At this point it shows that Fireproof works great, but that WebRTC has a sub-par experience and reliability story out of the box. I did have fun playing it with a few of you, but it can take luck to get the initial connection bootstrapped. There is nothing structural about this --  WebRTC is easy to improve on, but I started with it because it is designed to work fully peer-to-peer.  In this case it means the demo requires the user to paste back and forth multiple tokens. A cloud solution is the most straightforward solution to this. (Another option may be using transports like lib-p2p which can bootstrap from hosted nodes.)

\
Once we have the sync experience running on an improved transport, we'll release the game more widely. However it does show that you can get pretty far with WebRTC, so it may be useful in this configuration for particular use cases (for instance when you already have a webrtc based app). \
\
Sync was particularly helpful in hardening some of the database clock usage. We also eliminated the dependency on IndexedDB features, and now we just use it as an object store, no indexing.

## 0.7.0 roadmap

Now that we are at 0.6.0 we will start respecting more build process and quality constraints, so[ contributors are moving](https://github.com/fireproof-storage/fireproof/pull/99) more of the codebase to TypeScript. Once we have the TypeScript build [tested in the real world](https://codepen.io/jchrisa) we'll have the confidence to move the rest of the source base over more aggressively.   \
\
The 0.6.0 -> 0.7.0 transition will also be the first one where we take pains not to break the storage format compatibility (eg we'll write an update function if we need to). We're aiming for 0.7.0 to mark the transition from alpha to beta.\
\
Here are the features we are thinking about for 0.7.0: 

* Big dataset optimization (CLI tooling, benchmarks)
* Cloud service (storage, sync, and clock)
* React server components for seamless Vercel server-side render

There's also a planned website update, to make the whole thing more clearly built for React (although we happily support other environments).