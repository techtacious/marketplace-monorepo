import { HttpStatusCodes, ResponsePayload } from "@bu/shared";
import { UpdateProfileRequest } from "../definitions/update-profile-request.definition";
import { Profile } from "../models/profile";
import { User, IUser, UserModelInterface } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const multer = require("multer");
const AWS = require("aws-sdk");
const path = require("path");

export class UserService {
  public static userRepository: UserRepository = new UserRepository();

  public static async getUser(id: string): Promise<ResponsePayload> {
    if (!id) {
      return Promise.resolve({
        code: HttpStatusCodes.BAD_REQUEST,
        payload: "Invalid ID",
      });
    }

    let user;
    try {
      user = await this.userRepository.findById(id);

      if (!user) {
        return Promise.resolve({
          code: HttpStatusCodes.NOT_FOUND,
          payload: "User not found",
        });
      }

      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: user,
      });
    } catch (e) {
      return Promise.resolve({
        code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        payload: e,
      });
    }
  }

  public static async getUserByEmail(email: string): Promise<ResponsePayload> {
    // if (!email) {
    //   return Promise.resolve({
    //     code: HttpStatusCodes.BAD_REQUEST,
    //     payload: "Missing phone",
    //   });
    // }

    // let user: IUser;
    // try {
    //   user = await this.userRepository.findByEmail(email);

    //   if (!user) {
    //     return Promise.resolve({
    //       code: HttpStatusCodes.NOT_FOUND,
    //       payload: "User not found",
    //     });
    //   }

    //   return Promise.resolve({
    //     code: HttpStatusCodes.OK,
    //     payload: user,
    //   });
    // } catch (e) {
    //   return Promise.resolve({
    //     code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    //     payload: e,
    //   });
    // }

    try {
      const user = await this.userRepository.findByEmail(email);

      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: user,
      });
    } catch (e) {
      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: e,
      });
    }
  }

  public static async getUserByPhone(phone: string): Promise<ResponsePayload> {
    if (!phone) {
      return Promise.resolve({
        code: HttpStatusCodes.BAD_REQUEST,
        payload: "Missing phone",
      });
    }

    let user;
    try {
      user = await this.userRepository.findbyPhone(phone);

      if (!user) {
        return Promise.resolve({
          code: HttpStatusCodes.NOT_FOUND,
          payload: "User not found",
        });
      }

      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: user,
      });
    } catch (e) {
      return Promise.resolve({
        code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        payload: e,
      });
    }
  }

  public static async getUsers(): Promise<ResponsePayload> {
    const users = await this.userRepository.findAll();
    return Promise.resolve({
      code: HttpStatusCodes.OK,
      payload: users,
    });
  }

  public static async newUser(userPayload: IUser): Promise<ResponsePayload> {
    console.log("newUser req: ", userPayload);
    delete userPayload._id;

    try {
      const user = await this.userRepository.create(userPayload);

      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: user,
      });
    } catch (e) {
      return Promise.resolve({
        code: HttpStatusCodes.BAD_REQUEST,
        payload: e,
      });
    }
  }

  public static async updateProfile(
    updateProfileReq: UpdateProfileRequest
  ): Promise<ResponsePayload> {
    // console.log("updateUser req: ", userPayload);
    // if (!userPayload._id) {
    //   return Promise.resolve({
    //     code: HttpStatusCodes.BAD_REQUEST,
    //     payload: "Invalid User ID",
    //   });
    // }
    // delete userPayload.password;
    // const user = await this.userRepository.findById(userPayload._id);
    // if (!user) {
    //   return Promise.resolve({
    //     code: HttpStatusCodes.NOT_FOUND,
    //     payload: "User not found",
    //   });
    // } else {
    //   const user = await this.userRepository.update(userPayload);
    //   return Promise.resolve({
    //     code: HttpStatusCodes.OK,
    //     payload: user,
    //   });
    // }

    return Promise.resolve({
      code: HttpStatusCodes.OK,
      payload: {},
    });
  }

  public static async updateUser(userPayload: IUser) {
    console.log("updateUser req: ", userPayload);
    if (!userPayload._id) {
      return Promise.resolve({
        code: HttpStatusCodes.BAD_REQUEST,
        payload: "Invalid User ID",
      });
    }

    delete userPayload.password;
    const user = await this.userRepository.findById(userPayload._id);
    if (!user) {
      return Promise.resolve({
        code: HttpStatusCodes.NOT_FOUND,
        payload: "User not found",
      });
    } else {
      const user = await this.userRepository.update(userPayload);

      return Promise.resolve({
        code: HttpStatusCodes.OK,
        payload: user,
      });
    }
  }

  public static async setProfilePhoto(userId: string, files) {
    console.log("Files in req: ", files);
    // console.log('request: ', req);

    let user: IUser;
    if (userId) {
      user = await this.userRepository.findById(userId);
    }

    if (!user) {
      return Promise.resolve({
        code: HttpStatusCodes.NOT_FOUND,
        payload: "User not found",
      });
    }

    if (!files || files.length < 1) {
      return Promise.resolve({
        code: HttpStatusCodes.BAD_REQUEST,
        payload: "No file received",
      });
    }

    const awsCredFile = path.join(__dirname, "../", "configs/aws-config.json");

    console.log("awsCredFile is");
    console.log(awsCredFile);

    AWS.config.loadFromPath(awsCredFile);

    const s3 = new AWS.S3();

    const photoBucket = new AWS.S3({ params: { Bucket: "true-ishq-media" } });

    const filePathToSend = files[0].path;

    function uploadToS3(filepath, destFileName, callback) {
      photoBucket
        .upload({
          ACL: "public-read",
          Body: fs.createReadStream(filepath),
          Key: destFileName.toString(),
          ContentType: "application/octet-stream", // force download if it's accessed as a top location
        })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#httpUploadProgress-event
        .on("httpUploadProgress", function (evt) {
          console.log(evt);
        })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#send-property
        .send(callback);
    }

    multer({ limits: { fileSize: 10 * 1024 * 1024 } });

    console.log("filePathToSend is ");
    console.log(filePathToSend);

    uploadToS3(
      filePathToSend,
      files[0].filename + ".jpg",
      async (err, data) => {
        if (err) {
          console.error(err);
          return Promise.resolve({
            code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            payload: "Failed to upload to S3",
          });
        }

        const pictureUrl = data.Location.replace(/"/g, "&quot;");

        user.profilePic = pictureUrl;

        // const updatedUser = await this.userRepository.saveUserProfilePicture(
        //   user,
        //   pictureUrl
        // );

        const updatedUser = await this.userRepository.update(user);

        // console.log("user found:", user);
        // if (!user.profile) {
        //   user.profile = new Profile({ profilePic: pictureUrl });
        // } else {
        //   user.profile.set("profilePic", pictureUrl);
        //   // user.profile.save();
        //   console.log("user profile updated to: ", user.profile);
        // }

        // const updatedUser = await user.save();

        console.log(
          "responding to client with url: ",
          data.Location.replace(/"/g, "&quot;")
        );

        return Promise.resolve({
          code: HttpStatusCodes.OK,
          payload: data.Location.replace(/"/g, "&quot;"),
        });
      }
    );

    console.log("uploading now...");
  }
}
