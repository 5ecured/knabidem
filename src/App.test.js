import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

test('Header must have the text "Medibank Coding Challenge"', () => {
    render(<App />)
    const element = screen.getByText(/medibank coding challenge/i)
    expect(element).toBeInTheDocument()
})

test('Must have an appbar', () => {
    render(<App />)
    const element = screen.getByTestId('appBar')
    expect(element).toBeInTheDocument()
})

test('Must render 4 list items, to show the requirements of the coding challenge', () => {
    render(<App />)
    const element = screen.getAllByRole('listitem')
    expect(element.length).toBe(4)
})

test('Must have a button to show/hide solution', () => {
    render(<App />)
    const element = screen.getByTestId('button')
    expect(element).toBeInTheDocument()
})

test('Must have an input field for users to filter', () => {
    render(<App />)
    const element = screen.getByTestId('inputField')
    expect(element).toBeInTheDocument()
})

test('Input field must be empty', () => {
    render(<App />)
    const element = screen.getByTestId('inputField')
    expect(element.value).toBe(undefined)
})

test('Must have a "clear filter" button', () => {
    render(<App />)
    const element = screen.getByTestId('clearFilter')
    expect(element).toBeInTheDocument()
})