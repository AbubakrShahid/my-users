require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  process.on('SIGTERM', () => server.close());
}