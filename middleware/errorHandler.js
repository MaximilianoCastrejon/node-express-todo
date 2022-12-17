const { CustomErrorResponse } = require("../errors/custom-errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err); //Custom err comming from controller
  if (err instanceof CustomErrorResponse) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
