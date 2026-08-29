require("dotenv").config();

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");

const dbConnect = require("./config/dbConnect");

const authRoutes = require("./routes/authroute");
const userRoutes = require("./routes/userRoute");
const batchRoutes = require("./routes/BatchRoute");
const announcementRoute = require("./routes/announcementRoute");
const attendanceRoute = require("./routes/attendanceRoute");
const progressRoute = require("./routes/progressRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const gradingRoutes = require("./routes/gradingRoutes");
const dashboardRoute = require("./routes/dashboardRoute");
const studentRoutes = require("./routes/studentRoutes");
const adminRoute = require("./routes/adminRoute");
const systemRoute = require("./routes/systemRoute");
const resourceRoutes = require("./routes/resourceRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

require("./models/userModel");
require("./models/Batches");
require("./models/Resource");

const app = express();

// Public CORS configuration allowing requests from any origin
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(
  express.json({
    limit: "5mb",
  }),
);
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "ASTU MSJ Bootcamp API is running.",
  });
});

// Routes matched without /api prefix
app.use("/auth", authRoutes);
app.use("/admin", adminRoute);
app.use("/system", systemRoute);
app.use("/users", userRoutes);
app.use("/batches", batchRoutes);
app.use("/announcements", announcementRoute);
app.use("/announcement", announcementRoute);
app.use("/attendance", attendanceRoute);
app.use("/progress", progressRoute);
app.use("/assignments", assignmentRoutes);
app.use("/grading", gradingRoutes);
app.use("/dashboard", dashboardRoute);
app.use("/student", studentRoutes);
app.use("/resources", resourceRoutes);
app.use("/notifications", notificationRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error.",
  });
});

const PORT = process.env.PORT_API || process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();