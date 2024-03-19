import './categories.css'

import FormCategory from './components/FormCategory';
import TableCategory from './components/TableCategory';

export default function Categories() {
    return(
        <>
            <FormCategory />
            <TableCategory />
        </>
    )
}

// action="http://localhost/routes/categories.php?action=post" method="POST"