import React, { ReactNode } from "react"
import { css } from "@emotion/react"

type Props = {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  variant?: "primary" | "secondary"
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

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}: Props) => {
  const variantStyles = variant === "primary" ? primaryStyles : secondaryStyles

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      css={[buttonStyles, variantStyles]}
    >
      {children}
    </button>
  )
}

export default Button
