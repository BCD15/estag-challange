import '../categories.css'

export default function FormCategory() {
    return(
        <div className="cadastroC">
        <form className='formC' action="http://localhost/routes/categories.php?action=post" method="POST">
            <input type="text" name="name" id="nameCategory" placeholder="Category name" />
            <input type="number" name="tax" id="taxCategory" placeholder="Tax"  />
            <div>
                <button type="submit" value="Add Category" className="submit-inputC">Add Category</button>
            </div>
        </form>
    </div>
    )
}