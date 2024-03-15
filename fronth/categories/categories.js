function filter(str) {
    return str.replace("<", "??")
}

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
                <td style="border-top: solid 1px lightgray; width: 15%;"><input class="tdbtn" onclick="DeleteCategory(); location.href='http://localhost/routes/categories.php?action=delete&code=${category[0]}'" type="button" value="delete" style="background-color: lightgray;"></td>
            `;
        })
    })
};

function DeleteCategory() {
    var trow = this.event.target.parentElement.parentElement
    trow.innerText = "";
    
    trow.remove()
    RenderCategory();
};

RenderCategory();

