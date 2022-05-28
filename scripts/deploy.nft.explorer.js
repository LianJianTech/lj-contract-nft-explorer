
const hre = require('hardhat');

async function main() {
    const NFTExplorer = await hre.ethers.getContractFactory("NFTExplorer");
    const nftExplorer = await NFTExplorer.deploy();

    await  nftExplorer.deployed();

    console.log("NFTExplorer deployed to:", nftExplorer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
