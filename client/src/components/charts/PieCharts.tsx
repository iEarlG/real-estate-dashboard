
import ReactApexChart from 'react-apexcharts';

import { Box, Stack, Typography } from '@pankod/refine-mui';
import { PieChartProps } from 'interfaces/home';

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box>
      <Stack direction="column">
        <Typography
          fontSize={14}
          color="#808191"
        >
          {title}
        </Typography>
        <Typography
          fontSize={24}
          fontWeight={700}
          mt={1}
          color="#11142D"
        >
          {value}
        </Typography>
      </Stack>

      <ReactApexChart 
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type='donut'
        width="120px"
      />
    </Box>
  )
}

export default PieChart;