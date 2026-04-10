import * as fs from "fs";
import { Aeronave } from "./Aeronave.js";

export class Relatorio {
  static gerar(aeronave: Aeronave, cliente: string) {
    const texto = `
===== RELATÓRIO FINAL =====

Aeronave: ${aeronave.modelo}
Código: ${aeronave.codigo}
Tipo: ${aeronave.tipo}
Capacidade: ${aeronave.capacidade}
Alcance: ${aeronave.alcance}

Cliente: ${cliente}

--- PEÇAS ---
${aeronave.pecas.map(p => `- ${p.nome} (${p.status})`).join("\n")}

--- ETAPAS ---
${aeronave.etapas.map(e => `- ${e.nome}: ${e.status}`).join("\n")}

--- TESTES ---
${aeronave.testes.map(t => `- ${t.tipo}: ${t.resultado}`).join("\n")}

============================
`;

    fs.writeFileSync("relatorio.txt", texto);
  }
}