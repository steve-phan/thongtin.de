import React from "react"
import { css } from "@emotion/react"

const colorChip = {
  java: "#77773c",
  javascript: "#ffcc00",
  oop: "#666699",
  default: "#0099e6",
} as const

export type TLabel = keyof typeof colorChip

type Props = {
  label: TLabel
  onClick?: () => void
  color?: string
}

const chipStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #fff;
  background-color: #007bff;
  :hover {
    cursor: pointer;
  }
`

const Chip = ({ label, onClick, color }: Props) => {
  const chipColor = colorChip[label] || colorChip.default

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      css={css([chipStyles, { backgroundColor: chipColor }])}
      onClick={handleClick}
    >
      {label}
    </div>
  )
}

export default Chip
