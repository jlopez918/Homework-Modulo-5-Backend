import express from "express";
import { readFileSync, writeFileSync } from "fs";
import authMiddleware from "./middlewares/authMiddleware.js";
import validationMiddleware from "./middlewares/validationMiddleware.js";

const app = express();
const port = 3002;

app.use(express.json());

let students = JSON.parse(readFileSync("./students.json", "utf-8"));

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((stu) => stu.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

app.post("/students", authMiddleware, validationMiddleware, (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body,
  };

  students.push(newStudent);
  writeFileSync("./students.json", JSON.stringify(students, null, 2), "utf-8");
  res.status(201).json(newStudent);
});

app.put("/students/:id", authMiddleware, validationMiddleware, (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex((stu) => stu.id === studentId);

  if (index !== -1) {
    students[index] = { id: studentId, ...req.body };
    writeFileSync(
      "./students.json",
      JSON.stringify(students, null, 2),
      "utf-8"
    );
    res.json(students[index]);
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

app.delete("/students/:id", authMiddleware, (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex((stu) => stu.id === studentId);

  if (index !== -1) {
    students.splice(index, 1);
    writeFileSync(
      "./students.json",
      JSON.stringify(students, null, 2),
      "utf-8"
    );
    res.json({ message: "Estudiante eliminado exitosamente" });
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
