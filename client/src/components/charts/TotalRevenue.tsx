
import ReactApexChart from "react-apexcharts";

import { Box, Typography, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      id="chart"
      p={4}
      flex={1}
      bgcolor="#FCFCFC"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography
        fontSize={18}
        fontWeight={600}
        color="#11142D"
      >
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography
          fontSize={28}
          fontWeight={700}
          color="#11142D"
        >
          $100,000
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded 
            sx={{ fontSize: 25, color: "#2ED480" }}
          />
          <Stack>
            <Typography 
              fontSize={15} 
              color="#808191"
            >
              0.10%
            </Typography>
            <Typography 
              fontSize={12}
              color="#808191"
            >
              Since last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart 
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue;