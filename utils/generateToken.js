const jwt = require('jsonwebtoken');

module.exports = (user, secretoken) => {
  const token = jwt.sign(user, secretoken);
  return `Bearer ${token}`;
};
