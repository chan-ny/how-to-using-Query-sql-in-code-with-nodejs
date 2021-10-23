"use strict";
const TaskModel = require("../model/appModel");

exports.list_all = (req, res) => {
  TaskModel.getAll((err, task) => {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.list_create = function (req, res) {
  TaskModel.createTask(new TaskModel(req.body), (err, task) => {
    if (err) res.send(err);
    else res.json(task);
  });
};

exports.read_task = (req, res) => {
  TaskModel.getById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    else res.json(task);
  });
};

exports.update_task = (req, res) => {
  TaskModel.updateTask(
    req.params.taskId,
    new TaskModel(req.body),
    (err, task) => {
      if (err) res.send(err);
      else res.json(task);
    }
  );
};

exports.delete_task = (req, res) => {
  TaskModel.deleteTask(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    else res.json("message: delete complete");
  });
};
