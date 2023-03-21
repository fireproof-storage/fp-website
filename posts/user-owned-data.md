---
title: User-owned and user-controlled data
author: J Chris Anderson
date: 2023-03-21
metaDescription: Putting control into the hands of users
summary: As data privacy and ownership concerns grow, a new wave of applications and infrastructure projects is emerging, focused on putting control back into the hands of users.
tags:
  - use-case
  - case-study
  - applications
---
User-owned and user-controlled data applications and infrastructure projects have gained significant traction in recent years, as more and more users become concerned about data privacy and ownership. Here are some successful examples of such projects:

1. [Solid (Social Linked Data)](https://solidproject.org/): Solid is a web decentralization project led by Sir Tim Berners-Lee, the creator of the World Wide Web. It allows users to store their data in "pods" (personal online data stores) and control who has access to their data. With Solid, users can decide where their data is stored and which applications can access it.

2. [Nextcloud](https://nextcloud.com/): Nextcloud is an open-source, self-hosted cloud storage and productivity platform that enables users to store their data on their own servers. It offers features similar to Dropbox and Google Drive but with the added benefit of complete control over data storage and access.

3. [Mastodon](https://joinmastodon.org/): Mastodon is an open-source, decentralized social media platform that operates on a federated model. Users can join or create their own instances (servers) and maintain control over their data while still interacting with others across the Mastodon network.

4. [Matrix](https://matrix.org/): Matrix is an open standard and communication protocol for real-time communication, including messaging, voice, and video calls. It enables users to run their own servers, giving them control over their data and privacy.

5. [Digi.me](https://digi.me/): Digi.me is a personal data management platform that allows users to store, share, and manage their data in a secure and private manner. Users can control which apps and services can access their data and under what conditions.

As for [Adobe](https://www.adobe.com/), [Salesforce](https://www.salesforce.com/), and [Miro](https://miro.com/), these companies primarily offer centralized, cloud-based services where user data is stored on their servers. However, some aspects of their product lines may give users more control over their data:

Adobe: Adobe Creative Cloud allows users to store files locally or in the cloud. While Adobe still has access to cloud-stored files, [users can opt to store their files locally for more control over their data.](https://helpx.adobe.com/enterprise/kb/business-storage.html)

Salesforce: Salesforce offers enterprise-level solutions with customizable data management options. Larger clients can negotiate data storage and access terms, potentially giving them more control over their data, although it [may not be as user-controlled as a fully decentralized system.](https://help.salesforce.com/s/articleView?id=sf.overview_storage.htm&type=5)

Miro: Miro is a cloud-based collaborative whiteboard platform. It does not inherently offer user-owned or user-controlled data, as data is stored on Miro's servers. However, Miro does provide features like SSO ([Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on)) and granular access controls, giving users a certain level of control over data access and sharing.

While these companies might not be considered fully user-owned or user-controlled data platforms, they do offer some degree of user control over data access and storage in certain cases.

## Popular databases

From the perspective of data ownership and control by users, popular databases like PostgreSQL, MySQL, Oracle, DynamoDB, and MongoDB can be assessed based on factors such as data storage location, deployment options, and data access controls. It is essential to remember that these databases are primarily designed for data management and storage rather than user control and ownership.

1. **[PostgreSQL](https://www.postgresql.org/docs/current/index.html)**: PostgreSQL is an open-source, object-relational database management system (ORDBMS). Since it is open-source and can be self-hosted, users can maintain control over their data by deploying PostgreSQL on their own servers or private cloud infrastructure. However, it is also available as a managed service through cloud providers, in which case user control may be limited.

2. **[MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)**: MySQL is another open-source, relational database management system (RDBMS). Similar to PostgreSQL, users can opt to self-host MySQL on their own servers or private cloud infrastructure to maintain control over their data. There are also managed MySQL services provided by cloud providers, where user control might be limited.

3. **[Oracle](https://docs.oracle.com/en/database/oracle/sql-developer/index.html)**: Oracle Database is a proprietary, relational database management system (RDBMS) developed by Oracle Corporation. While it offers on-premises and private cloud deployment options for users who want to maintain control over their data, it can also be hosted through Oracle's managed services, where user control could be more limited.

4. **[DynamoDB](https://docs.aws.amazon.com/dynamodb/index.html)**: Amazon DynamoDB is a fully managed, NoSQL database service provided by Amazon Web Services (AWS). As a managed service, user control over data is limited compared to self-hosted solutions. However, AWS provides robust access controls and security features that allow users to define who can access their data and under what conditions.

5. **[MongoDB](https://www.mongodb.com/docs/)**: MongoDB is an open-source, NoSQL database that supports flexible data structures. Users can choose to self-host MongoDB on their own servers or private cloud infrastructure for greater control over their data. Managed MongoDB services are also available from MongoDB Inc. and other cloud providers, where user control might be restricted.

In summary, open-source databases like PostgreSQL, MySQL, and MongoDB allow for greater user control over data when deployed on self-hosted servers or private cloud infrastructure. Proprietary databases like Oracle and managed services like DynamoDB may offer less control, but they still provide access controls and security features to manage data access. Ultimately, the level of user ownership and control depends on the deployment method and specific configuration of each database.

### Databases for User-Owned and User-Controlled Data: Key Features

Databases designed to manage user-owned and user-controlled data would need to prioritize privacy, security, and user control. Here are some features that such databases should ideally possess:

* [Decentralization](https://www.blockchain-council.org/blockchain/decentralized-vs-centralized/): Enables users to store data on their own servers or devices, improving control and reducing centralized storage risks.

* [End-to-end encryption](https://www.cryptopolitan.com/what-is-end-to-end-encryption-e2ee/): Protects user data at rest and in transit, preventing unauthorized access.

* [Granular access controls](https://www.coresecurity.com/blog/six-ws-granular-access-control): Allows users to define access permissions, specifying who can access data and for what purposes.

* [Data portability](https://laweconcenter.org/wp-content/uploads/2020/09/Data-Portability-Paper-v4-2020-09-03.pdf): Offers easy-to-use tools for exporting data in standard formats, empowering users to switch services as needed.

* [Interoperability](https://aws.amazon.com/blockchain/decentralization-in-blockchain/): Supports common data exchange formats and protocols, enabling seamless connection with different applications and services.

* [Privacy-preserving analytics](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3680000): Provides built-in support for privacy-preserving techniques, allowing data analysis without compromising privacy.

* [Open-source](https://en.wikipedia.org/wiki/Free_software): Ensures transparency, customization, and trustworthiness in data management practices.

* [Auditing and logging](https://www.isaca.org/resources/isaca-journal/issues/2021/volume-2/privacy-preserving-analytics-and-secure-multiparty-computation): Tracks and reviews changes to user data, ensuring data integrity and monitoring unauthorized access attempts.

By incorporating these features, databases can effectively support user-owned and user-controlled data, empowering users to maintain control over their data while still offering from the benefits of modern databases.

