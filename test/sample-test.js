const { expect } = require("chai");
const { ethers } = require("hardhat");
const { isTargetLikeServerless } = require("next/dist/server/config");

describe("Greeter", function () {
  it("Should created and execute Market sales", async function () {
    const Market = await ethers.getContractFactory("NFTMarket")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.marketAddress
    

    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress)
    await NFT.deployed();
    const ndtContractAddress = nft.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')

    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")

    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })

    const [_, buyerAddress] = await ethers.getSigners()

    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1,{value: auctionPrice});
  })
});
