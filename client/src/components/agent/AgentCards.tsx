
import { useGetIdentity } from "@pankod/refine-core";
import { Link } from "@pankod/refine-react-router-v6";

import { Box, Typography, Stack } from "@pankod/refine-mui";
import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack>
    {icon}
    <Typography>{name}</Typography>
  </Stack>
);


const AgentCards = ({ id, name, email, avatar, noOfProperties }: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if(currentUser?.email === email) return '/my-profile'

    return `/agents/show${id}`;
  }

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", gap: "20px", padding: "20px", 
        "&:hover": {
          boxShadow: "0px 22px 45px 2px rgba(176, 176, 176, 0.1)",
        }
      },
      }}
    >
      <img 
        src={avatar} 
        alt="user" 
        width={90} 
        height={90} 
        style={{ borderRadius: 8, objectFit: 'cover' }} 
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={18} fontWeight={500} color="#11142D">{name}</Typography>
          <Typography fontSize={13} color="#808191">Real-Estate Direct Agent</Typography>
        </Stack>

        <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2}>
          <InfoBar icon={<EmailOutlined sx={{ color: "#808191" }} />} name={email} />
          <InfoBar icon={<Place sx={{ color: "#808191" }} />} name="Philippines" />
          <InfoBar icon={<Phone sx={{ color: "#808191" }} />} name="+63 999 9999 999" />
          <InfoBar icon={<LocationCity sx={{ color: "#808191" }} />} name={`${noOfProperties} Properties`} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCards