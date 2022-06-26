import Joi from "joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: Joi.string().trim().min(3).max(20).required(),
    lName: Joi.string().trim().min(3).max(20).required(),
    dob: Joi.date().allow(null, ""),
    phone: Joi.string().trim().min(3).max(20).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().trim().min(3).max(20).required(),
    address: Joi.string().allow("").max(50).required(),
  });

  //   const result = schema.validate(req.body);
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
  next();

  //   console.log(result);

  //   res.json({
  //     status: "error",
  //     message: "invalid data",
  //   });
  //   next();
};
