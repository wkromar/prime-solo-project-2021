const rejectUnauthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.is_admin) {
    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = { rejectUnauthenticatedAdmin };
