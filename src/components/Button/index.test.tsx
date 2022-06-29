import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.'

import '../../config/config.jest'

describe('When call Component Button', () => {
  test('Should render Button component simple', () => {
    render(<Button />)
    const button = screen.getByTestId('button-container')
    expect(button).toBeInTheDocument()
  });  

  test('Should render Button loaded', () => {
    render(<Button loading={true} />)
    const button = screen.getByTestId('button-container')
    expect(button).toBeInTheDocument()
  }); 

  test('Should render Button outlined', () => {
    render(<Button outlined />)
    const button = screen.getByTestId('button-container')
    expect(button).toBeInTheDocument()
  }); 

  test('Should render Button disabled', () => {
    render(<Button disabled />)
    const button = screen.getByTestId('button-container')
    expect(button).toBeInTheDocument()
  }); 

  test('Should handle click event', () => {
    const handleClick = jest.fn()

    render(<Button disabled onClick={handleClick} />)
    const buttonHTML = screen.getByTestId('button')

    fireEvent.click(buttonHTML)

    expect(handleClick).toBeCalled()
  }); 
})