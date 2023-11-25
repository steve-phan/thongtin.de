import React, { useState } from "react"

import { generateProblems } from "./MathGenerator.helpers"
import { PrintableMathProblems } from "./PrintableMathProblems"
import "./MathGenerator.css"
import Button from "../../shared-UI/Button/Button"

export function MathGenerator() {
  const [numProblems, setNumProblems] = useState(10)
  const [selectedMathTypes, setSelectedMathTypes] = useState([
    "addition",
    "subtraction",
  ])

  const [problems, setProblems] = useState<string[] | null>(null)
  const [kidName, setKidName] = useState("")
  const [kidGrade, setKidGrade] = useState(3)
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
    const generatedProblems = generateProblems(numProblems, selectedMathTypes, kidGrade)
    setProblems(generatedProblems)
    setShowPdf(true)
  }

  return (
    <>
      {showPdf && problems ? (
        <PrintableMathProblems problems={problems} kidName={kidName} />
      ) : (
        <div className="container">
          <div className="row">
            <label htmlFor="kidName">Name of Kids</label>
            <input
              id="kidName"
              type="text"
              onChange={event => setKidName(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="grade">Grade of Kid</label>
            <select
                style={{padding : '6px'}} 
              value={kidGrade}
              onChange={event => setKidGrade(Number(event.target.value))}
            >
              {[3, 4, 5, 6].map((grade, index) => (
                <option key={grade + index}
        

                > {grade} </option>
              ))}
            </select>
          </div>
          <div className="row">
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
