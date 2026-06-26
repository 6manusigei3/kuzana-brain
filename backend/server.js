require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const pdfParse = require("pdf-parse");
const { GoogleGenAI } = require("@google/genai");

const { saveHash } = require("./blockchain");

const app = express();

app.use(cors());
app.use(express.json());

// Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Store extracted document text
let documentText = "";

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Kuzana Brain Backend!");
});

// Upload PDF
app.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    const buffer = fs.readFileSync(req.file.path);

    const pdf = await pdfParse(buffer);

    documentText = pdf.text;

    console.log("PDF Loaded Successfully");

    // Generate SHA-256 Hash
    const hash = crypto
      .createHash("sha256")
      .update(buffer)
      .digest("hex");

    console.log("Document Hash:");
    console.log(hash);

    // Store hash on Avalanche
    const transactionHash = await saveHash(hash);

    console.log("Stored on Avalanche");

    res.json({
      success: true,
      message: "PDF uploaded successfully!",
      documentHash: hash,
      transactionHash: transactionHash,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload failed.",
      error: error.message,
    });

  }
});

// Ask Gemini
app.post("/ask", async (req, res) => {

  try {

    const { question } = req.body;

    if (!documentText) {

      return res.status(400).json({
        success: false,
        message: "Upload a PDF first.",
      });

    }

    const prompt = `
You are Kuzana Brain.

Only answer using the uploaded document.

DOCUMENT:
${documentText}

QUESTION:
${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      answer: response.text,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Gemini Error",
    });

  }

});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Kuzana Brain running on http://localhost:${PORT}`);
});
