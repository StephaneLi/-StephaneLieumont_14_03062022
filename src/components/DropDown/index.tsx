import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, CSSProperties, MouseEvent, useRef, useState } from "react"
import './style.scss'

type DropDownProps = {
  label?: string,
  name?: string,
  zIndex?: number,
  choicies?: string[],
  errorMessage?: string,
  error?: boolean,
  value?:string,
  textColor?:string,
  focusColor?:string,
  errorColor?:string,
  borderColor?:string,
  borderRadius?:string,
  onSelect?:CallableFunction,
}

const Dropdown: FunctionComponent<DropDownProps> = ({
  label = '',
  name = '',
  errorMessage = "Erreur message",
  error = false,
  choicies = [],
  value = '',
  borderColor = '#dadce0',
  textColor = '#70757a',
  focusColor = '#0F9D58',
  errorColor = '#DB4A39',
  borderRadius = '5px',
  zIndex = 1,
  onSelect,
}) => {

  const inputElement = useRef<HTMLInputElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(value)

  const displayOptions = () => {
    inputElement.current?.focus()
    setShowOptions(!showOptions)
  }

  const onClickOption = (e: MouseEvent<HTMLElement>) => {
    setInputValue(e.currentTarget.innerHTML)
    inputElement.current?.blur()
    if(onSelect) onSelect(e.currentTarget.innerHTML)
  }

  return (
    <div 
      className={`dropdown${ showOptions ? ' dropdown--show' : '' }`} 
      style={{
        zIndex: zIndex,
        '--text-color': textColor,
        '--focus-color': focusColor,
        '--error-color': errorColor,
        '--border-color': borderColor,
        '--border-radius': borderRadius,
      } as CSSProperties}
    >
      <div onClick={displayOptions} className={`dropdown__input${ inputValue !== '' ? ' dropdown__input--active' : '' }`}>
        <label htmlFor={name}>{label}</label>
        <div className="dropdown__input__content">
          <input 
            ref={inputElement}
            name={name} 
            readOnly={true}
            onBlur={() => setShowOptions(false)}
            value={inputValue}
          />
          <i><FontAwesomeIcon icon={faAngleDown} /></i>
        </div>
        {error && (
          <p>{errorMessage}</p>
        )}
      </div>
      <div className={`dropdown__choicies`}>
        <ul>
          {choicies.map((element, index) => (
            <li onClick={onClickOption} key={'option-' + index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown
