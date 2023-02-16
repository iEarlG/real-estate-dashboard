
import { useList } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCards, CustomBtn } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  return (
    <Box
      
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          fontSize={25}
          fontWeight={700}
          color="#11142D"
        >
          All Properties
        </Typography>

        <CustomBtn 
          title="Add Property"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#2ED480"
          color="#FCFCFC"
          icon={ <Add /> }
        />
      </Stack>
    </Box>
  )
}

export default AllProperties;