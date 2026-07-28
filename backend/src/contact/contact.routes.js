import express from "express";
import {
  deleteMessage,
  getContactsCount,
  getMessage,
  sendMessage,
} from "./contact.controller.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/", getMessage);
router.get("/count", getContactsCount);
router.delete("/:id", deleteMessage)




export default router;
