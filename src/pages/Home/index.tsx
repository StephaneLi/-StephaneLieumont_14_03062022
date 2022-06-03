import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.scss'

const Error: React.FunctionComponent = () => {
  return (
    <section className='box' id="home">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <div className="row row--wrap row--jse row--start">
          <div className="informations">
            <h3 className='text-center'>Informations</h3>
            <Input label='First Name' name='first-name' error={false} errorMessage="Bad field" />
            <Input label='Last Name' name='last-name' error={false} errorMessage="Bad field" />
            <Input label="Date of Birth" name='date-of-birth' />            
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
          <Input label="Start Date" name='start-date' />
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
  );
}

export default Error;