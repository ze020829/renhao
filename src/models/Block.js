import sha256 from 'crypto-js/sha256.js'
import UTXO from './UTXO.js'
import { all } from 'ramda'

export const DIFFICULTY = 3

class Block {

  constructor(_blockchain, _previousHash, _height, _hash, _coinbaseBeneficiary) {
    this.blockchain = _blockchain
    this.previousHash = _previousHash
    this.height = _height
    this.hash = _hash
    this.nonce = 0
    this.coinbaseBeneficiary = _coinbaseBeneficiary
    this.utxoPool = null
  }

  isValid() {
    const prefix = "0".repeat(DIFFICULTY);
    return this.hash.substring(0, DIFFICULTY) === prefix
  }

  setNonce(_time) {
    let temp = parseInt(_time) + this.nonce
    this.hash = sha256(temp.toString()).toString()
    this.nonce++
  }
  combinedTransactionsHash(){
    var allTransaction = ""
    const keys = Object.keys(this.utxoPool.utxos);
    for(let i = 0;i < keys.length; i++){
      allTransaction = allTransaction+ keys[i] + this.utxoPool.utxos[keys[i]].amount.toString()
      allTransaction = sha256(allTransaction).toString()
    }
    this.hash = sha256(allTransaction).toString()
    return this.hash
  }
  addTransaction(trx) {
    if(!this.utxoPool.isValidTransaction(trx.from,trx.value)){
      if(this.utxoPool.utxos["failTx"] == undefined){
        let utxo = new UTXO()
        this.utxoPool.utxos["failTx"] = utxo
        this.utxoPool.utxos["failTx"].amount = sha256(this.utxoPool.utxos["failTx"].amount + trx.from + trx.to + trx.value).toString()
      }else{
        this.utxoPool.utxos["failTx"].amount = sha256(this.utxoPool.utxos["failTx"].amount + trx.from + trx.to + trx.value).toString()
      }
      return
    }
    this.utxoPool.utxos[trx.from].amount -= trx.value
    if(this.utxoPool.utxos[trx.to] == undefined){
        let utxo = new UTXO()
        this.utxoPool.utxos[trx.to] = utxo
        this.utxoPool.utxos[trx.to].amount += trx.value
    }else{
      this.utxoPool.utxos[trx.to].amount += trx.value
    }
    this.combinedTransactionsHash()
  }
}

export default Block
