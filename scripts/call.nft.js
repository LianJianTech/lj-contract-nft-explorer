const hre = require('hardhat');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const nft_json = require('../artifacts/contracts/NFTExplorer.sol/NFTExplorer.json');
const nft_abi = nft_json.abi;
const contract_address = "0x26a0fe1912a19fd915a5935E34076B46ceCDfba8";
const private_key = process.env.private_key;

const provider = new hre.ethers.getDefaultProvider("rinkeby");
const contract = new hre.ethers.Contract(contract_address, nft_abi, provider);
const wallet = new hre.ethers.Wallet(private_key, provider);


const getTotalSupply = async () => {
    const totalSupply = await contract.totalSupply();
    console.log("totalSupply: ", totalSupply);
    return totalSupply;
};

const getMetaDataList = async () => {
    const totalSupply = await getTotalSupply();
    const dataList = [];
    for (let tokenID = 0; tokenID < totalSupply; tokenID++) {
        const tokenURI = await getTokenURI(tokenID);
        const httpURL = ipfsToHttp(tokenURI);
        const res = await parseMetaData(httpURL);
        dataList.push(ipfsToHttp(res.image));
    }
    console.log("getMetaDataList:", dataList);
};

const getTokenURI = async (tokenID) => {
    const tokenURI = await contract.tokenURI(tokenID);
    console.log("tokenID:" + tokenID + ", tokenURI:" + tokenURI);
    return tokenURI;
};

const parseMetaData = async (tokenURI) => {
    console.log("parseMetaData tokenURI: " + tokenURI);
    const res = await fetch(tokenURI);
    const json = await res.json();
    console.log("parseMetaData json:", json);
    return json;
};

const ipfsToHttp = (tokenURI) => {
    const httpURL = tokenURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
    console.log("httpURL:", httpURL);
    return httpURL;
};

async function main() {
    await getMetaDataList();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });