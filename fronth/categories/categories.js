function filter(str) {
    return str.replace("<", "??")
}

function AddCategory() {
    
    const code = document.querySelector('tbody').childElementCount +1;
    const name = document.getElementById("nameCategory").value;
    const tax = document.getElementById("taxCategory").value;
    const category = {code, name, tax};


    let specialChars = /[!@#$%^&*()_+={}\[\]:;<>,.?~]/;
    if(specialChars.test(name)) {
        alert('Por favor preencha corretamente todos os campos')
        document.getElementById("nameCategory").value = "";
        document.getElementById("taxCategory").value = "";
    } else {
        if(name, tax == "") {
            alert('Por favor preencha todos os campos')
        } else {        
            if (localStorage.getItem('categories') === null) {
                localStorage.setItem('categories', JSON.stringify([category]));
            } else {
                localStorage.setItem('categories', JSON.stringify([...JSON.parse(localStorage.getItem('categories')), category]));
            };
            RenderCategory(category);
        }
    }   

    document.getElementById("nameCategory").value = "";
    document.getElementById("taxCategory").value = "";
};

function RenderCategory(category) {
    fetch("http://localhost/routes/categories.php?action=get").then(response => response.json()).then((data) => {
        var tbody = document.getElementById("tablee")
        data.forEach(category => {        
            var trow = document.createElement("tr")

            tbody.appendChild(trow)
            trow.innerHTML = `
            <th style="border-left: none; width: 18%;">${category.code}</th>
            <td>${filter(category.name)}</td>
            <td style="width: 20%;">${category.tax}%</td>
            <td style="border-top: solid 1px lightgray; width: 15%;"><input onclick="DeleteCategory()" class="tdbtn" type="button" value="delete" style="background-color: lightgray;"></td>
            `;
        })
    })
};

function GetCategories() {
    const categories = JSON.parse(localStorage.getItem('categories'));
    if(categories !== null){
        categories.forEach(item => RenderCategory(item));
    }
};

function DeleteCategory() {
    let trow = this.event.target.parentElement.parentElement
    let id = trow.children[0].innerText
    let name = trow.children[1].innerText
    var categories = JSON.parse(localStorage.getItem('categories'))
    let newCategories = categories.filter(category => category.id !== id && category.name !== name);
    localStorage.setItem("categories", JSON.stringify(newCategories))
    trow.remove()
};

GetCategories();
RenderCategory() 

console.log()