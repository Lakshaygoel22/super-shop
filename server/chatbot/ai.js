const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "Sorry, I don't understand.";
  if (msg.includes("return")) reply = "You can return products within 7 days.";
  if (msg.includes("shoe")) reply = "We have cool running shoes in the catalog!";
  if (msg.includes("discount")) reply = "We occasionally run sales—watch the homepage!";
  res.json({ reply });
});
module.exports = router;
