const Price = require("../model/price.model")
const { ChainId, Token, Fetcher, WETH, Route, Trade, TokenAmount, TradeType } = require ('@uniswap/sdk');
const Web3 = require('web3');
const ethers = require('ethers');  
const fs = require('fs');


const url = 'https://weathered-still-liquid.ethereum-goerli.discover.quiknode.pro/5df462016884a24c284d2989a0b577628b06aefc/';
const web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/eth'));
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const chainId = ChainId.GÖRLI;
const tokenAddress = '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844';
const wethAdress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const tokenDecimals = 18; // replace with the number of decimals for your token
// get the Uniswap v2 router contract address
const uniswapRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
// create a new instance of the Uniswap v2 router contract

let uniswapRouter;

exports.getPrice = async (req,res,next) => {
    try {
        const price = await _getPrice();
        res.send(price);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while getting the price.');
    }
} 

exports.getYieldForWETH = async (req,res,next) => {
    try {
        const tradingVolume = await uniswapPool();
        console.log(tradingVolume);
        const liquidity = await getLiquidityOnUniswap(2);
        console.log(liquidity);
        const yieldValue = tradingVolume / liquidity;
        res.send(`Yield value for weth: ${yieldValue}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while getting the price.');
    }
}

exports.getYieldForDai = async (req,res,next) => {
    try {
        const tradingVolume = await uniswapPool();
        console.log(tradingVolume);
        const liquidity = await getLiquidityOnUniswap(1);
        console.log(liquidity);
        const yieldValue = tradingVolume / liquidity;
        res.send(`Yield value for dai: ${yieldValue}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while getting the price.');
    }
}

const _getPrice = async () => {
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress, customHttpProvider);
    const weth = WETH[chainId];
    const pair = await Fetcher.fetchPairData(dai, weth, customHttpProvider);
    const route = new Route([pair], weth);
    const trade = new Trade(route, new TokenAmount(weth, '100000000000000000'), TradeType.EXACT_INPUT);
    console.log("Mid Price WETH --> DAI:", route.midPrice.toSignificant(6));
    console.log("Mid Price DAI --> WETH:", route.midPrice.invert().toSignificant(6));
    console.log("-".repeat(45));
    console.log("Execution Price WETH --> DAI:", trade.executionPrice.toSignificant(6));
    console.log("Mid Price after trade WETH --> DAI:", trade.nextMidPrice.toSignificant(6));
    const priceModel = new Price();
    priceModel.daiVsWEth = route.midPrice.invert().toSignificant(6);
    return priceModel;
}


const uniswapPool = async () => {
    const token = await Fetcher.fetchTokenData(chainId, tokenAddress, customHttpProvider);
    const weth = WETH[chainId];
    const pair = await Fetcher.fetchPairData(token, weth, customHttpProvider);
    const route = new Route([pair], weth);
    const trade = new Trade(route, new TokenAmount(weth, '1000000000000000000'), TradeType.EXACT_INPUT);
    return trade.executionPrice.toSignificant(6);
}


// Define a function that takes a JSON object as input
function processJSON() {
    fs.readFile("../abi/uniswap-router.abi.json", 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Parse the JSON data into an object
        const obj = JSON.parse(data);
      
        uniswapRouter = new web3.eth.Contract(
            obj,
            uniswapRouterAddress,
        );
      });
}


// get the liquidity of an address on Uniswap
async function getLiquidityOnUniswap(tokenNumber) {
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress, customHttpProvider);
    const weth = WETH[chainId];
    const pair = await Fetcher.fetchPairData(dai, weth, customHttpProvider);
    const liquidity = tokenNumber == 1 ? pair.reserve0 : pair.reserve1;
    console.log(`The liquidity of ${tokenAddress} on Uniswap (dai/weth) is ${liquidity.toSignificant(6)}`);
    return liquidity.toSignificant(6);
  }
  
  // helper function to get the symbol of a token
async function getTokenSymbol(tokenAddress) {
    const token = new web3.eth.Contract(ERC20_ABI, tokenAddress);
    const symbol = await token.methods.symbol().call();
    return symbol;
}