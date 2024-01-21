import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';

import Divider from '@mui/joy/Divider';

import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionFooter() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        backgroundColor:"#482973",
        position:"absolute",
        bottom:"0",
        width:"100%",
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
     
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
      </Box>
    </Sheet>
  );
}