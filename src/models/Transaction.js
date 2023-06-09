import sha256 from 'crypto-js/sha256.js'

class Transaction {
  constructor(_from,_to,_value,_fee) {
    this.from = _from
    this.to = _to
    this.value = _value
    this.fee = _fee
    this.hash = sha256(this.from+this.to+this.value+this.fee).toString()
  }
  _setHash() {

  }
  _calculateHash() {
    return sha256(this.from+this.to+this.value+this.fee).toString() //要将手续费一起hash
  }
}

export default Transaction
