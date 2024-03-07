function filter(str) {
    return str.replace("<", "??")
}

function AddProduct() {
    const code = document.querySelector('tbody').childElementCount +1;
    const name = document.getElementById("nameProduct").value;
    const amount = document.getElementById("amountProduct").value;
    const price = document.getElementById("priceProduct").value;
    const getCategory = document.getElementById("categoryProduct").value;

    if (getCategory == "Category" || null) {
        alert("Por favor escolha uma categoria")
        return
    } 

    const category = JSON.parse(getCategory)
    const product = {code, name, amount, price, category};


    let specialChars = /[!@#$%^&*()_+={}\[\]:;<>,.?~]/;
    if(specialChars.test(name)) {
        alert('Por favor preencha corretamente todos os campos')
        document.getElementById("nameProduct").value = "";
        document.getElementById("amountProduct").value = "";
        document.getElementById("priceProduct").value = "";
        document.getElementById("categoryProduct").value = "Category";
    } else {
        if(name, amount, price, category == "") {
            alert('Por favor preencha corretamente todos os campos')
        } else {    
            if (localStorage.getItem('products') === null) {
                localStorage.setItem('products', JSON.stringify([product]));
            } else {
                localStorage.setItem('products', JSON.stringify([...JSON.parse(localStorage.getItem('products')), product]));
            };
            RenderProduct(product);
        }
    }

    document.getElementById("nameProduct").value = "";
    document.getElementById("amountProduct").value = "";
    document.getElementById("priceProduct").value = "";
    document.getElementById("categoryProduct").value = "Category";
};

function RenderProduct(product) {
    var tbody = document.getElementById("tablee")
    var trow = document.createElement("tr")

    var priceInt =  parseFloat(product.price)

        tbody.appendChild(trow)
        trow.innerHTML = `
            <th style="border-left: none; width: 14%;">${product.code}</th>
            <td style="width: 25%;">${filter(product.name)}</td>
            <td>${product.amount}</td>
            <td>${priceInt.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</td>
            <td>${filter(product.category?.name)}</td>
            <td style="border-top: solid 1px lightgray;"><input onclick="DeleteProduct()" class="tdbtn" type="button" value="delete" style="background-color: lightgray;"></td>
        `;
};

function GetProducts() {
    const products = JSON.parse(localStorage.getItem('products'));  
    if (products !== null) {
        products.forEach(item => RenderProduct(item));
    } 

};

function DeleteProduct() {
    let trow = this.event.target.parentElement.parentElement
    let id = trow.children[0].innerText
    let name = trow.children[1].innerText
    var products = JSON.parse(localStorage.getItem('products'))
    let newProducts = products.filter(product => product.id !== id && product.name !== name);
    localStorage.setItem("products", JSON.stringify(newProducts))
    trow.remove()
};

function GetCategories() {
    var select = document.getElementById("categoryProduct")
    var option = document.createElement("option")
    option.innerHTML = "Category"
    select.appendChild(option)

    const categories = JSON.parse(localStorage.getItem('categories'));
    if(categories) {
        categories.forEach(item => RenderCategory(item)); 
    }
    document.getElementById("categoryProduct").value = "Category";
};

function RenderCategory(category) {
    var select = document.getElementById("categoryProduct")
    var option = document.createElement("option")
    option.innerHTML = "Category" 

    option.value = JSON.stringify(category);
    
    select.appendChild(option)
    option.innerHTML = JSON.stringify(category.name).replace(/"/g, "")
};

GetCategories()
GetProducts()
 