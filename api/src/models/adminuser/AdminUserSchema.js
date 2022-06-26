import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      require: true,
      default: "inactive",
    },
    role: {
      type: String,
      required: true,
      default: "Admin",
    },
    fName: {
      type: String,
      required: true,
      maxLength: 20,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 15,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 50,
    },
    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      maxLength: 100,
    },
    dob: {
      type: Date,
      default: null,
    },
    address: {
      type: String,
      maxLength: 50,
    },
    varificationCode: {
      type: String,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin_user", AdminSchema);
