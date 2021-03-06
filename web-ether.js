import Web3 from 'web3';
// console.log(Web3.version);
// console.log(Web3.modules);
// console.log(Web3.providers);
// console.log(Web3.givenProvider);

// const web3 = new Web3('https://mainnet.infura.io/v3/fb1c2f2f566443d08c59aae698c78839');

const web3 = new Web3('HTTP://127.0.0.1:8545');
web3.eth.defaultAccount = '0xE338D6bC9305CC9D430D3B970F0b939F7138786A';
web3.eth.accounts.wallet.add('9652ed411d15b32ef4b71111027be8b3e42e404a12ef432ebdab3872927be3c9');

// let batch = new web3.eth.BatchRequest();
// batch.add(web3.eth.getBlockNumber.request((err, number)=>console.log(number)));
// batch.add(web3.eth.getBlock.request(123456, (err, block)=>console.log(block)));
// batch.execute();

// web3.eth.getProtocolVersion().then(console.log);
// web3.eth.isSyncing().then(console.log);
// web3.eth.isMining().then(console.log);
// web3.eth.getHashrate().then(console.log);
// web3.eth.getCoinbase().then(console.log);
// web3.eth.getAccounts().then(console.log);

// web3.eth.getBlockNumber().then(console.log);
// web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
// web3.eth.getTransactionFromBlock(123456789, 0).then(console.log);
// web3.eth.getBlock(9759044, false).then(console.log);
// web3.eth.getBlock(9759091, true).then(console.log);
// web3.eth.getTransaction('0xa57381b4d99cd36194439cc244549fb8d3883f8a7c63749e7f4430e8dbcef1aa').then(console.log);
// web3.eth.getTransactionReceipt('0xa57381b4d99cd36194439cc244549fb8d3883f8a7c63749e7f4430e8dbcef1aa').then(console.log);

// web3.eth.getBalance('0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c').then(console.log)
// web3.eth.getTransactionCount('0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c').then(console.log)
// web3.eth.getStorageAt('0x407d73d8a49eeb85d32cf465507dd71d507100c1', 0).then(console.log)
// web3.eth.getCode('0xdac17f958d2ee523a2206206994597c13d831ec7').then(console.log)

// web3.eth.sendTransaction({to: '0x759a5A4E6B6BBfcbea5F8c6F85C40eC7e5038034', value: 10**18, data: web3.utils.sha3('abcedfgh')}).then(console.log);

// web3.eth.sendTransaction({
//   to: '0x759a5A4E6B6BBfcbea5F8c6F85C40eC7e5038034',
//   value: 10*18
// })
// .on('transactionHash', function(hash){
//   console.log(hash);
// })
// .on('receipt', function(receipt){
//   console.log(receipt)
// })
// .on('confirmation', function(confirmationNumber, receipt){ 
//   console.log(confirmationNumber);
//   console.log(receipt)
//  })
// .on('error', console.error); 


// not supported
// web3.eth.sign('haha', '0xE338D6bC9305CC9D430D3B970F0b939F7138786A').then(console.log);
// web3.eth.signTransaction({
//   from: '',
//   to: '',
//   value: 10**8,
//   gas: 50000
// }, '0xE338D6bC9305CC9D430D3B970F0b939F7138786A').then(console.log);

// web3.eth.getGasPrice().then(console.log)
// web3.eth.estimateGas({to: '0x759a5A4E6B6BBfcbea5F8c6F85C40eC7e5038034', value: 10*18, data: web3.utils.utf8ToHex('hahaha')}).then(console.log);

// web3.eth.getChainId().then(console.log)
// web3.eth.getNodeInfo().then(console.log)

