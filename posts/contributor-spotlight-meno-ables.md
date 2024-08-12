---
title: "Contributor Spotlight: Meno Ables"
date: 2024-08-12T15:11:16.029Z
author: Meghan Sinnott
summary: Read about contributor Meno Abels who has refactored Fireproof's core
  database engine, enhanced our TypeScript structure to support decentralized
  data handling, implemented a pluggable storage system, and worked on a new
  connector structure.
tags:
  - contributor-spotlight
---
Meno Abels has been contributing to Fireproof’s core database engine. You can read about one of the use cases that his work is enabling in our recent spotlight on [Provable Event Data Recorder with Priority Delivery](https://fireproof.storage/posts/use-case-spotlight:-provable-event-data-recorder-with-priority-delivery/). He’s interested in bridging WASM, Rust, and TypeScript, so Fireproof can truly bring your data anywhere.

We asked Meno to share a bit about the work he does in the community and what he’s most excited about.

![Meno Ables](/static/img/xt2s6064_3.jpg)

##### What other projects have you worked on that are relevant/adjacent to Fireproof?

I did so many things in the last 40 years but most of the things are using patterns to persist and work with datasets. But if you think about Fireproof’s different, decentralized approach to data handling there is no adjacent.

##### You did the SQL connector for Fireproof. Can you share how it lets you see how pluggable connectors are with Fireproof? 

The SQL connector was the gateway drug to Fireproof. I did an implementation and it is working but still needs cleanup. Due to my own review of the SQL connector, I concluded that the internal Fireproof structure is the source of the ugly implementation of a connector. That is why I abandoned the SQL connector and started a “new-structure” branch, refactoring to add rigorous TypeScript types, and a new interface for connector implementers.

##### You’re currently working on a typescript reorganization. What can you share about that?

My main driver of the “new-structure” branch (which is now merged to main) was my own experience with the Fireproof codebase during the implementation of the SQL connector. I discovered that the project structure more or less suppresses the possibility of debugging and integrated testing in different runtimes. The goal of the “new-structure” is to enable both things which we now have with a flat project structure that can spit out multiple packages as needed. To harmonize the possibility to work together I enabled prettier for code formatting and setup a linter on each test run. 

\
The tests now run in the node runtime and in Chrome by using the same build artifacts and the pluggable storage to enable indexeddb for “browser” and file or sqlite for node.

\
I also added a pluggable logger to enable a unified log format and the ability to enable “debug” logs for specific parts of the code. Then I created a connector repo where all existing and future supported connectors should find a home. The plan with the connector repro is to have a test suite that works with all connectors. The connectors should not fulfill the connector API; they should only implement the storage API which then will be wrapped to the ConnectAPI. By doing so, every connector could also be used as primary storage for “fireproofing.”

##### What are you excited about with Fireproof? 

It’s fun to work on the code base and I really enjoy working with Chris Anderson.

##### What should others know about Fireproof? 

This is difficult to answer — in fact there are so many database implementations out there but as the word database implies they all respect the centralized approach but Fireproof hopefully can prove to all that databases do not have to be centralized. I think there is a good reason for centralized architectures, but there are at least as many where a decentralized is the better way to go.  

##### Any fun facts we should know about you?

I’m the only person who can overtake you in a revolving door.

—

Meno Abels lives in Germany. We were introduced to Meno by Mikeal Rogers at the 2024 NodeConf Invitational. The community has a soft spot in their heart for Meno because he built the WiFi network for many JSConfs and NodeConfs at a time when WiFi at programmer conferences was always an issue… See his talk about this time [here](https://m.youtube.com/watch?v=JUTTqausxTQ) and [here](https://m.youtube.com/watch?v=Xs1ZDVvvWyg&pp=ygUKbWVubyBhYmVscw%3D%3D), and check out what he’s up to on GitHub [here](https://github.com/mabels).