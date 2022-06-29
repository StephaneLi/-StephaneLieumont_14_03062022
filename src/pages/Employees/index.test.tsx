import { render, screen } from '../../config/config.jest'
import Employees from '.';

describe('When call List Employees  Page', () => {
  test('Should render component', () => {
    render(<Employees />)
    
    const employeeComponent = screen.getByTestId('employees')

    expect(employeeComponent).toBeInTheDocument()
  });
})