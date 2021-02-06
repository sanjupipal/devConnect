const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect DB
connectDB();

const PORT = process.env.PORT || 5001;

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));

app.get("/", (req, res) => res.send(`API Running`));

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`));
