import { Request, Response } from "express";
import { ClassesDatabase } from "../data/ClassesDatabase";
import { ClassModel } from "../model/ClassModel";

export default async function createClass (req: Request, res: Response) : Promise<void> {
    try {

        const {nome, estudantes, docentes, modulo} = req.body
        const id = Date.now().toString()

        const turma = new ClassModel(id,nome, estudantes, docentes, modulo)

        const turmaDB = new ClassesDatabase()

        await turmaDB.insert(turma)

        res.status(201).end()

    } catch (err: any) {
        res.status(422).send({message: err.message})
    }
}