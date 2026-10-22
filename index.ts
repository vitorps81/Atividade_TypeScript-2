
/* ====================
 Sistema de Mensagens
==================== */

// Coitadinho

class Contatinho {
  constructor(
    public nome: string,
    public celular: string
  ) {}
}

// Mensagem

abstract class Mensagem {
  constructor(
    public destinatario: Contatinho,
    public horaEnvio: string,
    public conteudo: string
  ) {}

  abstract toString(): string;
}

// Mensagem de Texto

class MsgTexto extends Mensagem {
  numChar: number;

  constructor(
    destinatario: Contatinho,
    horaEnvio: string,
    conteudo: string
  ) {
    super(destinatario, horaEnvio, conteudo);
    this.numChar = conteudo.length;
  }

  toString(): string {
    return `[TEXTO] 
Para: ${this.destinatario.nome}
Horário: ${this.horaEnvio}
Mensagem: ${this.conteudo}
Caracteres: ${this.numChar}`;
  }
}

// Mensagem de Áudio

class MsgAudio extends Mensagem {
  constructor(
    destinatario: Contatinho,
    horaEnvio: string,
    conteudo: string,
    public duracao: number
  ) {
    super(destinatario, horaEnvio, conteudo);
  }

  toString(): string {
    return `[ÁUDIO] 
Para: ${this.destinatario.nome}
Horário: ${this.horaEnvio}
Áudio: ${this.conteudo}
Duração: ${this.duracao} segundos`;
  }
}

// Mensagem de Foto

class MsgFoto extends Mensagem {
  constructor(
    destinatario: Contatinho,
    horaEnvio: string,
    conteudo: string,
    public tamanho: number
  ) {
    super(destinatario, horaEnvio, conteudo);
  }

  toString(): string {
    return `[FOTO] 
Para: ${this.destinatario.nome} 
Horário: ${this.horaEnvio} 
Foto: ${this.conteudo} 
Tamanho: ${this.tamanho} KB`;
  }
}

// Whatsapp

class Whatsapp {
  private contatos: Contatinho[] = [];
  private mensagens: Mensagem[] = [];

  adicionarContato(contato: Contatinho): void {
    this.contatos.push(contato);
  }

  adicionarMensagem(mensagem: Mensagem): void {
    this.mensagens.push(mensagem);
  }

  listarContatos(): void {
    console.log("\n========== CONTATOS ==========");

    for (const contato of this.contatos) {
      console.log(
        `Nome: ${contato.nome} | Celular: ${contato.celular}`
      );
    }
  }

  listarMensagens(): void {
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


const mensagem1 = new MsgTexto(
  contato1,
  "14:30",
  "Olá, tudo bem?"
);

const mensagem2 = new MsgAudio(
  contato2,
  "14:35",
  "audio_001.mp3",
  25
);

const mensagem3 = new MsgFoto(
  contato3,
  "14:40",
  "foto_001.jpg",
  2048
);

// Aqui estou adicionando as mensagens

whatsapp.adicionarMensagem(mensagem1);
whatsapp.adicionarMensagem(mensagem2);
whatsapp.adicionarMensagem(mensagem3);


whatsapp.listarContatos();
whatsapp.listarMensagens();
