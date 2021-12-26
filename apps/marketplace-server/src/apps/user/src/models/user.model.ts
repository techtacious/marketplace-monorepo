import mongoose, { Document, Query, Schema } from "mongoose";
import bcrypt from "bcrypt";

function setPassword(value: string) {
  return bcrypt.hashSync(value, 10);
}

export interface IUser {
  _id: string;
  email: string;
  gender: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  dob: Date;
}

export interface UserModelInterface extends mongoose.Model<any> {
  build(attr: IUser): any;
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    set: setPassword,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  dob: {
    type: Date,
  },
  // profile: {
  //   type: Schema.Types.ObjectId,
  //   ref: "profile",
  // },
});

// userSchema.pre("save", async function <UserModelInterface>() {
//   console.log("in pre save: ", this);
//   if (this.profile) {
//     if (this.profile.isNew) {
//       console.log("creating profile: ", this.profile);
//       await Profile.create(this.profile);
//     } else if (this.profile.save) {
//       console.log("updating profile: ", this.profile);
//       await this.profile.save();
//     }
//   }
// });

userSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};

export const User: UserModelInterface = mongoose.model<any, UserModelInterface>(
  "user",
  userSchema
);

// export { User };
