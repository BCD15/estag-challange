/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import '../products.css'

import RenderProduct from './RenderProduct'

export default function TableProduct({bodyTheme, buttonTheme}) {
    
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/products.php?action=get')
        .then(response => response.json())
        .then(data => {
            setItens(data);
        })
    }, []);


    return(
        <div className="productsP" style={bodyTheme}>
            <table className="tableP">
                <thead>
                    <tr>
                        <th style={{borderLeft: 'none', width: '10%'}}>Code</th>
                        <th>Product</th>
                        <th style={{width: '13%'}}>Amount</th>
                        <th>Unit Price</th>
                        <th style={{borderRight: 'solid 1px lightgray'}}>Category</th>
                    </tr>
                </thead>
                <tbody id="tablee">
                    {itens.map((item) => (
                        <RenderProduct item={item} key={item[0]} buttonTheme={buttonTheme}/>
                    ))}   
                </tbody>
            </table>
        </div>
    )
}