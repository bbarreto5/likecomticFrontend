import React,{useState, useEffect} from 'react';
import InformacionRuta from '../components/InformacionRuta/inforuta'
import TituloVista from '../components/TituloVista/titulo'
import Table from '../components/Table/table'

export default function VistaEditar(props){
    const titulo = "Gestionar Siniestros";
    const [datos,setDatos] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(
            (result) => {
                setDatos(result);
            },
            (error) => {
                console.log({
                    error,
                    message:"error"
                })
            }
        )
    },[])

    return(
       <>
            <InformacionRuta
                titulo={titulo}
            />
            <TituloVista
                titulo={titulo}
            />
            <Table datos={datos}/>

       </>
    )
}