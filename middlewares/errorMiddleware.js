// error middleware  || NEXT function

const errorMiddleware = (err, req, res, next) => {
  console.log(err);

  const deafaultError = {
    statusCode: 500,
    message: err,
  };

  //missing field error
  if (err.name === "ValidationError") {
    deafaultError.statusCode = 400;
    deafaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  // duplicate error;
  if (err.code && err.code === 11000) {
    deafaultError.statusCode = 400;
    deafaultError.message = `${Object.keys(
      err.keyValue
    )} field has to be unique`;
  }

  res.status(deafaultError.statusCode).json({ message: deafaultError.message });
};

export default errorMiddleware;
