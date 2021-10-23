const express = require("express");
const app = express();
const bodyParser = require("body-parser");
port = process.env.PORT || 3000;

const route = require("./routes/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.listen(port, () => {
  console.log("server running port " + port);
});
