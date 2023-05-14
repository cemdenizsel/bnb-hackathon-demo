const express = require('express');
const app = express();
const cors = require('cors');
const uniswapEthController = require("./controller/uniswap.eth.controller")
const pancakeController = require("./controller/pancakeswap.controller")
const poolController = require("./controller/uniswap.pool")

// Define the endpoint for getting the current price of ETH/USDC
app.get('/weth/dai/price',uniswapEthController.getPrice);
app.get('/uniswaw/yield/values/weth',uniswapEthController.getYieldForWETH);
app.get('/uniswaw/yield/values/dai',uniswapEthController.getYieldForDai);
app.get('/uniswap/yield/values/usdc-usdt',uniswapEthController.getYieldForDai); 
app.get('/pancake',pancakeController.pancakeResult);
// Start the server
const port = 8080;
const corsOptions ={
  origin:['http://localhost:3000','http://localhost:3001'], 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
