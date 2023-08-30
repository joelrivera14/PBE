const router = require("express").Router();
const projectVideo = require("./projectvideos");

router.use("/videos", projectVideo);

module.exports = router;
