import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const data = [
    { nombre: 'Termometro de horno', gratis: true },
    { nombre: 'Dinosario de juguete', gratis: false },
    { nombre: 'Oso de peluche', gratis: false },
  ];

const contextoGeneral  = {
  theme: {
    titulo: "red"
  }, 
  translations: {
    button: (param) => console.log(param),
    completar: 'Completar tarea'
  }
}
  const usuarioLogueado = true;


  return (
    <div className="App">
      <ThemeContext.Provider value={contextoGeneral}>
        <CardContainer cards={data} />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
