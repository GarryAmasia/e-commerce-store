import AdminSchema from "./AdminUserSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

// export const updateVerificationCodeByUserId = (_id,code) => {
//   return AdminSchema.findByIdAndUpdate({_id,{
//     verificationCode : code
//   });
// }
