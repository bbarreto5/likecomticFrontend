import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { makeStyles} from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    container:{
        width: "100%",
        display:"flex",
        height: 70,
        justifyContent:"space-between",
        alignItems:"center",
        '& > button':{
            width: 200,
            height: 35,
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: 6,
        }
    },
    search:{
        width: "5%",
        height: "100%"
    },
    containerSearch:{
        width: 450,
        height: 35,
        border:"solid 1px grey",
        borderRadius: 6,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        overflow:"hidden",
        '& > input':{
            height: "100%",
            width: "80%",
            border:"none",
            outline: "none",
        },
        '& > button':{
            height: "100%",
            width: "15%",
            color:"white",
            backgroundColor:"green",
            border:"none",
            outline: "none",
        },
    },
  }));

export default function GlobalFilter({
    globalFilter,
    setGlobalFilter,
  }) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
    
    const classes = useStyles();

    return (
      <div className={classes.container}>
            <button>Solicitud de información</button>
            <button>Solicitar indemnización</button>
        <div className={classes.containerSearch}>
            <Search className={classes.search}/>
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
            <button> buscar </button>
        </div>
      </div>
    )
  }