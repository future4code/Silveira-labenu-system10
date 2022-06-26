

export class Usuario{
    constructor(
        protected id: string,
        protected nome: string,
        protected email: string,
        protected data_nasc: string,
        protected turma_id: string
    ){}
    public getId(){
        return this.id
    }
    public getNome(){
        return this.nome
    }
    public getEmail(){
        return this.email
    }
    public getDataNasc(){
        return this.data_nasc
    }
    public getTurmaId(){
        return this.turma_id
    }
}