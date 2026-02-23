import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.BREVO_MONGODB) {
      throw new Error("BREVO_MONGODB is not defined in environment");
    }

    await mongoose.connect(process.env.BREVO_MONGODB)
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
};

export default connectDB;