import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../../config/config.jest'
import Footer from '.';


describe('When call Footer layout', () => {
  test('Should render component', () => {
    render(
      <Router>
        <Footer />
      </Router>      
    )
    
    const footerComponent = screen.getByTestId('footer')

    expect(footerComponent).toBeInTheDocument()
  });
})