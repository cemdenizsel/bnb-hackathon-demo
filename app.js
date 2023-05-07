const express = require('express');
const app = express();
const cors = require('cors');
const uniswapEthController = require("./controller/uniswap.eth.controller")

// Define the endpoint for getting the current price of ETH/USDC
app.get('/eth-usdc-price',uniswapEthController.getPrice);

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
