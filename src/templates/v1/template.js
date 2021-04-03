import React, { Component } from 'react';
import AppBar from '../../components/AppBar/appbar';
import './styles.css';
import {Route, Switch} from 'react-router-dom';
import VistaCrear from '../../views/crear';
import VistaEditar from '../../views/editar';
import Alternativa from '../../views/alternativa'

const vistas = [
    {
        path: "/v1/listar",
        component: VistaEditar 
    },
    {
        path: ["/v1/crear", "/v1/actualizar/:id"],
        component: VistaCrear
    },
    {
        path: "/v2",
        component: Alternativa
    }

]

class Template extends Component{
    render(){
        return (
            <div style={{
                height:"100%",
                width:"100%"
            }}>
                <AppBar/>
                <div className="template1-container">
                    <Switch>
                        {
                            vistas.map((item, key) =>{
                                return <Route key={key} exact path={item.path} component={item.component}></Route>
                            })
                        }
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Template;