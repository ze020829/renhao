import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const SHA256=require('crypto-js/sha256')
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
  /*区块头包括hash值，时间戳TimeStamp,随机数Nonce，难度目标Target Bits,默克尔树跟 Merkle Root,父区块 Pre hash ，子区块Next hash*/


  constructor(index,timestamp,data,previousHash='') {

    this.previousHash=previousHash
    this.index=index
    this.timestamp=timestamp
    this.data=data
    this.hash=this.calclateHash()
    this.nonce=0      //挖矿随机数

}
calclateHash(){        //把所有数据拼成字符串然后HASH
return SHA256(
  this.index+
  JSON.stringify(this.data)+
  this.timestamp+
  this.previousHash+
  this.nonce
  ).toString();
}
createGenesisBlock(){     //创建创世区块
  return new Block(0,"2023/05/07","haor","0")}
  
mineBlock(difficulty){   //利用随机数nonce,难度difficulty进行挖矿hash计算
    while(this.hash.substring(0,difficulty)!=Array(difficulty+1).join('0'))  
    {
    this.nonce++
      this.hash=this.calclateHash()
    }
  console.log('Block mined:'+this.hash);
  }
}

export default Block
