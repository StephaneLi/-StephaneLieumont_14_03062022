import { FunctionComponent } from "react"
import { ButtonType } from "../../interfaces/Forms.intf";
import { NavLink } from "react-router-dom";
import './style.scss'

const Button: FunctionComponent<ButtonType> = ({label = "button", outlined = false, buttonLink = false, loading = false, disabled = false, callback}) => {
  if(buttonLink) {
    return (
      <div className={`button ${ outlined && 'button--outlined'} ${ loading && 'button--isloading'}`}>
        { loading && ( <div className="button__loader"></div> )}
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/a-propos">{label}</NavLink>
      </div>    
    );
  }
  
  return (
    <div className={`button ${ outlined ? 'button--outlined' : ''} ${ disabled ? 'button--disabled' : ''} ${ loading && 'button--isloading'}`}>
      { loading && ( <div className="button__loader"></div> )}
      <button type="button" onClick={callback}>{label}</button>
    </div>    
  );
}

export default Button
