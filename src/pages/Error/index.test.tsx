import { render, screen } from '../../config/config.jest'
import Error from '.';

describe('When call Error Page', () => {
  test('Should render component', () => {
    render(<Error />)
    
    const errorComponent = screen.getByTestId('error')

    expect(errorComponent).toBeInTheDocument()
  });
})