const { GetAllToken, GetQuate, GetBuildTx } = require("../services/XyServices");
const { successResponse, errorResponse } = require("../utils/responseHandler");

// const services = require(".../services")
const getToken = async (req, res) => {
  try {
    const token = await GetAllToken();
    const data = token.data.recommendedTokens;
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const postQuots = async (req, res) => {
  // console.log("🚀 ~ postQuots ~ req:", req.query);
  try {
    const quats = await GetQuate(req.query);
    // console.log("🚀 ~ postQuots ~ quats:", quats);
    const data = quats.data;
    return successResponse(res, data);
  } catch (error) {
    console.log("🚀 ~ postQuots ~ error:", error);
    return errorResponse(res, error.message);
  }
};

const buildTransact = async (req, res) => {
  // console.log("🚀 ~ postQuots ~ req:", req.query);
  try {
    const tx = await GetBuildTx(req.query);
    // console.log("🚀 ~ postQuots ~ quats:", quats);
    const data = tx.data;
    return successResponse(res, data);
  } catch (error) {
    console.log("🚀 ~ postQuots ~ error:", error);
    return errorResponse(res, error.message);
  }
};

module.exports = { getToken, postQuots, buildTransact };
