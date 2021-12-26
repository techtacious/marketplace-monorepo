// const User = require('../models/user');

import { respondJson } from "@bu/shared";
import { UpdateProfileRequest } from "../definitions/update-profile-request.definition";
import { Profile } from "../models/profile";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

// const Profile = require('../models/profile');
const fs = require("fs");
const multer = require("multer");
const AWS = require("aws-sdk");
const path = require("path");

export class UserController {
  public static async getUser(req, res, next) {
    const { id } = req.params;
    const response = await UserService.getUser(id);
    respondJson(res, response);
  }

  public static async getUserByEmail(req, res, next) {
    const { email } = req.params;
    const response = await UserService.getUserByEmail(email);
    respondJson(res, response);
  }

  public static async getUserByPhone(req, res, next) {
    const { phone } = req.params;
    const response = await UserService.getUserByPhone(phone);
    respondJson(res, response);
  }

  public static async list(req: any, res: any, next: any) {
    const response = await UserService.getUsers();
    respondJson(res, response);
  }

  public static newUser = async (req: any, res: any, next: any) => {
    const response = await UserService.newUser(req.body);
    respondJson(res, response);
  };

  public static updateProfile = async (req: any, res: any, next: any) => {
    const updateProfileReq: UpdateProfileRequest = req.body;
    const response = await UserService.updateProfile(updateProfileReq);
    respondJson(res, response);
  };

  public static updateUser = async (req: any, res: any, next: any) => {
    const response = await UserService.updateUser(req.body);
    respondJson(res, response);
  };

  public static async setProfilePhoto(req: any, res: any, next: any) {
    const userId = req.query._id;
    const files = req.files;
    const response = await UserService.setProfilePhoto(userId, files);
    respondJson(res, response);
  }
}
