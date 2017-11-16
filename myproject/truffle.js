module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0
    },
    nodefour:  {
      host: "localhost",
      port: 22003,
      network_id: "*", // Match any network id
      gasPrice: 0
    },
    nodeseven:  {
      host: "localhost",
      port: 22006,
      network_id: "*", // Match any network id
      gasPrice: 0
    }
  }
};
