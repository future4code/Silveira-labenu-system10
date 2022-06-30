import { ClassModel } from "../model/ClassModel";
import { BaseDatabase } from "./BaseDatabase";

export class ClassesDatabase extends BaseDatabase{
    public async getAll(){
        try {
            const result = await BaseDatabase.connection.raw(`
            SELECT * FROM TURMA WHERE modulo != "0"
            `)
            return result
        } catch (error:any) {
            throw new Error("Erro inesperado")
        }
    }

    public async insert(turma:ClassModel) {
        try {
            await BaseDatabase.connection("turma")
            .insert({
                id: turma.getId(),
                nome: turma.getNome(),
                estudantes: turma.getEstudantes(),
                docentes: turma.getDocentes(),
                modulo: turma.getModulo()
            })
        } catch (error:any) {
            throw new Error("Erro inesperado")
        }
    }

    public async update(id:string, modulo:number) {
        try {
            await BaseDatabase.connection.raw(`
            UPDATE TURMA
            SET 
            modulo = "${modulo}"
            WHERE id = "${id}";
            `)
        } catch (err:any) {
            throw new Error("Erro inesperado")
        }
    }
}