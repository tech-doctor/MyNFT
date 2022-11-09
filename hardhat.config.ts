import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
        url: process.env.API_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
};

export default config;
