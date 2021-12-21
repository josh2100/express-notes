const crypto = require("crypto");
const generateId = () => {
  return crypto.randomBytes(6).toString("hex");
};

module.exports = { generateId };
