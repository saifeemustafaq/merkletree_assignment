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

## **Video Explanation**

[![Alternate Text](/images/thumbnail.png)]([{video-url}](https://www.youtube.com/watch?v=jhj_pNd4A8w&ab_channel=MustafaSaifee) "Link Title")

## **Step 1: Breaking Down the File**

The first step in constructing a Merkle tree is to divide the file into consistent-sized chunks. It's crucial to keep the chunk size constant because this uniformity is necessary both for building the Merkle tree and for reconstructing it on different systems, such as client-side or server-side environments. Smaller chunks result in a larger Merkle tree, while larger chunks reduce the tree's size. Finding the right balance between chunk size and tree size is key, though we won't delve deeply into this balancing act here.

<img width="602" alt="image" src="https://github.com/saifeemustafaq/merkletree_assignment/assets/15520369/5272de0d-8fee-409c-8960-183b02cee4c3">


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


