
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const getAccount = async () =>{
    const account = await web3.eth.getAccounts();
    return account
}

// window.addEventListener('load', () => {
//     if (typeof web3 !== 'undefined') {
//         web3 = new Web3(web3.currentProvider);
//     } else {
//         console.log('No web3? You should consider trying MetaMask!');
//         web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//     }
// });

module.exports = getAccount