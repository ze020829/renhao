import { insert } from "ramda";

// Blockchain
class Blockchain {
  name;
  blocks=new Map();
  genesis;
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name,genesis){
    this.name=name;
    this.genesis=genesis;
  }
  insertHashMap(keys,blocks){
    this.blocks.set(keys,blocks)
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
    longestChain(blocks) {
      // let length=blockchain.blocks.height
      //console.info(blockchain.blocks.get(newBlock.hash).height)
      var heightArray=[];
      //整体进行链的长度操作
    for(var blockss of blocks.values()) {
        heightArray.push(blockss.height)
    }
      return heightArray[heightArray.length-1]
    }
    longestChainHash(blocks){
      var hashArray=[];
      for(var blockss of blocks.keys()) {
        hashArray.push(blockss)
      }
      return hashArray[hashArray.length-2]
    }
}

export default Blockchain
