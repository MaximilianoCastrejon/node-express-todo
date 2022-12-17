const asyncWrapper = (funct) => {
  return async (req, res, next) => {
    try {
      await funct(req, res, next);
    } catch (error) {
      next(error); //next middleware catches errors in funct
    }
  };
};

module.exports = asyncWrapper;
