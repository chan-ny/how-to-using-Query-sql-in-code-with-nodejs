"use strict";
module.exports = (app) => {
  const controller = require("../controller/controller");
  const validatorControlller = require("../controller/validatorController");

  app.route("/taske").get(controller.list_all).post(controller.list_create);

  app
    .route("/taske/:taskId")
    .get(controller.read_task)
    .put(controller.update_task)
    .delete(controller.delete_task);
  app.route("/validation").post(validatorControlller.checkValidator);
};
