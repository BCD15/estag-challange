/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import '../categories.css'

import RenderCategory from './RenderCategory'

export default function TableCategory({ bodyTheme, buttonTheme}) {
    
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/categories.php?action=get')
        .then(response => response.json())
        .then(data => {
            setItens(data);
        })
    }, []);


    return(
        <div className="categoriesC" style={bodyTheme}>
            <table className="tableC">
                <thead>
                    <tr>
                        <th style={{borderLeft: 'none', width: '15%' }}>Code</th>
                        <th>Category</th>
                        <th style={{borderRight: 'solid 1px lightgray'}}>Tax</th>
                    </tr>
                </thead>
                <tbody id="tablee"> 
                    {itens.map((item) => (
                        <RenderCategory item={item} key={item[0]} buttonTheme={buttonTheme}/>
                    ))}   
                </tbody>
            </table>
        </div>
    )
}