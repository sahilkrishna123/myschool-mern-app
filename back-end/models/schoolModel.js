import mongoose from "mongoose";
const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  approvalStatus: {
    type: String,
    enum: ["approved", "pending", "rejected"],
    required: true,
    default: "pending",
  },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
  // students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const School = mongoose.model("School", SchoolSchema);

export default School;
