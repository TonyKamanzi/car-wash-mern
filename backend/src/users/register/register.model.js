import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // In your user model, just add this field if not yet there
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// ensure the unique index on email is created (helpful in dev)
userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model("User", userSchema);
