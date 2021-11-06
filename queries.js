const User = require("./Models/User");
const News = require("./Models/News");
const Tips = require("./Models/Tips");

User.insertMany([
  {
    email: "codingfrancis100@gmail.com",
    username: "codingdrizzle",
    password: "drizzle2000",
  },
  {
    email: "danielbuabin@gmail.com",
    username: "dbuabin",
    password: "DB2021",
  },
])
  .then((users) => {
    console.log("Users added: ", users);
  })
  .catch((e) => {
    throw e;
  });
