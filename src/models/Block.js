import sha256 from 'crypto-js/sha256.js'

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
}

export default Block
