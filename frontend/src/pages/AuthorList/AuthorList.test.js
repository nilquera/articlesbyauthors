import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react"
import AuthorList from "./AuthorList"
import { BrowserRouter } from 'react-router-dom';

test('Render AuthorList', () => {
    const component = render(
        <BrowserRouter>
            <AuthorList/>
        </BrowserRouter>
    )

    console.log(component)
})