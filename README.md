# 🧠 Kuzana Brain

An AI-powered document assistant built on **Avalanche** that allows users to upload PDF documents, ask questions about them using Google's Gemini AI, and securely verify document integrity by storing a SHA-256 hash on the Avalanche Fuji Testnet.

---

## 🚀 Features

- 📄 Upload PDF documents
- 🤖 Ask questions about uploaded PDFs using Gemini AI
- 🔐 Generate a SHA-256 hash for every uploaded document
- ⛓️ Store document hashes on Avalanche Fuji using a smart contract
- ✅ Verify document integrity through blockchain records

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Google Gemini API
- Ethers.js

### Blockchain
- Avalanche Fuji Testnet
- Solidity
- Hardhat
- OpenZeppelin Contracts

---

## 📂 Project Structure

```
kuzana-brain/
│
├── backend/
│   ├── abi/
│   ├── uploads/
│   ├── blockchain.js
│   ├── server.js
│   └── package.json
│
├── contracts/
│   └── DocumentRegistry.sol
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── scripts/
│   └── deploy.js
│
├── hardhat.config.js
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/6manusigei3/kuzana-brain.git

cd kuzana-brain
```

---

## Install backend dependencies

```bash
cd backend

npm install
```

---

## Install Hardhat dependencies

From the project root:

```bash
npm install
```

---

## Create the environment file

Inside the **backend** folder create:

```
.env
```

Add:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

PRIVATE_KEY=YOUR_AVALANCHE_PRIVATE_KEY

FUJI_RPC=https://api.avax-test.network/ext/bc/C/rpc
```

---

## Start the backend

```bash
cd backend

node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## Run the frontend

Open:

```
frontend/index.html
```

or serve it using Live Server in VS Code.

---

# Smart Contract

Contract Name

```
DocumentRegistry
```

Network

```
Avalanche Fuji Testnet
```

Contract Address

```
0x833faDC1C31E4BE6Ce5Adb6215d03863CEd02Ac3
```

---

## How It Works

1. User uploads a PDF.
2. The backend extracts all text from the document.
3. A SHA-256 hash of the PDF is generated.
4. The hash is stored permanently on Avalanche Fuji.
5. The document text is sent to Gemini AI.
6. Users ask questions about the uploaded document.
7. Gemini answers using only the uploaded document.

---

## Avalanche Integration

Kuzana Brain uses Avalanche to:

- Store immutable document fingerprints.
- Prove document authenticity.
- Prevent tampering.
- Provide decentralized verification.

Instead of trusting a centralized server, users can verify that the uploaded document has not been modified by comparing its SHA-256 hash with the value stored on-chain.

---

## Example Workflow

```
Upload PDF
      │
      ▼
Extract Text
      │
      ▼
Generate SHA-256 Hash
      │
      ▼
Store Hash on Avalanche Fuji
      │
      ▼
Ask Gemini Questions
      │
      ▼
Receive AI Answers
```

---

## Demo

The demonstration shows:

- Uploading a PDF
- Generating a document hash
- Recording the hash on Avalanche
- Asking Gemini questions
- Receiving accurate answers from the uploaded document

---

## Future Improvements

- Wallet authentication
- Embedded Avalanche wallets
- On-chain document verification
- Multi-document search
- Team collaboration
- USDC payment support
- Vector database for larger documents

---

## Author

**Emmanuel Kipchumba Sigei**

GitHub

https://github.com/6manusigei3

---

## Acknowledgements

Built for the **Kuzana MiniHack 2026** using:

- Avalanche
- Hardhat
- Solidity
- Google Gemini AI
- Node.js
- Express.js
