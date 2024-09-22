import mongoose from "mongoose";
const ClassSchema = new mongoose.Schema({
    className: { type: String, required: true },
    classCode: { type: String, unique: true, required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
  });
  