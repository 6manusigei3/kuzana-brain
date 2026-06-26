const hre = require("hardhat");

async function main() {
  const DocumentRegistry = await hre.ethers.getContractFactory("DocumentRegistry");

  console.log("Deploying DocumentRegistry...");

  const documentRegistry = await DocumentRegistry.deploy();

  await documentRegistry.waitForDeployment();

  console.log("Contract deployed to:");
  console.log(await documentRegistry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
