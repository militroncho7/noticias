import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardaNoticias ] = useState([]);

  useEffect(() => {
    const consutarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5a2138c76676494b9c8d661702a4868d`;
      
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

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
