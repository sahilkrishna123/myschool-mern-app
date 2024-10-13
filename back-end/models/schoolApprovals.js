import mongoose from "mongoose";

const schoolApprovalSchema = new mongoose.Schema({
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "School",
  },
  name: { type: String, required: true },
});

const SchoolApproval = mongoose.model("SchoolApproval", schoolApprovalSchema);

export default SchoolApproval;
