import { TipoAeronave } from "../enums/TipoAeronave.js";
import { Peca } from "./Peca.js";
import { Etapa } from "./Etapa.js";
import { Teste } from "./Teste.js";

export class Aeronave {
  public pecas: Peca[] = [];
  public etapas: Etapa[] = [];
  public testes: Teste[] = [];

  constructor(
    public codigo: string,
    public modelo: string,
    public tipo: TipoAeronave,
    public capacidade: number,
    public alcance: number
  ) {}

  adicionarPeca(peca: Peca) {
    this.pecas.push(peca);
  }

  adicionarEtapa(etapa: Etapa) {
    this.etapas.push(etapa);
  }

  adicionarTeste(teste: Teste) {
    this.testes.push(teste);
  }

  detalhes(): string {
    return `
Código: ${this.codigo}
Modelo: ${this.modelo}
Tipo: ${this.tipo}
Capacidade: ${this.capacidade}
Alcance: ${this.alcance}
`;
  }
}