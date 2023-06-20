import sha256 from 'crypto-js/sha256.js'

class Transaction {
  constructor(_from,_to,_value,_fee,_signature) {
    this.from = _from
    this.to = _to
    this.value = _value
    this.fee = _fee
    this.hash = sha256(this.from+this.to+this.value+this.fee).toString()
    this.signature = _signature
  }

  // 更新交易 hash
  _setHash() {

  }

  // 计算交易 hash 的摘要函数
  _calculateHash() {
      return sha256(this.from+this.to+this.value+this.fee).toString()
  }

  // 校验交易签名 返回 bool 类型的值
  hasValidSignature() {
      return verifySignature(this.hash, this.signature, this.from)
  }

}

export default Transaction
