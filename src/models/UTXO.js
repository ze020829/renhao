const SHA256=require('crypto-js/sha256')



class UTXO{
    constructor(fromAddress,toAdress,amount){
        this.fromAddress=fromAddress
        this.toAdress=toAdress
        this.amount=amount
    }

    //获得交易hash
calclateHash(){
    return SHA256(this.fromAddress+this.toAdress+this.amount).toString()
}

//数字签名
sigTransaction(singningKey){
    //交易hash
const TXhash=this.calclateHash()
    //hash用私钥签名
const sig = singningKey.sign(TXhash,'base64')
    //
this.signature=sig.toDER('hex')

}

//看是否有篡改交易信息
isValid(){
//若fromaddress为空，也要返回有效
if(this.fromAddress==null) return
    const publicKey=ec.keyFromPublic(this.fromAddress,'hex')
    return publicKey.verify(this.calclateHash(),this.signature)
}


}
