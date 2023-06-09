import UTXOPool from './UTXOPool.js'

class Blockchain {
  constructor(_name) {
    this.name = _name
    this.genesis = null
    this.blocks = {}
  }
  longestChain() {
    var longestChain = []
    var temp = 0 
    var BlockPointer = null 
    for (let hash in this.blocks) {
      if (this.blocks[hash].height >= temp) {
          temp = this.blocks[hash].height
      }
    }
    for (let hash in this.blocks) {
      if (this.blocks[hash].height === temp) {
        BlockPointer = this.blocks[hash]
        longestChain.push(BlockPointer)
        break
      }
    }
    while (this.blocks[BlockPointer.previousHash] != null) { 
      longestChain.push(this.blocks[BlockPointer.previousHash])
      BlockPointer = this.blocks[BlockPointer.previousHash]
    }
    return longestChain.reverse()
    }

  containsBlock(block) {
    return this.blocks[block.hash] != undefined
  }
  maxHeightBlock() {
    // return Block
    let keysCount = Object.keys(this.blocks).length;
    if(keysCount == 0){
      return 0
    }
    let height = Object.keys(this.longestChain()).length;
    return this.longestChain()[height-1]
  }

  // 添加区块
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return
    var currentBlock = this.maxHeightBlock()
    let utxoPool = new UTXOPool()
    if(currentBlock == 0){
      utxoPool.addUTXO(block.coinbaseBeneficiary,12.5,0,0)
    }else{
      let money = currentBlock.utxoPool.utxos[block.coinbaseBeneficiary].amount
      utxoPool.addUTXO(block.coinbaseBeneficiary,12.5,money,0)
    }
    block.utxoPool = utxoPool
    this.blocks[block.hash] = block
  }
}
export default Blockchain
