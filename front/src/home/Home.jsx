/* eslint-disable react/prop-types */
import './home.css'

import FormHome from './components/FormHome'
import TableHome from './components/TableHome'

export default function Home({ bodyTheme, submitButtonTheme, buttonTheme }) {
    return (
        <>
           <FormHome bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} /> 
           <TableHome bodyTheme={bodyTheme} submitButtonTheme={submitButtonTheme} buttonTheme={buttonTheme} /> 
        </>
    )
}

