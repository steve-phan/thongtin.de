import React, { ReactNode } from "react"
import { css } from "@emotion/react"

type Props = {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  variant?: "primary" | "secondary"
  active?: boolean // New prop for indicating if the button is active
}

const buttonStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`

const primaryStyles = css`
  background-color: #007bff;
  color: #fff;
`

const secondaryStyles = css`
  background-color: #fff;
  color: #007bff;
  border: 1px solid #007bff;
`

const activeStyles = css`
  background-color: #ec0867;
  color: #fff;
`
const inActiveStyles = css`
  background-color: #d1d1d1;
  color: #666565;
`

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  active = false, // Default value for active prop is false
}: Props) => {
  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles
  const activeVariantStyles = active ? activeStyles : inActiveStyles

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      css={[buttonStyles, variantStyles, activeVariantStyles]}
    >
      {children}
    </button>
  )
}

export default Button
