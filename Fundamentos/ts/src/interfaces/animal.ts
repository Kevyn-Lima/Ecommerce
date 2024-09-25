interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aguático';
    domestico: boolean
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome:'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Lucas Ribeiro'
}

console.log(cachorro)