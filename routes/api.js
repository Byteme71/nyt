const router = require("express").Router();
const Nytreact = require("../models/nytreact.js");

router.post("/api/article", function (req, res) {
  Nytreact.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });
});


router.get("/api/articles", function (req, res) {
  Nytreact.find({
  })
  .then((docs) => {
    res.json(docs);
  });
});


// router.get("/api/articles/:url", function (req, res) {
//   Article.findOne({
//     url: req.params.url
//   })
//   .then((docs) => {
//     res.json(docs);
//   });
// });


router.delete("/api/articles/:id", function (req, res) {
  console.log("are we getting into the backend delete route")
  Nytreact.findOneAndDelete({
    _id: req.params.id
  })
    .then((docs) => {
      res.json(docs);
    });
});


module.exports = router;