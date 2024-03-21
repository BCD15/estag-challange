import { useState } from "react";

import Modal from './ModalFinish';

import '../home.css'

export default function Finish() {
    const [open, setOpen] = useState(false);

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

        setOpen(true)
      }
    
    function cancelCart() {
        localStorage.removeItem("cartProducts");
        document.getElementById("tablee").innerHTML = "";
       
        document.getElementById("taxResult").value = "";
        document.getElementById("totalResult").value = "";
      }

    return (
        <>
            <div className="valorFinal">
                <div>
                    <label>Tax: <input type="number" id="taxResult" name="taxResult" disabled /></label>
                </div>
                <div>
                    <label>Total: <input type="number" id="totalResult" name="totalResult" disabled /></label>
                </div>
            </div>

            <div className="finish">    
                <div>
                    <input type="button" value="Cancel" onClick={cancelCart} style={{backgroundColor: 'lightgray', marginLeft: '350px'}} />
                    <button className="tdbtn" onClick={orderPost}>Finish</button>
                <Modal isOpen={open} setOpen={() => setOpen(!open)} />
                </div>
 
 
            </div>
        </>
    )
}


// onClick={orderPost}

