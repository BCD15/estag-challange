/* eslint-disable react/prop-types */
import './history.css'

import TableHistory from './components/TableHistory';

export default function History({ bodyTheme, buttonTheme }) {
    return(
        <>
            <TableHistory bodyTheme={bodyTheme} buttonTheme={buttonTheme} />
        </>
    )
}

// action="http://localhost/routes/categories.php?action=post" method="POST"