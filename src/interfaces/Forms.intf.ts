import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { HTMLInputTypeAttribute, MouseEventHandler } from "react"

export type InputType = {
  prependIcon?: IconProp,
  appendIcon?: IconProp, 
  label?: string,
  name?: string,
  placeholder?: string,
  errorMessage?: string,
  error?: boolean,
  onChange?: CallableFunction,
  onClick?: CallableFunction,
  onBlur?:CallableFunction,
  isFocus?:boolean,
  value?: string,
  date?: Date,
  choices?: string[],
  checked?: boolean,
  disabled?: boolean,
  readOnly?:boolean,
  showDialog?:boolean,
  type?: HTMLInputTypeAttribute
}

export type ButtonType = {
  label?: string,
  outlined?: boolean,
  buttonLink?: boolean,
  navigate?: string,
  disabled?: boolean,
  loading?: boolean,
  callback?: MouseEventHandler<HTMLButtonElement>,
}