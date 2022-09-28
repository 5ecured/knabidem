import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'



test('Header must have the text "Medibank Coding Challenge"', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByText(/medibank coding challenge/i)
    expect(element).toBeInTheDocument()
})

test('Must have an appbar', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('appBar')
    expect(element).toBeInTheDocument()
})

test('Must render 6 list items, to show the requirements of the coding challenge plus my own notes', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getAllByRole('listitem')
    expect(element.length).toBe(10)
})

test('Must have a button to show/hide solution', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('button')
    expect(element).toBeInTheDocument()
})

test('Must have an input field for users to filter', () => {
    render(
        <Provider store={store}>
            <App showSolution={true} />
        </Provider>
    )
    const element = screen.getByTestId('inputField')
    expect(element).toBeInTheDocument()
})

test('Input field must be empty', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('inputField')
    expect(element.value).toBe(undefined)
})

test('Must have a "clear filter" button', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('clearFilter')
    expect(element).toBeInTheDocument()
})

test('Must have a "search" button', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('searchButton')
    expect(element).toBeInTheDocument()
})

test('Must have a "type of pet" input field', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTitle('petField')
    expect(element).toBeInTheDocument()
})

test('Must have a "gender" input field', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTitle('genderField')
    expect(element).toBeInTheDocument()
})

test('Must have a clear button to clear the "pet" and "gender" input fields', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const element = screen.getByTestId('clearButton')
    expect(element).toBeInTheDocument()
})