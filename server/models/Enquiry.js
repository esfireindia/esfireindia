import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    interest: { type: String, required: true, trim: true },
    phone: { type: String, trim: true, default: '' },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
