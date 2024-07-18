const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

// ROUTE 2: Add a new note using POST: "/api/notes/addnote". No authentication required
router.post(
  "/addnote",
  [
    body("name")
      .isLength({ min: 4 })
      .withMessage("Name must be at least 4 characters long"),
    body("email")
      .isEmail()
      .withMessage("Invalid email address"),
    body("subject")
      .isLength({ min: 1 })
      .withMessage("Subject is required"),
    body("message")
      .isLength({ min: 1 })
      .withMessage("Message is required")
  ],
  async (req, res) => {
    const { name, email, subject, message } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const note = new Note({
        name,
        email,
        subject,
        message,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
