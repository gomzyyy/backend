import express from "express";
import cors from "cors";
import { TOP_120_COMPANIES } from "./utils/hardcodedData/companyData.js";

// constants
const PORT = 8800;
const App = express();
const corsOptions = {
  origin: "*",
  credentials: true,
};

// middlewares
App.use(express.json());
App.use(cors(corsOptions));

// routes
App.get("/companies", (req, res) => {
  console.log("Recieved request.")
  res.json(TOP_120_COMPANIES);
});

//server
App.listen(PORT, (req, res) => {
  console.log(`server running at http://localhost:${PORT}/`);
  console.log(`serving countries at http://localhost:${PORT}/companies`);
});
