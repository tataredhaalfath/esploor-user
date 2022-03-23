const Model = require("../../../models");

module.exports = async (req, res, next) => {
  try {
    const userIds = req.query.user_ids || [];
    const sqlOptions = {
      attributes: ["id", "name", "profession", "avatar", "email", "role"],
    };

    if (userIds.length) {
      sqlOptions.where = {
        id: userIds,
      };
    }

    const users = await Model.User.findAll(sqlOptions);

    if (!users) {
      return res.status(404).json({
        status: "error",
        message: "user not found",
      });
    }

    return res.json({
      status: "success",
      data: users,
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
