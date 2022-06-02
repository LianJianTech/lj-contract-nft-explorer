
const hre = require('hardhat');

async function main() {
    const contractAddress = "0x9b6dbE875D970F5FB0e0ADF9B33E2C0f6692Df5b";
    const NFTExplorer = await hre.ethers.getContractFactory("NFTExplorer");
    const nftExplorer = await NFTExplorer.attach(contractAddress);

    name = await nftExplorer.name();
    console.log("NFTExplorer name:", name);
    let symbol = await nftExplorer.symbol();
    console.log("NFTExplorer symbol:", symbol);

   let  totalSupply = await nftExplorer.totalSupply();
   console.log("NFTExplorer totalSupply:", totalSupply);

   let tokenURI = await nftExplorer.tokenURI(0);
   console.log("NFTExplorer tokenURI:", tokenURI);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
