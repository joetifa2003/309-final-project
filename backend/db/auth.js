const User = require("./schema/user");

async function createUser(email, name, password) {
  await User.create({
    name,
    email,
    password,
    imgUrl: "asdasd.com/image.jpg", // TODO: handle this after upload is done
  });
}

async function getUserByEmail(email) {
  return await User.findOne({ email });
}

async function getUserById(id) {
  return await User.findById(id);
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
