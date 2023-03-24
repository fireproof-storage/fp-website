---
title: Glossary of mostly technical terms
metaDescription: Work with snapshots of data.
summary: Fireproof offers MVCC updates and time-travel
tags:
  - MVCC
  - Transactions
  - Snapshots
---

### Self-sovereign identity 
A digital identity model that allows individuals to own, control, and share their personal information without relying on a centralized authority. [Learn more](https://www.lawinsider.com/dictionary/verifiable-data)

### UCAN (User-Controlled Authorization Networks)
A decentralized access control protocol that enables secure and verifiable data routing, allowing users to delegate access to their capabilities using public key cryptography. [Learn more](https://learn.mattr.global/docs/concepts/verifiable-data/)

### Verifiable data
Data that can be cryptographically proven to be authentic, accurate, and unaltered, ensuring trust and integrity in digital transactions. [Learn more](https://www.w3.org/TR/vc-data-model/)

### Deterministic computing
A computing model in which a system's behavior is entirely predictable and reproducible, given the same initial conditions and input. [Learn more](https://en.wikipedia.org/wiki/Deterministic_system)

### Merkle DAG (Directed Acyclic Graph)
A tree-like data structure used to store and verify data in a decentralized and distributed manner, ensuring data integrity and authenticity. [Learn more](https://docs.ipfs.tech/concepts/merkle-dag/)

### CAR (Content Addressable Archives)
A file format used to store and share content-addressed data, such as Merkle DAGs, in a platform-agnostic manner. [Learn more](https://ipld.io/specs/transport/car/carv1/)

### IPLD (InterPlanetary Linked Data) 
A protocol and set of tools for linking and addressing distributed data structures across different decentralized systems, like IP

### Compute-over-data (CoD)
Compute-over-data (CoD) is a computing paradigm that enables calculations to be performed over encrypted data without needing to decrypt it first. This approach ensures data privacy and security while still allowing for useful computation. More information can be found on [codsummit.io](https://www.codsummit.io/) and [twitter.com/codworkinggroup](https://twitter.com/codworkinggroup).

### Bacalhau
Bacalhau is a protocol implementation of compute-over-data that operates on IPLD and IPFS data structures. It allows for the execution of functions over data while maintaining data privacy and integrity. The project is hosted on [github.com/bacalhau-project/bacalhau](https://github.com/bacalhau-project/bacalhau).

### w3up (Web 3 Uploads)
w3up, or Web 3 Uploads, is a tool for uploading data to IPFS and other Web3 storage networks. It simplifies the process of storing and retrieving content on decentralized networks. The project can be found on [github.com/web3-storage/ipfs-car](https://github.com/web3-storage/ipfs-car).

### Saturn CDN (Content Delivery Network)
Saturn CDN is a content delivery network that leverages the decentralized infrastructure of IPFS and other Web3 technologies to efficiently distribute content. It enables faster content delivery and increased resilience compared to traditional, centralized CDNs.


### CID - cryptographic hash based content identifier

A content identifier, also known as a CID, is a unique value used to identify files stored on a decentralized network. It is generated based on the cryptographic hash of the file or folder's content. When a user adds a file to the network, the file is hashed using a cryptographic algorithm, and the resulting hash is used to generate a CID. This CID value doesn’t indicate where the value is stored but instead refers to an address based on the content itself. CIDs are used to locate files on the decentralized network. When a user wants to retrieve a file stored on the network, they use the CID to locate the file. The network node will then fetch the file from the network and return it to the user.

There are two versions of CIDs - CIDv0 and CIDv1. CIDv0 CIDs are the first format of CIDs that was part of the initial design. This version of the CID uses a base 58-encoded multi-hash to create the content identifier value. CIDv1 aims to provide forward compatibility and support different formats that can be used with future versions of the CID. Currently, new projects are advised to use CIDv1 in their development since this allows the project to be future-proofed. CIDv1 CIDs are also safe to use in browser contexts, such as through subdomain gateways. 