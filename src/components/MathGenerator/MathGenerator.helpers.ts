export const generateProblems = (
  numProblems: number,
  selectedMathTypes: string[],
  grade: 4 | 5
): string[] => {
  const extraNumber = grade === 5 ? 13 : 1

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
        operand1 = generateInterger() * extraNumber
        operand2 = Math.floor(Math.random() * 141) + 60
        problem = `${operand1} + ${operand2} = ___`
        break
      case "subtraction":
        operand1 = generateInterger() * extraNumber
        operand2 = Math.floor(Math.random() * 159) + 1
        operand2 = Math.min(operand1 - 1, operand2)
        problem = `${operand1} - ${operand2} = ___`
        break
      case "multiplication":
        //Multiplication practice for second and third grade students, up to 10.

        operand1 = generateInterger() * extraNumber
        operand2 = Math.floor(Math.random() * 10) + 6
        problem = `${operand1} x ${operand2} = ___`
        break
      case "division":
        operand2 = Math.floor(Math.random() * 30) + 4
        operand1 = operand2 * (Math.floor(Math.random() * 30) + 7) * extraNumber
        problem = `${operand1} : ${operand2} = ___`
        break
      default:
        break
    }

    problems.push(problem)
  }

  return problems
}

export const generateInterger = () => {
  return Math.floor(Math.random() * 900) + 100
}
