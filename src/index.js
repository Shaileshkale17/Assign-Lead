import dotenv from "dotenv";
import { ConnectDB } from "./db/index.js";
import { app } from "./app.js";
import { StatusCodes } from "http-status-codes";
import { AssignLead } from "./Models/AssignModel.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3001;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Connecting to ${port}`);
    });
    app.on("error", (error) => {
      console.log(`Error: ${error}`);
      throw error;
    });
  })
  .catch((error) => {
    console.log(`MONGO DB CONNECTION ERROR: ${error}`);
  });

  

// app.post("/save", async (req, res) => {
//   try {
//     const reqData = req.body;
//     const assignData = new AssignLead(reqData);
//     await assignData.save();
//     res.status(StatusCodes.CREATED).send({ message: "Data Inserted" });
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .send({ message: "Something went wrong" });
//   }
// });
