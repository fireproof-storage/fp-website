---
title:  Cloudless glossary
metaDescription: 
summary: Words, terms, and definitions relevant to cloudless
tags:
  - Cloudless
---
## AI Provenance
AI prompt inputs refer to the data or instructions given to an AI model to generate a specific output. Model output tracking is the process of recording and analyzing the results produced by the AI model. In the context of proofs, these can be used to verify the integrity and authenticity of the AI model's outputs, and entire conversation sessions.

### Bacalhau
Bacalhau is a protocol implementation of compute-over-data that operates on IPLD and IPFS data structures. It allows for the execution of functions over data while maintaining data privacy and integrity. The project is hosted on [github.com/bacalhau-project/bacalhau](https://github.com/bacalhau-project/bacalhau).

### CAR (Content Addressable Archives)
A file format used to store and share content-addressed data, such as Merkle DAGs, in a platform-agnostic manner. [Learn more](https://ipld.io/specs/transport/car/carv1/)

### Cloudless computing
A concept that represents the next step in the evolution of internet infrastructure, moving away from centralized servers (the cloud) to a decentralized network. It promotes environmental sustainability, the democratization of app development, enhanced data privacy, and new opportunities for developers and creators.

### Content Delivery Network (CDN): 
A system of distributed servers that deliver pages and other web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server. In the context of Merkle Trees, CDNs can use these for verifiable content so the fastest route can be trusted.

### Chunking
Chunking is the process of dividing data into small, manageable pieces, or 'chunks'. In the context of Prolly Trees, chunking helps in creating and managing the tree's data structure. The key functions of the chunking process include ensuring determinism, minimizing write-amplification, and balancing chunk size distribution. 

### CID - cryptographic hash based content identifier
A content identifier, also known as a CID, is a unique value used to identify files stored on a decentralized network. It is generated based on the cryptographic hash of the file or folder's content. When a user adds a file to the network, the file is hashed using a cryptographic algorithm, and the resulting hash is used to generate a CID. This CID value doesn’t indicate where the value is stored but instead refers to an address based on the content itself. CIDs are used to locate files on the decentralized network. When a user wants to retrieve a file stored on the network, they use the CID to locate the file. The network node will then fetch the file from the network and return it to the user.

### Compute-over-data (CoD)
Compute-over-data (CoD) is a computing paradigm that enables calculations to be performed over encrypted data without needing to decrypt it first. This approach ensures data privacy and security while still allowing for useful computation. More information can be found on [codsummit.io](https://www.codsummit.io/) and [twitter.com/codworkinggroup](https://twitter.com/codworkinggroup).

### Deterministic computing
A computing model in which a system's behavior is entirely predictable and reproducible, given the same initial conditions and input. [Learn more](https://en.wikipedia.org/wiki/Deterministic_system)

### Hash-linked data
Data structures connected by cryptographic hashes, ensuring the integrity and authenticity of the data, as any alteration would result in a different hash and break the chain of links. [Learn more](https://en.wikipedia.org/wiki/Hash_graph)

### Immutable B-trees
Unlike their mutable counterparts, these B-trees do not change once data is inserted. They are often used in Content Management Systems (CMS) due to their stability and performance benefits.

### Immutable Data Structures
These are data structures where data cannot be changed after creation. Content-addressed public data graphs and trees are examples of such structures, used in Distributed Version Control Systems (DVCS) like Git for their efficiency and reliability.

### IPLD (InterPlanetary Linked Data) 
A protocol and set of tools for linking and addressing distributed data structures across different decentralized systems, like IP

### Location-independent links
Links that point to a specific piece of data or resource regardless of its physical location, enabling greater flexibility and resilience in distributed systems. [Learn more](https://en.wikipedia.org/wiki/Content-addressable_storage)

### Merkle DAG (Directed Acyclic Graph)
A tree-like data structure used to store and verify data in a decentralized and distributed manner, ensuring data integrity and authenticity. [Learn more](https://docs.ipfs.tech/concepts/merkle-dag/)

### Non-extractable keypairs
A type of cryptographic key pair that is securely stored within a device or browser and cannot be extracted or exported, providing an added layer of security for sensitive operations like authentication and signing. [Learn more](https://www.w3.org/TR/webauthn/)

### Prolly Trees
Prolly trees are a type of append-only data structure that can't be modified once data is inserted. These trees provide benefits in terms of versioning, concurrency, and crash recovery, making them ideal for applications that require high data integrity.

### Proofs
Proofs, specifically cryptographic proofs or Merkle proofs, are mechanisms used to verify the authenticity of data. They are a key component of blockchain technology and provide benefits such as data locality and verifiable references, enhancing the security and integrity of data.

### Saturn CDN (Content Delivery Network)
Saturn CDN is a content delivery network that leverages the decentralized infrastructure of IPFS and other Web3 technologies to efficiently distribute content. It enables faster content delivery and increased resilience compared to traditional, centralized CDNs.

### Self-sovereign identity 
A digital identity model that allows individuals to own, control, and share their personal information without relying on a centralized authority. [Learn more](https://www.lawinsider.com/dictionary/verifiable-data)

### UCAN (User-Controlled Authorization Networks)
A [decentralized access control protocol](https://nftstorage.github.io/ucan.storage/) that enables secure and verifiable data routing, allowing users to delegate access to their capabilities using public key cryptography. [Learn more](https://learn.mattr.global/docs/concepts/verifiable-data/)

### Verifiable data
Data that can be cryptographically proven to be authentic, accurate, and unaltered, ensuring trust and integrity in digital transactions. [Learn more](https://www.w3.org/TR/vc-data-model/)

### w3up (Web 3 Uploads)
w3up, or Web 3 Uploads, is a tool for uploading data to IPFS and other Web3 storage networks. It simplifies the process of storing and retrieving content on decentralized networks. The project can be found on [github.com/web3-storage/ipfs-car](https://github.com/web3-storage/ipfs-car).






