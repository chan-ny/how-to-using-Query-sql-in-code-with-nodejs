const sql = require("../db");

const tasks = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

tasks.createTask = function (newTask, result) {
  sql.query("insert into tasks set ?", newTask, (err, res) => {
    if (err) {
      console.log("error :", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

tasks.getAll = (result) => {
  sql.query("select * from tasks", (err, res) => {
    if (err) {
      console.log("error :", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

tasks.getById = (taskId, result) => {
  sql.query(
    "select id,task,status,created_at FROM tasks where id = ?",
    taskId,
    (err, res) => {
      if (err) {
        console.log("error:", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

tasks.updateTask = (id, task, result) => {
  sql.query(
    "update tasks set task = ? where id = ?",
    [task.task, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("update ok :", res);
        result(null, res);
      }
    }
  );
};

tasks.deleteTask = (id, result) => {
  sql.query("delete from tasks where id = ?", [id], (err, res) => {
    if (err) {
      console.log("error :", err);
      result(err, null);
    } else {
      console.log("detele ok");
      result(null, res);
    }
  });
};

module.exports = tasks;
