import React from 'react'
import { render, screen } from '@testing-library/react'
import OutputResults from './OutputResults'
import '@testing-library/jest-dom'

test('Must have the text "Result" to show the result of the search to users', () => {
    render(<OutputResults resultsArray={[]} show={true} />)
    const element = screen.getByTestId('result')
    expect(element).toBeInTheDocument()
})