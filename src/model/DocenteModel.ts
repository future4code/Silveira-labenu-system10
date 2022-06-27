import { Usuario } from "./UserModel";

type Especialidade = {
    nome:"JS" | "CSS" | "React" | "Typescript" | "POO"
}
export class Docente extends Usuario {
    constructor(
        id: number,
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: number,
        private especialidade: Especialidade[],
    ){
        super(id, nome, email, data_nasc, turma_id )
        this.especialidade = especialidade
    }

    public getEspecialidade(): Especialidade[]{
        return this.especialidade
    }
}