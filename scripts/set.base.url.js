
const hre = require('hardhat');

async function main() {
    const contractAddress = "0x7Ac1de3b3B78E5e466E58Bb497d44976feBd84e0";
    const NFTExplorer = await hre.ethers.getContractFactory("NFTExplorer");
    const nftExplorer = await NFTExplorer.attach(contractAddress);

     name = await nftExplorer.name();
    console.log("NFTExplorer name:", name);
    let symbol = await nftExplorer.symbol();
    console.log("NFTExplorer symbol:", symbol);

    const baseURI = "ipfs://QmSZmXKcfC9WgFewoGCgRpjfaHxSDxA54BCVZGhm8y72Zx/";
    let tx= await nftExplorer.setBaseURI(baseURI);
    console.log("NFTExplorer setBaseURI tx hash:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
