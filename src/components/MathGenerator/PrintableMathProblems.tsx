import React from "react"
import {
  Document,
  Page,
  Text,
  PDFViewer,
  StyleSheet,
  View,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  problemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "50%",
  },
  operandsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  operand: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  operator: {},
  equalsSign: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  resultContainer: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 20,
  },
})

export function PrintableMathProblems({ problems }: { problems: string[] }) {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page style={styles.page}>
          {problems.map((problem, index) => {
            const [operand1, operator, operand2] = problem.split(" ")
            return (
              <View key={index} style={styles.problemContainer}>
                <View style={styles.operandsContainer}>
                  <Text style={styles.operand}>{operand1}</Text>
                  <Text style={styles.operator}>{`${operator} `}</Text>
                  <Text style={styles.operand}>{operand2}</Text>
                </View>
                <View style={styles.resultContainer}>
                  <Text style={styles.result}>= _____</Text>
                </View>
              </View>
            )
          })}
        </Page>
      </Document>
    </PDFViewer>
  )
}
