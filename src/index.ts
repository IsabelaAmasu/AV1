import * as readline from "readline-sync";
import { Aeronave } from "./models/Aeronave.js";
import { TipoAeronave } from "./enums/TipoAeronave.js";
import { FileService } from "./services/FileService.js";
import { Peca } from "./models/Peca.js";
import { TipoPeca } from "./enums/TipoPeca.js";
import { StatusPeca } from "./enums/StatusPeca.js";
import { Etapa } from "./models/Etapa.js";
import { StatusEtapa } from "./enums/StatusEtapa.js";
import { Funcionario } from "./models/Funcionario.js";
import { NivelPermissao } from "./enums/NivelPermissao.js";
import { Teste } from "./models/Teste.js";
import { TipoTeste } from "./enums/TipoTeste.js";
import { ResultadoTeste } from "./enums/ResultadoTeste.js";
import { Relatorio } from "./models/Relatorio.js";

// ================= DADOS =================
let aeronaves: Aeronave[] = FileService.carregar("src/data/aeronaves.txt");

// usuário padrão
let funcionarios: Funcionario[] = [
  new Funcionario("ADM001", "Admin", "123", "Rua X", "admin", "123", NivelPermissao.ADMINISTRADOR)
];

// ================= LOGIN =================
function login(): Funcionario | null {
  console.log("=== LOGIN ===");
  const usuario = readline.question("Usuario: ");
  const senha = readline.question("Senha: ", { hideEchoBack: true });

  const func = funcionarios.find(f => f.autenticar(usuario, senha));

  if (!func) {
    console.log("Login inválido!");
    return null;
  }

  console.log(`Bem-vindo ${func.nome}!`);
  return func;
}

// ================= MENU =================
function menu() {
  const user = login();
  if (!user) return;

  while (true) {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar Aeronave");
    console.log("2 - Listar Aeronaves");
    console.log("3 - Adicionar Peça");
    console.log("4 - Adicionar Etapa");
    console.log("5 - Finalizar Etapa");
    console.log("6 - Adicionar Teste");
    console.log("7 - Gerar Relatório");
    console.log("8 - Salvar");
    console.log("9 - Sair");

    const op = readline.question("Escolha: ");

    // ================= AERONAVE =================
    if (op === "1") {
      const codigo = readline.question("Codigo: ");

      if (aeronaves.find(a => a.codigo === codigo)) {
        console.log("Código já existe!");
        continue;
      }

      const modelo = readline.question("Modelo: ");
      const tipo = readline.question("Tipo (COMERCIAL/MILITAR): ") as TipoAeronave;
      const capacidade = Number(readline.question("Capacidade: "));
      const alcance = Number(readline.question("Alcance: "));

      aeronaves.push(new Aeronave(codigo, modelo, tipo, capacidade, alcance));
      console.log("Aeronave cadastrada!");
    }

    // ================= LISTAR =================
    else if (op === "2") {
      // Ajustado para o nome padrão do diagrama: exibirDetalhes
      aeronaves.forEach(a => console.log(a.detalhes())); 
    }

    // ================= PEÇA =================
    else if (op === "3") {
      const cod = readline.question("Codigo da aeronave: ");
      const aero = aeronaves.find(a => a.codigo === cod);

      if (!aero) {
        console.log("Aeronave não encontrada!");
        continue;
      }

      const nome = readline.question("Nome da peça: ");
      const tipo = readline.question("Tipo (NACIONAL/IMPORTADA): ") as TipoPeca;
      const fornecedor = readline.question("Fornecedor: ");

      const peca = new Peca(nome, tipo, fornecedor, StatusPeca.EM_PRODUCAO);
      aero.adicionarPeca(peca);

      console.log("Peça adicionada!");
      console.log("VC ACHOU UM EASTER EGG :D")
    }

    // ================= ETAPA =================
    else if (op === "4") {
      const cod = readline.question("Codigo da aeronave: ");
      const aero = aeronaves.find(a => a.codigo === cod);

      if (!aero) {
        console.log("Aeronave não encontrada!");
        continue;
      }

      const nome = readline.question("Nome da etapa: ");
      const prazo = readline.question("Prazo: ");

      const ultima = aero.etapas[aero.etapas.length - 1];

      if (ultima && ultima.status !== StatusEtapa.CONCLUIDA) {
        console.log("Finalize a etapa anterior primeiro!");
        continue;
      }

      const etapa = new Etapa(nome, prazo);
      etapa.iniciar(); // Ajustado para o nome do diagrama
      aero.adicionarEtapa(etapa);

      console.log("Etapa iniciada!");
    }

    // ================= FINALIZAR ETAPA =================
    else if (op === "5") {
      const cod = readline.question("Codigo da aeronave: ");
      const aero = aeronaves.find(a => a.codigo === cod);

      if (!aero || aero.etapas.length === 0) {
        console.log("Nenhuma etapa encontrada!");
        continue;
      }

      const etapaAtual = aero.etapas[aero.etapas.length - 1];
      etapaAtual.finalizar(); // Ajustado para o nome do diagrama

      console.log("Etapa finalizada!");
    }

    // ================= TESTE =================
    else if (op === "6") {
      const cod = readline.question("Codigo da aeronave: ");
      const aero = aeronaves.find(a => a.codigo === cod);

      if (!aero) {
        console.log("Aeronave não encontrada!");
        continue;
      }

      const tipo = readline.question("Tipo (ELETRICO/HIDRAULICO/AERODINAMICO): ") as TipoTeste;
      const resultado = readline.question("Resultado (APROVADO/REPROVADO): ") as ResultadoTeste;

      aero.adicionarTeste(new Teste(tipo, resultado));

      console.log("Teste adicionado!");
    }

    // ================= RELATORIO =================
    else if (op === "7") {
      const cod = readline.question("Codigo da aeronave: ");
      const aero = aeronaves.find(a => a.codigo === cod);

      if (!aero) {
        console.log("Aeronave não encontrada!");
        continue;
      }

      const cliente = readline.question("Nome do cliente: ");
      // Verifique se o método na sua classe Relatorio se chama gerar ou gerarRelatorio
      Relatorio.gerar(aero, cliente); 

      console.log("Relatório gerado!");
    }

    // ================= SALVAR =================
    else if (op === "8") {
      FileService.salvar("src/data/aeronaves.txt", aeronaves);
      console.log("Dados salvos!");
    }

    else if (op === "9") {
      console.log("Saindo...");
      break;
    }
  }
}

menu();