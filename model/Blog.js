import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        require: [true, "title is required"],
      },
      description: {
        type: String,
        required: [true, "description is require"],
      },
      image: {
        type: String,
        required: [true, "image is require"],
      },
    },
    { timestamps: true }
  );
  
  export default mongoose.model("Blog", blogSchema);