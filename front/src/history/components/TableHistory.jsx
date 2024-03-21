/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import '../history.css'

import RenderHistory from './RenderHistory'

export default function TableHistory({ bodyTheme, buttonTheme }) {
    
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/history.php?action=get')
        .then(response => response.json())
        .then(data => {
            setItens(data);
        })
    }, []);


    return(
        <div className="history" style={bodyTheme}>
            <table className="tableH">
                <thead>
                    <tr>
                        <th style={{borderLeft: 'none', width: '27%'}}>Code</th>
                        <th style={{width: '27%'}}>Tax</th>
                        <th style={{borderRight: 'solid 1px lightgray', width: '27%'}}>Total</th>
                    </tr>
                </thead>
                <tbody id="tablee"> 
                    {itens.map((item) => (
                        <RenderHistory item={item} key={item[0]} bodyTheme={bodyTheme} buttonTheme={buttonTheme} />
                    ))}   
                </tbody>
            </table>
        </div>
    )
}