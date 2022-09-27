import React from 'react'
import { render, screen } from '@testing-library/react'
import DisplayContent from './DisplayContent'
import '@testing-library/jest-dom'
import { fetchData } from '../../utils/utils'

test('Must have a male heading', async () => {
    const fetchedData = await fetchData()

    render(<DisplayContent fetchedData={fetchedData} filteredData={'test'} showSolution={true} />)
    const element = screen.getByTestId('male')
    expect(element).toBeInTheDocument()
})

test('Must have a female heading', async () => {
    const fetchedData = await fetchData()

    render(<DisplayContent fetchedData={fetchedData} filteredData={'test'} showSolution={true} />)
    const element = screen.getByTestId('female')
    expect(element).toBeInTheDocument()
})
