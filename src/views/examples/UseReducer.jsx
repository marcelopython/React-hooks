import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer, numberAdd2} from '../../store';

/**
 * Multiplicar por 7
 * Dividir por 25
 * Fazer um parce int para numero quebrado
 * Ação para adicionar n
 **/
const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                
                {state.user ? 
                    <span className="text"> {state.user.name}</span>
                    :
                    <span className="text"> Sem usuário</span>
                }
                <span className="text">
                    {state.number}
                </span>
                <div>
                <button className="btn"
                    onClick={()=> dispatch({type: 'login', payload:'Maria'})}>
                        Login
                    </button>
                    <button className="btn"
                    onClick={()=> numberAdd2(dispatch)}>
                        +2
                    </button>
                    <button className="btn" 
                        onClick={()=> dispatch({type:'mult_7'})}>
                            Multiplicar por 7
                    </button>
                    <button className="btn" 
                        onClick={()=> dispatch({type:'div_25'})}>
                            Divide por 25
                    </button>
                    <button className="btn" 
                        onClick={()=> dispatch({type:'parse'})}>
                            parse
                        </button>
                    <button className="btn" 
                    onClick={()=> dispatch({type:'numer_n', payload:5})}>
                        +5
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
