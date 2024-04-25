# Understanding Merkle Trees: The Backbone of Blockchain Technology

Data integrity and verification are very important In the world of cryptography and blockchain technology. Merkle trees, also known as hash trees, play an important role in ensuring that data blocks can be securely verified across distributed systems. This blog post will dive into what Merkle trees are, their mechanism, the concept of Merkle proofs, and how these components are vital in the field of blockchain.

## **What is a Hash?**

Before we begin with **Merkle trees**, it's important to understand the concept of **hashing**. Hashing is performed by a *hash function*, which is a cryptographic process that takes **an input (or 'message')** and returns a **fixed-size string** of bytes. The output, known as the hash, acts as a *digital fingerprint* of the input data. Hashes are unique, even a minor change in the input data will produce an entirely different hash. This characteristic makes hashing an invaluable tool for verifying data integrity.

## **The Structure of Merkle Trees**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1713806648258/acffd595-0390-443c-8fc0-adcc2070d0e3.png)

### **Leaf Nodes**

At the bottom of a Merkle tree are the leaf nodes. These nodes contain the hashes of individual data blocks (for example, transactions in a blockchain). Imagine each of these hash as a unique identifier or fingerprint for its corresponding block of data.

### **Non-Leaf Nodes**

The level above the leaf nodes consists of non-leaf nodes. Each of these nodes contains a hash that is the result of combining the hashes of two child nodes beneath it. This process of combining and hashing continues upwards in the tree, halving the number of nodes at each level, until there is a single hash at the top of the tree - the Merkle root.


### **The Merkle Root**

The Merkle root is a single hash that effectively represents the entirety of the data blocks below it in the tree. It is this root which is stored on the blockchain, providing a compact and efficient summary of all transactions without storing every transaction individually.

## **Merkle Proofs: Verifying Data Integrity**

Merkle proofs are used to verify the integrity of the data. Let's understand this with a fictional example, and later, we will take up a real example:

Imagine you are in a huge library that contains every book ever written in the history of humankind. The unique part is that instead of checking out books, you check out lists that contain summaries of the books. Now, you are asked to prove that a specific book is in the library without having to show someone every book (which would be impossible due to the library's size). Welcome to the Special Merkle Library.

* **The Books (Data Blocks)**: Each book in the library represents a piece of data (like a transaction in a blockchain).
    
* **Summaries (Hashes)**: For each book, there's a unique summary that captures the essence of the book in a fixed size, much like a hash does for data. No two books have the same summary.
    
* **Catalog (Merkle Tree)**: These summaries are organized in a catalogue (our Merkle tree), where summaries are combined and summarized again, layer by layer, until there's a single, ultimate summary representing every book in the library - the root summary (the Merkle root).
    

### **Merkle Proofs: Let's find a book**

To verify a book's presence in a vast library using the library's unique catalogue systems similar to a Merkle proof in blockchain, one begins with the book's unique summary. Next, a pathway of additional summaries is collected, which, when sequentially combined according to the library's organizational rules, recreate the library's root summary from the ground up, starting from the initial book's summary. This process ends in the verification step, where if the independently recreated root summary matches the library's official root summary, it conclusively proves that the book in question is indeed contained within the library, mirroring the efficient and secure verification of transactions within a blockchain.

## **Real-life example: Transferring a large file**

Imagine you have a large file on a server that needs to be sent to a client over a network. Given the size of the file and the variability of network conditions, there's a risk of data corruption during transmission. To ensure the file arrives intact and any errors can be efficiently detected and corrected, we use a Merkle tree. Let's go through the steps:

<img width="602" alt="image" src="https://github.com/saifeemustafaq/merkletree_assignment/assets/15520369/5272de0d-8fee-409c-8960-183b02cee4c3">


## **Video Explanation**

[![Alternate Text](/images/thumbnail2.png)]([{video-url}](https://www.youtube.com/watch?v=jhj_pNd4A8w&ab_channel=MustafaSaifee) "Link Title")

## **Step 1: Breaking Down the File**

The first step in constructing a Merkle tree is to divide the file into consistent-sized chunks. It's crucial to keep the chunk size constant because this uniformity is necessary both for building the Merkle tree and for reconstructing it on different systems, such as client-side or server-side environments. Smaller chunks result in a larger Merkle tree, while larger chunks reduce the tree's size. Finding the right balance between chunk size and tree size is key, though we won't delve deeply into this balancing act here.

### **Step 2: Hashing the Chunks**

Once the file is divided, for example, into four equal parts (chunk 1, chunk 2, chunk 3, and chunk 4), we proceed by hashing each chunk. Using a consistent hash function is vital as it ensures that the output length remains constant regardless of the input size. For simplicity, let's label the hash outputs as follows: hash of chunk 1 = a, hash of chunk 2 = b, hash of chunk 3 = c, and hash of chunk 4 = d.

### **Step 3: Creating the Merkle Tree**

The next step involves combining these hashes to form the Merkle tree. You start at the leaf nodes and work your way up:

* Combine and hash a and b to form a new hash, ab.
    
* Combine and hash c and d to form a new hash, cd.
    
* Finally, combine and hash ab and cd to get the root hash of the Merkle tree, abcd.

    <img width="1007" alt="image" src="https://github.com/saifeemustafaq/merkletree_assignment/assets/15520369/8419ce17-711e-4b92-a966-15bd247aa69d">


This root hash, or the 'root hash,' encapsulates the entire file’s integrity.

### **Step 4: Utilizing the Merkle Tree**

Once the Merkle tree is constructed and saved server-side, the file can be transferred to a client. To verify the file's integrity and identify any corruption, the Merkle tree is reconstructed client-side:

* If the client-side root hash matches the server-side root hash (abcd), the file is confirmed to be intact.
  
  <img width="985" alt="image" src="https://github.com/saifeemustafaq/merkletree_assignment/assets/15520369/e70b4158-83ae-4e21-b797-be60c652ae32">

* If there's a discrepancy, such as the root hash turning out to be abcz due to corruption in the last chunk, the specific corrupted part of the file is identified without needing to re-download the entire file.

  <img width="1306" alt="image" src="https://github.com/saifeemustafaq/merkletree_assignment/assets/15520369/1ebf26f0-e06b-4c1d-95fb-75d2b5532fc8">


### **Step 5: Efficient Repair**

The process doesn't just stop at identifying corruption. The Merkle tree enables efficient repair by pinpointing the exact chunk that's corrupted. Once identified, only the corrupted chunk needs to be replaced, not the whole file. This efficiency is especially beneficial in large files, significantly reducing the bandwidth and time required for repairs.

---

## Code Implementation

Let's understand the Merkle tree with a code implementation.

Imagine a scenario where an organization, Safe Global, is preparing for an important online conference. To ensure that only invited attendees can access certain secure documents and conference links, they decided to implement a whitelisting system using Merkle trees. The email addresses `alpha@email.com`, `beta@email.com`, and `charlie@email.com` belong to key team members who are authorized to access these resources.

### Setup

1. Install [Node.js](https://nodejs.org/en/download) and node package manager(npm)

2. Install the `merkletreejs` package and `crypto-js` using npm.

    ```bash
    npm install merkletreejs crypto-js
    ```

### Execute the code

To run the code, run the following command in the terminal (assuming the code file name is `server.js`):

```bash
node server.js
```

### Code

Create a JavaScript file `server.js`, and type/paste the following code:

```javascript
const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');

// Step 1: Prepare the list of email addresses
const emails = [
  'alpha@email.com', 'beta@email.com', 'charlie@email.com'
];

// Step 2: Hash the email addresses
const leaves = emails.map(email => SHA256(email));

// Step 3: Construct the Merkle Tree
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString('hex');
console.log('Root of the tree:', root);

// Print the tree visually
console.log(tree.toString());

// Step 4: Generate a Merkle proof for an email
const targetEmail = 'beta@email.com';
const targetLeaf = SHA256(targetEmail);
const proof = tree.getProof(targetLeaf);
console.log('Proof for', targetEmail, ':', proof);

// Step 5: Verify the proof
const verified = tree.verify(proof, targetLeaf, root);
console.log('Verification result:', verified);
```

### Breakdown

Let's take a look at each step of the implementation in detail.

![alt text](/images/code_merkle_tree.png)

#### Step 1: Preparing the List of Email Addresses

```javascript
const emails = ["alpha@email.com", "beta@email.com", "charlie@email.com"];
```

These are the email addresses of the team members who are organizing the conference. Each email represents an individual who needs secure access.

#### Step 2: Hashing the Email Addresses

```javascript
const leaves = emails.map((email) => SHA256(email));
```

Each email is hashed for security reasons. Hashing ensures that even if the Merkle tree data is somehow exposed, the actual email addresses remain confidential.

We can now construct the Merkle Tree using the hashed email addresses.

#### Step 3: Constructing the Merkle Tree

```javascript
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString("hex");
```

A Merkle tree is constructed using the hashed emails. The **root of the tree acts as a single hash that uniquely represents all the included email addresses**, providing a simple yet robust way to check the integrity and completeness of the list without revealing individual hashes.

#### Step 4: Generate a Merkle Proof for an Email

```javascript
const targetEmail = "beta@email.com";
const targetLeaf = SHA256(targetEmail);
const proof = tree.getProof(targetLeaf);
```

Suppose beta needs to access a secured document. To do so, he must prove that his email is on the whitelist. The system generates a "Merkle proof" for his email, which is a sequence of hashes that, when combined with his email hash in a specific manner, should match the known root hash.

#### Step 5: Verify the Proof

```javascript
const verified = tree.verify(proof, targetLeaf, root);
```

The system then verifies the proof by recalculating the hashes up to the root. If the calculated root matches the stored root, it confirms that beta's email was indeed in the original list, and he is granted access.

---

### Output

You should see an output like the one below:

```bash
Root of the tree: d4e6aa093190629dba575173dc9bfc3712038c1c027bcaa65eab53d18867838a
```

```bash
└─ d4e6aa093190629dba575173dc9bfc3712038c1c027bcaa65eab53d18867838a
   ├─ a3ec2fc73c1aa03b508cd0704258209755f7428665868329aa81c1b09761b4dc
   │  ├─ fcbf76cb8c74247c67280d1bb10a64df01e7682c0d7266945ed48062db40a879
   │  └─ 92221a95ab5fe542c7c83a0cbf64f5be4364511783903d2016a9c7f10c5e24f3
   └─ 9cfe93b4c66b60b6c64301b279f14ba2668cc3372f9f505019f69467eca290c6
      └─ 9cfe93b4c66b60b6c64301b279f14ba2668cc3372f9f505019f69467eca290c6
```

```bash
Proof for beta@email.com : [
  {
    position: 'left',
    data: <Buffer 26 87 4e 2a 6a 6e ed 5b ee 3a cc f8 29 0f 73 d0 72 11 77 c3 f9 4f 95 76 39 cf d3 6a d8 67 9c b2>
  },
  {
    position: 'right',
    data: <Buffer 03 79 25 bd 59 47 84 20 cb 66 1e e5 b7 fe d9 8e 7c fb 1e 89 85 bf 2a 40 b2 f0 7c df 2c c0 90 d3>
  }
]
```

---

### Breakdown

1. **Root of the tree**

    ```bash
    Root of the tree: d4e6aa093190629dba575173dc9bfc3712038c1c027bcaa65eab53d18867838a
    ```

    *Ref: `console.log('Root of the tree:', root);`*

    Root Hash: This is the root hash of the Merkle tree, which represents all the email addresses in the tree after they have been hashed and structured. This hash is crucial because it serves as a unique fingerprint of the entire email list.

    Any alteration in the email list would result in a different root hash.

2. **Visualization of the Merkle Tree**

    ```bash
    └─ d4e6aa093190629dba575173dc9bfc3712038c1c027bcaa65eab53d18867838a
      ├─ a3ec2fc73c1aa03b508cd0704258209755f7428665868329aa81c1b09761b4dc
      │  ├─ fcbf76cb8c74247c67280d1bb10a64df01e7682c0d7266945ed48062db40a879
      │  └─ 92221a95ab5fe542c7c83a0cbf64f5be4364511783903d2016a9c7f10c5e24f3
      └─ 9cfe93b4c66b60b6c64301b279f14ba2668cc3372f9f505019f69467eca290c6
          └─ 9cfe93b4c66b60b6c64301b279f14ba2668cc3372f9f505019f69467eca290c6
    ```

    *Ref: `console.log(tree.toString());`*

    **Tree Structure**: This tree visually shows how the hashes (represented as nodes) are structured. The root is at the top, branching down to leaf nodes. Each node is derived by hashing its child nodes together. The structure confirms that each leaf node contributes to the overall root hash, demonstrating the integrity and completeness of the data set.

3. **Proof for an Email**

    ```bash
    Proof for beta@email.com : [
      {
        position: 'left',
        data: <Buffer 26 87 4e 2a 6a 6e ed 5b ee 3a cc f8 29 0f 73 d0 72 11 77 c3 f9 4f 95 76 39 cf d3 6a d8 67 9c b2>
      },
      {
        position: 'right',
        data: <Buffer 03 79 25 bd 59 47 84 20 cb 66 1e e5 b7 fe d9 8e 7c fb 1e 89 85 bf 2a 40 b2 f0 7c df 2c c0 90 d3>
      }
    ]
    ```

    *Ref : `console.log('Proof for', targetEmail, ':', proof);`*

    - **Merkle Proof**: This array contains the necessary hashes and their positions required to verify `beta@email.com` against the tree's root hash.
    - The first object indicates the hash of a sibling node (`left`), which means to recreate the hash of the parent node, this hash should be combined with the target node's hash on the left.
    - The second object represents another hash (`right`) needed further up the tree to continue the verification path to the root.
    - **Buffers**: These `Buffer` objects represent the binary data of the hashes necessary for verification.

4. **Verification Result**

    ```bash
    Verification result: true
    ```

    ```bash
    └─ Root hash
    ├─ Intermediate hash (from H1 and H2)
    │  ├─ Hash of `alpha@email.com`
    │  └─ Hash of `beta@email.com`
    └─ Duplicate of H3's hash (from H3 and H4)
       └─ Hash of `charlie@email.com` (duplicated for balancing)
    ```

    *Ref: `console.log('Verification result:', verified);`*

    **Verification Result**: The `true` result indicates that the proof successfully verified that the email `beta@email.com` is part of the whitelist as its recalculated path matches the root hash.

This method of using Merkle trees to verify access to secure resources is a powerful tool for many digital applications, from blockchain technologies to secure communications and content access control.

---

Let's see what happens if the email provided isn't on the whitelist, say `delta@email.com`.

> Substitute `beta@email.com` with `delta@email.com` in the Step 4. Then, perform the verification again.

```javascript
// Extract the proof for `delta@email.com`
const targetEmail = "delta@email.com";
const targetLeaf = SHA256(targetEmail);
const proof = tree.getProof(leaf);

// Verify the proof
const verified = tree.verify(proof, targetLeaf, root);
console.log("Verification result:", verified);
```

The verification would fail with the message `Verification Result: false` because `delta@email.com` isn't whitelisted. This causes the `verified` variable to be `false`. To grasp this situation better, if you print the `tree.getProof(leaf)` for this new email on the terminal, you'll find an empty array, indicating an invalid proof.
