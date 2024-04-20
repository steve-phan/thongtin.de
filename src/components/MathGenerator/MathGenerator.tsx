import React, { useState } from "react"

import { generateProblems } from "./MathGenerator.helpers"
import { PrintableMathProblems } from "./PrintableMathProblems"
import "./MathGenerator.css"
import Button from "../../shared-UI/Button/Button"

export function MathGenerator() {
  const [numProblems, setNumProblems] = useState(10)
  const [grade, setGrade] = useState<4 | 5>(4)
  const [studentName, setStudentName] = useState("")
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
    const generatedProblems = generateProblems(
      numProblems,
      selectedMathTypes,
      grade
    )
    setProblems(generatedProblems)
    setShowPdf(true)
  }

  const handleGradeChange = (value: 4 | 5) => {
    setGrade(value)
  }

  return (
    <>
      {showPdf && problems ? (
        <PrintableMathProblems problems={problems} studentName={studentName} />
      ) : (
        <div className="container">
          <div className="numProblems">
            <label htmlFor="numProblems">Number of problems:</label>
            <input
              type="number"
              id="numProblems"
              name="numProblems"
              value={numProblems}
              onChange={handleNumProblemsChange}
            />
          </div>
          <div className="grade">
            <div>
              <Button onClick={() => handleGradeChange(4)} active={grade === 4}>
                Grade 4
              </Button>
              <Button onClick={() => handleGradeChange(5)} active={grade === 5}>
                Grade 5
              </Button>
            </div>
          </div>
          <div>
            <label>Name of Student:</label>
            <input
              type="text"
              value={studentName}
              onChange={event => setStudentName(event.target.value)}
              placeholder="Type your name..."
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
          <Button onClick={handleGenerate}>Generate Problems</Button>
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
