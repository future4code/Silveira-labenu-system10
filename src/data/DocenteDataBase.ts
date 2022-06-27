import { Docente } from "../model/DocenteModel";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDataBase extends BaseDatabase {
    public async criarDocente(docente: Docente) {
        console.log(docente.getEspecialidade())
        const get_id_especialidade = (): number => {
            return Number(Math.floor(Date.now() * Math.random()))
        }
        const id_especialidade = get_id_especialidade()
        const id_docenteEspecialidade = (): number => {
            return Number(Math.floor(Date.now() * Math.random()))
        }
        console.log(id_especialidade)
        console.log(id_especialidade)
        try {
            await BaseDatabase.connection("DOCENTE")
                .insert({ 
                    id: docente.getId(),                   
                    nome: docente.getNome(),
                    email: docente.getEmail(),
                    data_nasc: docente.getData_Nasc(),
                    turma_id: docente.getTurma_id(), 
                })
            await BaseDatabase.connection("ESPECIALIDADE") 
            .insert({
                id: id_especialidade,
                nome: docente.getEspecialidade()
            })   
            await BaseDatabase.connection("DOCENTE_ESPECIALIDADE") 
            .insert({
                id: id_docenteEspecialidade(),
                docente_id: docente.getId(),
                especialidade_id: id_especialidade
            })   
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async pegarDocentesAtivos() {
        try {
            const result = await BaseDatabase.connection("DOCENTE")
                .join("DOCENTE_ESPECIALIDADE","DOCENTE.id","DOCENTE_ESPECIALIDADE.docente_id")
                .join("ESPECIALIDADE","DOCENTE_ESPECIALIDADE.ESPECIALIDADE_id","ESPECIALIDADE.id")
                .select("DOCENTE.nome as nome", "DOCENTE.email", "DOCENTE.data_nasc", "DOCENTE.turma_id", "ESPECIALIDADE.nome as ESPECIALIDADE")
            return result

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async mudarDocenteTurma(id: number, turma_id: number) {
        try {
            await BaseDatabase.connection("DOCENTE")
                .update({
                    turma_id: turma_id
                })
                .where("id", id)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}