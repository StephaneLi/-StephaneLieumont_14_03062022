import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { HTMLInputTypeAttribute, MouseEventHandler } from "react"

export type InputType = {
  prependIcon?: IconProp
  appendIcon?: IconProp
  label?: string
  name?: string
  placeholder?: string
  errorMessage?: string
  error?: boolean
  onChange?: CallableFunction
  onClick?: CallableFunction
  onBlur?:CallableFunction
  isFocus?:boolean
  value?: string | string[] | Date | boolean
  text?: string
  choices?: string[]
  disabled?: boolean
  readOnly?:boolean
  type?: HTMLInputTypeAttribute
}

export type ButtonType = {
  label?: string
  outlined?: boolean
  buttonLink?: boolean
  navigate?: string
  disabled?: boolean
  loading?: boolean
  primaryColor?: string
  secondaryColor?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}