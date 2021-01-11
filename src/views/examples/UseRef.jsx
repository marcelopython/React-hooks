import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (s1, s2) => {
    return [...s1].map(function(elemento, index) {
        return `${elemento}${s2[index] || ''}`;
    }).join('');
}

const UseRef = (props) => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    
    const count = useRef(0);//Retorna a referencia do objeto (Sempre retorna a mesma referencia do objeto)
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);
    
    useEffect(function() {
        count.current ++;
        myInput2.current.focus();
    }, [value1]);

    useEffect(function() {
        count.current ++;
        myInput1.current.focus();
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} 
                    onChange={(event)=> setValue1(event.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={(event)=> setValue2(event.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
