/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import '../home.css'

import RenderHome from './RenderHome'
import Finish from "./Finish";

export default function TableHome({ bodyTheme, submitButtonTheme, buttonTheme }) {
    
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        if (localStorage.getItem("cartProducts") === null) {
            return
        } else {
            setItens(JSON.parse(localStorage.getItem('cartProducts')));
        }
    }, []);


    return(
        <div className="carrinhoH" style={bodyTheme}>
            <table className="tableHH">
                <thead>
                    <tr>
                        <th style={{borderLeft: 'none', width: '40%'}}>Product</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        <th style={{borderRight: 'none'}}>Total</th>
                    </tr>
                </thead>
                <tbody id="tablee"> 
                    {itens.map((item) => (
                        <RenderHome item={item} key={item.product[0]} />
                        ))}   
                </tbody>
            </table>
            <Finish bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} buttonTheme={buttonTheme}/>
        </div>
    )
}