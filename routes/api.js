const router = require("express").Router();
const Article = require("../models/nytreact.js");

router.post("/api/article", function (req, res) {
  Article.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });
});


router.get("/api/articles", function (req, res) {
  Article.find({
  })
  .then((docs) => {
    res.json(docs);
  });
});


router.get("/api/savedArticles/:url", function (req, res) {
  Article.findOne({
    url: req.params.url
  })
  .then((docs) => {
    res.json(docs);
  });
});


router.delete("/api/savedArticles/:url", function (req, res) {
  Article.deleteOne({
      url: req.params.url
    })
    .then((docs) => {
      res.json(docs);
    });
});


module.exports = router;