const { isValidObjectId } = require("mongoose");
const { RequestError } = require("../helpers");

const isValidId = (req, res, next) => {
  const todoId = req.params.id || req.body.id;
  const userId = req.params.id || req.body.id;

  try {
    const objectId = isValidObjectId(todoId) ? todoId : userId;
    if (!isValidObjectId(objectId)) {
      throw new Error("is not a valid ObjectId");
    }
    next();
  } catch (error) {
    next(RequestError(400, error.message));
  }
};

module.exports = isValidId;
