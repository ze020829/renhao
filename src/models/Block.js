import sha256 from 'crypto-js/sha256.js'
class Block {
  BlockData;
  previousHash="";
  height;
  timestampHashCoding;
  hash;
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
    BlockData:区块信息
    previousHash:前一个节点的哈希值
    height:节点高度
    timestampHashCoding:当前时间的哈希摘要
  */
  constructor(BlockData,previousHash="",height,timestampHashCoding) {
    this.BlockData=BlockData;
    this.previousHash=previousHash;
    this.height=height;
    this.timestampHashCoding=timestampHashCoding;
    this.hash=this.createHash();
  }
  createHash(){
    return sha256((this.BlockData+this.previousHash+this.timestampHashCoding)).toString();
  }
}

export default Block
