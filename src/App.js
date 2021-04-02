import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './rutas';

export default function App() {
    return(
        <>
            <BrowserRouter >
                <Rutas/>
            </BrowserRouter>
        </>
    )
};