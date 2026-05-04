const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check-password", (req, res) => {
  const { password } = req.body;

  let score = 0;
  if (password.length > 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  res.json({ score });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
