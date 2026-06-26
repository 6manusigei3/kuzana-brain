require("dotenv").config();

const { ethers } = require("ethers");
const contract = require("./abi/DocumentRegistry.json");

const provider = new ethers.JsonRpcProvider(process.env.FUJI_RPC);

const wallet = new ethers.Wallet(
  process.env.PRIVATE_KEY,
  provider
);

const documentRegistry = new ethers.Contract(
  "0x833faDC1C31E4BE6Ce5Adb6215d03863CEd02Ac3",
  contract.abi,
  wallet
);

async function saveHash(hash) {
  const tx = await documentRegistry.storeDocument(hash);

  console.log("Transaction Sent:");
  console.log(tx.hash);

  await tx.wait();

  console.log("Transaction Confirmed!");

  return tx.hash;
}

module.exports = {
  saveHash,
};
