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

  const tax = product.category?.tax;
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
            if(cartProducts[i].product.name == product.name) {
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

function GetProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products !== null) {
    products.forEach((item) => RenderProduct(item));
  }
  document.getElementById("slctProduct").value = "Product";
}

function RenderProduct(product) {
  var select = document.getElementById("slctProduct");
  var option = document.createElement("option");
  option.value = JSON.stringify(product);

  select.appendChild(option);
  option.innerHTML = JSON.stringify(product.name).replace(/"/g, "");
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
        <th style="border-left: none; width: 50%;">${filter(
          cartProduct.product?.name
        )}</th>
        <td>${cartProduct.priceInt.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</td>
        <td>${cartProduct.amount}</td>
        <td name="totaltd">${cartProduct.totalProduct.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}</td>
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

function associaInput() {
  const amount = document.getElementById("amountCardProduct").value;
  const getProduct = document.getElementById("slctProduct").value;
  const product = JSON.parse(getProduct);
  const cartProduct = { product, amount };

  var taxt = cartProduct.product.category?.tax;

  const price = cartProduct.product?.price;
  const priceInt = parseFloat(price);

  document.getElementById("taxCardProduct").value = `${taxt}`;
  document.getElementById("priceCardProduct").value = `${priceInt}`;
}

function amountProduct() {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

  for (let i = 0; i < cartProducts.length; i++) {    
    var code = cartProducts[i].product.code;
    var name = cartProducts[i].product.name;
    var price = cartProducts[i].product.price;
    var category = cartProducts[i].product.category;
    var amountProduct = parseInt(cartProducts[i].product.amount)
    var cartAmountInt = parseInt(cartProducts[i].amount)
    
    var amount = amountProduct - cartAmountInt ;
    
    const product = { code, name, amount, price, category };
    
    const products = JSON.parse(localStorage.getItem("products"));
    
    let newProducts = products.filter(
      (product) => product.code !== code && product.name !== name
    );
    
    if(cartAmountInt <= amountProduct) {
      localStorage.setItem("products", JSON.stringify(newProducts));
      
      localStorage.setItem("products", JSON.stringify([...JSON.parse(localStorage.getItem("products")), product]));
      location.reload()
      return true    
    } else {
      alert('Não foi possível efetuar a compra, quantidade escolhida acima da quantidade disponível')
      return false
    }
  }
}
  
  function finishCart() {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  const purchasedProducts = JSON.parse(
    localStorage.getItem("purchasedProducts")
  );
  const total = document.getElementById("totalResult").value;
  const taxTotal = document.getElementById("taxResult").value;

  if (purchasedProducts === null) {
    var id = 1;
  } else {
    id = purchasedProducts.length + 1;
  }

  const finishCart = { cartProducts, total, taxTotal, id };
  
  if(amountProduct() == true) {
    if (localStorage.getItem("purchasedProducts") === null) {
      localStorage.setItem("purchasedProducts", JSON.stringify([finishCart]));
    } else {
      localStorage.setItem("purchasedProducts", JSON.stringify(
          [...JSON.parse(localStorage.getItem("purchasedProducts")), finishCart,]
        )
      );
    }
  }
  
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

GetCartProducts();
GetProducts();
