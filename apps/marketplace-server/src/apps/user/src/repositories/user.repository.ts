import { UpdateWriteOpResult } from "mongoose";
import { Profile } from "../models/profile";
import { IUser, User, UserModelInterface } from "../models/user.model";

export class UserRepository {
  /**
   * Create a new User
   * @param user User data
   * @returns
   */
  async create(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    // if (user.profile) {
    //   delete user.profile._id;
    //   const newProfile = new Profile(user.profile);
    //   newUser.set("profile", newProfile);
    // }

    const result = await newUser.save();
    return result;
  }

  async findById(id: string): Promise<IUser> {
    const result = await User.findById(id).populate("profile").exec();
    return result;
  }

  async findByEmail(email: string): Promise<IUser> {
    const result = await User.findOne({ email }).populate("profile").exec();
    console.log("result from findByEmail: ", result);
    return result;
  }

  async findbyPhone(phone: string): Promise<IUser> {
    const result = await User.findOne({ phone }).populate("profile").exec();
    return result;
  }

  async findAll(): Promise<IUser[]> {
    const results = await User.find({}).populate("profile").exec();
    return results;
  }

  async update(user: IUser): Promise<UpdateWriteOpResult> {
    const updateDoc = {
      $set: user,
    };
    const result = await User.updateOne({ _id: user._id }, updateDoc);
    return result;
  }

  //   async saveUserProfilePicture(
  //     user: IUser,
  //     pictureUrl: string
  //   ): Promise<IUser> {
  //     let dbUser = new User(user);
  //     // if (!dbUser.profile) {
  //     //   dbUser.profile = new Profile({ profilePic: pictureUrl });
  //     // } else {
  //     //   dbUser.profile.set("profilePic", pictureUrl);
  //     //   // user.profile.save();
  //     //   console.log("user profile updated to: ", user.profile);
  //     // }
  //     // dbUser.set("profilePic", pictureUrl);
  //     const result = await dbUser.save();
  //     return result;
  //   }
}
