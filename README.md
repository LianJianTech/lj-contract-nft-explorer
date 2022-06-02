# LJ NFT Explorer
```
Pinata、Solidity、IPFS、OpenSea...
```

<img src="assets/nft.png"  width="480" alt="nft" style="display: inline-block" />

## Pinata上传NFT图片和元数据
```
./assets/image
https://gateway.pinata.cloud/ipfs/QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH
ipfs:///QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH/0.png

./assets/metadata
https://gateway.pinata.cloud/ipfs/QmSZmXKcfC9WgFewoGCgRpjfaHxSDxA54BCVZGhm8y72Zx
ipfs:///QmSZmXKcfC9WgFewoGCgRpjfaHxSDxA54BCVZGhm8y72Zx/0
```

## 编译合约
```
npx hardhat compile
```

## 测试网部署
```
npx hardhat run scripts/deploy.nft.explorer.js --network rinkeby 
contract: 0x9b6dbE875D970F5FB0e0ADF9B33E2C0f6692Df5b
```

## 设置BaseURI
```
npx hardhat run scripts/set.base.url.js --network rinkeby 
NFTExplorer name: lj_nft_explorer
NFTExplorer symbol: LJ_NFT_EXPLORER
NFTExplorer setBaseURI tx hash: 0x7be63feed021566b49858d0b250b51b338ae40ff999d4a5efd4a00df9566196e
```

## Mint NFT
```
npx hardhat run scripts/mint.nft.js
NFTExplorer name: lj_nft_explorer
NFTExplorer price: BigNumber { value: "10000000000000000" }
NFTExplorer mint tx hash: 0xc8f3b8f7e6e9231e67cf065ecaaa665db2b04d9808e05bea7678fd075a4b5eb9
```

## 查询NFT
```
npx hardhat run scripts/query.nft.js --network rinkeby 
```

## OpenSea查看NFT
```
https://testnets.opensea.io/account
```

## 获取NFT的URL链接
```
npm install node-fetch
npx hardhat run scripts/call.nft.js
```

## SubGraph
```
npm i @apollo/client graphql
npm install --save react react-dom @types/react @types/react-dom
npm install --save cross-fetch

npx hardhat run scripts/subgraph.js
```