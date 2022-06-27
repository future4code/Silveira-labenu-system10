import { Request, Response } from "express";
import { StudentDatabase } from "../data/StudentsDatabase";


export async function getStudentByName(req: Request, res: Response, nome:any):Promise<void>{
    try {

        if(!nome){
            res.statusCode = 404
            throw new Error("campo vazio, insira um nome")
        }

        const studentDB = new StudentDatabase()

        const student = await studentDB.getStudent(nome);

        res.status(200).send(student)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}