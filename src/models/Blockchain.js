

   class BlockChain{


    constructor(){
        //存放区块的数组
        this.chain=[this.createGernesisBlock()]
        this.UTXOpool=[];
        this.amount=100
        this.difficutly=2
        this.longChain=[]
    }
    //创世区块
    createGernesisBlock(){
        return new Block(0,'2017/01/01','0x00')
    }

getLastBlock(){
    return this.chain[this.chain.length-1]
}


//创建一笔交易
addUTXO(newTransaction){

    if(!newTransaction.isValid) {
        throw new Error("can not add invalid chain to BlockChain")
    }

this.UTXOpool.push(newTransaction)
}

//展示余额
showBalance(targetAddress){
let balacne=0
//forof:输出数组中每一个元素
for (const Block of this.chain) {
    for (const Tran of Block.transactions) {
        // console.log(Tran)
        // console.log("显示数据：")
        // console.log("UTXO amount:"+Tran.amount + " "+ 
        // "UTXO toAddress:"+Tran.toAdress+" "+ 
        // "UTXO fromAddress:"+Tran.fromAddress)
        if(targetAddress==Tran.toAdress) balacne+=Tran.amount
        
        if(targetAddress==Tran.fromAddress) balacne-=Tran.amount
    }
}

return balacne;
}


minePendingTranactions(toAdress,bool,nBlock=''){
let utxo=new UTXO(null,toAdress,12.5)
this.UTXOpool.push(utxo)
//是如何表示加入了那么多交易呢？是上面的create方法


let block = new Block(Date.now(),this.UTXOpool,this.getLastBlock().hash)

//想办法添加一个竞争区块：两者prehash一样。在push之前再创建一个区块
if(bool==true){
    let cBlock
    if(nBlock!=null){
 cBlock = new Block(Date.now(),this.UTXOpool,nBlock.hash)
    }
    if(nBlock==null){
         cBlock = new Block(Date.now(),this.UTXOpool,this.getLastBlock().hash)
    }
cBlock.mineBlock(this.difficutly)
this.chain.push(cBlock)
}

block.mineBlock(this.difficutly)
this.chain.push(block)
// console.log('Transactions的值为：')
// console.log(this.UTXOpool)
//清空池子里面的数据
this.UTXOpool=[]
}




 //检查是否为有效的区块
isChainValid(){
    for(let i=this.chain.length-1;i>0;i--){//这里记住数组的最后一个元素等于length-1
//         console.log("输出chain的第i个元素");
 let current=this.chain[i];
//console.log(current);
let pre=this.chain[i-1];
if(!current.hasValidTransaction()){
return false;
}
if(current.hash!=current.calclateHash()){
    return false;
}
if(current.previousHash!=pre.hash){
    return false;
}
    }
return true;
}


//获取最长链,但现在默认最后一个区块对应的链条是最长链条
longestChain(cha){
let lc=[]
for ( let i=cha ;i>0;i--) {
    let current=this.chain[i]
    let m=i
    while(current.previousHash!=this.chain[m-1].calclateHash()){
m--;
if(m==0){
    break;
}
    }
    lc.push(this.chain[m])
    for(let j= this.chain.length-1;j>0;j--){
        if(this.chain[j]==this.chain[m]){
            this.chain[j].isInChain==true
        }
    }
    this.chain[m].isInChain=true
}
return lc
}

getLongestChain(){
let allChain=[]
for (let i=this.chain.length-1;i>0;i--) {
    if(this.chain[i].isInChain==false){
allChain.push(this.longestChain(i))
    }
}

let j=0
let long=[]
for (const iterator of allChain) {
    if(iterator.length>j){
j=iterator.length
long=iterator
    }
}
return long;

}



export default Blockchain
