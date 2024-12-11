---
title: Building a Local-First AI Agent in Minutes Using Model Context Protocol
date: 2024-12-11T17:41:13.813Z
author: Marcus Estes
summary: Learn how to integrate the Model Context Protocol (MCP) and Fireproof
  to build an interactive, AI-agent driven to-do list (that syncs anywhere) in
  minutes. By combining private app data with Claude’s language capabilities,
  you can naturally add, complete, and manage tasks through a chat interface.
tags:
  - ai
---
Two weeks ago, Anthropic introduced [the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) (MCP), a standard designed to seamlessly connect private data sources to AI applications. This emerging pattern—where data, code, and models come together through a well defined interface—is essential for building truly agentic AI systems. 

Fireproof’s secure multi-user sync capabilities are designed to serve [state management for AI agent applications](https://fireproof.storage/posts/state-management-for-ai-agents/). Now it’s simpler than ever to get started. In this post I’ll walk you through how to integrate Fireproof into an MCP server and build a fully interactive, AI-driven To Do List app.

First, adding Fireproof support to an MCP server is just this easy:

```js
import { fireproof } from "use-fireproof";
const db = fireproof("mcp_todo");
```

Then with a few lines of code, you can define your fields, subscribe to changes, and seamlessly read and write data via an AI chat interface. 

Community member Jim Pick just released [MCP-fireproof-todos](https://github.com/jimpick/mcp-fireproof-todos), which combines our To Do List Fireproof demo from the [Fireproof Codepen](https://codepen.io/jchrisa/pen/bGOGvBz) with an MCP server, letting you interact with [Claude](https://claude.ai/) to manage your tasks using natural language.

This means you can ask Claude to add items to your to-do list, mark them as done, delete them, and even summarize the list—directly from a chat interface. 

Here's an example chat where we asked Claude to "add butter to my todo list":



![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4MNG5OkDin8oIxSbHvyLrviWP6eL4G7pyVP0A8-iKjaDQXOrLgapJ_JFjJc6i7rMkLkv9ppglk0-A29VpuzLRFxjJQLsgyoMtljvLWVQSD7KViEboRMp3lXmv2G7iUR3ethqs4Q?key=D-ocWe19OM9U8m8wUoo7utmk)

Importantly, our app doesn’t have to teach Claude how to bake a cookie. Where MCP really gets interesting is when you combine your application with knowledge that Claude has already been trained on, or with other tools.

If we ask Claude for a cookie recipe:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe07Wmb6W8f77zeSBA9Y3pE7czIVsX06iTNtclHE0h-5l2vcMZ5bc08CQCFAaMbPJ7rLd-tjIUV7W1Hc41CjpAHF4mw4W2T37RB1mPyKuXwsQkL3JvEa7MzEjuZf6beXCV8ut5zrg?key=D-ocWe19OM9U8m8wUoo7utmk)

We can add all the ingredients to the todo list with a natural language request…![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfxmsp7qp3fOi_rUX5YeN41T5xyqEQwFP5SDVDKW-PcjLjzNmFIvp-mAV9v84K2usVxWvdnsREJtYbvUphV7khCS_39luq6T23klY9aPthcITYI9tMiYbhDm8iEPxnKyFJD8Mxbow?key=D-ocWe19OM9U8m8wUoo7utmk)

You can do other fun things, like mark todos as done, as well as delete them.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcNirlONHt36TlwPa7HYBGF-V7kKxHBCIKZ245vLHbUCk6hMCcN2W1nT1Q6E63XyJjnm9Valv4bjK8JDgyf7CMsnkY4gs35EATjnyqpvjJo_I6pXBLkgYpPG_1ANCVEGPW7w8JmWQ?key=D-ocWe19OM9U8m8wUoo7utmk)

[Check out the README for full install instructions](https://github.com/jimpick/mcp-fireproof-todos/blob/main/README.md).

This is a good demonstration of a single user to-do application. But what if you need help in the kitchen? A good next step would be task management for teams and groups. Because Fireproof handles multi-user synchronization (securely!), it’ll help you get there faster. 

Any data in Fireproof can be accessed anywhere, including by models other than Claude!

We’re huge fans of the new Model Context Protocol and are excited to see the Fireproof community use it to build new AI agent experiments and full applications.

If you need a hand thinking this through, [reach out on Discord](https://discord.gg/DbSXGqvxFc).