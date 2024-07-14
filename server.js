const express = require("express");
const db = require("./models/index");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.use(express.json());

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successfull");
    return db.sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("Database synced up!");
    require("./routes/db.routes")(app);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to sync db:", error);
  });