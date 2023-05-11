import Block from '../models/Block.js'
import Blockchain from '../models/Blockchain.js'
import sha256 from 'crypto-js/sha256.js'
const main = () => {
  // 初始化区块链
  var blockchain = new Blockchain('BitCoin') 

  // 创建创世区块
  var genesisBlock = new Block(blockchain, 'root', 0, 'root')

  // 设置创世区块
  blockchain.genesis = genesisBlock
  blockchain.insertHashMap(0,blockchain.genesis)
  // 构建区块
  var newBlock = new Block(
    blockchain,
    genesisBlock.hash,
    1,
    sha256(new Date().getTime().toString()).toString()
  )


  blockchain.insertHashMap(newBlock.hash,newBlock)
  var nextBlock = new Block(
    blockchain,
    newBlock.hash,
    2,
    sha256(new Date().getTime().toString()).toString()
  )

  var nextCompetitionBlock = new Block(
    blockchain,
    newBlock.hash,
    2,
    sha256((new Date().getTime() + 1).toString()).toString()
  )

  // 添加两个区块高度为 2  的的竞争区块
  blockchain.insertHashMap(nextBlock.hash,nextBlock)
  blockchain.insertHashMap(nextCompetitionBlock.hash,nextCompetitionBlock)


  console.assert(blockchain.longestChain(blockchain.blocks)==2, 'Block height should be 2')

  var thirdBlock = new Block(
    blockchain,
    nextCompetitionBlock.hash,
    3,
    sha256(new Date().getTime().toString()).toString(),
  )
  blockchain.insertHashMap(thirdBlock.hash,thirdBlock)

  // 区块检查
  console.assert(blockchain.longestChain(blockchain.blocks) == 3, 'Block height should be 2')
  console.info(blockchain.blocks)
  console.assert(
    blockchain.longestChainHash(blockchain.blocks) == thirdBlock.hash,
    `Height block hash should be ${thirdBlock.hash}`,
  )
}

main()
