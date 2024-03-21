/* eslint-disable react/prop-types */
import { useState } from "react";

import Modal from "./ModalHistory";

import '../history.css'

export default function RenderHistory( props ) {
    const [open, setOpen] = useState(false);
    
    return(
        <>
            <tr>
                <th className="codeth" id="codeth">{props.item[0]}</th>
                <td>{props.item.tax.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td name="totaltd">{props.item.total.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                
                <td style={{borderTop: 'solid 1px lightgray', display: 'flex', justifyContent: 'center',}}>
                    <button className="tdbtn" id="tdbtn" onClick={() => setOpen(true)} style={{backgroundColor: 'lightgray'}}>View</button>
                </td>
            </tr>
            <Modal isOpen={open} setOpen={() => setOpen(!open)} />
        </>
    )
}

// onClick={View}
                
               