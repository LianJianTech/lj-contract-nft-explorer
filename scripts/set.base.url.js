
const hre = require('hardhat');

async function main() {
    const contractAddress = "0x98e0f213081E1F79531aFA63630edf2871aD64d3";
    const NFTExplorer = await hre.ethers.getContractFactory("NFTExplorer");
    const nftExplorer = await NFTExplorer.attach(contractAddress);

     name = await nftExplorer.name();
    console.log("NFTExplorer name:", name);
    let symbol = await nftExplorer.symbol();
    console.log("NFTExplorer symbol:", symbol);

    const baseURI = "ipfs://QmVrjY3CDrcYNvWJvgb4d7SiGqhB2D31NfLMSqfS6HLkAo/";
    let tx= await nftExplorer.setBaseURI(baseURI);
    console.log("NFTExplorer setBaseURI tx hash:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
