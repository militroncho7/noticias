import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del csutom hook
    const [ state, actualizarState ] = useState(stateInicial);
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            <option key='general' value='general'>General</option>
            <option key='business' value='business'>Negocios</option>
            <option key='entertainment' value='entertainment'>Entretenimiento</option>
            <option key='health' value='health'>Salud</option>
            <option key='science' value='science'>Ciencia</option>
            <option key='sports' value='sports'>Deportes</option>
            <option key='technology' value='technology'>Tecnología</option>
            {/* {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}; */}
        </select>
    );

    return [state, SelectNoticias];
};
 
export default useSelect;