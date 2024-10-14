---
title: In-flight service requires reliability at the edge
date: 2024-10-14
author: J Chris Anderson
summary: Ensuring continuous availability for in-flight services with local-first collaboration tools
tags:
  - web
  - use-case
---

For airline data workloads, **continuous availability is essential**; even brief service outages can ripple into expensive flight delays and cancellations. Ticketing, crew scheduling, and in-flight service are especially vulnerable, as they must stay responsive even while transitioning from ground-based networks to the sky. To ensure smooth operation regardless of network conditions, airlines have lead the way in adopting local-first collaboration tools like sync capable databases. By keeping the data near the user, airlines ensure boarding, scheduling, and in-flight service run smoothly **no matter what's happening with the network.** 

> Data infrastructure that works no matter what.

As the creator of Couchbase Mobile, one of the leaders of the first wave of syncable databases, I understand the challenges and benefits of building **data infrastructure that works no matter what** happens to the network. Our technology showed a path forward, not only for airlines, but for any organization that can't let network outages disrupt their operations. Today I am building a next generation syncable database, delivering on the promise of data anywhere by building a syncable database that's at home wherever JavaScript runs, allowing your data to power web experiences, mobile apps, and internal workflows.

[![in-flight service](/static/img/in-flight-service.png)](https://in-flight-service.fireproof.storage/)

Fireproof advances the computer science behind CRDTs (the mergeable data structure that makes sync possible) by adding cryptographic merges tracking, like git or the blockchain, in a package lightweight enough to run in a tablet, browser, or edge function. The end result is seamless collaboration, no matter what network conditions happen to be, and trustworthy data provenance, allowing developers of any skill level to build enterprise-critical front-line applications.

> Seamless collaboration, no matter the network conditions.

In the context of in-flight service, Fireproof is ideal for bridging the gap between mobile applications and the web, allowing data to be addressed from anywhere, so **customers can bring thier own devices** while experiencing the same reliability crew members have come to expect. Rapid feature development enables richer custom experiences and faster application rollouts, making micro-apps like web-based gate check and in-flight ordering a reality.

The next frontier is offline and latency-free payments, because while tap-to-pay is becoming mainstream, it still expects terminals to be online, limiting transaction time to the speed of the network. Whether you are building pre-flight ordering or post-service billing, Fireproof apps work locally and can sync in any enviroment, making it easy to connect customers, crew, and the in-flight entertainment system through dynamic data-driven workflows.

> Latency-free payments, even when the network is down.

Beyond the airline industry, there is increasing demand for distributed, real-time, collaborative applications that work no matter what, especially at **the far edge of the network.** Whether you are building a supply chain management system for a factory, a smart home platform, or a collaborative workflow for a law firm, Fireproof is a syncable database that puts data under your control.

