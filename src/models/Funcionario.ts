import { NivelPermissao } from "../enums/NivelPermissao.js";

export class Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public telefone: string,
    public endereco: string,
    public usuario: string,
    public senha: string,
    public nivel: NivelPermissao
  ) {}

  autenticar(usuario: string, senha: string): boolean {
    return this.usuario === usuario && this.senha === senha;
  }
}