const SHA256=require('crypto-js/sha256')


class Block{
    //这里previousHash后面的写法代表可以在实例化时不写参数
    constructor(timestamp,transactions,previousHash=''){
this.timestamp=timestamp
this.transactions=transactions
this.previousHash=previousHash
this.nonce=0
this.hash=this.calclateHash()
this.isInChain=false
    }

    calclateHash(){
       return SHA256(
            this.index+this.timestamp+JSON.stringify(this.transactions)+this.previousHash+this.nonce
        ).toString()
    }

//挖矿
mineBlock(difficutly){

    while( this.calclateHash().substring(0,difficutly)!=Array(difficutly+1).join('0') ){
    this.nonce++;
    this.hash=this.calclateHash();
    }
    console.log("挖出来的hash为："+this.hash);

    }

hasValidTransaction(){
    for (const tx of this.transactions) {
        if(!tx.isValid) return false
    }
    return true
}

}
export default Block
