// error middleware  || NEXT function

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({
    success: false,
    error: err.message || "Something went wrong",
    url: req.originalUrl,
    err,
  });
};

export default errorMiddleware;
