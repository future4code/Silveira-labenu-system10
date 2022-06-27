import { app } from "./app"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudent"
import getActiveClasses from "./endpoints/getActiveClasses"
import getAllStudents from "./endpoints/getAllStudents"
import updateModule from "./endpoints/updateModule"

app.get("/students", getAllStudents)
app.post("/students", createStudent)

app.get("/classes", getActiveClasses)
app.post("/classes", createClass)
app.put("/classes", updateModule)