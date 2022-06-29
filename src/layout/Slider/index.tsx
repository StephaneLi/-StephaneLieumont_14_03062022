import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent }  from 'react'
import { NavLink } from 'react-router-dom'
import RoutesApp from '../../routes/Routes.app'

import './style.scss'

/**
 * Slider Layout with nav Links
 */
const Slider: FunctionComponent = () => {
  return (
    <div data-testid="slider" id="slider">
      <nav>
        <ul>
        { RoutesApp.routeList.map(({ path, label, name, icon }) => (
          path !== '*' ?          
            <li key={name}>    
              <NavLink to={path}>    
              <i><FontAwesomeIcon size='lg' icon={icon!} /></i>
              {label}
              </NavLink>             
            </li>
          : null       
        ))}
        </ul>
      </nav>
    </div>
  )
}

export default Slider