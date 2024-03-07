function filter(str) {
    return str.replace("<", "??")
}

function GetPurchaseds() {
    const purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts'));
    if (purchasedProducts !== null) {
        purchasedProducts.forEach(item => RenderPurchaseds(item));
    }
};

function RenderPurchaseds(item, id) {
    var code = document.querySelector('tbody').childElementCount +1;
    var total = parseFloat(item.total)
    var taxTotal = parseFloat(item.taxTotal)

    var tbody = document.getElementById("tablee")
    var trow = document.createElement("tr")
    tbody.appendChild(trow)
    trow.innerHTML = `
    <th style="border-left: none; width: 50%;">${code}</th>
    <td>${taxTotal.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
    <td name="totaltd">${total.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
    <td style="border-top: solid 1px lightgray; width: 20%;"><button onclick="View()" class="tdbtn" style="background-color: lightgray;"><a href="#modal" style="text-decoration: none; color: black;">View</a></button></td>
    `;
};

function View() {
    const purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts'));
    var modalTbody = document.getElementById("modalTablee").innerText = '';
    var row = this.event.target.parentElement.parentElement.parentElement
    var code = row.children[0].innerText
    
    for (var i=0; i < purchasedProducts[code -1].cartProducts.length; i++){

        if(purchasedProducts[code -1].id == code) {
            var modalTbody = document.getElementById("modalTablee")
            var modalTrow = document.createElement("tr")
            modalTbody.appendChild(modalTrow)
            modalTrow.innerHTML = `
            <th>${code}</th>
            <td>${filter(purchasedProducts[code -1].cartProducts[i].product.name)}</td>
            <td>${purchasedProducts[code -1].cartProducts[i].amount}</td>
            <td>${purchasedProducts[code -1].cartProducts[i].priceInt.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
            <td>${filter(purchasedProducts[code -1].cartProducts[i].product.category.name)}</td>
            `;
        }
        }
    }

GetPurchaseds();