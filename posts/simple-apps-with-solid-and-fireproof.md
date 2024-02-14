---
title: Simple Apps with Solid and Fireproof
date: 2024-01-04T19:51:07.854Z
author: Eric Jensen
summary: Empowering developers who want better UX and application performance.
tags:
  - post
---
There are many web frameworks out there, the most popular being React, with Angular, Express, Next.js; even jQuery still maintains strong numbers. Given all the existing choices, it’s worth exploring why people are switching to Solid, and why the community chose this as our second supported framework, after React. In a sentence, Solid strikes the perfect balance of developer experience and application performance. 

C﻿heck out the Fireproof/Solid adapter [here](https://github.com/fireproof-storage/fireproof/tree/main/packages/solid-js).

On the developer experience side, Solid aims to be Powerful, Pragmatic, and Productive, per [the website](https://www.solidjs.com/). It’s designed to be familiar to those coming from React, but even easier to use thanks to a few key features. First, the virtual DOM has been removed, so you don’t need to worry about optimizing that. It’s based on three main primitives — Signal for state management, Memo for caching, and Effect for tracking. All primitives are carefully designed to be lightweight and intuitive. Finally, Solid is declarative, based on JSX and unidirectional data flow, so React developers will feel right at home. 

The performance focus is visible in both the design and the experience of using Solid. Much has been done to make Solid fast. Eliminating the unnecessary virtual DOM and supporting true fine-grained reactivity makes Solid more reactive than React! The lightweight primitives and reactive, rapid templating come into play here as well, ensuring that the performance is strong in the real world, even on constrained environments. All this combines to make Solid nearly as performant as plain JavaScript. 

##### The Solid Way meets the Fireproof Effect

Fireproof’s design is aligned with Solid’s reactive philosophy and implementation. The Signal primitive for state management ties in beautifully with Fireproof’s live query APIs and database subscriptions. The asynchronous capabilities provided by createResource are a great match for Fireproof’s ability to maintain a current copy of application data while carrying out sync activities in the background. Read/Write segregation is another attribute that aligns well with Fireproof. 

In a docs page titled [Thinking Solid](https://docs.solidjs.com/guides/foundations/thinking-solid) is the heading ”Simple is better than easy.” We agree with this philosophy. Frameworks and other tools should empower developers to easily understand the full implications of their design choices, so they’re able to craft beautiful, performant, reliable and scalable applications. We’re thrilled to support the Solid framework and community, with an equally-open, pure JavaScript, multi-writer live database!