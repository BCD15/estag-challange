function filter(str) {
    return str.replace("<", "??")
}

function RenderProduct(product) {
    
    //product[1] = nameProduct
    //product.name = nameCategory

    fetch("http://localhost/routes/products.php?action=get").then(response => response.json()).then((data) => {
        var tbody = document.getElementById("tablee")
        console.log(data)
        data.forEach(product => {
            var trow = document.createElement("tr")
            var priceInt =  parseFloat(product.price)
            tbody.appendChild(trow)
            trow.innerHTML = `
                <th style="border-left: none; width: 14%;">${product.code}</th>
                <td>${filter(product[1])}</td>
                <td>${product.amount}</td>
                <td>${priceInt.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
                <td style="width: 25%;">${filter(product.name)}</td>
                <td style="border-top: solid 1px lightgray;"><input onclick="DeleteProduct(); location.href='http://localhost/routes/products.php?action=delete&code=${product.code}'" class="tdbtn" type="button" value="delete" style="background-color: lightgray;"></td>
            `;
        })
    })
};

function RenderCategory(category) {
    fetch("http://localhost/routes/categories.php?action=get").then(response => response.json()).then((data) => {
        var select = document.getElementById("categoryProduct")
        data.forEach(category => {
            var option = document.createElement("option")
            option.value = JSON.stringify(category.code);
                
            select.appendChild(option)
            option.innerHTML = JSON.stringify(category.name).replace(/"/g, "")
        })
    })
};

function DeleteProduct() {
    var trow = this.event.target.parentElement.parentElement
    trow.innerText = "";

    trow.remove()
    RenderProduct()
};

RenderCategory()
RenderProduct()
 