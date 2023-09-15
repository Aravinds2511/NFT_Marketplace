const { ethers } = require("hardhat");

describe("NFTMarket", function () {
  it("Should create and execute market sale", async function () {
    //deploy the contract
    const NFTmarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTmarketplace.deploy();
    await nftMarketplace.deployed();

    let listingPrice = await nftMarketplace.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    //creating two tokens
    await nftMarketplace.createToken(
      "https://www.mytokenlocation.com",
      auctionPrice,
      { value: listingPrice }
    );
    await nftMarketplace.createToken(
      "https://www.mytokenlocation2.com",
      auctionPrice,
      { value: listingPrice }
    );

    const [_, buyerAddress] = await ethers.getSigners();

    //executing the sale
    await nftMarketplace
      .connect(buyerAddress)
      .createMarketSale(1, { value: auctionPrice });

    //reselling the above purchased item
    await nftMarketplace
      .connect(buyerAddress)
      .resellToken(1, auctionPrice, { value: listingPrice });

    //returning all unsold items
    items = await nftMarketplace.fetchMarketItems();
    items = await Promise.all(
      items.map(async (i) => {
        const tokenUri = await nftMarketplace.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      })
    );
    console.log("items: ", items);
  });
});
