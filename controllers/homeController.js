import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.json({ message: "azure-webapps-linux-node-express-basic (MI)" });
});

export default router;
