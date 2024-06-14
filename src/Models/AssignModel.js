import mongoose, { Schema } from "mongoose";

const assignSchema = new Schema({
  team: { type: String, required: true },
  executive: { type: String, required: true },
});

export const AssignLead = mongoose.model("AssignLead", assignSchema);
