import { TipoPeca } from "../enums/TipoPeca.js";
import { StatusPeca } from "../enums/StatusPeca.js";

export class Peca {
  constructor(
    public nome: string,
    public tipo: TipoPeca,
    public fornecedor: string,
    public status: StatusPeca
  ) {}

  atualizarStatus(novoStatus: StatusPeca) {
    this.status = novoStatus;
  }
}