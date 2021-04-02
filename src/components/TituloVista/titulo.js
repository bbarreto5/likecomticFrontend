import React from 'react';
import './styles.css'

export default function Titulo(props){
    const {titulo} = props;
    return(
        <div className="titulo-container">
            { titulo }
        </div>
    )
}