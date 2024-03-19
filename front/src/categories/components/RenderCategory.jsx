/* eslint-disable react/prop-types */
export default function RenderCategory( props ) {
    return(
        <tr>
            <th style={{borderLeft: 'none', width: '18%'}}>{props.item[0]}</th>
            <td>{props.item.name}</td>
            <td style={{width: '20%'}}>{props.item.tax}%</td>
            <td style={{borderTop: 'solid 1px lightgray', width: '15%'}}>
                <input type="button" value="delete" onClick={() => {location.href=`http://localhost/routes/categories.php?action=delete&code=${props.item[0]}`}} className="tdbtnC" style={{backgroundColor: 'lightgray'}} />
            </td>
        </tr>
    )
}