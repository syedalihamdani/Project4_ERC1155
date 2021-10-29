const NFTCONTRACT = artifacts.require("NFTCONTRACT");

module.exports = function (deployer) {
  deployer.deploy(NFTCONTRACT);
};
