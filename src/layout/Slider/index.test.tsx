import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../../config/config.jest'
import Slider from '.';


describe('When call Slider layout', () => {
  test('Should render component', () => {
    render(
      <Router>
        <Slider />
      </Router>      
    )
    
    const sliderComponent = screen.getByTestId('slider')

    expect(sliderComponent).toBeInTheDocument()
  });
})