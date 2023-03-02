export const generateProblems = (
  numProblems: number,
  selectedMathTypes: string[]
): string[] => {
  const problems: string[] = []
  const mathTypes =
    selectedMathTypes.length > 0
      ? selectedMathTypes
      : ["addition", "subtraction", "multiplication", "division"]

  for (let i = 0; i < numProblems; i++) {
    let problem = ""
    let operand1 = 0
    let operand2 = 0

    const mathType = mathTypes[Math.floor(Math.random() * mathTypes.length)]

    switch (mathType) {
      case "addition":
        operand1 = Math.floor(Math.random() * 141) + 60
        operand2 = Math.floor(Math.random() * 141) + 60
        problem = `${operand1} + ${operand2} = ___`
        break
      case "subtraction":
        operand1 = Math.floor(Math.random() * 141) + 60
        operand2 = Math.floor(Math.random() * 59) + 1
        operand2 = Math.min(operand1 - 1, operand2)
        problem = `${operand1} - ${operand2} = ___`
        break
      case "multiplication":
        operand1 = Math.floor(Math.random() * 9) + 7
        operand2 = Math.floor(Math.random() * 9) + 7
        problem = `${operand1} x ${operand2} = ___`
        break
      case "division":
        operand2 = Math.floor(Math.random() * 9) + 1
        operand1 = operand2 * Math.floor(Math.random() * 13) + 7
        problem = `${operand1} / ${operand2} = ___`
        break
      default:
        break
    }

    problems.push(problem)
  }

  return problems
}
