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

  clone(_player) {
    return this.utxos[_player]
  }
  handleTransaction(_tx) {
    if (!this.isValidTransaction(_tx.from,_tx.value)){
      return
    }
    this.utxos[_tx.from].amount -= _tx.value
    this.addUTXO(_tx.to,0,_tx.value,0)
  }
  isValidTransaction(_player,_value) {
    return this.utxos[_player].amount >= _value
  }

}

export default UTXOPool


