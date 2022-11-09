import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("MyNFT");
  const deployContract =  await contract.deploy("MyNFT", "MNFT");
  deployContract.deployed();

  console.log(`NFT contract address: ${deployContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
