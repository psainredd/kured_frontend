import * as React from 'react';
import Popper from '@mui/material/Popper';
import { Box, Link } from '@mui/material';

export default function PopperMenu({children, onClick = (e) => {}, label, sx, placement = 'bottom', showOnMouseEnter=true}) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openPopper = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true);
  }

  const closePopper = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  const onMouseEnter = (e, onClick = false) => {
    if (showOnMouseEnter) {
      openPopper(e)
    } else if (onClick) {
      if (open) {
        closePopper()
      } else {
        openPopper(e)
      }
    }
  }

  const handleClose = (e) => {
    if (showOnMouseEnter) {
      closePopper()
    }
  };

  return (
    <Box>
      <Link underline='none' onMouseEnter= {onMouseEnter} onClick={(e) => {onMouseEnter(e, true); onClick()}} sx={{paddingBottom:2, ...sx}}>
        {label}
      </Link>
      <Popper
        onMouseLeave={handleClose}
        onBlur={handleClose}
        open={open}
        anchorEl={anchorEl}
        placement={placement}>
        {children}
      </Popper>
    </Box>
  );
}