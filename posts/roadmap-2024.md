---
title: Roadmap Update Q3 2024
date: 2024-10-15
author: J Chris Anderson
summary: Cloud launch is coming soon
tags:
  - company
  - technology
  - roadmap
---

The latest news in Fireproof is the 0.19.102 release. This brings us a rigourous TypeScript core, including easier backend integration and a more maintainable build. The connector API now allows you to sync a local database with an arbitrary remote, making it easy to share data in the cloud. More at the end about our new cloud preview.

### Connectors roundup and Gateway APIs

We have a lot of options for people using Fireproof with a backend, so it's worth a roundup here:

* [PartyKit](https://www.partykit.io)

This is the easiest option for getting started, and the one we use for Fireproof debugging and demo apps today. Get started by following the [README instructions](https://www.npmjs.com/package/@fireproof/partykit). Current status is that it's stable, but might require custom configuration in production.

* [Netlify](https://www.netlify.com)

We host this website, and most of our demos on Netlify. It's a great platform for static sites, and the built-in edge functions are all you need to support Fireproof. Install the [Netlify connector via NPM](https://www.npmjs.com/package/@fireproof/netlify), and your app can store directly in your Netlify account. Coming soon: built-in integration in the Netlify dashboard.

* [AWS](https://aws.amazon.com/)

Our AWS connector uses Lambda and S3 signed upload URLs to provide a low-cost reliable option for storing Fireproof databases. It uses DynamoDB for metadata distribution, and API Gateway to provide websockets. The [backend is provided as a SAM template](https://github.com/fireproof-storage/valid-cid-s3-bucket/tree/master), so you can customize it for your region, etc. Install the [AWS connector via NPM](https://www.npmjs.com/package/@fireproof/aws), and configure it to connect to your SAM template outputs.

There are more connectors in our repo, and its worth highlighting that the internal storage APIs use the same gateway interface as the remote connectors, so you can mix and match them, making it easy to take your data anywhere.

### Fireproof Cloud

We are releasing a preview of Fireproof Cloud this month. The main thing you'll notice is the lack of signup friction. Fireproof Cloud is designed to make getting started easy, so you can build apps right away. We'll be adding GitHub login shortly, and in the coming weeks we'll feature UCAN (user-controlled authorization networks) support, making sharing safe and easy.

Fireproof Cloud is developed as a Cloudflare wrangler project, so it's easy to run in your own environment.

### Cloud Preview

Our next move is an upcoming 0.19.x release that includes the ability to connect your data to Fireproof Cloud Preview from any development environment.  This will make experience of starting with Fireproof even easier. Expect to see this demo in the next few days.
