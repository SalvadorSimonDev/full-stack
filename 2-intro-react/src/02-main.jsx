//Importa componente o clase necesaria, (nucleo de react)
import React from 'react'
//Importa componente o clase necesaria para trabajar con la web(para mobil será react-native)
import ReactDOM from 'react-dom/client'
//Importa el componente de react que es la entrada de la aplicación.
import App from './App.jsx'
//Importamos la hoja de estilos
import './index.css'

//Renderiza el contenido de la app dentro del elemento html con id root.
ReactDOM.createRoot(document.getElementById('root')).render(
  //Caracteristica de react para trabajar en desarrollo
  <React.StrictMode>
    {/* Etiqueta de componente para que pueda ser renderizado. */}
    <App />
  </React.StrictMode>,
)
