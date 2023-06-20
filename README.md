# 实验报告模板

## 小组成员

- 2021131022-尚龙泽 （组长）
- 2021131021-刘冠宇
- 2021131023-董青
- 2021131024-周于超
- 2021131025-辜锐彬
- 2021131026-任豪


## 代码仓库链接

https://github.com/ze020829/renhao.git



## 第一课代码


### 代码 commint 地址

https://github.com/ze020829/renhao/blob/5574f9b620b95733cf63aab7a92ba33c3cd7af5f/src/models/Block.js

### 代码截图
https://pan.baidu.com/s/1_zymZUCYu4r9_5AX8UNpzA?pwd=kk95

### 主观与讨论题内容

---


## 第二课代码


### 代码 commint 地址

https://github.com/ze020829/renhao/blob/4d9638af85673dce4cb4df992dbc6d8b944492b4/src/models/Blockchain.js


### 代码截图

https://pan.baidu.com/s/1ARQhIon5nnj8UfReQtbOGA?pwd=856t


### 主观与讨论题内容


7.POW优点
a)1.1 算法简单，实现容易：依托安全可靠的加密算法如SHA256，巧妙地形成了一种简单粗暴的工作量机制。猜测随机数的方式比较简单易懂而且对于节点来验证数据的真实性有效性也是简洁明了。（去信任化）
b)1.2 节点之间无需交换额外的信息即可达成共识：由于维护同一条公链，那么节点只需要接受一个待验证的区块然后对其加以验证就可以完成区块链的记录。（去中心化）
c)1.3 破坏区块链系统需要投入极大的成本：由于工作量本身就意味着耗散经济成本，理论上存在超过50%的恶意节点达成共识来攻击区块链网络，但是这需要付出极大的经济成本。投入远大于产出，所以从经济的角度上保证了系统的安全。（安全）
8.POW缺点
a)2.1 浪费能源：大量的矿机，电力的投入，就只用在计算一个哈希值上。挖矿失败，投入的能源就是付之一炬，没有任何回报。这成为POW为人诟病的一个重要的原因。（耗能大）
b)2.2 区块交易效率低：这是由于系统设计限制的，全网都在进行算力竞赛，争相记账，同时全网节点又要进行验证区块以及确认达成一致的公链，可想而知系统运行的速度短时间内不会有特别快的提升。比特币每秒的交易次数低于10次，成功记账的时间间隔为10分钟，这和现今动辄每秒上万的金融交易来比较，真是蚂蚁见大象。这也是比特币难以真正商业化的一个关键因素。（速度低，共识时间长）
c)2.3 存在弱去中心化：随着矿机设备的产生，越来越多的算力集中到一起。现如今依靠普通的个体户已经无力挖矿成功，矿工们算力集中化程度高，中心化趋势加强，可能存在51%的系统攻击。（弱去中心化）


## 第三课代码


### 代码 commint 地址

https://github.com/ze020829/renhao/tree/a39d816be0d5f3e590fff64d289f6a2380bcf79e/src/models


### 代码截图

链接：https://pan.baidu.com/s/1ErOuKaHToMVW_Gle6k2KHQ?pwd=plfc 
提取码：plfc


### 主观与讨论题内容



---




## 第四课代码


### 代码 commint 地址
https://github.com/ze020829/renhao/blob/05cdef6137963290c0a9415e0c891f65f182e1ef/src/models/Blockchain.js


### 代码截图

链接：https://pan.baidu.com/s/1iT3LPKYH_AevbdbOKSRpOg?pwd=26zp 
提取码：26zp


### 主观与讨论题内容



---




## 第五课代码


### 代码 commint 地址

https://github.com/ze020829/renhao/blob/0992170bafaf1b93245c64ab16c59dfe344385dc/src/models/Blockchain.js


### 代码截图
链接：https://pan.baidu.com/s/1YpDPp51VwX7pIxTNlBvK1A?pwd=59yw 
提取码：59yw


### 主观与讨论题内容

当比特币的区块大小越大时，每个区块可以包含更多的交易记录，因此每个区块的工作量也会随之增大。而随着总工作量的增加，比特币网络的挖矿难度也会逐渐增大，因为为了保持每个区块的平均挖矿时间稳定在10分钟左右，比特币网络会根据矿工的整体算力来动态调整挖矿难度，以保证整个网络的安全性和稳定性。



## 第六课代码


### 代码 commint 地址
https://github.com/ze020829/renhao/blob/9cf88579365cd62ff55097260a2678693486aa23/src/models/Blockchain.js


### 代码截图
链接：https://pan.baidu.com/s/1B7-YX-7SaXMzzpogPmK1pA?pwd=8dg2 
提取码：8dg2



### 主观与讨论题内容


如果去掉比特币网络的交易费用，可能会出现以下几种情况：

1. 出现交易延迟：由于矿工不再有动力去优先打包有交易费的交易，会导致交易处理速度变慢，交易延迟变高。

2. 恶意攻击的风险增大：在没有交易费的情况下，恶意人士可以发起大量的无效交易，从而耗尽网络资源，影响正常交易和比特币网络的稳定性。

3. 矿工收益下降：交易费是矿工获得的主要收益来源之一，如果没有交易费，矿工的收益将大幅下降，这会导致矿工的意愿降低，使得比特币网络的算力下降，安全性也随之降低。

4. 市场失衡：计算交易费用本身就是市场供求关系的体现，取消交易费用会让市场失衡，矿工不再有理由去优先打包高价值的交易，这可能会导致比特币价格的不稳定。

## 结课报告


### 代码 commint 地址

https://github.com/ze020829/renhao/blame/1a1b4e6ec4660dcc169185f8dacd7b2410d61a4a/src/models/Transaction.js

### 代码截图
链接：https://pan.baidu.com/s/1mphxSzPLyzqgkOq31DbWCg?pwd=8vmg 
提取码：8vmg




