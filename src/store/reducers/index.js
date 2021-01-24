
//Objetivo dessa função e pegar o estado atual e pra cada ação que vai acontecendo vou evoluir o estado e auterando o atributo
export function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2};
        case 'login':
            return {...state, user: {name: action.payload}};
        case 'mult_7':
            return {...state, number: state.number * 7};
        case 'div_25':
            return {...state, number: state.number / 25};
        case 'parse':
            return {...state, number: Math.round(state.number)}
        case 'numer_n':    
            return {...state, number: state.number + action.payload};
        default:
            return state;
    }
}