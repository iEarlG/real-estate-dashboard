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
      <Box
        mt="20px"
        display="flex"
        flexWrap="wrap"
        gap={4}
      >
        <PieChart 
          title="Property for Sale"
          value={653}
          series={[ 50, 80, ]}
          colors={[ '#475BE', '#E4E8EF' ]}
        />
        <PieChart 
          title="Property for Rent"
          value={152}
          series={[ 45, 67 ]}
          colors={[ '#475CA', '#A4A8CA' ]}
        />
        <PieChart 
          title="Total Customers"
          value={223}
          series={[ 43, 51 ]}
          colors={[ '#5847C', '#51F4E3' ]}
        />
        <PieChart 
          title="Property for Rent to Own"
          value={1565}
          series={[ 65, 76 ]}
          colors={[ '#805FF', '#G6H6EU' ]}
        />
      </Box>
    </Box>
  )
}

export default Home