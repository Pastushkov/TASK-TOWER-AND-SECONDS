const express = require("express");
const app = express();

app.use(express.json({ type: "application/json" }));

app.use("/", require("./src/routes"));

const start = () => {
  try {
    app.listen(5000, () =>
      console.log(`listening at http://localhost:5000`)
    );
  } catch (e) {
    console.log("Server Error " + e.toString());
    process.exit(1);
  }
};
start();
