import { HTMLInputTypeAttribute, MouseEventHandler } from "react"

export type InputType = {
  label?: string,
  name?: string,
  placeholder?: string,
  errorMessage?: string,
  error?: boolean,
  onChange?: CallableFunction,
  value?: string,
  choices?: string[],
  checked?: boolean,
  disabled?: boolean,
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