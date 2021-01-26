import React from "react"
import { Table } from "./optionsTable.style"

const test = [
  {
    Protocol: "Hegic",
    IV: "40%",
    Strike: "$900",
    Breakeven: "$1000",
    Price: "$700",
  },
]

const OptionsTable = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Protocol</th>
            <th>IV</th>
            <th>Strike</th>
            <th>Breakeven</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {test.map((x) => (
            <tr key={x.Protocol}>
              <td>{x.Protocol}</td>
              <td>{x.IV}</td>
              <td>{x.Strike}</td>
              <td>{x.Breakeven}</td>
              <td>{x.Price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default OptionsTable
