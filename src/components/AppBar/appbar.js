import React from 'react';
import './styles.css'
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';


export default function AppBar (props) {
    return(
        <div className="appbar-container">
            <div>
                <Menu style={{ color: "green" }}/>
                <span className="appbar-title">
                    Ofesauto
                </span>
            </div>
            <div>
                <span className="appbar-idioma">
                    Idioma
                </span>
                <div className="appbar-idioma-icon">
                    ES
                </div>
            </div>
            <div >
                <AccountCircle/>
                <PowerSettingsNew style={{ transform: "rotate(90deg)" }} />
                <Apps/>
            </div>
        </div>
    )
};
