import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del csutom hook
    const [ state, actualizarState ] = useState('');
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
        >
            <option value="">--Seleciona--</option>
        </select>
    );

    return [state, SelectNoticias];
};
 
export default useSelect;