import { Usuario } from "./User"


export class Estudante extends Usuario {
    private hobby: string[]

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobby: string[]
    ) {
        super(id, name, email, data_nasc, turma_id)
        this.hobby = hobby
    }
    public getHobby(): string[] {
        return this.hobby
    }
}