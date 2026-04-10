import { TipoTeste } from "../enums/TipoTeste.js";
import { ResultadoTeste } from "../enums/ResultadoTeste.js";

export class Teste {
  constructor(
    public tipo: TipoTeste,
    public resultado: ResultadoTeste
  ) {}
}