import { Schema, model } from "mongoose";

export type StudentType = {
  firstName: string;
  lastName: string;
  classe: string;
  gender: string;
  dateOfBirth: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

const studentSchema = new Schema<StudentType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  classe: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  imageUrl: { type: String },
});

export const Student = model<StudentType>("Student", studentSchema);