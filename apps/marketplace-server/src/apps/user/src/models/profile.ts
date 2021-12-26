import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    name: String,
    profilePic: String,
    occupation: String,
    description: String,
    dob: Date,
    height: Number
})

export const Profile = mongoose.model('profile', profileSchema);
