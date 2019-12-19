const INITIAL_STATE = {   
    data: '1996-10-29',
    nome: 'João',
    email: 'js75819@gmail.com',
    telefone: 11941188262,
    assunto: 'oi eu sou o goku'   
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZA_DATA' : return {...state, data : action.value};
        case 'ATUALIZA_NOME' : return {...state, nome : action.value};
        case 'ATUALIZA_EMAIL' : return {...state, email : action.value};
        case 'ATUALIZA_TELEFONE' : return {...state, telefone : action.value};
        case 'ATUALIZA_ASSUNTObh' : return {...state, assunto : action.value};

        default: return state
    }       
}

