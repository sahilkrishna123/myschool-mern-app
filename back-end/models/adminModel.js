import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    adminId: { type: String, unique: true, required: true },
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' }
  });
  