const express = require("express");
const helper = require("./helper");
var cors = require("cors");

const mount = (app) => {
  app.use(cors());
  app.listen(3000);
  console.log(`[app]: http://localhost:3000`);

  app.get("/getLeavesList", (req, res) => {
    helper
      .getLeaveDetails()
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });
};
mount(express());
