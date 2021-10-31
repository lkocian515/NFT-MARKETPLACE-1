require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey =  fs.readFileSync(".secret").toString();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/eaa4e5100af242a285ce76d59a586dc9',
      accounts: [privateKey]
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/eaa4e5100af242a285ce76d59a586dc9',
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
