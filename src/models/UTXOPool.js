import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
   */
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
    if (!this.isValidTransaction(_tx.from,_tx.value)){
      return
    }
    this.utxos[_tx.from].amount -= _tx.value
    // 本次实验to原先没有utxo，因此要创建一个新的utxo
    // 当然这是不妥当的，如果是发送给一个现有的用户，应该是新建一个utxo然后替换
    // 这个步骤等到需要的时候再修改吧
    this.addUTXO(_tx.to,0,_tx.value,0)
  }

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction(_player,_value) {
    return this.utxos[_player].amount >= _value
  }

}

export default UTXOPool



