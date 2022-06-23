import {Request, Response} from "express"
import { StudentDatabase } from "../data/StudentsDatabase"

export default async function getAllStudents(req: Request, res: Response): Promise<void> {
    try {
        const studentDB = new StudentDatabase()

        const students = await studentDB.getAll()

        res.send(students)

    } catch(error:any) {
        res.status(500).send(error.message)
    }

}