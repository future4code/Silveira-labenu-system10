import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection("ESTUDANTE").select("*")
            return result
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
    public async insert(student: StudentModel){
        try {
            await BaseDatabase.connection("ESTUDANTE")
            .insert({
                id: student.getId(),
                nome: student.getNome(),
                email: student.getEmail(),
                data_nasc: student.getDataNasc(),
                turma_id: student.getTurmaId()
            })
        } catch (error) {
            throw new Error("Error inesperado")
        }
    }
}