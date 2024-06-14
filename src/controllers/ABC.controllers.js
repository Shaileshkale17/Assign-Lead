import { response } from "express";
import { AssignLead } from "../models/AssignModel.js";
import { APIError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asycHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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
