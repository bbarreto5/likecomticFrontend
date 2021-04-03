import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Template1 from './templates/v1/template'
const rutas =[
    {
        path: "/v1",
        component: Template1
    },{
        path: "/v2",
        component: Template1
    }
]


export default function Rutas(params) {
    return(
        <Switch>
            <Route exact path="/" >
                <h1>Hola mundo</h1>
            </Route>
            {
                rutas.map((item, key) =>{
                    return <Route key={key} path={item.path} component={item.component}></Route>
                })
            }
            <Route>
                <h1>404</h1>
            </Route>
        </Switch>
    ) 
};