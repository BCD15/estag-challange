/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import RenderHistoryItens from './RenderHistoryItens'

import '../history.css'

export default function Modal({ isOpen, setOpen, bodyTheme, buttonTheme}) {
    const [itens, setItens] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/history.php?action=getItem')
        .then(response => response.json())
        .then(data => {
            setItens(data);
        })
    }, []);

    if (isOpen) {
        return (
            <div id="modal" className="modal">
                <div className="modal_contentHistory" style={bodyTheme}>
                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Unit Price</th>
                                <th style={{borderRight: 'none'}}>Category</th>
                            </tr>
                        </thead>
                        <tbody id="modalTablee">
                            {itens.map((item) => (
                                <RenderHistoryItens item={item} key={item[0]} />
                            ))}  
                        </tbody>
                    </table>
                    <div className="modal_footer">
                        <button className="modal_close" onClick={() => setOpen(true)} style={buttonTheme}> Fechar </button>
                    </div>
                </div>
            </div>
        )
    } 

    return null
}