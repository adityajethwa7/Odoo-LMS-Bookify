const db = require("../models/index");
const user = db.user;
const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    {
      id: user.id,
      uName: user.uName,
      //   uEmail: uEmail,
      uRole: user.uRole,
    },
    "secret!"
  );
  console.log(accessToken);
  return accessToken;
};

const validateToken = async (req, res, next) => {
  // const accessToken = req.headers.authorization.split(' ')[1];
  // const accessToken = req.headers["access-token"];
  const accessToken = req.cookies["access-token"]; // Passing cookies directly
  if (!accessToken) {
    return res
      .status(400)
      .json({ statuscode: 400, message: "User is not Authenticated!" });
  }
  try {
    const validateToken = verify(accessToken, "secret!");
    console.log(validateToken);
    if (validateToken) {
      req.authenticated = true;
      const userId = validateToken.id;
      const existingUser = await user.findOne({
        where: { uName: validateToken.uName },
      });
      const paramsId = existingUser.id;
      if (userId == paramsId) {
        req.user = {
          uName: validateToken.uName,
          uRole: validateToken.uRole,
        };
        return next();
      } else {
        return res
          .status(400)
          .json({ statuscode: 400, message: "User not logged in!", data: {} });
      }
      // const user = await user.findById(userId);

      // if (!user) {
      //   return res
      //     .status(400)
      //     .json({ statuscode: 400, message: "User not found!" });
      // }

      // req.user = user;
      // console.log(user.uEmail);
      // return next();
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ statuscode: 500, message: "It's not you, it's us", data: {} });
  }
};

// Admin Authentication
const authAdminToken = async (req, res, next) => {
  try {
    console.log(req.user);
    if (req.user.uRole == "admin") {
      next();
    } else {
      return res
        .status(400)
        .json({ statuscode: 401, message: "Unauthorized", data: {} });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ statuscode: 500, message: "It's not you, it's us", data: {} });
  }
};

// User Authentication
const authUserToken = async (req, res, next) => {
  try {
    if (req.user.role == "user") {
      next();
    } else {
      return res
        .status(400)
        .json({ statuscode: 401, message: "Unauthorized", data: {} });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ statuscode: 500, message: "It's not you, it's us", data: {} });
  }
};

module.exports = {
  createTokens,
  validateToken,
  authAdminToken,
  authUserToken,
};
