import {Request, Response} from "express"
import { StudentDatabase } from "../data/StudentsDatabase"
import { Estudante } from "../model/Student"


export default async function createStudent (req: Request, res: Response): Promise<void> {

    try {
        const {nome, email, data_nasc, turma_id, } = req.body
        let hobby: string[] = req.body.hobby
        const id:string =  Math.floor(Math.random()*Date.now()).toString(36);

        const dataCut = data_nasc.split("/",3)
        const data = `${dataCut[0]}/${dataCut[1]}/${dataCut[2]}`

        if(!nome || !data_nasc || !turma_id || !hobby || !email){
            res.statusCode = 404
            throw new Error("dados não encontrados, verifique os campos.")
        }

        const student = new Estudante(id, nome, email, data, turma_id, hobby)
        
        const studentDB = new StudentDatabase()

        await studentDB.insert(student)

        res.status(201).send({message: "deu certo"})

    } catch(error: any) {
        res.status(500).send(error.message)
    }


}