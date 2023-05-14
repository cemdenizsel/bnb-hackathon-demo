const { request } = require('graphql-request');
const axios = require('axios');


const GRAPHQL_ENDPOINT = 'https://open-platform.nodereal.io/c394aca2e9cf46f8874641fec15b9061/pancakeswap-v3/graphql';
//const GRAPHQL_ENDPOINT = 'https://open-platform.nodereal.io/c394aca2e9cf46f8874641fec15b9061/pancakeswap-free/graphql';


const query = `
  {
    pairs{
      
        id
        name
        
        reserve0
        reserve1
        totalSupply
      
    }
  }
`;

//v3 
const query2 = ` 
  {
    pool
      (id: "0x92b7807bF19b7DDdf89b706143896d05228f3121"){
      token0 {
        id
        symbol
        name
        totalSupply
        totalValueLocked
      }
      token1 {
        id
        symbol
        name
        totalSupply
        totalValueLocked  
      }
      token0Price
      token1Price
      totalValueLockedToken0
      totalValueLockedToken1
      liquidity
      protocolFeesUSD
      collectedFeesToken0
      collectedFeesToken1
      collectedFeesUSD
      liquidityProviderCount
      totalValueLockedUSD
      totalValueLockedETH
    }
  }

    ` ;


//v3 
const query3 = ` 
  {
    poolDayDatas(where: { pool: "0x92b7807bF19b7DDdf89b706143896d05228f3121" }
                orderBy: date
                orderDirection: desc
                first: 1){
      id
      date
      pool {
        id
        volumeUSD
        liquidityProviderCount
        feesUSD
        protocolFeesUSD
        totalValueLockedUSD

        token0 {
          id
          symbol
          name
          totalSupply
          totalValueLocked
        }
        token1 {
          id
          symbol
          name
          totalSupply
          totalValueLocked  
        }
      }
      liquidity
      token0Price
      token1Price
      tvlUSD
      protocolFeesUSD
      feesUSD
    }
  }

    ` ;

exports.pancakeResult = (req,res,next) => {
  request(GRAPHQL_ENDPOINT, query3).then((data) => {
    // const poolDayDatas = data.poolDayDatas;
    // const lastPoolDayData = poolDayDatas[poolDayDatas.length - 1];
    console.log(JSON.stringify(data, null, 2))
    const feesUSD = parseFloat(data.poolDayDatas[0].pool.feesUSD);
    const tvlUSD = parseFloat(data.poolDayDatas[0].pool.totalValueLockedUSD);
    const dailyFeeAPR = (feesUSD / tvlUSD) * 100;
    return dailyFeeAPR;
  })
  .then(resFromPancake=>{
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end("Yield value for USDC/USDT pool for pancake:" + resFromPancake.toString());
  });
}
