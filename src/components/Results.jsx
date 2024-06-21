/* eslint-disable react/prop-types */
import { calculateInvestmentResults, formatter } from '../util/investments.js';
import '../styles/Results.css'

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  return (
    <table id="results">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          // eslint-disable-next-line react/prop-types
          const totalInterest = yearData.valueEndOfYear - (input.initialInvestment + yearData.annualInvestment * yearData.year);

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(input.initialInvestment + yearData.annualInvestment * yearData.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
