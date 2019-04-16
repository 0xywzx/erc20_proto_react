var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList).then(instance => {
    console.log('ABI:',JSON.stringify(instance.abi))
  })  
};