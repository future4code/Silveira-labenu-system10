export class Usuario {
  constructor(
      private id: number,
      private nome: string,
      private email: string,
      private data_nasc: string,
      private turma_id: number
  ) { }

  public getId() {
      return this.id
  }
  public getNome() {
      return this.nome
  }
  public getEmail() {
      return this.email
  }
  public getData_Nasc() {
      return this.data_nasc
  }
  public getTurma_id() {
      return this.turma_id
  }
}