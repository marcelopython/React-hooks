import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';


function calcFatorial(n) {
    if(n < 0)return -1;
    if(n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

function verifyParImpar(n) {
    if(n % 2 === 0){
        return 'Par';
    };
    return 'Ìmpar'
}

const UseEffect = (props) => {
    
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [numberParInpar, setNumberParInpar] = useState(0);
    const [parImpar, setParImpar] = useState(0);

    //Quando um componente tema alterar o stado de outro compomente o useEffect faz o controle do stado
    useEffect(function() {
        setFatorial(calcFatorial(number));
    }, [number]);//Quando o valor de number for modificado a função sera chamada

    useEffect(function(){
        if(fatorial > 1000){
            document.title = 'Eita!!!';
        }
    }, [fatorial]);

    useEffect(function(){
        setParImpar(verifyParImpar(numberParInpar))
    }, [numberParInpar]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não exite' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={(event)=> setNumber(event.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parImpar}</span>
                </div>
                <input type="number" className="input"
                    value={numberParInpar} 
                    onChange={(event)=> setNumberParInpar(event.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
