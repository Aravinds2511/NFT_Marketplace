require("@nomiclabs/hardhat-waffle");

const SEPOLIA_PRIVATE_KEY = process.env.PIVATE_KEY;
module.exports = {
  //defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/7Qx1ObkUWFDGLcbThK7KwzvOlRsgqm6x",
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    // mumbai: {
    //   url: "https://eth-sepolia.g.alchemy.com/v2/7Qx1ObkUWFDGLcbThK7KwzvOlRsgqm6x",
    //   accounts: [SEPOLIA_PRIVATE_KEY],
    // },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
