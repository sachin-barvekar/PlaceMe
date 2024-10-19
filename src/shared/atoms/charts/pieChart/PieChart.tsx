import React from 'react'
import { PieChart as RsuitePieChart } from '@rsuite/charts'
import './PieChart.scss'

interface PieChartProps {
  data: Array<[]>;
  title?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data = [], title, ...rest }) => {
  return (
    <div className="pie-chart-container">
      <RsuitePieChart data={data} {...rest} />
      {title && <h3 className="pie-chart-title">{title}</h3>}
    </div>
  )
}

export default PieChart
