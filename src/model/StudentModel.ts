

export class StudentModel{
    constructor(
        private id: string,
        private nome: string,
        private turma: string,
        private status: "Aprovado" | "Reprovado" = "Aprovado"
    ){}
    public getId(){
        return this.id
    }
    public getNome(){
        return this.nome
    }
    public getTurma(){
        return this.turma
    }
    public getStatus(){
        return this.status
    }
}