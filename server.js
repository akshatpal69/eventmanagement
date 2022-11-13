const express = require("express");
const app = express();
const eventRoute = require("./routes/event")
app.use(express.json())

app.use("/api/v3/app", eventRoute)

app.listen(80, () => {
    console.log("app running on http://localhost:80")
});