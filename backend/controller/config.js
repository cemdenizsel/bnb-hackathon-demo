const { Token } = require('@uniswap/sdk-core');
const { FeeAmount } = require('@uniswap/v3-sdk');
const { DAI_TOKEN, USDC_TOKEN } = require("./constant");
  
exports.config = {
  env: "LOCAL",
  rpc: {
    local: 'http://localhost:8545',
    mainnet: '',
  },
  wallet: {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey:
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
  tokens: {
    token0: USDC_TOKEN,
    token0Amount: 1000,
    token1: DAI_TOKEN,
    token1Amount: 1000,
    poolFee: FeeAmount.LOW,
  },
}