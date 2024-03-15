function filter(str) {
    return str.replace("<", "??")
}

function RenderPurchaseds() {
    fetch("http://localhost/routes/history.php?action=get")
    .then(response => response.json())
    .then((data) => {
        var tbody = document.getElementById("tablee")
        data.forEach(orders => {
            var trow = document.createElement("tr")

            tbody.appendChild(trow)
            trow.innerHTML = `
                <th class="codeth">${orders.code}</th>
                <td>${orders.tax.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td name="totaltd">${orders.total.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td style="border-top: solid 1px lightgray; display: flex; justify-content: center;"><button onclick="View()" class="tdbtn" style="background-color: lightgray;"><a href="#modal" style="text-decoration: none; color: black;">View</a></button></td>
            `;
        })
    })
};

function View(event) {
    var row = this.event.target.parentElement.parentElement.parentElement
    var codex = row.children[0].innerText
    
    fetch("http://localhost/routes/history.php?action=getItem")
    .then(response => response.json())
    .then((data) => {
        var modalTbody = document.getElementById("modalTablee").innerText = '';

        var modalTbody = document.getElementById("modalTablee")
        data.forEach(item => {
            if(item.order_code == codex) {
                var modalTrow = document.createElement("tr")
                
                modalTbody.appendChild(modalTrow)
                modalTrow.innerHTML = `
                <th>${item.order_code}</th>
                <td>${item[7]}</td>
                <td>${item[3]}</td>
                <td>${item.price.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td>${item[12]}</td>
                `;
            }
        })
    })
};

// for (var i=0; i < purchasedProducts[code -1].cartProducts.length; i++){
// }
    

RenderPurchaseds();