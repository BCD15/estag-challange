import { useState, useEffect } from "react";

import '../products.css'

export default function FormProduct() {
    
    const [categories, setCategories] = useState([]);

    useEffect(() =>  {
        fetch('http://localhost/routes/categories.php?action=get')
        .then(response => response.json())
        .then(data => {
            setCategories(data);
        })
    }, []);

    return(
        <div className="cadastroP">
            <form className="formP" action="http://localhost/routes/products.php?action=post" method="POST">
                <input type="text" name="Product" id="nameProduct" placeholder="Product name" style={{width: '90%'}}/>
                <input type="number" min="1" name="Amount" id="amountProduct" placeholder="Amount" className="downInputsP" />
                <input type="number" min="0.01" step="any"  name="Price" id="priceProduct" placeholder="Price" className="downInputsP" />
                
                <select name="Category" id="categoryProduct" className="downInputsP"> 
                    {categories.map((category)=>(
                        <option key={category.code} value={category.code}>{category.name}</option>
                    ))}
                </select>
                
                <div>
                    <button type="submit" value="Add Product" className="submit-inputP">Add Product</button>      
                </div>
            </form>
        </div>
    )
}