import mongoose from "mongoose";
const ExamSchema = new mongoose.Schema({
    examName: { type: String, required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    date: { type: Date, required: true },
    totalMarks: { type: Number, required: true },
    studentGrades: [{
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
      marksObtained: { type: Number }
    }]
  });
  