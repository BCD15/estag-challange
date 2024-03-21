/* eslint-disable react/prop-types */
import './products.css'

import FormProduct from './components/FormProduct';
import TableProduct from './components/TableProduct';

export default function Products({ bodyTheme, submitButtonTheme, buttonTheme }) {
    return(
        <>
            <FormProduct bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} />
            <TableProduct bodyTheme={bodyTheme} buttonTheme={buttonTheme}/>
        </>
    )
}