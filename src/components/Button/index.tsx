import { CSSProperties, FunctionComponent } from "react"
import { ButtonType } from "../../interfaces/Forms.intf";
import './style.scss'

const Button: FunctionComponent<ButtonType> = ({label = "button", primaryColor='#059ECE', secondaryColor='#4BC8DD', outlined = false, loading = false, disabled = false, onClick}) => {
  return (
    <div 
      data-testid="button-container" 
      className={`button${ outlined ? ' button--outlined' : ''}${ disabled ? ' button--disabled' : ''}${ loading ? ' button--isloading' : ''}`}
      style={{
        '--primary-color':primaryColor,
        '--secondary-color':secondaryColor
      } as CSSProperties}
    >
      { loading && ( <div className="button__loader"></div> )}
      <button data-testid="button"  type="button" onClick={onClick}>{label}</button>
    </div>    
  );
}

export default Button
