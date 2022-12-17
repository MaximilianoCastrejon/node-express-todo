class CustomErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomErrorResponse = (msg, status) => {
  return new CustomErrorResponse(msg, status);
};

module.exports = { CustomErrorResponse, createCustomErrorResponse };
