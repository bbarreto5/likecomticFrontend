import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useTable, useExpanded, useGlobalFilter, usePagination  } from 'react-table';
import GlobalFilter from './searchButton';
import { ArrowUpward, ArrowDownward, Description, Edit} from '@material-ui/icons'
import { makeStyles} from '@material-ui/core/styles';
import SubComponent from './tableNovedades';
import Pagination from './pagination';

const useStyles = makeStyles((theme) => ({
  table:{
    width: "100%",
    borderCollapse: "collapse",
    '& thead tr th':{
      backgroundColor:"green",
      color:"white",
      borderLeft: "1px solid white",
      borderRight: "1px solid white"
    },
    '& thead tr :first-child':{
      borderTopLeftRadius: 6,
    },
    '& thead tr :last-child':{
      borderTopRightRadius: 6,
    },
    '& thead tr':{
      height: 40,
    },
    '& td':{
      textAlign: "center"
    },
  },
  tr:{
    height: 50,
    boxShadow: "0px 3px 0px 0px rgba(0,0,0,0.22)",
  },
}));

function Table({ columns: userColumns, data}) {


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows, -> we change 'rows' to 'page'
    page,
    prepareRow,
    visibleColumns,
    setGlobalFilter,
    // below new props related to 'usePagination' hook
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state:{
      globalFilter,
      pageIndex,
      pageSize
    },
  } = useTable(
    {
      columns: userColumns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }
    },
    useGlobalFilter,
    useExpanded,
    usePagination
  )

  const classes = useStyles();

  return (
    <>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()}  className={classes.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => { //change -> rows 
            prepareRow(row)
            return (
              <Fragment key={row.getRowProps().key}>
                <tr className={classes.tr} >
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  })}
                </tr>
                {row.isExpanded && (
                  <tr >
                    <td className={classes.tr} colSpan={visibleColumns.length}><SubComponent v={row}/></td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </table>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        nextPage={nextPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
      />
      </>
  )
}

function acciones({ original:{ id } }) {
  const ruta =`/v1/actualizar/${id}`
  return(
    <>
      <NavLink to={ruta}>
        <Edit/>
      </NavLink>
      <Description/>
    </>
  )
}

function App({datos}) {
  const columns = React.useMemo(
    () => [
      {
        id: 'expander',
        Cell: ({ row }) =>(
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <ArrowUpward/> : <ArrowDownward/> }
          </span>
        )
      },
      { Header: 'Fecha del siniestro', accessor: 'fecha', id:"f1"},
      { Header: 'Fecha de comunicación', accessor: 'fecha', id:"f2"},
      { Header: 'Referencia', accessor: 'referencia',},
      { Header: 'ID Siniestro', accessor: 'id', id:"d1"},
      { Header: 'ID Investigación', accessor: 'id', id:"d2"},
      { Header: 'ID Indemnización', accessor: 'id', id:"d3"},
      { Header: 'Pago', accessor: 'poliza',},
      { Header: 'Matricula del causante', accessor: 'matricula',},
      { 
        Header: 'Acciones',
        Cell: ({row}) => acciones(row)
      },
    ],
    []
  )

  const novedades =[
    {
      estado: "brandon",
      fecha: "barreto",
      tipoNovedad: 28,
      descripcion: 23,
      realizado: 70,
    },
    {
      estado: "brandon",
      fecha: "barreto",
      tipoNovedad: 28,
      descripcion: 23,
      realizado: 70,
    }
  ]
  let aux = datos.map(siniestro => ({...siniestro,novedades}))
  return (
    <Table 
      columns={columns} 
      data={aux}
    />
  )
}

export default App