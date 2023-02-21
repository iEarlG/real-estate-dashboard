import React from 'react';

import { useList } from '@pankod/refine-core';
import { Box, Typography, Stack } from '@pankod/refine-mui';

import { PropertyReferrals, PropertyCards, TopAgents, TotalRevenue, PieChart } from 'components';


const Home = () => {
  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#11142D"
      >
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#2ED480", "#FD8539"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#2ED480", "#475BE8"]}
        />
        <PieChart
          title="Total Clients"
          value={5684}
          series={[75, 25]}
          colors={["#2ED480", "#FD8539"]}
        />
        <PieChart
          title="Properties for Cities"
          value={223}
          series={[75, 25]}
          colors={["#2ED480", "#475BE8"]}
        />
      </Box>

      <Stack 
        mt="25px"
        width="100%" 
        direction={{ xs: "column", lg: "row", }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home