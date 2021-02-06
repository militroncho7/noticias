import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //Definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardaNoticias ] = useState([]);

  useEffect(() => {
    const consutarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=5a2138c76676494b9c8d661702a4868d`;
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardaNoticias(noticias.articles);
    };
    consutarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
