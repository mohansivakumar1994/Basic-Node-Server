function isLoggedIn(req, res, next) {
if (!req.headers.token) {
 return res.status(401).json({
  message: "Token us not valid. Login to continue",
 });
}else {
 next();
}
}

module.exports = {
 isLoggedIn,
};