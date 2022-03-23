const Model = require("../../../models");
const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res, next) => {
  try {
    const schema = {
      name: "string|empty:false",
      email: "email|empty:false",
      password: "string|empty:false|min:6",
      profession: "string|optional",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
      return res.status(400).json({
        status: "error",
        message: validate,
      });
    }

    const user = await Model.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      //status code conflic
      return res.status(409).json({
        status: "error",
        message: "email already exist",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {
      password,
      name: req.body.name,
      email: req.body.email,
      profession: req.body.profession,
      role: "student",
    };

    const createdUser = await Model.User.create(data);

    return res.json({
      status: "success",
      data: {
        id: createdUser.id,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
