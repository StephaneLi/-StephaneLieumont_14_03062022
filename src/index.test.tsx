import App from './App';
import { render, screen } from './config/config.jest'


describe('When render App', () => {
  test('Should render component', () => {
    render(<App />)
    
    const app = screen.getByTestId('app')

    expect(app).toBeInTheDocument()
  });
})