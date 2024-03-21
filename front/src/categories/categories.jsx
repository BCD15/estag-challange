/* eslint-disable react/prop-types */
import './categories.css'

import FormCategory from './components/FormCategory';
import TableCategory from './components/TableCategory';

export default function Categories({ bodyTheme, submitButtonTheme, buttonTheme }) {
    return(
        <>
            <FormCategory bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme}/>
            <TableCategory bodyTheme={bodyTheme} buttonTheme={buttonTheme}/>
        </>
    )
}

// action="http://localhost/routes/categories.php?action=post" method="POST"