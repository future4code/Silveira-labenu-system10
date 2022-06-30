export class ClassModel{
    constructor(
        private id: string,
        private nome: string,
        private estudantes: string,
        private docentes: string,
        private modulo: number
    ){}

    public getId(){
        return this.id
    }
    public getNome(){
        return this.nome
    }
    public getEstudantes(){
        return this.estudantes
    }
    public getDocentes(){
        return this.docentes
    }
    public getModulo(){
        return this.modulo
    }
}
