"use strict";
/* ====================
 Sistema de Mensagens
==================== */
Object.defineProperty(exports, "__esModule", { value: true });
// Coitadinho
class Contatinho {
    nome;
    celular;
    constructor(nome, celular) {
        this.nome = nome;
        this.celular = celular;
    }
}
// Mensagem
class Mensagem {
    destinatario;
    horaEnvio;
    conteudo;
    constructor(destinatario, horaEnvio, conteudo) {
        this.destinatario = destinatario;
        this.horaEnvio = horaEnvio;
        this.conteudo = conteudo;
    }
}
// Mensagem de Texto
class MsgTexto extends Mensagem {
    numChar;
    constructor(destinatario, horaEnvio, conteudo) {
        super(destinatario, horaEnvio, conteudo);
        this.numChar = conteudo.length;
    }
    toString() {
        return `[TEXTO] 
Para: ${this.destinatario.nome}
Horário: ${this.horaEnvio}
Mensagem: ${this.conteudo}
Caracteres: ${this.numChar}`;
    }
}
// Mensagem de Áudio
class MsgAudio extends Mensagem {
    duracao;
    constructor(destinatario, horaEnvio, conteudo, duracao) {
        super(destinatario, horaEnvio, conteudo);
        this.duracao = duracao;
    }
    toString() {
        return `[ÁUDIO] 
Para: ${this.destinatario.nome}
Horário: ${this.horaEnvio}
Áudio: ${this.conteudo}
Duração: ${this.duracao} segundos`;
    }
}
// Mensagem de Foto
class MsgFoto extends Mensagem {
    tamanho;
    constructor(destinatario, horaEnvio, conteudo, tamanho) {
        super(destinatario, horaEnvio, conteudo);
        this.tamanho = tamanho;
    }
    toString() {
        return `[FOTO] 
Para: ${this.destinatario.nome} 
Horário: ${this.horaEnvio} 
Foto: ${this.conteudo} 
Tamanho: ${this.tamanho} KB`;
    }
}
// Whatsapp
class Whatsapp {
    contatos = [];
    mensagens = [];
    adicionarContato(contato) {
        this.contatos.push(contato);
    }
    adicionarMensagem(mensagem) {
        this.mensagens.push(mensagem);
    }
    listarContatos() {
        console.log("\n========== CONTATOS ==========");
        for (const contato of this.contatos) {
            console.log(`Nome: ${contato.nome} | Celular: ${contato.celular}`);
        }
    }
    listarMensagens() {
        console.log("\n========== MENSAGENS ==========");
        for (const mensagem of this.mensagens) {
            console.log(mensagem.toString());
            console.log("------------------------------");
        }
    }
}
// Testes do Sistema de Contatos
const whatsapp = new Whatsapp();
const contato1 = new Contatinho("João", "51999999999");
const contato2 = new Contatinho("Maria", "51988888888");
const contato3 = new Contatinho("Carlos", "51977777777");
// Aqui estou adicionando os contatos
whatsapp.adicionarContato(contato1);
whatsapp.adicionarContato(contato2);
whatsapp.adicionarContato(contato3);
const mensagem1 = new MsgTexto(contato1, "14:30", "Olá, tudo bem?");
const mensagem2 = new MsgAudio(contato2, "14:35", "audio_001.mp3", 25);
const mensagem3 = new MsgFoto(contato3, "14:40", "foto_001.jpg", 2048);
// Aqui estou adicionando as mensagens
whatsapp.adicionarMensagem(mensagem1);
whatsapp.adicionarMensagem(mensagem2);
whatsapp.adicionarMensagem(mensagem3);
whatsapp.listarContatos();
whatsapp.listarMensagens();
//# sourceMappingURL=index.js.map