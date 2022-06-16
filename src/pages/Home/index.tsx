import React, {useState} from "react"
import {InputType} from "../../interfaces/Forms.intf"
import Button from "../../components/Button"
import Dropdown from "../../components/DropDown"
import Input from "../../components/Input"
import StatesData from "../../data/states.json"
import DatePicker, { DatePickerResult } from "../../components/DatePicker"
import Colors from '../../sass/themes/_colors.module.scss'

import "./style.scss"

const Home: React.FunctionComponent = () => {
  const states: string[] = StatesData.map((element) => element.name)
  const departments: string[] = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

  const [formInputFirstname, setFormInputFirstname] = useState<InputType>({label: "First Name", name: "first-name", error: false, errorMessage: "Veuillez saisir votre Nom"})
  const [formInputLastname, setFormInputLastname] = useState<InputType>({label: "Last Name", name: "last-name", error: false, errorMessage: "Veuillez saisir votre Nom"})
  const [formInputDateOfBirth, setFormInputDateOfBirth] = useState<InputType>({label: "Date of Birth", name: "date-of-birth", error: false, errorMessage: "Veuillez saisir un Date valid", readOnly: true})
  const [formInputStreet, setFormInputStreet] = useState<InputType>({label: "Street", name: "street", errorMessage: "Veuillez saisir votre Nom"})
  const [formInputCity, setFormInputCity] = useState<InputType>({label: "City", name: "city", errorMessage: "Veuillez saisir votre Nom"})
  const [formInputState, setFormInputState] = useState<InputType>({label: "State", name: "state", errorMessage: "Veuillez saisir votre Nom", choices: states})
  const [formInputZipcode, setFormInputZipcode] = useState<InputType>({label: "Zip code", name: "zip-code", errorMessage: "Veuillez saisir votre Nom"})
  const [formInputCompanyStart, setformInputCompanyStart] = useState<InputType>({label: "Start Date", name: "start-date", errorMessage: "Veuillez saisir un Date valid", readOnly: true})
  const [formInputDepartment, setFormInputDepartment] = useState<InputType>({label: "Department", name: "department", errorMessage: "Veuillez saisir votre Nom", choices: departments})

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
              setFormInputFirstname({
                ...formInputFirstname,
                value: value,
                text: value
              })
            }}
          />
          <Input 
            label={formInputLastname.label} 
            name={formInputLastname.name} 
            error={formInputLastname.error} 
            errorMessage={formInputLastname.errorMessage} 
            onChange={(value : string) => {
              setFormInputLastname({
                ...formInputLastname,
                value: value,
                text: value
              })
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
              setFormInputDateOfBirth({...formInputDateOfBirth, text: result.value, value: result.date})
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
              setFormInputStreet({...formInputStreet, value: value, text: value})
            }}
          />
          <Input 
            label={formInputCity.label} 
            name={formInputCity.name} 
            error={formInputCity.error} 
            errorMessage={formInputCity.errorMessage} 
            onChange={(value : string) => {
              setFormInputCity({...formInputCity, value: value, text: value})
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
              setFormInputState({...formInputState, value: value})
            }}
          />
          <Input 
            type={"number"} 
            label={formInputZipcode.label} 
            name={formInputZipcode.name} 
            error={formInputZipcode.error} 
            errorMessage={formInputZipcode.errorMessage} 
            onChange={(value : string) => {
              setFormInputZipcode({...formInputZipcode, value: value, text: value})
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
            setformInputCompanyStart({...formInputCompanyStart, text: result.value, value: result.date})
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
            setFormInputDepartment({...formInputDepartment, value: value}) 
          }}
        />
      </div>
    </form>
    <Button label="Save" onClick={(e) => {
      e.preventDefault()
      const object = {
        firstname: formInputFirstname.value,
        lastname: formInputLastname.value,
        dateOfBirth: formInputDateOfBirth.value,
        street: formInputStreet.value,
        city: formInputCity.value,
        state: formInputState.value,
        zipcode: formInputZipcode.value,
        start: formInputCompanyStart.value,
        department: formInputDepartment.value
      }

      console.log(object)
    }} />
  </section>)
}

export default Home
