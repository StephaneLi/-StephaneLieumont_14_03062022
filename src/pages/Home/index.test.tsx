import { fireEvent, render, screen } from '../../config/config.jest'
import Home from '.'

describe('When call Home Page', () => {
  test('Should render component', () => {
    render(<Home />)
    
    const homeComponent = screen.getByTestId('home')

    expect(homeComponent).toBeInTheDocument()
  });

  test('Should send form with error', () => {
    render(<Home />)
    
    const homeComponent = screen.getByTestId('home')
    const buttonSubmit = screen.getByText('Save')

    const handleSubmit = jest.fn()

    buttonSubmit.addEventListener('click', handleSubmit)

    fireEvent.click(buttonSubmit)    

    expect(homeComponent).toBeInTheDocument()
  });

  test('Should send validate form', () => {
    const states = ["Alaska", "Indiana"]    
    const department = ["Sales", "Marketing"]

    render(<Home />, { preloadedState: {
        formEmployeeSlice: {
          formInputFirstname: {label: "First Name", name: "first-name", error: false, errorMessage: "Please enter your first name", inputIsValid: true},
          formInputLastname: {label: "Last Name", name: "last-name", error: false, errorMessage: "Please enter your last name", inputIsValid: true},
          formInputDateOfBirth: {label: "Date of Birth", name: "date-of-birth", error: false, errorMessage: "Please select a valid date", readOnly: true, inputIsValid: true},
          formInputStreet: {label: "Street", name: "street", errorMessage: "Please enter your street", inputIsValid: true},
          formInputCity: {label: "City", name: "city", errorMessage: "Please enter your city", inputIsValid: true},
          formInputState: {label: "State", name: "state", errorMessage: "Please select your state", choices: states, inputIsValid: true, value: states[0]},
          formInputZipcode: {label: "Zip code", name: "zip-code", errorMessage: "Please enter a valid postal code", inputIsValid: true},
          formInputCompanyStart: {label: "Start Date", name: "start-date", errorMessage: "Please select a valid date", readOnly: true, inputIsValid: true},
          formInputDepartment: {label: "Department", name: "department", errorMessage: "Please select your department", choices: department, inputIsValid: true},
        }
      }
    })
    
    const inputsText = screen.getAllByTestId('input-container')
    const inputsDatePickers = document.querySelectorAll('.date-picker')!
    const inputsDropdown = screen.getAllByTestId('container')
    const submitButton = screen.getByText('Save')
    const resetButton = screen.getByText('Reset')

    const handleChange = jest.fn()
    const handleClickDatePicker = jest.fn()
    const handleClickDropdown = jest.fn()
    const handleSubmit = jest.fn()
    const handleReset = jest.fn()
    const handleClosePopup = jest.fn()

    // Test submit form
    submitButton.addEventListener('click', handleSubmit)
    fireEvent.click(submitButton)   
    expect(handleSubmit).toHaveBeenCalledTimes(1)

    // Test close popup
    const popupClose = screen.getByTestId('close-button')
    popupClose.addEventListener('click', handleClosePopup)
    fireEvent.click(popupClose)
    expect(handleClosePopup).toHaveBeenCalledTimes(1)

    // Test Inputs
    inputsText.forEach((input) => {
      if(input.querySelector('input[type="number"]')) {
        const inputHTML = input.querySelector('input')!
        inputHTML.addEventListener('change', handleChange)
        fireEvent.change(inputHTML, {target: {value: '1234'}})
      }  else {
        const inputHTML = input.querySelector('input')!
        inputHTML.addEventListener('change', handleChange)
        fireEvent.change(inputHTML, {target: {value: 'test'}})
      }
    })

    inputsDatePickers.forEach((input) => {    
      const dateclick = input.querySelectorAll('.day')
      dateclick[15].addEventListener('click', handleClickDatePicker)
      fireEvent.click(dateclick[15])
    })

    inputsDropdown.forEach((input) => {
      const options = input.querySelectorAll('.dropdown__choicies ul li')
      fireEvent.click(input)
      options[0].addEventListener('click', handleClickDropdown)
      fireEvent.click(options[0])
    })    
    
    expect(handleChange).toHaveBeenCalledTimes(5)
    expect(handleClickDatePicker).toHaveBeenCalledTimes(2)
    expect(handleClickDropdown).toHaveBeenCalledTimes(2)   

    // Test reset button
    resetButton.addEventListener('click', handleReset)
    fireEvent.click(resetButton)   
    expect(handleReset).toHaveBeenCalledTimes(1)
  });
})