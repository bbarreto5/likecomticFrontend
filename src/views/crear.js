import React,{useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import InformacionRuta from '../components/InformacionRuta/inforuta'
import TituloVista from '../components/TituloVista/titulo'

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    container:{
        width: "100%",
        padding: "0 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        flexDirection: "row",
    },
    itemFlex:{
        flex: "1 1 auto",
        width: 100,
        margin: 3,
    },
    itemFlexCausante:{
        flex: "1 1 auto",
        width: "20%",
        margin: 3,
    },
    itemFlexMulti:{
        flex: "1 1 auto",
        width:"100%",
        margin: 3,
    },
    itemFlexCausanteNombre:{
        flex: "1 1 auto",
        width: "45%",
        margin: 3, 
    },
    containerButton:{
        margin: "5px 0",
        width: "100%",
        height: 50,
        display: "flex",
        justifyContent:"space-around",
        alignItems: "center"
    },
    link:{
        color:"green",
        '&:link':{
            textDecoration:"none"
        },
        '&:visited':{
            textDecoration:"none"
        },
        '&:hover':{
            textDecoration:"none"
        },
        '&:active':{
            textDecoration:"none"
        }
    }

  }));

function BodyAccordio ({
    item, 
    classes,

    setNombreR,
    setReferenciaR,

    setFechaS,
    setPaisS,
    setRegionS,
    setCiudadS,
    setVersionS,
    
    setCategoriaC,
    setMarcaC,
    setModeloC,
    setMatriculaC,
    setPaisMatriculaC,
    setAseguradoraC,
    setPolizaC,

    nombreR,
    referenciaR,
    fechaS,
    paisS,
    regionS,
    ciudadS,
    versionS,
    categoriaC,
    marcaC,
    modeloC,
    matriculaC,
    PaisMatriculaC,
    aseguradoraC,
    polizaC,
    
}) {
    let [color, setColor] = useState(true);
    return(
        <Accordion onChange={()=> setColor(!color)}>
            <AccordionSummary
                expandIcon={<ArrowDownward style={{
                    color:(!color)?"white":"green"
                }}/>}
                aria-controls="panel1a-content"
                style={{
                    backgroundColor: (color)?"white":"green"
                }}
            >
                <Typography 
                    style={{
                        color:(!color)?"white":"green"
                    }}
                >
                    {
                        item.nombre
                    }
                </Typography>
            </AccordionSummary>
            {
                <item.detail 
                    classes={classes}

                    setNombreR={setNombreR}
                    setReferenciaR={setReferenciaR}
                 
                    setFechaS={setFechaS}
                    setPaisS={setPaisS}
                    setRegionS={setRegionS}
                    setCiudadS={setCiudadS}
                    setVersionS={setVersionS} 

                    setCategoriaC={setCategoriaC}
                    setMarcaC={setMarcaC}
                    setModeloC={setModeloC}
                    setMatriculaC={setMatriculaC}
                    setPaisMatriculaC={setPaisMatriculaC}
                    setAseguradoraC={setAseguradoraC}
                    setPolizaC={setPolizaC}

                    nombreR={nombreR}
                    referenciaR={referenciaR}

                    fechaS={fechaS}
                    paisS={paisS}
                    regionS={regionS}
                    ciudadS={ciudadS}
                    versionS={versionS}

                    categoriaC={categoriaC}
                    marcaC={marcaC}
                    modeloC={modeloC}
                    matriculaC={matriculaC}
                    PaisMatriculaC={PaisMatriculaC}
                    aseguradoraC={aseguradoraC}
                    polizaC={polizaC}
                />
            }
        </Accordion>
    )
    
}

const DetailsReclamante =({
    classes,
    setNombreR,
    setReferenciaR,
    nombreR,
    referenciaR,
})=>{
    return(
        <AccordionDetails>
            <div className={classes.container} >
                <TextField
                    className={classes.itemFlex}
                    label="Nombre y apellidos reclamantes *" 
                    variant="outlined"
                    value={nombreR}
                    onChange={(event) => {
                        setNombreR(event.target.value);
                    }}
                />
                <FormControl variant="outlined" className={classes.itemFlex}>
                    <InputLabel htmlFor="outlined-adornment-weight">Referencia *</InputLabel>
                    <OutlinedInput
                        label="Referencia *" 
                        labelWidth={70}
                        variant="outlined"
                        value={referenciaR}
                        onChange={(event) => {
                            setReferenciaR(event.target.value);
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Número indicativo para reclamante aseguradora o particular</FormHelperText>
                </FormControl>
            </div>
        </AccordionDetails>
    )
}

const paises = [{
    value: 'col',
    label: 'COLOMBIA',
  },{
    value: 'arg',
    label: 'ARGENTINA',
  }]
const regiones = [{
    value: 'ant',
    label: 'ANTIOQUIA',
  },{
    value: 'atl',
    label: 'ATLANTICO',
}]
const ciudades = [{
    value: 'med',
    label: 'MEDELLIN',
  },{
    value: 'bar',
    label: 'BARRANQUILLA',
}]

const DetailsSiniestro=({
    classes,
    setFechaS,
    setPaisS,
    setRegionS,
    setCiudadS,
    setVersionS,
    fechaS,
    paisS,
    regionS,
    ciudadS,
    versionS,
})=>{

    return(
        <AccordionDetails>
            <div className={classes.container} >
                <TextField 
                    className={classes.itemFlex}
                    label="Fecha de siniestro *" 
                    variant="outlined"
                    value={fechaS}
                    onChange={(event) => {
                        setFechaS(event.target.value);
                    }}
                />
                <TextField
                    value={paisS}
                    className={classes.itemFlex}
                    select
                    label="Pais"
                    onChange={(event) => {
                        setPaisS(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {paises.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={regionS}
                    className={classes.itemFlex}
                    select
                    label="Región"
                    onChange={(event) => {
                        setRegionS(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {regiones.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={ciudadS}
                    className={classes.itemFlex}
                    select
                    label="Ciudad"
                    onChange={(event) => {
                        setCiudadS(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {ciudades.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={versionS}
                    className={classes.itemFlexMulti}
                    label="Versión siniestro"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={(event) => {
                        setVersionS(event.target.value);
                    }}
                />
            </div>
        </AccordionDetails>
    )
}

const DetailsCausante =({
    classes,
    setCategoriaC,
    setMarcaC,
    setModeloC,
    setMatriculaC,
    setPaisMatriculaC,
    setAseguradoraC,
    setPolizaC,
    categoriaC,
    marcaC,
    modeloC,
    matriculaC,
    PaisMatriculaC,
    aseguradoraC,
    polizaC,
})=>{

    return(
        <AccordionDetails>
            <div className={classes.container} >
                <TextField
                    value={categoriaC}
                    className={classes.itemFlexCausante}
                    select
                    label="categoria"
                    onChange={(event) => {
                        setCategoriaC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={marcaC}
                    className={classes.itemFlexCausante}
                    select
                    label="Marca"
                    onChange={(event) => {
                        setMarcaC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={modeloC}
                    className={classes.itemFlexCausante}
                    select
                    label="Modelo"
                    onChange={(event) => {
                        setModeloC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={matriculaC}
                    className={classes.itemFlexCausante}
                    select
                    label="Matricula"
                    onChange={(event) => {
                        setMatriculaC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={PaisMatriculaC}
                    className={classes.itemFlexCausante}
                    select
                    label="Pais de matriculación"
                    onChange={(event) => {
                        setPaisMatriculaC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    vlaue={aseguradoraC}
                    className={classes.itemFlexCausante}
                    select
                    label="Campaña aseguradora"
                    onChange={(event) => {
                        setAseguradoraC(event.target.value);
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    value={polizaC}
                    className={classes.itemFlexCausanteNombre}
                    label="N* de poliza / carta verde" 
                    variant="outlined"
                    onChange={(event) => {
                        setPolizaC(event.target.value);
                    }}
                />
            </div>
        </AccordionDetails>
    )
}

const currencies = [
    {
      value: 'USD',
      label: 'Dolares',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

const ListAccordion = [
    {
        nombre:"Datos del reclamante *",
        detail: DetailsReclamante
    },
    {
        nombre:"Datos del Siniestro *",
        detail: DetailsSiniestro
    },
    {
        nombre:"Datos del Causante *",
        detail: DetailsCausante
    }
]

export default function VistaCrear(props){
    let { id } = useParams();
    
    const titulo = "Solicitud de información";
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [nombreR,setNombreR] = useState('');
    const [referenciaR,setReferenciaR] = useState('');

    const [fechaS,setFechaS] = useState('');
    const [paisS, setPaisS] = useState('');
    const [regionS, setRegionS] = useState('');
    const [ciudadS, setCiudadS] = useState('');
    const [versionS, setVersionS] = useState('');
    
    const [categoriaC, setCategoriaC] = useState('');
    const [marcaC, setMarcaC] = useState('');
    const [modeloC, setModeloC] = useState('');
    const [matriculaC, setMatriculaC] = useState('');
    const [PaisMatriculaC, setPaisMatriculaC] = useState('');
    const [aseguradoraC, setAseguradoraC] = useState('');
    const [polizaC, setPolizaC] = useState('');

    const GuardarInormacion = ()=>{
        let data = {
            nombreR,
            referenciaR,
            fechaS,
            paisS,
            regionS,
            ciudadS,
            versionS,
            categoriaC,
            marcaC,
            modeloC,
            matriculaC,
            PaisMatriculaC,
            aseguradoraC,
            polizaC,
        };

        let url = (id)?`http://localhost:3000/${id}`:"http://localhost:3000/";

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log("hola")
                setOpen(true);
            },
            (error) => {
                console.log({
                    error,
                    message:"error"
                })
            }
        )
    }

    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3000/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setNombreR(result.nombres)
                    setReferenciaR(result.referencia)
                    setFechaS(result.fecha)
                    setPaisS(result.pais)
                    setRegionS(result.region)
                    setCiudadS(result.ciudad)
                    setVersionS(result.variante)
                    setCategoriaC(result.categoria)
                    setMarcaC(result.marca)
                    setModeloC(result.modelo)
                    setMatriculaC(result.matricula)
                    setPaisMatriculaC(result.pais2)
                    setAseguradoraC(result.campaña)
                    setPolizaC(result.poliza)
                },
                (error) => {
                    console.log({
                        error,
                        message:"error"
                    })
                }
            )
        }
    },[id])

    return(
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {
                        id ? 'Siniestro Aztualizado' : 'Siniestro creado'
                    }
                </Alert>
            </Snackbar>
            <InformacionRuta
                pretitulo="Gestionar Siniestros/" 
                titulo={titulo} 
            />
            <TituloVista
                titulo={titulo}
            />
            {
                ListAccordion.map( (item, i) => {
                    return <BodyAccordio  
                        item={item} 
                        classes={classes}
                        key={i}

                        setNombreR={setNombreR}
                        setReferenciaR={setReferenciaR}
                     
                        setFechaS={setFechaS}
                        setPaisS={setPaisS}
                        setRegionS={setRegionS}
                        setCiudadS={setCiudadS}
                        setVersionS={setVersionS} 

                        setCategoriaC={setCategoriaC}
                        setMarcaC={setMarcaC}
                        setModeloC={setModeloC}
                        setMatriculaC={setMatriculaC}
                        setPaisMatriculaC={setPaisMatriculaC}
                        setAseguradoraC={setAseguradoraC}
                        setPolizaC={setPolizaC}

                        nombreR={nombreR}
                        referenciaR={referenciaR}

                        fechaS={fechaS}
                        paisS={paisS}
                        regionS={regionS}
                        ciudadS={ciudadS}
                        versionS={versionS}

                        categoriaC={categoriaC}
                        marcaC={marcaC}
                        modeloC={modeloC}
                        matriculaC={matriculaC}
                        PaisMatriculaC={PaisMatriculaC}
                        aseguradoraC={aseguradoraC}
                        polizaC={polizaC}
                    />
                })
            }
            <div className={classes.containerButton}>
                <NavLink className={classes.link} to="/v1/listar">Regresar al panel de Siniestros</NavLink>
                <Button
                    style={{
                        backgroundColor:"green",
                        color: "white"
                    }}
                    size="large"
                    onClick={GuardarInormacion}
                >Enviar</Button>
            </div>
        </>
    )
}