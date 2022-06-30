import { Request, Response } from "express";
import { ClassesDatabase } from "../data/ClassesDatabase";

export default async function updateModule (req:Request, res:Response) : Promise<void> {
    try {

        const {id, modulo} = req.body
        const turmaDB = new ClassesDatabase()
        await turmaDB.update(id, modulo)
    } catch (err:any) {
        res.status(400).send({message: err.message})
    }
}