import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:8545');
web3.eth.defaultAccount = '0xE338D6bC9305CC9D430D3B970F0b939F7138786A';
web3.eth.accounts.wallet.add('9652ed411d15b32ef4b71111027be8b3e42e404a12ef432ebdab3872927be3c9');

let contractABI = `[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "arg",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "MyEvent",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "a",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ap",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "b",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "i",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aa",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "myFunction",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]`

let contractByteCode = `0x60806040526040518060800160405280600160ff168152602001600260ff168152602001600360ff168152602001600460ff1681525060079060046100459291906100f2565b506001546040519080825280602002602001820160405280156100775781602001602082028036833780820191505090505b50600c908051906020019061008d929190610137565b5060405180602001604052806001815250600d6000820151816000015550503480156100b857600080fd5b50604051610514380380610514833981810160405260208110156100db57600080fd5b8101908080519060200190929190505050506101a9565b8260058101928215610126579160200282015b82811115610125578251829060ff16905591602001919060010190610105565b5b5090506101339190610184565b5090565b828054828255906000526020600020908101928215610173579160200282015b82811115610172578251825591602001919060010190610157565b5b5090506101809190610184565b5090565b6101a691905b808211156101a257600081600090555060010161018a565b5090565b90565b61035c806101b86000396000f3fe60806040526004361061004e5760003560e01c80630dbe671f146100575780633c4f743c146100ae5780634df7e3d014610105578063afac276d14610134578063e5aa3d581461028657610055565b3661005557005b005b34801561006357600080fd5b5061006c6102b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ba57600080fd5b506100c36102d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011157600080fd5b5061011a6102fd565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506102046004803603604081101561015757600080fd5b81019080803590602001909291908035906020019064010000000081111561017e57600080fd5b82018360208201111561019057600080fd5b803590602001918460018302840111640100000000831117156101b257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061030f565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561029257600080fd5b5061029b610320565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900460ff1681565b600060608383915091509250929050565b6001548156fea2646970667358221220286133d1bc24f60c6d2ca310a857150c38aaf18bc4ae1ed61e12178135c77e8a64736f6c63430006040033`;


let mycontract = new web3.eth.Contract(JSON.parse(contractABI));
mycontract.deploy({
  data:  contractByteCode,
  arguments: [12345]
}).send({
  from: '0xE338D6bC9305CC9D430D3B970F0b939F7138786A',
  gas: 1500000,
  gasPrice: '30000000000000'
}).then((myinstance) => { console.log(myinstance) });

// var arg = 12345 ;
// var mycontractContract = web3.eth.contract([{"inputs":[{"internalType":"uint256","name":"arg","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"i","type":"uint256"}],"name":"MyEvent","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"a","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ap","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"b","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"i","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"aa","type":"uint256"},{"internalType":"string","name":"x","type":"string"}],"name":"myFunction","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"stateMutability":"payable","type":"receive"}]);
// var mycontract = mycontractContract.new(
//    arg,
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x60806040526040518060800160405280600160ff168152602001600260ff168152602001600360ff168152602001600460ff1681525060079060046100459291906100f2565b506001546040519080825280602002602001820160405280156100775781602001602082028036833780820191505090505b50600c908051906020019061008d929190610137565b5060405180602001604052806001815250600d6000820151816000015550503480156100b857600080fd5b50604051610514380380610514833981810160405260208110156100db57600080fd5b8101908080519060200190929190505050506101a9565b8260058101928215610126579160200282015b82811115610125578251829060ff16905591602001919060010190610105565b5b5090506101339190610184565b5090565b828054828255906000526020600020908101928215610173579160200282015b82811115610172578251825591602001919060010190610157565b5b5090506101809190610184565b5090565b6101a691905b808211156101a257600081600090555060010161018a565b5090565b90565b61035c806101b86000396000f3fe60806040526004361061004e5760003560e01c80630dbe671f146100575780633c4f743c146100ae5780634df7e3d014610105578063afac276d14610134578063e5aa3d581461028657610055565b3661005557005b005b34801561006357600080fd5b5061006c6102b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ba57600080fd5b506100c36102d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011157600080fd5b5061011a6102fd565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506102046004803603604081101561015757600080fd5b81019080803590602001909291908035906020019064010000000081111561017e57600080fd5b82018360208201111561019057600080fd5b803590602001918460018302840111640100000000831117156101b257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061030f565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561029257600080fd5b5061029b610320565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900460ff1681565b600060608383915091509250929050565b6001548156fea2646970667358221220286133d1bc24f60c6d2ca310a857150c38aaf18bc4ae1ed61e12178135c77e8a64736f6c63430006040033', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  })