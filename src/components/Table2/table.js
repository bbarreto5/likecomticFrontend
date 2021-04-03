import React from 'react';
import './style.css'
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

export default function Table({handleOpen}){
    return(
        <div className="container">
            <div className="table">
                <div className="table-header">
                    <div className="header__item"><Link className="filter__link" >Name</Link></div>
                    <div className="header__item"><Link className="filter__link filter__link--number" >Wins</Link></div>
                    <div className="header__item"><Link className="filter__link filter__link--number" >Draws</Link></div>
                    <div className="header__item"><Link className="filter__link filter__link--number" >Losses</Link></div>
                    <div className="header__item"><Link className="filter__link filter__link--number" >Total</Link></div>
                </div>
                <div className="table-content">	
                    <div className="table-row">		
                        <div className="table-data">Tom</div>
                        <div className="table-data">2</div>
                        <div className="table-data">0</div>
                        <div className="table-data">1</div>
                        <div className="table-data"><EditIcon onClick={handleOpen}/></div>
                    </div>
                    <div className="table-row">
                        <div className="table-data">Dick</div>
                        <div className="table-data">1</div>
                        <div className="table-data">1</div>
                        <div className="table-data">2</div>
                        <div className="table-data"><EditIcon/></div>
                    </div>
                    <div className="table-row">
                        <div className="table-data">Harry</div>
                        <div className="table-data">0</div>
                        <div className="table-data">2</div>
                        <div className="table-data">2</div>
                        <div className="table-data"><EditIcon/></div>
                    </div>
                </div>	
            </div>
        </div>
    )
}