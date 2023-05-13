const { ethers } = require('ethers')
const { config } = require("./config")
const IUniswapV3PoolABI = require('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json')
const { POOL_FACTORY_CONTRACT_ADDRESS } = require("./constant")
const { computePoolAddress } = require('@uniswap/v3-sdk')

const url = 'https://weathered-still-liquid.ethereum-goerli.discover.quiknode.pro/5df462016884a24c284d2989a0b577628b06aefc/';


  
exports.getPoolInfo = async (req,res,next) => {
    const provider = new ethers.providers.JsonRpcProvider(url);
    if (!provider) {
      throw new Error('No provider')
    }
    console.log("Config",config,"--------------");
    const currentPoolAddress = computePoolAddress({
      factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
      tokenA: config.tokens.token0,
      tokenB: config.tokens.token1,
      fee: config.tokens.poolFee,
    })
    console.log("Current pool address",currentPoolAddress,"-------------");
  
    const poolContract = new ethers.Contract(
      currentPoolAddress,
      IUniswapV3PoolABI.abi,
      provider
    )
    //console.log("Pool Contract",poolContract,"-------------");
  
    /*const [token0, token1, fee, tickSpacing, liquidity, slot0] =
      await Promise.all([
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee(),
        poolContract.tickSpacing(),
        poolContract.liquidity(),
        poolContract.slot0(),
      ])*/
    let liquidity= await poolContract.liquidity()
    console.log(liquidity);
  
    res.send(liquidity);
  }