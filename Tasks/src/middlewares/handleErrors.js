const handleErrors = (err, req, res) => {
  if (err instanceof Error) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
};

module.exports = handleErrors;
