import createUser from "./user/createUser";
import updateUser from "./user/updateUser";
import deleteUser from "./user/deleteUser";
import logInUser from "./user/logInUser";

import createPost from "./post/createPost";
import deletePost from "./post/deletePost";
import updatePost from "./post/updatePost";

import createCode from "./code/createCode";
import updatePassword from "./code/updatePassword";
import verify from "./code/verify";

export default {
  createUser,
  deleteUser,
  updateUser,
  logInUser,

  createPost,
  deletePost,
  updatePost,

  createCode,
  updatePassword,

  verify,
};
