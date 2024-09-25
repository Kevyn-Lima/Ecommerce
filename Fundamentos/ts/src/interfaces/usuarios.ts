interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string;
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'Kevyn',
    email: 'fulano@123',
    ativo: true
}

console.log(usuario)