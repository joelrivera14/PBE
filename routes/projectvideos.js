const router = require("express").Router();
const { like, dislike } = require("../controllers/projectvideos");

router.put("./:videoId/likes", like);
router.delete("./:videoId/likes", dislike);

module.exports = router;
