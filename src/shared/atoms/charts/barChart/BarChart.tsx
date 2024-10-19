import React from 'react'
import { BarChart as RsuiteBarChart } from '@rsuite/charts'
import '../pieChart/PieChart.scss'

interface BarChartProps {
  data: Array<[]>;
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data = [], title, ...rest }) => {
  return (
    <div className="pie-chart-container">
      <RsuiteBarChart data={data} {...rest} />
      {title && <h3 className="pie-chart-title">{title}</h3>}
    </div>
  )
}

export default BarChart
