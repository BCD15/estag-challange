/* eslint-disable react/prop-types */
export default function RenderProduct( props ) {
    
    var priceInt =  parseFloat(props.item.price)

    return(
        <tr>
            <th style={{borderLeft: 'none', width: '10%'}}>{props.item[0]}</th>
            <td>{props.item[1]}</td>
            <td style={{width: '12%'}}>{props.item.amount}</td>
            <td>{priceInt.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
            <td>{props.item.name}</td>
            <td style={{borderTop: 'solid 1px lightgray'}}>
                <input type="button" onClick={() => {location.href=`http://localhost/routes/products.php?action=delete&code=${props.item[0]}`}} className="tdbtnP" value="delete" />
            </td>
        </tr>
    )
}