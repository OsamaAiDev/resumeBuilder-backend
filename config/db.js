import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://osamafreelancer22:nnwcSxC0S59CwinE@cluster0.kwjtrg7.mongodb.net/resume"
    )
    .then(() => console.log("DB connected"));
};
