
const hre = require('hardhat');

async function main() {
    const contractAddress = "0x26a0fe1912a19fd915a5935E34076B46ceCDfba8";
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
