/* eslint-disable react/prop-types */
import '../history.css'

export default function RenderHistoryItens( props ) {
    
    var row = event.target.parentElement.parentElement
    var codex = row.children[0].innerText

    if(codex == props.item.order_code) {
        return(
            <tr>
                <th style={{borderLeft: 'none'}} >{props.item.order_code}</th>
                <td>{props.item[7]}</td>
                <td>{props.item[3]}</td>
                <td>{props.item.price.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td>{props.item[12]}</td>
            </tr>
       )
    }
}
