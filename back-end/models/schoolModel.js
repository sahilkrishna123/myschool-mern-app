import mongoose from "mongoose";
const SchoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  });
  