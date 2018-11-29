const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./users.js");

router.use("/api", apiRoutes);
router.use(userRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
