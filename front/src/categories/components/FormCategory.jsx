/* eslint-disable react/prop-types */
import '../categories.css'

export default function FormCategory({ bodyTheme, submitButtonTheme }) {
    return(
        <div className="cadastroC" style={bodyTheme}>
        <form className='formC' action="http://localhost/routes/categories.php?action=post" method="POST">
            <input type="text" name="name" id="nameCategory" placeholder="Category name" />
            <input type="number" name="tax" id="taxCategory" placeholder="Tax"  />
            <div>
                <button type="submit" value="Add Category" className="submit-inputC" style={submitButtonTheme}>Add Category</button>
            </div>
        </form>
    </div>
    )
}