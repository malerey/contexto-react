import React from 'react';
import EnvioGratis from './EnvioGratis'
 const Card = ({data}) => {
   return(
     <>
     <div>{data.nombre}</div>
     <EnvioGratis data={data}/>
     </>
   )
 }

 export default Card;

 // prop drilling 
