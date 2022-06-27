import { app } from "./app"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import getActiveClasses from "./endpoints/getActiveClasses"
import getAllStudents from "./endpoints/getAllStudents"
import { getStudentByName } from "./endpoints/getStudentbyName"
import updateModule from "./endpoints/updateModule"
import {createDocente} from "./endpoints/createDocentes";
// import putEstudante from "./endpoints/"

app.get("/students", getAllStudents)
app.post("/students", createStudent)
app.get("/classes", getActiveClasses)
app.post("/classes", createClass)
app.put("/classes", updateModule)
app.get("/students/:nome", getStudentByName);
// app.put("/estudante", putEstudante);

/* Criar docente */
app.post("/docente", createDocente);

