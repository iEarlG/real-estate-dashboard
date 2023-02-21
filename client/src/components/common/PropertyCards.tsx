
import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import { Typography, Box, Card, CardMedia, CardContent, Stack } from "@pankod/refine-mui";

import { PropertyCardProps } from "interfaces/property";

const PropertyCards = ({ id, title, location, price, photo }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/${id}`}
      sx={{ 
        maxWidth: 335, 
        padding: '30px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)',
        },
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      elevation={0}
    >
      <CardMedia 
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card-image"
        sx={{ borderRadius: '5px' }}
      />
      <CardContent sx={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "5px"
        }}>
        <Stack
          direction="column"
          gap={1}
        >
          <Typography fontSize={16} fontWeight={500} color="#11142D">{title}</Typography>

          <Stack direction="row" gap={0.5} alignItems="flex-start"
          >
            <Place 
              sx={{
                fontSize: 18,
                marginTop: 0.5,
                color: '#11142D'
              }}
            />
            <Typography fontSize={14} color="#808191">{location}</Typography>
          </Stack>
        </Stack>
        <Box 
          px={2.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#DEE2E6"
          height="fit-content"
        >
          <Typography fontSize={12} fontWeight={600} color="#475BE8">₱{price}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PropertyCards