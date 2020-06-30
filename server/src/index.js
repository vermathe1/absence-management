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
  app.get('/', (req, res) => {
  
    if (Object.keys(req.query).length !== 0){
      if(req.query.userId !== undefined){
        helper
          .getLeaveDetails({userId:req.query.userId})
          .then((data) => res.send(data))
          .catch((err) => res.send(err));
      }
      if(req.query.startDate !== undefined && req.query.endDate !== undefined){
        helper
          .getLeaveDetails( { startDate: req.query.startDate, endDate:req.query.endDate } )
          .then((data) => res.send(data))
          .catch((err) => res.send(err));
      }
    }else{
      helper
      .generateICSFile()
      .then((data) => helper.downlaodFile(data,res))
      .catch((err) => res.send(err));
    }
  });
};

mount(express());