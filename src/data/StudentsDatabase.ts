import { Request, Response } from "express";
import { Hobby } from "../model/Hobby";
import { Estudante } from "../model/Student";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("ESTUDANTES").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
    public async insert(student: Estudante){
        try {
            // const hobbyId = (): string => {
                //     return Date.now().toString()
            // }

            await BaseDatabase.connection("ESTUDANTES")
            .insert({
                id: student.getId(),
                nome: student.getNome(),
                email: student.getEmail(),
                data_nasc: student.getDataNasc(),
                turma_id: student.getTurmaId()
            })

            // let hobby = student.getHobby();
            
            for (let i=0; i< student.getHobby().length; i++){
                // const id = hobbyId()

                let nome = await BaseDatabase.connection("HOBBY")
                .select("nome").where("nome", "LIKE", `%${student.getHobby()[i]}%`);
                

                if(!nome){
                    let id = Math.floor(Math.random()*Date.now()).toString(30)
                    let newHobby = new Hobby(id, student.getHobby()[i]);

                    await BaseDatabase.connection("HOBBY")
                    .insert({
                        "id": Math.floor(Math.random()*Date.now()).toString(30),
                        "nome": student.getHobby()[i]
                    })
                    

                    await BaseDatabase.connection("ESTUDANTES_HOBBY")
                    .insert({
                        "id": Math.floor(Math.random()*Date.now()).toString(30),
                        "estudante_id": student.getId(),
                        "hobby_id": newHobby.getId()
                    })
                }
                
            }
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    public async getStudent(req: Request){
        try {
            
        const nome: string = req.params.nome;
            let result = await BaseDatabase.connection("ESTUDANTES")
            .select("*")
            .where("nome", "LIKE", `%${nome}%`)

            return result
            
        } catch (error) {
            throw new Error("deu doideira")
        }
    }
}
