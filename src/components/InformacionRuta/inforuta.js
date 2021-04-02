import React from 'react';
import Home from '@material-ui/icons/Home';
import './styles.css'

export default function InformacionRuta(props){
    const {
        titulo,
        pretitulo
    } = props;  
    return(
        <section className="inforuta">
            <Home style={{color:"green"}}/> 
            <h4>
                {
                    pretitulo && pretitulo
                }
                <span className="inforuta-solicitud">
                    { titulo }
                </span>
            </h4>
        </section>
    )
}