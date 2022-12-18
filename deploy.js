const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');


const provider = new HDWalletProvider(
  'game marriage depart unable tiger skill broccoli disease voice jump feel material',
   'https://goerli.infura.io/v3/7941f5dd75e243689b8d4e4797e69332'

);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);



  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode,arguments:['Hi there!']})
    .send({gas:'1000000',from :accounts[0]});


    console.log('Contract deployed to ', result.options.address);


};
deploy();
