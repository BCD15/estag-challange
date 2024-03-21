/* eslint-disable react/prop-types */
export default function RenderCategory({ item, buttonTheme }) {
    return(
        <tr>
            <th style={{borderLeft: 'none', width: '18%'}}>{item[0]}</th>
            <td>{item.name}</td>
            <td style={{width: '20%'}}>{item.tax}%</td>
            <td style={{borderTop: 'solid 1px lightgray', width: '15%'}}>
                <input type="button" value="delete" onClick={() => {location.href=`http://localhost/routes/categories.php?action=delete&code=${item[0]}`}} className="tdbtnC" style={buttonTheme} />
            </td>
        </tr>
    )
}