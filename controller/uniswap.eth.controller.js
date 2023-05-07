const Price = require("../model/price.model")
const { ChainId, Fetcher, WETH, Route, Trade, TokenAmount, TradeType } = require ('@uniswap/sdk');
const Web3 = require('web3');
const ethers = require('ethers');  

const url = 'https://weathered-still-liquid.ethereum-goerli.discover.quiknode.pro/5df462016884a24c284d2989a0b577628b06aefc/';
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const chainId = ChainId.GÖRLI;
const tokenAddress = '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844'


exports.getPrice = async (req,res,next) => {
    try {
        const price = await _getPrice();
        res.send(price);
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
