const express = require("express");
const path = require("path");

const app = express();

app.use("/*/static/*", express.static(path.resolve(__dirname, "frontend/static/js", "index.mjs")));

app.get("/frontend/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 80, () => console.log("Server running..."));