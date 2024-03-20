
/* eslint-disable react/prop-types */
export default function RenderHome( props ) {
    
    function total() {
        var tbody = document.getElementById("tablee");
        if(tbody.childElementCount <= 1) {
            document.getElementById("taxResult").value = `${props.item.taxTotalProduct.toFixed(2)}`;
            document.getElementById("totalResult").value = `${props.item.totalProduct.toFixed(2)}`;  
        } else {
            var TaxTotalP = document.getElementById("taxResult").value 
            var TotalP = document.getElementById("totalResult").value
        
            var TaxTotalPInt = parseFloat(TaxTotalP) 
            var TotalPInt = parseFloat(TotalP)
        
            var newTaxTotalP = TaxTotalPInt + props.item.taxTotalProduct
            var newTotalP = TotalPInt + props.item.totalProduct
            
            document.getElementById("taxResult").value = `${newTaxTotalP.toFixed(2)}`;
            document.getElementById("totalResult").value = `${newTotalP.toFixed(2)}`;
          }
    }

    total()
    
    return(
        <tr>
            <th style={{borderLeft: 'none', width: '10%'}}>{props.item.product[1]}</th>
            <td>{props.item.priceInt.toLocaleString("en-US", {style: "currency", currency: "USD",})}</td>
            <td>{props.item.amount}</td>
            <td>{props.item.totalProduct.toLocaleString("en-US", {style: "currency", currency: "USD",})}</td>
        </tr>
    )
    
}
