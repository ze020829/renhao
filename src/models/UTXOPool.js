import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  addUTXO(_miner,_coinbaseBeneficiary,_input,_output) {
    var utxo = new UTXO()
    if(this.utxos[_coinbaseBeneficiary] != null){
      let lastUTXO = this.clone(_miner)
      utxo.amount += lastUTXO.amount 
    }
    utxo.amount += _coinbaseBeneficiary
    utxo.amount += _input
    utxo.amount -= _output
    this.utxos[_miner] = utxo
  }

  // 将当前 UTXO 的副本克隆
  clone(_player) {
    return this.utxos[_player]
  }

  // 处理交易函数
  handleTransaction(_tx) {
    if (!this.isValidTransaction(_tx)){
      return
    }
    this.utxos[_tx.from].amount -= _tx.value
    this.addUTXO(_tx.to,0,_tx.value,0)
  }

  isValidTransaction(tx) {
    return this.utxos[tx.from].amount >= tx.value + tx.fee //余额要大于转账金额加上手续费
  }

}

export default UTXOPool
