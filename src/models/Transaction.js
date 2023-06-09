import sha256 from 'crypto-js/sha256.js'

class Transaction {
  constructor(_from,_to,_value) {
    this.from = _from
    this.to = _to
    this.value = _value
    this.hash = sha256(this.from,this.to,this.value).toString()
  }
  _setHash() {

  }
  _calculateHash() {
    return sha256(this.from,this.to,this.value).toString()
  }
}

export default Transaction
