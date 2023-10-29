class personagem {
	constructor (nome, idade, tipo,) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    } 
}

let maga = new personagem("Maria", 36, "maga");

let guerreiro = new personagem("Gustavo", 17, "guerreiro");

let arqueira = new personagem("Amelia", 16, "arqueira");

function ataque(personagem){
	if(personagem === maga)
	  console.log(`A ${personagem.tipo} atacou usando magia`);

	if(personagem === guerreiro)
	  console.log(`A ${personagem.tipo} atacou usando espada`);
    
  if(personagem === arqueira) 
    console.log(`A ${personagem.tipo} atacou com sua poesia ruim`);
}

ataque(maga)
