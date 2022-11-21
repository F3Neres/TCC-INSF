


export function criarNovoPedido (idUsuario, info){

    return{ 
        idUsuario: idUsuario,
        data: info.data,
        hora: info.hora,
        status: 'Aguardando',
        tipoPagamento: 'Cartão'
    }
}