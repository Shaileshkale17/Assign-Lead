import { response } from "express";
import { APIError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asycHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AssignLead } from "../Models/AssignModel.js";


//For Saving the data
const SaveData = asyncHandler(async (req, res) => {
  const { team, executive } = req.body;

  if (!team || !executive) {
    throw new APIError(401, "Indexed team or executive");
  }

  const newLead = new AssignLead({
    team,
    executive,
  });

  const savedLead = await newLead.save();

  return res.status(201).json(new ApiResponse(201, savedLead, "success"));
});

export { SaveData };


//For Fetching all the Data
const FetchAllData = asyncHandler(async (req, res) => {
  const leads = await AssignLead.find();

  if (!leads.length) {
    throw new APIError(404, "No leads found");
  }

  return res.status(200).json(new ApiResponse(200, leads, "success"));
});

export { FetchAllData };


//To fetch the single data
const FetchData = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new APIError(401, "Invalid id");
  }

  const lead = await AssignLead.findById(id);

  if (!lead) {
    throw new APIError(404, "Lead not found");
  }

  return res.status(200).json(new ApiResponse(200, lead, "success"));
});

export { FetchData };



//For Update the data
const UpdateData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { team, executive } = req.body;
  if (!id) {
    throw new APIError(401, "Invalid id");
  }

  if (!(team && executive)) {
    throw new APIError(401, "Indexed team or executive");
  }

  const Update = await AssignLead.findByIdAndUpdate(id, {
    team,
    executive,
  });

  return res.status(200).json(new ApiResponse(200, Update, "success"));
});

export { UpdateData };



//For Delete the data
const DeleteData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { team, executive } = req.body;

  if (!id) {
    throw new APIError(401, "Invalid id");
  }

  if (!team || !executive) {
    throw new APIError(401, "Indexed team or executive");
  }

  const deletedLead = await AssignLead.findByIdAndDelete(id);

  if (!deletedLead) {
    throw new APIError(404, "Lead not found");
  }

  return res.status(200).json(new ApiResponse(200, deletedLead, "success"));
});

export { DeleteData };

