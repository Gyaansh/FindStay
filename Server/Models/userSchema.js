import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userDataSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [
        3,
        "Username too short. Username should be more than 3 characters long.",
      ],
      maxlength: [
        40,
        "Username too long. Username should be less than 40 characters long.",
      ],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can contain only letters, numbers, and underscores",
      ],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);
const userData = module.model("UserData",userDataSchema);
export default userData;
