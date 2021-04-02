import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width:"100%",
        height:40,
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
        marginTop:"5px",
    },
    containerPagina:{
        margin:"3px",
        padding:"5px",
        border:"1px solid black"
    },
    button:{
        backgroundColor:"white",
        padding:"6px"
    }
  }));

export default function Pagination({
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    gotoPage,
}) {

    const classes = useStyles();

    const paginas = ()=>{
        let arrayPaginas = []
        for (let index = 0; index < pageOptions.length; index++) {
            arrayPaginas.push(
                <div onClick={()=> gotoPage(index)} className={classes.containerPagina}>
                    {index + 1}
                </div>
            )
        }
        return arrayPaginas;
    }
    

    return(
        <div className={classes.container}>
            <button
                className={classes.button}
                onClick={previousPage}
                disabled={!canPreviousPage}
            >
                {"anterior"}
            </button>
            {
                paginas()
            }
            <button
                className={classes.button}
                onClick={nextPage} 
                disabled={!canNextPage}>
                {"siguiente"}
            </button>
        </div>
    )
}