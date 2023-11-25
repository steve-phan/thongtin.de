export const generateProblems = (
  numProblems: number,
  selectedMathTypes: string[],
  kidGrade: number
): string[] => {
  const problems: string[] = [];
  const mathTypes =
    selectedMathTypes.length > 0
      ? selectedMathTypes
      : ["addition", "subtraction", "multiplication", "division"];

  const isSimpleProblem = (operand1: number, operand2: number, mathType: string): boolean => {
    const simpleNumbers = [0, 1, 2];
    return (
      (mathType === "multiplication" && (simpleNumbers.includes(operand1) || simpleNumbers.includes(operand2))) ||
      (mathType === "addition" && (operand1 < 10 || operand2 < 10)) ||
      (mathType === "subtraction" && (simpleNumbers.includes(operand1) || simpleNumbers.includes(operand2))) ||
      (mathType === "division" && (simpleNumbers.includes(operand1) || simpleNumbers.includes(operand2)))
    );
  };

  const getOperandRange = (grade: number): [number, number] => {
    if (grade >= 5) {
      return [20, 1000]; // For grade 5 and above
    } else if (grade >= 3) {
      return [10, 100]; // For grade 3 and 4
    } else {
      return [0, 20]; // For grade below 3
    }
  };

  const [minOperand, maxOperand] = getOperandRange(kidGrade);

  for (let i = 0; i < numProblems; i++) {
    let problem = "";
    let operand1 = 0;
    let operand2 = 0;

    let mathType = mathTypes[Math.floor(Math.random() * mathTypes.length)];

    do {
      operand1 = Math.floor(Math.random() * (maxOperand - minOperand + 1)) + minOperand;
      operand2 = Math.floor(Math.random() * (maxOperand - minOperand + 1)) + minOperand;

      switch (mathType) {
        case "addition":
          problem = `${operand1} + ${operand2} = ___`;
          break;
        case "subtraction":
          operand2 = Math.min(operand1 - 1, operand2);
          problem = `${operand1} - ${operand2} = ___`;
          break;
        case "multiplication":
          problem = `${operand1} x ${operand2} = ___`;
          break;
        case "division":
          // Avoid division by zero
          if (operand2 !== 0) {
            operand1 = operand2 * Math.floor(Math.random() * 13) + 7;
            problem = `${operand1} : ${operand2} = ___`;
          }
          break;
        default:
          break;
      }
    } while (isSimpleProblem(operand1, operand2, mathType));

    problems.push(problem);
  }

  return problems;
};
