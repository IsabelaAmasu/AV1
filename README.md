# ✈️ Aerocode - Sistema de Gerenciamento de Aeronaves

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![CLI](https://img.shields.io/badge/Interface-CLI-black?style=for-the-badge)

O **Aerocode** é um sistema desenvolvido em **TypeScript** focado no controle completo do ciclo de vida de manutenção de aeronaves. O software abrange desde o cadastro técnico inicial até a emissão de relatórios de conformidade, garantindo segurança e organização nos processos de oficina.

---

## 🚀 Como Rodar o Projeto

1. **Instale as dependências:**
   No terminal, dentro da pasta do projeto, execute:
   ```bash
   npm install
2. **Inicie o sistema:**
   No terminal, dentro da pasta do projeto, execute:
   ```bash
   npm start
   
---

## 🔐 Credenciais de Acesso
  - Usuário: admin <br>
  - Senha: 123
   
---

## 🛠️ Tecnologias e Configurações

* **Linguagem:** TypeScript
* **Runtime:** Node.js (v20+)
* **Módulos:** ESM (ECMAScript Modules)
* **Interatividade:** `readline-sync` (Interface via terminal)
* **Compilação:** Configurada via `tsconfig.json` utilizando `NodeNext`

---

## 📋 Funcionalidades do Sistema

- [x] **Autenticação:** Sistema de login para proteção de dados.
- [x] **Cadastro Técnico:** Registro de aeronaves (código, modelo e tipo).
- [x] **Gestão de Manutenção:** Adição de peças e controle de etapas sequenciais.
- [x] **Lógica de Negócio:** Travas de segurança (impede iniciar nova etapa sem concluir a anterior).
- [x] **Persistência:** Salvamento automático em arquivos de texto (.txt).
- [x] **Relatórios:** Exportação de dados formatados para `relatorio.txt`.

---
   
## 📂 Organização do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

```text
src/
├── index.ts          # Ponto de entrada e lógica do menu principal
├── models/           # Classes (Aeronave, Etapa, Peca, Funcionario, Relatorio)
├── enums/            # Definições de status fixos (ex: StatusEtapa)
├── services/         # Camada de persistência (FileService.ts)
└── data/             # Armazenamento dos arquivos TXT (banco de dados)
```
---

## ⚠️ Regras de Negócio
- Não é permitido cadastrar aeronaves com código duplicado
- Etapas devem seguir ordem sequencial
- Não é possível finalizar uma etapa sem iniciá-la
- Funcionários não podem ser duplicados na mesma etapa
- Uso obrigatório de enums para padronização

---

## 📚 Conceitos Aplicados
- Programação Orientada a Objetos (POO)
- Encapsulamento
- Tipagem estática
- Manipulação de arquivos
- Estrutura modular
- CLI (Command Line Interface)

---

<p align="center">
  <i><sub>Projeto acadêmico desenvolvido para a disciplina de Programação Orientada a Objetos.</sub></i>
</p>


