import createError from "../utils/createError.js";
import Conversarion from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversarion({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readByBuyer: req.isSeller,
    readBySeller: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversarion.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readBySeller: true,
          readByBuyer: true,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).send(updateConversation);
  } catch (err) {
    next(err);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversarion.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({updatedAt : -1});
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversarion.findOne({ id: req.params.id });
    if(!conversation) return next(createError(404,"Not Found!"))
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};
