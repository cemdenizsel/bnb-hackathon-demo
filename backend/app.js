const express = require('express');
const app = express();
const cors = require('cors');
const uniswapEthController = require("./controller/uniswap.eth.controller")
const poolController = require("./controller/uniswap.pool")

// Define the endpoint for getting the current price of ETH/USDC
app.get('/weth/dai/price',uniswapEthController.getPrice);
app.get('/uniswaw/yield/values/weth',uniswapEthController.getYieldForWETH);
app.get('/uniswaw/yield/values/dai',uniswapEthController.getYieldForDai);
app.get('/uniswap/yield/values/usdc-usdt',uniswapEthController.getYieldForUSDC); 
app.get('/uniswap/pool',poolController.getPoolInfo);
// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
