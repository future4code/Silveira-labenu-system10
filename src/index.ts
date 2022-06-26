import { app } from "./app"
import createStudent from "./endpoints/createStudent"
import getAllStudents from "./endpoints/getAllStudents"
import { getStudentByName } from "./endpoints/getStudentbyName"

app.get("/students", getAllStudents)
app.post("/students", createStudent)
app.get("/students/:nome", getStudentByName);
// app.put("/estudante", putEstudante);