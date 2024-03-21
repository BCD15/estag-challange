/* eslint-disable react/prop-types */
export default function RenderProduct({ item, buttonTheme}) {
    
    var priceInt =  parseFloat(item.price)

    return(
        <tr>
            <th style={{borderLeft: 'none', width: '10%'}}>{item[0]}</th>
            <td>{item[1]}</td>
            <td style={{width: '12%'}}>{item.amount}</td>
            <td>{priceInt.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
            <td>{item.name}</td>
            <td style={{borderTop: 'solid 1px lightgray'}}>
                <input type="button" onClick={() => {location.href=`http://localhost/routes/products.php?action=delete&code=${item[0]}`}} className="tdbtnP" value="delete" style={buttonTheme} />
            </td>
        </tr>
    )
}