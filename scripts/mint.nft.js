const hre = require('hardhat');

const nft_json = require('../artifacts/contracts/NFTExplorer.sol/NFTExplorer.json');
const nft_abi = nft_json.abi;
const contract_address = "0x98e0f213081E1F79531aFA63630edf2871aD64d3";
const private_key = process.env.private_key;

const provider = new hre.ethers.getDefaultProvider("rinkeby");
const contract = new hre.ethers.Contract(contract_address, nft_abi, provider);
const wallet = new hre.ethers.Wallet(private_key, provider);

async function main() {
    let name = await contract.name();
    console.log("NFTExplorer name:", name);

    const price = await contract.PRICE_PER_TOKEN();
    console.log("NFTExplorer price:", price);

    const contractWithSinger = contract.connect(wallet);
    let tx = await contractWithSinger.mint(1, {value: price});
    console.log("NFTExplorer mint tx hash:", tx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
