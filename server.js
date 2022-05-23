const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception. Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

//Server setup
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App Listening on PORT ${port}`);
});
