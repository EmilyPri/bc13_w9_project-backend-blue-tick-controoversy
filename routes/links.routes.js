import express from "express";
import * as linksModel from "../models/links.model.js";

export const linksRouter = express.Router();

linksRouter.get("/:week", async function (req, res) {
  const links = await linksModel.getLinksByWeek(req.params.week);

  res.status(200).json({
    success: true,
    payload: links,
  });
});

linksRouter.post("/", async function (req, res) {
  const somethingIsMissing =
  req.body.link === undefined || req.body.title === undefined || req.body.description === undefined || req.body.week === undefined || req.body.subject === undefined;

  if (somethingIsMissing) {
    res.status(400).json({
      success: false,
      error: "Please provide all fields for link to be added",
    });
    return;
  }

  const created = await linksModel.createLink(req.body);

  res.status(201).json({
    success: true,
    payload: created,
  });
});
/*

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