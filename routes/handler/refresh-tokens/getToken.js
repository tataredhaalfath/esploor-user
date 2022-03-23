const { RefreshToken } = require("../../../models");

module.exports = async (req, res, next) => {
  try {
    const refreshToken = req.query.refresh_token;
    const token = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });

    if (!token) {
      res.status(400).json({
        status: "error",
        message: "invalid token",
      });
    }

    return res.json({
      status: "success",
      token,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
