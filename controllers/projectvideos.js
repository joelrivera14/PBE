const Projectvideos = require("../models/projectvideos");
const { NotFoundError } = require("../errors/not-found-error");

const like = (req, res) => {
  Projectvideos.findByIdAndUpdate(
    req.params.videoId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => new NotFoundError("Not Found"))
    .then((item) => {
      res.send({ data: item });
    })
    .catch((e) => console.log(e));
};
const dislike = (req, res) => {
  Projectvideos.findByIdAndUpdate(
    req.params.videoId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => new NotFoundError("Not Found"))
    .then((item) => res.status(200).send({ data: item }))
    .catch((e) => console.log(e));
};

module.exports = {
  like,
  dislike,
};
