import * as fs from "fs";

export class FileService {

  // ================= SALVAR =================
  static salvar(caminho: string, dados: any): void {
    try {
      const json = JSON.stringify(dados, null, 2);
      fs.writeFileSync(caminho, json, "utf-8");
    } catch (erro) {
      console.log("Erro ao salvar arquivo:", erro);
    }
  }

  // ================= CARREGAR =================
  static carregar(caminho: string): any[] {
    try {
      // se não existir, cria automaticamente
      if (!fs.existsSync(caminho)) {
        fs.writeFileSync(caminho, "[]", "utf-8");
        return [];
      }

      const conteudo = fs.readFileSync(caminho, "utf-8");

      // se estiver vazio
      if (!conteudo.trim()) {
        return [];
      }

      return JSON.parse(conteudo);
    } catch (erro) {
      console.log("Erro ao carregar arquivo:", erro);
      return [];
    }
  }

  // ================= LIMPAR =================
  static limpar(caminho: string): void {
    try {
      fs.writeFileSync(caminho, "[]", "utf-8");
    } catch (erro) {
      console.log("Erro ao limpar arquivo:", erro);
    }
  }
}