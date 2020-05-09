import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const EnvioGratis = ({ data }) => {
  const contexto = useContext(ThemeContext);
  console.log(contexto.translations.button("Hola Nil"))
  return (
    <></>
    // <div style={{backgroundColor: contexto.background}}>
    //   <p style={{color: contexto.titles}}>{data.gratis ? 'Gratis' : 'No gratis'}</p>
    // </div>
  );
};

export default EnvioGratis;
