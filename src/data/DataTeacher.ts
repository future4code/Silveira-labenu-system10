import { Docente } from "../model/DocenteModel";
import { BaseDatabase } from "./BaseDatabase";

export class DataTeacher extends BaseDatabase{

    public async selctAllTeachers(){
        try{
            const result = await BaseDatabase.connection("DOCENTE")
            .select("*")
            return result
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async insertTeacher(teacher: Docente){
        try{
                       
            await BaseDatabase.connection("DOCENTE")
            .insert({
                id:teacher.getId(),
                nome: teacher.getNome(),
                email:teacher.getEmail(),
                data_nasc: teacher.getDataNasc(),
                turma_id: teacher.getTurmaId()
            })
            
        }catch (error:any){
            throw new Error("Erro inesperado no servidor")
        }
    }

    public async updateClassTeacher(turma_id: string, id:string){
    
        try{
            await BaseDatabase.connection("DOCENTE")
            .where({id: id})
            .update({turma_id: turma_id})
                       
        }catch(error:any){
             throw new Error(error.message)
        }
    }
}