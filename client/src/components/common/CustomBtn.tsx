import { Button } from "@pankod/refine-mui";

import { CustomButtonProps } from "interfaces/common";

const CustomBtn = ({ title, handleClick, backgroundColor, color, icon, fullWidth, type }: CustomButtonProps) => {
  return (
    <Button
      sx={{ 
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'fit-content',
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: '7px',
        textTransform: 'capitalize',
        '&:hover': {
          opacity: 0.9,
          backgroundColor,
        }
       }}
       onClick={handleClick}
    >
      {icon} 
      {title}
    </Button>
  )
}

export default CustomBtn;