import { Router } from "express";
import { getQuotePdf } from "../controllers/konark.controller";

const router = Router();

router.post("/quotation", getQuotePdf);

export default router;
