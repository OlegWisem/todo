if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://wisem:123456@ds117200.mlab.com:17200/vidjot-prod'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
