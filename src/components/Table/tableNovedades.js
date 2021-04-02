import React from 'react';

export default function SubComponent ({v}){
    const {
      novedades
    } = v.original;
  
    return(
      <table style={{ width: '100%', margin:"15px 0px" }}>
        <thead>
          <tr> 
            <th colSpan="5"> novedades </th>
          </tr>
          <tr>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Tipo de novedad</th>
            <th>Descripción</th>
            <th>Realizado por</th>
          </tr>
        </thead>
        <tbody>
          {
            novedades.map( item =>(
              <tr>
                <td>{item.estado}</td>
                <td>{item.fecha}</td>
                <td>{item.tipoNovedad}</td>
                <td>{item.descripcion}</td>
                <td>{item.realizado}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  
  }