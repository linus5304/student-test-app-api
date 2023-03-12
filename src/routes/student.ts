import { Student } from "../model/student";
import { Router, Request, Response } from "express";

export const studentRoute = Router();

studentRoute.post("/create", async (req: Request, res: Response) => {
  const { firstName, lastName, classe, gender, dateOfBirth } = req.body;

  const student = new Student({
    firstName,
    lastName,
    classe,
    gender,
    dateOfBirth,
  });
  try {
    const result = await student.save();
    res.json(result);
  } catch (err) {
    res.send(err).json();
  }
});

studentRoute.get("/", async (req: Request, res: Response) => {
  const result = await Student.find({});

  try {
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoute.patch("/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    const result = await student?.save();
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

studentRoute.delete("/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id, req.body);

    if (!student) res.status(404).json("No Item found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});
