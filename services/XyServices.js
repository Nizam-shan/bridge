const { default: axios } = require("axios");

const GetAllToken = async () => {
  const response = await axios.get(
    `${process.env.XY_API_KEY}/recommendedTokens`
    // supportedBridgeProviders`
  );

  return response;
};

const GetQuate = async (body) => {
  const {
    srcChainId,
    srcQuoteTokenAddress,
    srcQuoteTokenAmount,
    dstChainId,
    dstQuoteTokenAddress,
    slippage,
    bridgeProviders,
    srcSwapProviders,
    dstSwapProviders,
    affiliate,
  } = body;

  const response = await axios.get(
    `${process.env.XY_API_KEY}/quote?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=${slippage}`
  );
  return response;
};

const GetBuildTx = async (body) => {
  const {
    srcChainId,
    srcQuoteTokenAddress,
    srcQuoteTokenAmount,
    dstChainId,
    dstQuoteTokenAddress,
    slippage,
    receiver, //dstQuoteTokenAddress
    bridgeProvider,
    srcBridgeTokenAddress,
    dstBridgeTokenAddress,
    srcSwapProvider,
    dstSwapProvider,
  } = body;

  const response = await axios.get(
    `${process.env.XY_API_KEY}/buildTx?srcChainId=${srcChainId}&srcQuoteTokenAddress=${srcQuoteTokenAddress}&srcQuoteTokenAmount=${srcQuoteTokenAmount}&dstChainId=${dstChainId}&dstQuoteTokenAddress=${dstQuoteTokenAddress}&slippage=${slippage}&receiver=${receiver}&bridgeProvider=${bridgeProvider}&srcBridgeTokenAddress=${srcBridgeTokenAddress}&dstBridgeTokenAddress=${dstBridgeTokenAddress}&srcSwapProvider=${srcSwapProvider}&dstSwapProvider=${dstSwapProvider}`
  );
  return response;
};

module.exports = { GetAllToken, GetQuate, GetBuildTx };
