/* Sintaxe 1 (tradicional)
Funções literal/anônima */
let exemplo1 = function() {
    console.log("Função anônima / literal");
};
//Chamando a função
exemplo1();


/* Sintaxe 2 (tradicional)
Funções nomeada */
function exemplo2() {
    console.log("Função nomeada");
}
//Chamando a função
exemplo2();


/* Sintaxe 3 (moderna)
Funções Seta/Flecha (Arrow Function) */
let exemplo3 = () => {
    console.log('Arrow Function');
};
//Chamando a função
exemplo3();

//Outra forma de utilizar a função
let exemplo3b = () => console.log("Arrow function B");
exemplo3b();

/* EXEMPLOS */
function dobra(valor) {
    return valor * 2;
}
document.write( dobra(10) );
console.log( dobra(10) );

// Arrow Function
let dobraB = (valor) => {
    return valor * 2
} 
console.log( dobraB(100) );


let dobraC = valor => valor * 100;
console.log( dobraC(20) );

console.log ("---------")

/* Exemplos anteriores */ 
let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor) {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Arrow
 let formataValor = valor => {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

console.log (formataMoeda (precoFinal) );

    



