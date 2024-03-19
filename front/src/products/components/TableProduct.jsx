import { useState, useEffect } from "react";

import '../products.css'

import RenderProduct from './RenderProduct'

export default function TableProduct() {
    
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/products.php?action=get')
        .then(response => response.json())
        .then(data => {
            setItens(data);
        })
    }, []);


    return(
        <div className="productsP">
            <table>
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
                        <RenderProduct item={item} key={item[0]} />
                    ))}   
                </tbody>
            </table>
        </div>
    )
}