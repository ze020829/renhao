const{UTXO,BlockChain,Block}=require('./chain.js')
const EC= require('elliptic').ec
const ec= new EC('secp256k1')


mykey=ec.keyFromPrivate('047eb25188f101b8924c755454e886cf2ab7cdee4acadfcf3cbd21c0589382b044690f690a2bb77900528c5d8147d10919e6e7fd88a5592a4f48bc07309421f6c9')
//公钥生成地址
myAddress=mykey.getPublic('hex')

let savjeeCoin =new BlockChain();

const tx=new UTXO(myAddress,'0x....',10)
const tx1=new UTXO(myAddress,'0x....',10)
const tx2=new UTXO(myAddress,'0x....',10)
savjeeCoin.addUTXO(tx)
savjeeCoin.addUTXO(tx1)
savjeeCoin.addUTXO(tx2)
tx1.sigTransaction(mykey)
tx2.sigTransaction(mykey)
tx.sigTransaction(mykey)
savjeeCoin.minePendingTranactions(myAddress,false)


const tx3=new UTXO(myAddress,'0x....',10)
const tx4=new UTXO(myAddress,'0x....',10)
const tx5=new UTXO(myAddress,'0x....',10)
savjeeCoin.addUTXO(tx3)
savjeeCoin.addUTXO(tx4)
savjeeCoin.addUTXO(tx5)
tx3.sigTransaction(mykey)
tx4.sigTransaction(mykey)
tx5.sigTransaction(mykey)
savjeeCoin.minePendingTranactions(myAddress,false)


const tx6=new UTXO(myAddress,'0x....',10)
const tx7=new UTXO(myAddress,'0x....',10)
const tx8=new UTXO(myAddress,'0x....',10)
savjeeCoin.addUTXO(tx6)
savjeeCoin.addUTXO(tx7)
savjeeCoin.addUTXO(tx8)
tx8.sigTransaction(mykey)
tx6.sigTransaction(mykey)
tx7.sigTransaction(mykey)
savjeeCoin.minePendingTranactions(myAddress,true)


const tx9=new UTXO(myAddress,'0x....',10)
const tx10=new UTXO(myAddress,'0x....',10)
const tx11=new UTXO(myAddress,'0x....',10)
savjeeCoin.addUTXO(tx9)
savjeeCoin.addUTXO(tx10)
savjeeCoin.addUTXO(tx11)
tx9.sigTransaction(mykey)
tx10.sigTransaction(mykey)
tx11.sigTransaction(mykey)
savjeeCoin.minePendingTranactions(myAddress,false,savjeeCoin.chain[savjeeCoin.chain.length-2])


const tx12=new UTXO(myAddress,'0x....',10)
const tx13=new UTXO(myAddress,'0x....',10)
const tx14=new UTXO(myAddress,'0x....',10)
savjeeCoin.addUTXO(tx12)
savjeeCoin.addUTXO(tx13)
savjeeCoin.addUTXO(tx14)
tx12.sigTransaction(mykey)
tx13.sigTransaction(mykey)
tx14.sigTransaction(mykey)
savjeeCoin.minePendingTranactions(myAddress,false)


console.log(savjeeCoin.getLongestChain())




console.log(savjeeCoin.showBalance(myAddress))

console.log(savjeeCoin.isChainValid())
