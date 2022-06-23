import {Request, Response} from "express"
import { StudentDatabase } from "../data/StudentsDatabase"
import { StudentModel } from "../model/StudentModel"


export default async function createStudent (req: Request, res: Response): Promise<void> {

    try {
        const {nome, turma, status} = req.body
        const id = Date.now().toString()

        const student = new StudentModel(id, nome, turma, status)

        const studentDB = new StudentDatabase()

        await studentDB.insert(student)

        res.status(201).end()

    } catch(error: any) {
        res.status(500).end()
    }


}