# NFT Explorer

## Pinata上传NFT图片
```
https://gateway.pinata.cloud/ipfs/QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH
ipfs:///QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH/0.png
...
```

## Pinata上传NFT元数据
```
https://gateway.pinata.cloud/ipfs/QmVrjY3CDrcYNvWJvgb4d7SiGqhB2D31NfLMSqfS6HLkAo
ipfs:///QmVrjY3CDrcYNvWJvgb4d7SiGqhB2D31NfLMSqfS6HLkAo/0
```

## 编译合约
```
npx hardhat compile
```

## 测试网部署和调试
```
npx hardhat run scripts/deploy.nft.explorer.js --network rinkeby 
contract: 0x98e0f213081E1F79531aFA63630edf2871aD64d3
```

## 设置BaseURI
```
npx hardhat run scripts/set.base.url.js --network rinkeby 
NFTExplorer name: web3_explorer
NFTExplorer symbol: WEB3_EXPLORER
NFTExplorer setBaseURI tx hash: 0x082d97aa7d7530c37b6060c3256c1b5ef315fb423b642e0cfcfa98032c6617bc
```

## Mint NFT
```
npx hardhat run scripts/mint.nft.js
NFTExplorer name: web3_explorer
NFTExplorer price: BigNumber { value: "10000000000000000" }
NFTExplorer mint tx hash: 0x55882be568a44ecd13548ba4f296d26d73030898be066ff06ef96710e2ce2566
```

## 查询NFT
```
npx hardhat run scripts/query.nft.js --network rinkeby 
```
