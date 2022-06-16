import React, {useState} from "react"
import {InputType} from "../../interfaces/Forms.intf"
import Button from "../../components/Button"
import Dropdown from "../../components/DropDown"
import Input from "../../components/Input"
import DatePicker, { DatePickerResult } from "../../components/DatePicker"
import { Employee } from "../../interfaces/Employee.intf"

import Colors from '../../sass/themes/_colors.module.scss'
import "./style.scss"

import StatesData from "../../data/states.json"
import DepartmentsData from "../../data/departments.json"


const Home: React.FunctionComponent = () => {
  const states: string[] = StatesData.map((element) => element.name)
  const departments: string[] = DepartmentsData

  const [formInputFirstname, setFormInputFirstname] = useState<InputType>({label: "First Name", name: "first-name", error: false, errorMessage: "Please enter your first name"})
  const [formInputLastname, setFormInputLastname] = useState<InputType>({label: "Last Name", name: "last-name", error: false, errorMessage: "Please enter your last name"})
  const [formInputDateOfBirth, setFormInputDateOfBirth] = useState<InputType>({label: "Date of Birth", name: "date-of-birth", error: false, errorMessage: "Please select a valid date", readOnly: true})
  const [formInputStreet, setFormInputStreet] = useState<InputType>({label: "Street", name: "street", errorMessage: "Please enter your street"})
  const [formInputCity, setFormInputCity] = useState<InputType>({label: "City", name: "city", errorMessage: "Please enter your city"})
  const [formInputState, setFormInputState] = useState<InputType>({label: "State", name: "state", errorMessage: "Please select your state", choices: states})
  const [formInputZipcode, setFormInputZipcode] = useState<InputType>({label: "Zip code", name: "zip-code", errorMessage: "Please enter a valid postal code"})
  const [formInputCompanyStart, setformInputCompanyStart] = useState<InputType>({label: "Start Date", name: "start-date", errorMessage: "Please select a valid date", readOnly: true})
  const [formInputDepartment, setFormInputDepartment] = useState<InputType>({label: "Department", name: "department", errorMessage: "Please select your department", choices: departments})

  const checkValidForm = (): boolean => {
    setFormInputFirstname({...formInputFirstname, error : !(formInputFirstname.value && typeof(formInputFirstname.value) === "string" && formInputFirstname.value!.length > 2)})
    setFormInputLastname({...formInputLastname, error : !(formInputLastname.value && typeof(formInputLastname.value) === "string" && formInputLastname.value!.length > 2)})
    setFormInputDateOfBirth({...formInputDateOfBirth, error : !(formInputDateOfBirth.value && formInputDateOfBirth.value instanceof Date)})
    setFormInputStreet({...formInputStreet, error : !(formInputStreet.value && typeof(formInputStreet.value) === "string" && formInputStreet.value!.length > 2)})
    setFormInputCity({...formInputCity, error : !(formInputCity.value && typeof(formInputCity.value) === "string" && formInputCity.value!.length > 2)})
    setFormInputState({...formInputState, error : !(formInputState.value && typeof(formInputState.value) === "string" && states.includes(formInputState.value))})
    setFormInputZipcode({...formInputZipcode, error : !(formInputZipcode.value && typeof(formInputZipcode.value) === "string" && typeof(parseInt(formInputZipcode.value)) === "number" && formInputZipcode.value.length === 5)})
    setformInputCompanyStart({...formInputCompanyStart, error : !(formInputCompanyStart.value && formInputCompanyStart.value instanceof Date)})
    setFormInputDepartment({...formInputDepartment, error : !(formInputDepartment.value && typeof(formInputDepartment.value) === "string" && departments.includes(formInputDepartment.value))})

    return !(
      formInputFirstname.error ||
      formInputLastname.error ||
      formInputDateOfBirth.error ||
      formInputStreet.error ||
      formInputCity.error ||
      formInputState.error ||
      formInputZipcode.error ||
      formInputCompanyStart.error ||
      formInputDepartment.error
    )           
  }

  return (<section className="box" id="home">
    <h2>Create Employee</h2>
    <form action="#" id="create-employee">
      <div className="row row--wrap row--jse row--start">
        <div className="informations">
          <h3 className="text-center">Informations</h3>
          <Input 
            label={formInputFirstname.label}
            name={formInputFirstname.name} 
            error={formInputFirstname.error} 
            errorMessage={formInputFirstname.errorMessage} 
            onChange={(value : string) => {
              setFormInputFirstname({...formInputFirstname, error: false, value: value, text: value})
            }}
          />
          <Input 
            label={formInputLastname.label} 
            name={formInputLastname.name} 
            error={formInputLastname.error} 
            errorMessage={formInputLastname.errorMessage} 
            onChange={(value : string) => {
              setFormInputLastname({...formInputLastname, error: false, value: value, text: value})
            }}
          />
          <DatePicker 
            zIndex={12}
            label={formInputDateOfBirth.label}
            error={formInputDateOfBirth.error}
            errorMessage={formInputDateOfBirth.errorMessage}
            value={formInputDateOfBirth.text}
            elevationPicker={true}
            headerPickerColor={Colors.primary}
            textColor={Colors.secondry}
            errorColor={Colors.danger}
            focusColor={Colors.primary}
            borderColor={Colors.greyLigth}
            onSelect={(result: DatePickerResult) => {
              setFormInputDateOfBirth({...formInputDateOfBirth, error: false, text: result.value, value: result.date})
            }}
          />
        </div>
        <fieldset>
          <legend>Address</legend>
          <Input 
            label={formInputStreet.label} 
            name={formInputStreet.name} 
            error={formInputStreet.error} 
            errorMessage={formInputStreet.errorMessage} 
            onChange={(value : string) => {
              setFormInputStreet({...formInputStreet, error: false, value: value, text: value})
            }}
          />
          <Input 
            label={formInputCity.label} 
            name={formInputCity.name} 
            error={formInputCity.error} 
            errorMessage={formInputCity.errorMessage} 
            onChange={(value : string) => {
              setFormInputCity({...formInputCity, error: false, value: value, text: value})
            }}
          />
          <Dropdown 
            label={formInputState.label} 
            name={formInputState.name} 
            error={formInputState.error} 
            errorMessage={formInputState.errorMessage} 
            choicies={formInputState.choices} 
            value={formInputState.value as string} 
            zIndex={10} 
            textColor={Colors.secondry}
            errorColor={Colors.danger}
            focusColor={Colors.primary}
            borderColor={Colors.greyLigth}
            onSelect={(value : any) => {
              setFormInputState({...formInputState, error: false, value: value})
            }}
          />
          <Input 
            type={"number"} 
            label={formInputZipcode.label} 
            name={formInputZipcode.name} 
            error={formInputZipcode.error} 
            errorMessage={formInputZipcode.errorMessage} 
            onChange={(value : string) => {
              setFormInputZipcode({...formInputZipcode, error: false, value: value, text: value})
            }}
          />
        </fieldset>
      </div>
      <div className="department">
        <h3 className="text-center">Company</h3>
        <DatePicker 
          zIndex={11}
          label={formInputCompanyStart.label}
          error={formInputCompanyStart.error}
          errorMessage={formInputCompanyStart.errorMessage}
          value={formInputCompanyStart.text}
          elevationPicker={true}
          headerPickerColor={Colors.primary}
          textColor={Colors.secondry}
          errorColor={Colors.danger}
          focusColor={Colors.primary}
          borderColor={Colors.greyLigth}
          onSelect={(result: DatePickerResult) => {
            setformInputCompanyStart({...formInputCompanyStart, error: false, text: result.value, value: result.date})
          }}
        />
        <Dropdown 
          label={formInputDepartment.label} 
          name={formInputDepartment.name} 
          error={formInputDepartment.error} 
          errorMessage={formInputDepartment.errorMessage} 
          choicies={formInputDepartment.choices} 
          value={formInputDepartment.value as string} 
          zIndex={10} 
          textColor={Colors.secondry}
          errorColor={Colors.danger}
          focusColor={Colors.primary}
          borderColor={Colors.greyLigth}
          onSelect={(value : string) => {
            setFormInputDepartment({...formInputDepartment, error: false, value: value}) 
          }}
        />
      </div>
    </form>
    <Button label="Save" onClick={(e) => {
      e.preventDefault()

      if (checkValidForm()) {
        const employee: Employee = {
          firstname: formInputFirstname.value as string,
          lastname: formInputLastname.value as string,
          dateOfBirth: formInputDateOfBirth.value as Date,
          street: formInputStreet.value as string,
          city: formInputCity.value as string,
          state: formInputState.value as string,
          zipcode: parseInt(formInputZipcode.value as string),
          start: formInputCompanyStart.value as Date,
          department: formInputDepartment.value as string
        }
        console.log(employee)
      } else {
        // Popup message erreur
      }
    }} />
  </section>)
}

export default Home
