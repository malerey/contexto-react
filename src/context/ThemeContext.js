import React from 'react';

const estilosUsuarioLogueado = {
  titles: 'red',
  background: 'blue',
};

const ThemeContext = React.createContext(estilosUsuarioLogueado);

export default ThemeContext
