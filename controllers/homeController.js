import { Router } from "express";
const router = Router();

router.get("/", (_req, res, _next) => {
  res.json({ message: "azure-webapps-linux-node-express-basic (MI)" });
});

export default router;
