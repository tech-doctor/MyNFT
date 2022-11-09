import { expect } from "chai";
import { ethers } from "hardhat";
//import { PolygonNft } 
let nftContract: any;
let user1:any, user2:any, user3:any
let test:any


describe("MyNFT", function (){
    this.beforeEach(async() => {
        const contract = await ethers.getContractFactory("MyNFT")
        nftContract =  await contract.deploy("MyNFT", "MNFT");
        await nftContract.deployed();
        test = await ethers.getSigners();
        [user1, user2, user3] = await ethers.getSigners()
    })

    it("Mint Nft", async () => {
        console.log(`NFT address: ${nftContract.address} `)
        console.log("test:", test)
        console.log(`user1:${user1} user2:${user2} user3:${user3} `)
    })
})