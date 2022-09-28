import React from 'react'
import { render, screen } from '@testing-library/react'
import OutputResults from './OutputResults'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('Must have the text "Result" to show the result of the search to users', () => {
    render(
        <Provider store={store}>
            <OutputResults resultsArray={[]} show={true} />
        </Provider>
    )
    const element = screen.getByTestId('result')
    expect(element).toBeInTheDocument()
})