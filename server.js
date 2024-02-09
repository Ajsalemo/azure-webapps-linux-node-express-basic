import express from "express";
const port = process.env.PORT || 8090;
const app = express();

import homeController from "./controllers/homeController.js";

app.use("/", homeController);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
