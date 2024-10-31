---
title: State Management for AI Agents
date: 2024-10-30
author: J Chris Anderson
summary: "AI agents are powerful tools for automating tasks and making decisions, but they need to manage their state effectively to perform well. This article explores the challenges of state management for AI agents and how Fireproof can help."
tags:
  - use-case
  - ai
  - sync
  - proofs
---

When building a model-driven agent that interacts with tools, you need persistence. Direct API interaction works, but makes debugging and restarting sessions difficult. It also prevents multi-player sessions entirely. Persistence enables you to review how the agent made decisions by examining the prompts and data that drove its tool choices.

Fireproof provides a way to persist agent state in a way that is secure, private, and tamperproof. It also enables live collaboration among agents and users. And it provides concise proofs of the state of an agent at any time, which can be useful for debugging and auditing. With Fireproof handling the infrastructure, developers can focus on building powerful AI agents and realtime human-in-the-loop workflows.


## An example workflow

Let's consider a call center agent that needs to help a customer with their account. The agent needs to know the customer's name, account number, and balance. It also needs to know the customer's last 5 interactions, including the date, time, and a brief summary of the conversation. It can load this information from a legacy database, but you would not want to store the session interactions in a relational database.

If the customer asks to transfer from savings to checking, the agent may need to rely on an authorization subroutine to approve the transaction and ensure the customer is not a fraud risk. This may be an opaque system, so the agent must invoke it and log the interaction indelibly. Once the customer is authorized, the agent will have workflow steps, such as confirming the amount and the accounts, before completing the transaction. Each of these steps may require additional tool use, where the inputs and outputs must be stored, for processing, sharing, and auditing.

By bundling the interactive log of these interactions into an encrypted tamperproof database, you can ensure that the agent's interactions are persistent, shareable, and auditable. You can also ensure that the agent's interactions are private, so that the customer's data is protected, and you have flexibility about syncing all or part of the database beyond the end-user's device.

### Location independence

The model likely runs in a cloud environment, but the database can be used anywhere compute is available. Live sync makes shared objects trivial, so one way to model the agent is as a database that can by synced by any client. The agent can be triggered by database events or on a schedule, and the system can use ledger documents as state machines to manage the workflow. This means a listener can be deployed near the model, or on the user's device, or in a privledged runtime like a step function. These listeners can be interact with the data, and changes are synced to all connected clients.

### Custom workflows

Here is a quick video showing a custom workflow that uses a Fireproof database to manage a multi-step agent process, simulating a focus group discussion.

> [Four Steps to the Epiphany](https://x.com/FireproofStorge/status/1648541950843256832)

Watching the video is easier than using the app, as for now it requires an API key to run. The [app is available here.](https://epiphany.fireproof.storage/)

### Power of proofs

At any point in the workflow, the agent can generate a proof of the current state of the database. This proof can be shared with other agents or users, who can verify the state of the database if needed. This can be used to establish a trustworthy log of user interactions, without sending the underlying data to the server. This aligns with GDPR, where when inspecting the data is important for business reasons, you can sync it, but to sync by default might be excessive.

## Conclusion

Fireproof provides a way to persist agent state in a way that is secure, private, and tamper-proof. It also enables live collaboration among agents and users. And it provides concise proofs of the state of an agent at any time.

It makes it possible for anyone to build AI agents and realtime human in the loop workflows, without having to worry about the underlying infrastructure.
