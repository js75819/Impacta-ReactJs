const INITIAL_STATE = {   
    data: '1996-10-29T02:00:00.000Z',
    nome: 'João',
    email: 'js75819@gmail.com',
    telefone: 11941188262,
    assunto: 'oi eu sou o goku'   
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return {...state, data : action.value};
        case 'ATUALIZA_NOME' : return {...state, nome : action.value};
        default: return state
    }       
}