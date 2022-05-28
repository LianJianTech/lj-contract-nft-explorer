# NFT Explorer

## Pinata上传NFT图片
```
./assets/image
https://gateway.pinata.cloud/ipfs/QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH
ipfs:///QmNisr7JTsNDgh14ksAZXiJidka7kFZYHEQqmLZXyY7LRH/0.png
...
```

## Pinata上传NFT元数据
```
./assets/metadata
https://gateway.pinata.cloud/ipfs/QmSZmXKcfC9WgFewoGCgRpjfaHxSDxA54BCVZGhm8y72Zx
ipfs:///QmSZmXKcfC9WgFewoGCgRpjfaHxSDxA54BCVZGhm8y72Zx/0
```

## 编译合约
```
npx hardhat compile
```

## 测试网部署和调试
```
npx hardhat run scripts/deploy.nft.explorer.js --network rinkeby 
contract: 0x7Ac1de3b3B78E5e466E58Bb497d44976feBd84e0
```

## 设置BaseURI
```
npx hardhat run scripts/set.base.url.js --network rinkeby 
NFTExplorer name: web3_explorer
NFTExplorer symbol: WEB3_EXPLORER
NFTExplorer setBaseURI tx hash: 0x12378ce0ade6fa12967df0afa5a99008459791375ef1ee8daf5ff85f085dcb60
```

## Mint NFT
```
npx hardhat run scripts/mint.nft.js
NFTExplorer name: web3_explorer
NFTExplorer price: BigNumber { value: "10000000000000000" }
NFTExplorer mint tx hash: 0x10db139dcb26654d8b394ac5f830e1fcb29e9f0bd8717dac46291d5509ae745b
```

## 查询NFT
```
npx hardhat run scripts/query.nft.js --network rinkeby 
```

## OpenSea查看NFT
```
https://testnets.opensea.io/account
```
