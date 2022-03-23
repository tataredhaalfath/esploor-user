const Model = require("../../../models");

module.exports = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Model.User.findByPk(id, {
      attributes: ["id", "name", "profession", "avatar", "email", "role"],
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    return res.json({
      status: "success",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
