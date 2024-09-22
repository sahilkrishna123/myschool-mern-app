import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subjectCode: { type: String, unique: true, required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
  });
  