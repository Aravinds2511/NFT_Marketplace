# NFT Marketplace

## Overview

This project is an NFT marketplace where users can create, sell, and buy non-fungible tokens (NFTs). It is built using Ethers.js for Ethereum interactions, Hardhat for smart contract development and testing, and Tailwind CSS for styling the user interface.

## Features

- **Create NFTs:** Users can create unique NFTs by uploading digital assets and defining metadata.

- **Sell NFTs:** Creators can list their NFTs for sale, specifying the price and other details.

- **Buy NFTs:** Buyers can purchase listed NFTs using cryptocurrency.

## Prerequisites

- Node.js installed on your local machine
- Ethereum wallet (e.g., MetaMask) installed in your browser

## Getting Started

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd nft-marketplace
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Visit `http://localhost:3000` in your browser to access the NFT marketplace.

## Smart Contracts

The smart contracts are written in Solidity and can be found in the `contracts/` directory. To deploy the smart contracts to the Ethereum blockchain using Hardhat, run:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

Make sure to configure your Ethereum network settings in the `hardhat.config.js` file.

## Technologies Used

- **Ethers.js:** A library for interacting with the Ethereum blockchain.
- **Hardhat:** A development environment for Ethereum smart contracts.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

