import express from "express";
import { adminRegistrationValidation } from "../middlewares/validationMiddlewares.js";
import { hashPassword } from "../helpers/bcrypt.js";
import { createNewAdmin } from "../models/adminuser/AdminUserModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendAdminUserVerificationMail } from "../helpers/emailHelper.js";

const route = express.Router();

route.all("/", (req, res, next) => {
  console.log(
    "all the request of the api will go through this line of code,do some validation check here if needed before hiting the right method"
  );
  next();
});

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  console.log(req.body);
  try {
    req.body.password = hashPassword(req.body.password);
    //1.encrypt the password
    //   console.time("hashing");
    //   const hashedPass = hashPassword(req.body.password);
    //   console.timeEnd("hashing");
    //   console.log(hashedPass);
    req.body.varificationCode = uuidv4();

    //2.call model to run save query
    const result = await createNewAdmin(req.body);

    if (result?._id) {
      console.log(result);
      //3.create unique url endpoint and send that to customer
      sendAdminUserVerificationMail(result);

      return res.json({
        status: "success",
        message:
          "we have sent you an email,please check it and follow the instruction",
      });
    }

    res.json({
      status: "error",
      message: "Unable t create an user, please try again later",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already a registered user with this email, pls login with diff email";
    }
    next(error);
  }
});

export default route;
