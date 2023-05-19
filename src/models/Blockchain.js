// Blockchain
import Block from "./Block.js"
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
constructor(){
  this.chain=[this.createGenesisBlock()]
  this.difficulty=3        //区块的挖矿难度
}
createGenesisBlock(){       ////创建一个创世区块
  return new Block(0,"2023/05/07","haor","0")
}
getLatestBlock(){       ////得到最新最后面的那个区块
  return this.chain[this.chain.length-1]
}
addBlock(newBlock){                   ////加入一个新的区块
  newBlock.previousHash=this.getLatestBlock().hash;
  newBlock.mineBlock(this.difficulty)   //输入难度系数
  this.chain.push(newBlock);
}
isChainValid(){       ///验证区块的可信
  for (let i=1 ;i<this.chain.length;i++){
    const currentBlock=this.chain[i]
    const previousBlock=this.chain[i-1]
    if(currentBlock.hash != currentBlock.calclateHash()){
      return false
    }
   else if(currentBlock.previousHash != previousBlock.hash){
      return false
    }
    else{
      return true
    }
  }
}
 
  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {


    return []
  }
  
}
let savjeeCoin=new Blockchain()
for (let i=1;i<=10;i++){
  console.log('区块 '+i);
  const start = performance.now();
  savjeeCoin.addBlock(new Block(i,i+10,{amount:1}))
  const end = performance.now();
  const elapsedTime = end - start;
  console.log('花费时间：'+`${elapsedTime}`);
}


/*console.log(savjeeCoin)
savjeeCoin.chain[1].data={amount:100}  //擅自修改区块
console.log(savjeeCoin.isChainValid())*/
export default Blockchain


