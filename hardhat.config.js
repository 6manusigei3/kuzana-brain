require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",
  networks: {
    fuji: {
      url: process.env.FUJI_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 43113,
    },
  },
};
