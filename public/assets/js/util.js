// crypto module generates random string to be used as an ID
const crypto = require("crypto");
const generateId = () => {
  return crypto.randomBytes(6).toString("hex");
};

module.exports = { generateId };
