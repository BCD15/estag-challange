/* eslint-disable react/prop-types */
export default function Modal({ isOpen, setOpen}) {
    
    function amountProduct() {
        const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
      
        cartProducts.forEach(cartProduct => {
          var code = cartProduct.product[0];
          var amountProduct = parseInt(cartProduct.product.amount)
          var cartAmountInt = parseInt(cartProduct.amount)
          
          var amount = amountProduct - cartAmountInt ;
      
          if(cartAmountInt <= amountProduct) {
            let data = new FormData()
              data.append("amount", JSON.stringify(parseInt(amount)))
              data.append("code", JSON.stringify(parseInt(code)))
        
              fetch(`http://localhost/routes/home.php?action=postAmount`, {
                method: "POST",
                body: data,
              })
            return true    
          } else {
            alert('Não foi possível efetuar a compra, quantidade escolhida acima da quantidade disponível')
            return false
          }
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
      amountProduct()

      setOpen(true)

      localStorage.removeItem("cartProducts");
      document.getElementById("tablee").innerHTML = "";
      
      document.getElementById("taxResult").value = "";
      document.getElementById("totalResult").value = "";
    }

    if (isOpen) {
        return (
            <div id="modal" className="modal">
                <div className="modal_content">
                    <div className="texto">
                        <h3 style={{paddingBottom: '10px', borderBottom: 'solid 1px lightgray'}}>Tem certeza que deseja finalizar sua compra?</h3>
                        <p>Se quiser finalizar a sua compra clique em finish, se quiser cancelar a compra ou continuar comprando clique em cancel para voltar</p>
                    </div>
                    <div className="buttons">
                        <button value="Cancel" onClick={setOpen} style={{backgroundColor: 'lightgray'}}>Cancel</button>
                        <button value="Finish" onClick={finishCart}>Finish</button>
                    </div>
                </div>
            </div>
        )
    } 

    return null
}

// onClick="finishCart()"