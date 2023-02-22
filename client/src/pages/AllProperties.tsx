
import { useTable } from "@pankod/refine-core";
import { Box, Stack, TextField, Typography, Select, Menu, MenuItem } from "@pankod/refine-mui";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCards, CustomBtn } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const { tableQueryResult: {data, isLoading, isError},
  current, setCurrent, setPageSize, pageCount, sorter, setSorter, filters, setFilters } = useTable();

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography
            fontSize={25}
            fontWeight={700}
            color="#11142D"
          >
            {!allProperties.length ? 'Their are no available Properties' : 'All Properties'}
          </Typography>

          <Box mb={2} mt={3} display="flex" width="85%" justifyContent="space-between" flexWrap="wrap">
            <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs: '20px', sm: 0 }}>
              <CustomBtn 
                title={`Sort price`}
                handleClick={() => {}}
                backgroundColor="#2ED480"
                color="#FCFCFC"
              />
              <TextField 
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value=""
                onChange={() => {}}
              />
              <Select
                variant="outlined"
                color="info"
                defaultValue=""
                value=""
                inputProps={{ 'aria-label' : 'Without label' }}
                onChange={() => {}}
                displayEmpty
                required
              >
                <MenuItem value=" ">All</MenuItem>
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <CustomBtn 
          title="Add Property"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#2ED480"
          color="#FCFCFC"
          icon={ <Add /> }
        />
      </Stack>

      <Box mt="20px" sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
      }}>
        {allProperties.map((property) => (
          <PropertyCards 
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          marginTop={3}
        >
          <CustomBtn 
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#2ED480"
            color="#FCFCFC"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: 'hidden', sm: 'flex', alignItems: 'center', gap: '5px' }}
          >
            Page{""}<strong>{current} of {pageCount}</strong>
          </Box>
          <CustomBtn 
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#2ED480"
            color="#FCFCFC"
            disabled={current === pageCount}
          />
          <Select
                variant="outlined"
                color="info"
                defaultValue={10}
                inputProps={{ 'aria-label' : 'Without label' }}
                onChange={() => {}}
                displayEmpty
                required
              >
                {[ 10, 20, 30, 40, 50 ].map((size) => (
                  <MenuItem 
                    value={size}
                    key={size}
                  >
                      Show {size}
                  </MenuItem>
                ))}
              </Select>
        </Box>
      )}
    </Box>
  )
}

export default AllProperties;