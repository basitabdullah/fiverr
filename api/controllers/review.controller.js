import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers cannot create a review!"));

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.userId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      userId: req.userId,
      gigId: req.body.userId,
    });

    if (review)
      return next(createError(403, "You have already created a review!"));
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};
export const getReview = async (req, res, next) => {
  const reviews = await Review.find({ gigId: req.body.gigId });
  res.status(201).send(reviews);
  try {
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
