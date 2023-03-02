import React, { useState } from "react"

import { generateProblems } from "./MathGenerator.helpers"
import { PrintableMathProblems } from "./PrintableMathProblems"

export function MathGenerator() {
  const [numProblems, setNumProblems] = useState(10)
  const [selectedMathTypes, setSelectedMathTypes] = useState([
    "addition",
    "subtraction",
  ])

  const [problems, setProblems] = useState<string[] | null>(null)
  const [showPdf, setShowPdf] = useState(false)

  const handleNumProblemsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumProblems = parseInt(event.target.value)
    setNumProblems(newNumProblems)
  }

  const handleMathTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mathType = event.target.value
    const isChecked = event.target.checked

    if (isChecked) {
      setSelectedMathTypes([...selectedMathTypes, mathType])
    } else {
      setSelectedMathTypes(selectedMathTypes.filter(type => type !== mathType))
    }
  }

  const handleGenerate = () => {
    const generatedProblems = generateProblems(numProblems, selectedMathTypes)
    setProblems(generatedProblems)
    setShowPdf(true)
  }

  console.log({ problems })
  return (
    <>
      {showPdf && problems ? (
        <PrintableMathProblems problems={problems} />
      ) : (
        <div>
          <div>
            <label htmlFor="numProblems">Number of problems:</label>
            <input
              type="number"
              id="numProblems"
              name="numProblems"
              value={numProblems}
              onChange={handleNumProblemsChange}
            />
          </div>
          <div>
            <label>Math types:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="addition"
                  checked={selectedMathTypes.includes("addition")}
                  onChange={handleMathTypeChange}
                />
                Addition
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="subtraction"
                  checked={selectedMathTypes.includes("subtraction")}
                  onChange={handleMathTypeChange}
                />
                Subtraction
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="multiplication"
                  checked={selectedMathTypes.includes("multiplication")}
                  onChange={handleMathTypeChange}
                />
                Multiplication
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="division"
                  checked={selectedMathTypes.includes("division")}
                  onChange={handleMathTypeChange}
                />
                Division
              </label>
            </div>
          </div>
          <button onClick={handleGenerate}>Generate Problems</button>
          <div className="problems">
            {problems && (
              <>
                <div>
                  {problems.map((problem, index) => (
                    <div key={index}>{problem}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
