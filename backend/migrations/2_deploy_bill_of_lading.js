const BillOfLading = artifacts.require("BillOfLading");

module.exports = function (deployer) {
  deployer.deploy(BillOfLading);
};
