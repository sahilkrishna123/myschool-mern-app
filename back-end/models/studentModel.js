import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  enrollmentNumber: { type: String, unique: true, required: true },
  dateOfBirth: {
    type: Date,
  },
  firstName: {
    type: String,
    // required: [true, "Please tell us your first name!"],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },

  // classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  // subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  // attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }],
  // grades: [
  //   {
  //     subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  //     grade: { type: String },
  //   },
  // ],
});

const Student = new mongoose.model("Student", studentSchema);
export default Student;
