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