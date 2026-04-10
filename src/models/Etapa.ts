import { StatusEtapa } from "../enums/StatusEtapa.js";
import { Funcionario } from "./Funcionario.js";

export class Etapa {
  public funcionarios: Funcionario[] = [];

  constructor(
    public nome: string,
    public prazo: string,
    public status: StatusEtapa = StatusEtapa.PENDENTE
  ) {}

  iniciar() {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
    }
  }

  finalizar() {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
    } else {
      console.log("Etapa precisa estar em andamento!");
    }
  }

  adicionarFuncionario(func: Funcionario) {
    const existe = this.funcionarios.find(f => f.id === func.id);

    if (!existe) {
      this.funcionarios.push(func);
    }
  }

  listarFuncionarios(): string {
    return this.funcionarios.map(f => f.nome).join(", ");
  }
}