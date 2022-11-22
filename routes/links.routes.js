import express from "express";
import * as linksModel from "../models/links.model.js";

export const linksRouter = express.Router();


/*
todosRouter.get("/", async function (req, res) {
  const links = await linksModel.getAllTodos();

  res.status(200).json({
    success: true,
    payload: todos,
  });
});

todosRouter.post("/", async function (req, res) {
  const somethingIsMissing =
    req.body.task === undefined || req.body.completionDate === undefined;

  if (somethingIsMissing) {
    res.status(400).json({
      success: false,
      error: "Please provide a 'task' and 'completionDate'",
    });
    return;
  }

  const created = await todosModel.createTodo({
    task: req.body.task,
    completionDate: req.body.completionDate,
  });

  res.status(201).json({
    success: true,
    payload: created,
  });
});

todosRouter.delete("/:id", async function (req, res) {
  const deleted = await todosModel.deleteTodoById(req.params.id);

  res.status(200).json({
    success: true,
    payload: deleted,
  });
});


todosRouter.patch("/:id", async function (req, res){
  const updated = await todosModel.updateById(req.params.id,req.body);
  console.log(updated)
    res.status(200).json({
    success: true,
    payload: updated,
    

  });

});*/