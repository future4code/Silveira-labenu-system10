import { Request, Response } from "express";
import { ClassesDatabase } from "../data/ClassesDatabase";

export default async function getActiveClasses(req:Request, res:Response): Promise<void> {
    try {
        const turmaDB = new ClassesDatabase()

        const turmasAtivas = await turmaDB.getAll()

        res.status(200).send(turmasAtivas)


    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}