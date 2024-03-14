function filter(str) {
  return str.replace("<", "??");
}

function AddCartProduct() {
  const amount = document.getElementById("amountCardProduct").value;

  const getProduct = document.getElementById("slctProduct").value;
  const product = JSON.parse(getProduct);

  const price = document.getElementById("priceCardProduct").value;
  const priceInt = parseFloat(price);

  const parcial = (amount * priceInt);

  const tax = product.tax;

  const taxInt = parseInt(tax);

  const taxTotalProduct = (taxInt/100 * parcial)
  const totalProduct = ( taxTotalProduct + parcial)

  const cartProduct = { product, amount, totalProduct, taxTotalProduct, priceInt };

  if ((product, amount == "")) {
    alert("Por favor preencha todos os campos");
  } else { 
    if (amount < 0) {
      alert("Não é possivel adicionar quantidade negativa ao carrinho")
      return
    } else {
      if (amount > parseInt(product.amount)) {
        alert("Não foi possivel adicionar ao carrinho, quantidade solicitada acima da quantidade disponível")
        return
      } else {
        if (localStorage.getItem("cartProducts") === null) {
          localStorage.setItem("cartProducts", JSON.stringify([cartProduct]));
        } else {
          const cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
          for (let i = 0; i < cartProducts.length; i++) {
            if(cartProducts[i].product[1] == product[1]) {
              alert('produto já está no carrinho')
              return
            }
          }
          localStorage.setItem("cartProducts", JSON.stringify([...JSON.parse(localStorage.getItem("cartProducts")), cartProduct,]));
        }
      }
    }
      RenderCartProduct(cartProduct);

    document.getElementById("slctProduct").value = "Product";
    document.getElementById("amountCardProduct").value = "";
    document.getElementById("taxCardProduct").value = "";
    document.getElementById("priceCardProduct").value = "";
  }
}

function RenderProduct(product) {
  fetch("http://localhost/routes/products.php?action=get").then(response => response.json()).then((data) => {
    var select = document.getElementById("slctProduct");
    data.forEach(product => {
        var option = document.createElement("option");
        option.value = JSON.stringify(product);
        
        select.appendChild(option);
        option.innerHTML = JSON.stringify(product[1]).replace(/"/g, "");
    })
  })
}

function associaInput() {
  const amount = document.getElementById("amountCardProduct").value;
  const getProduct = document.getElementById("slctProduct").value;
  const product = JSON.parse(getProduct);
  const cartProduct = { product, amount };

  var taxt = cartProduct.product.tax;
  const price = cartProduct.product?.price;
  const priceFloat = parseFloat(price);

  document.getElementById("taxCardProduct").value = `${taxt}`;
  document.getElementById("priceCardProduct").value = `${priceFloat}`;
}

function GetCartProducts() {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  if (cartProducts !== null) {
    cartProducts.forEach((item) => RenderCartProduct(item));
  }
}

function RenderCartProduct(cartProduct) {
  var tbody = document.getElementById("tablee");
  var trow = document.createElement("tr");
  
    tbody.appendChild(trow);  
    trow.innerHTML = `
      <th style="border-left: none; width: 10%;">${filter(cartProduct.product[1])}</th>
      <td>${cartProduct.priceInt.toLocaleString("en-US", {style: "currency", currency: "USD",})}</td>
      <td>${cartProduct.amount}</td>
      <td>${cartProduct.totalProduct.toLocaleString("en-US", {style: "currency", currency: "USD",})}</td>
    `;
  if(tbody.childElementCount <= 1) {

    document.getElementById("taxResult").value = `${cartProduct.taxTotalProduct.toFixed(2)}`;
    document.getElementById("totalResult").value = `${cartProduct.totalProduct.toFixed(2)}`;
  
  } else {
    var TaxTotalP = document.getElementById("taxResult").value 
    var TotalP = document.getElementById("totalResult").value

    var TaxTotalPInt = parseFloat(TaxTotalP) 
    var TotalPInt = parseFloat(TotalP)

    var newTaxTotalP = TaxTotalPInt + cartProduct.taxTotalProduct
    var newTotalP = TotalPInt + cartProduct.totalProduct
    
    document.getElementById("taxResult").value = `${newTaxTotalP.toFixed(2)}`;
    document.getElementById("totalResult").value = `${newTotalP.toFixed(2)}`;
  }
}
  
// function amountProduct() {
//   const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

//   for (let i = 0; i < cartProducts.length; i++) {    
//     var code = cartProducts[i].product.code;
//     var name = cartProducts[i].product.name;
//     var price = cartProducts[i].product.price;
//     var category = cartProducts[i].product.category;
//     var amountProduct = parseInt(cartProducts[i].product.amount)
//     var cartAmountInt = parseInt(cartProducts[i].amount)
    
//     var amount = amountProduct - cartAmountInt ;
    
//     const product = { code, name, amount, price, category };
    
//     const products = JSON.parse(localStorage.getItem("products"));
    
//     let newProducts = products.filter(
//       (product) => product.code !== code && product.name !== name
//     );
    
//     if(cartAmountInt <= amountProduct) {
//       localStorage.setItem("products", JSON.stringify(newProducts));
      
//       localStorage.setItem("products", JSON.stringify([...JSON.parse(localStorage.getItem("products")), product]));
//       location.reload()
//       return true    
//     } else {
//       alert('Não foi possível efetuar a compra, quantidade escolhida acima da quantidade disponível')
//       return false
//     }
//   }
// }

function orderPost() {
  var total = document.getElementById('totalResult').value
  var tax = document.getElementById('taxResult').value
  let data = new FormData()
  data.append("totalResult", total)
  data.append("taxResult", tax)
  
  fetch(`http://localhost/routes/home.php?action=postCart`, {
    method: "POST",
    body: data,
  })
}

function orderItemPost() {
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  cartProducts.forEach(cartProduct => {
    fetch('http://localhost/routes/home.php?action=get')
    .then(response => response.json())
    .then((data) => {
      data.forEach(order => {
        let data = new FormData()
        
        data.append("product_code", JSON.stringify(cartProduct.product[0]));
        data.append("order_code", JSON.stringify(order.max));
        data.append("Amount", JSON.stringify(parseInt(cartProduct.amount)))
        data.append("Price", JSON.stringify(parseFloat(cartProduct.priceInt)))
        data.append("Tax", JSON.stringify(parseFloat(cartProduct.taxTotalProduct)))
  
        fetch(`http://localhost/routes/home.php?action=postProducts`, {
          method: "POST",
          body: data,
        })
      })
    })
  })
}

function finishCart() {
  orderItemPost()

  localStorage.removeItem("cartProducts");
  document.getElementById("tablee").innerHTML = "";
  
  document.getElementById("taxResult").value = "";
  document.getElementById("totalResult").value = "";
}

function cancelCart() {
  localStorage.removeItem("cartProducts");
  document.getElementById("tablee").innerHTML = "";
 
  document.getElementById("taxResult").value = "";
  document.getElementById("totalResult").value = "";
}

RenderProduct();
GetCartProducts();