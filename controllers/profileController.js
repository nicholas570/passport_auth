const profilController = {};

profilController.display = (req, res) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    isAuthenticated: req.isAuthenticated(),
    token: req.headers.authorization,
  });
};

module.exports = profilController;
