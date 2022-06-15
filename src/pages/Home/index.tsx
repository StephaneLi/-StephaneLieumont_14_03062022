import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
import { InputType } from '../../interfaces/Forms.intf';
import Colors from '../../sass/themes/_colors.module.scss';
import './style.scss'

const Home: React.FunctionComponent = () => {

  const [formInputDateOfBirth, setFormInputDateOfBirth] = useState<InputType>({
    label: 'Date of Birth',
    name: 'date-of-birth',
    error: false,
    errorMessage: 'Veuillez saisir un Date valid',
    value: '',
    date: undefined,
    disabled: false,
    readOnly: true,
    showDialog: undefined,
  })

  const [formInputCompanyStart, setformInputCompanyStart] = useState<InputType>({
    label: 'Start Date',
    name: 'start-date',
    error: false,
    errorMessage: 'Veuillez saisir un Date valid',
    value: '',
    date: undefined,
    disabled: false,
    readOnly: true,
    showDialog: undefined,
  })

  const selectDateOfBirth = (date: Date, value: string) => {
    setFormInputDateOfBirth({...formInputDateOfBirth, value: value, date: date, showDialog: false})
  }

  const showDatePickerDateOfBirth = (visible: boolean) => {
    setFormInputDateOfBirth({...formInputDateOfBirth, showDialog: visible})
  }

  const selectStartDate = (date: Date, value: string) => {
    setformInputCompanyStart({...formInputCompanyStart, value: value, date: date, showDialog: false})
  }

  const showDatePickerStartDate = (visible: boolean) => {
    setformInputCompanyStart({...formInputCompanyStart, showDialog: visible})
  }

  return (
    <section className='box' id="home">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <div className="row row--wrap row--jse row--start">
          <div className="informations">
            <h3 className='text-center'>Informations</h3>
            <Input label='First Name' name='first-name' error={false} errorMessage="Bad field" />
            <Input label='Last Name' name='last-name' error={false} errorMessage="Bad field" />
            <div className='input-date'>
              <div className={`picker ${formInputDateOfBirth.showDialog === true ? ' show' : formInputDateOfBirth.showDialog === false ? ' hide' : ''}`}>
                <DatePicker                
                  elevation 
                  color={Colors['primary']}
                  lang='en-EN'
                  onSelect={selectDateOfBirth}
                  onClose={() => showDatePickerDateOfBirth(false)}
                />
              </div>
              <Input 
                value={formInputDateOfBirth.value}
                label={formInputDateOfBirth.label}
                name={formInputDateOfBirth.name}
                appendIcon={faCalendar}
                readOnly={formInputDateOfBirth.readOnly}
                onClick={() => showDatePickerDateOfBirth(true)}
                onBlur={() => {}}
                isFocus={formInputDateOfBirth.showDialog}
              />
            </div>
          </div>
          <fieldset>
            <legend>Address</legend>
            <Input label='Street' name='street' error={false} errorMessage="Bad field" />
            <Input label='City' name='city' error={false} errorMessage="Bad field" />
            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>
            <Input label='Zip Code' name='zip-code' error={false} errorMessage="Bad field" type='number' />
          </fieldset>
        </div>        
        <div className='department'>
          <h3 className='text-center'>Company</h3>
          <div className='input-date'>
            <div className={`picker ${formInputCompanyStart.showDialog === true ? ' show' : formInputCompanyStart.showDialog === false ? ' hide' : ''}`}>
              <DatePicker                
                elevation 
                color={Colors['primary']}
                lang='en-EN'
                onSelect={selectStartDate}
                onClose={() => showDatePickerStartDate(false)}
              />
            </div>
            <Input 
              value={formInputCompanyStart.value}
              label={formInputCompanyStart.label}
              name={formInputCompanyStart.name}
              appendIcon={faCalendar}
              readOnly={formInputCompanyStart.readOnly}
              onClick={() => showDatePickerStartDate(true)}
              onBlur={() => {}}
              isFocus={formInputCompanyStart.showDialog}
            />
          </div>
          <div className='row'>          
            <label htmlFor="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
          </div>
        </div>
      </form>
      <Button label='Save'/>
    </section>
  )
}

export default Home;