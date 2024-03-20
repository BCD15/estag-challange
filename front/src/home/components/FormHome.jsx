import { useState, useEffect } from "react";

import '../home.css'

export default function FormHome() {
    const [products, setProducts] = useState([]);
    
    useEffect(() =>  {
        fetch('http://localhost/routes/products.php?action=get')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
    }, []);

    function AddCartProduct() {
        const amount = document.getElementById("amountCardProduct").value;
      
        const getProduct = document.getElementById("slctProduct").value;
        const product = products.find((product) => product[0] == getProduct)
      
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
      
          document.getElementById("slctProduct").value = "Product";
          document.getElementById("amountCardProduct").value = "";
          document.getElementById("taxCardProduct").value = "";
          document.getElementById("priceCardProduct").value = "";
        }
    }
    
    function associaInput() {
      const getProduct = document.getElementById("slctProduct").value;

      const product = products.find((product) => product[0] == getProduct)

      document.getElementById("taxCardProduct").value = product.tax;
      document.getElementById("priceCardProduct").value = product.price;
    }

    return(
        <div className="cadastroH">
            <form className="formH">
                <select name="Product"  id="slctProduct" onChange={associaInput} style={{width: '93%'}}>
                    {products.map((product)=>(
                        <option key={product[0]} value={product[0]}>{product[1]}</option>
                    ))}
                </select>

                <input type="number" className="downInputsH" min="1" name="Amount" id="amountCardProduct" placeholder="Amount" />
                <input type="number" className="downInputsH" min="1" name="Tax"  id="taxCardProduct" placeholder="Tax" disabled />
                <input type="number" className="downInputsH" min="0.01" step="any" name="Price" id="priceCardProduct" placeholder="Unit Price" disabled />
            </form>

            <input type="submit" value="Add Product to Cart" onClick={AddCartProduct} className="submit-inputH" />
        </div>

    )
}