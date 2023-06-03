import express from "express";
import {
  getController,
  postController,
  patchController,
  deleteController,
  putController,
} from "../controller/appController.js";
import {
  register,
  updateUser,
  getAllUsers,
  deleteUser,
  getSingleUser,
} from "../controller/userController.js";
const Router = express.Router();

Router.route("/")
  .get(getController) // to get a resource from the server
  .post(postController)
  .patch(patchController)
  .delete(deleteController)
  .put(putController);

Router.route("/users").post(register).get(getAllUsers);
Router.route("/users/:id")
  .patch(updateUser)
  .delete(deleteUser)
  .get(getSingleUser);

export default Router;
