import mongoose from "mongoose";

export class DbService {
  public static connect() {
    mongoose.Promise = global.Promise;
    // return mongoose.connect("mongodb://localhost/true_ishq_dev");
    return mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  public static disconnect() {
    throw new Error("Method not implemented.");
  }
}
