import * as React from 'react';
import Popper from '@mui/material/Popper';
import { Link, Stack } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

export default function PopperMenu({
    children, 
    onStateChange = (e) => {}, 
    onClick = () => {}, 
    label,
    sx, 
    showDirectionArrows = false,
    directionArrowStyles = {},
    placement = 'bottom', 
    showOnMouseEnter=true, 
    disablePortal = false,
    hideOnClickAway = false,
    openFlagFromParent
  }) {

  const [open, setOpen] = React.useState(false);
  const selfRef = React.useRef(null)
  const childRef = React.useRef(null)
  const linkRef = React.useRef(null)

  const openPopper = () => {
    setOpen(true);
  }

  const closePopper = () => {
    setOpen(false);
  }

  const handleClick = (e) => {
    if (open) {
      closePopper()
      onClick(false) // This may seems counter intuitive. Refer - https://stackoverflow.com/questions/62900377/why-is-react-setstate-hook-not-updating-immediately
    } else {
      openPopper()
      onClick(true)
    }
  }

  const onMouseEnter = (e) => {
    if (showOnMouseEnter) {
      openPopper()
    } 
  }

  const handleClose = (e) => {
    if (showOnMouseEnter) {
      closePopper()
    }
  };

  const handleClickOutside = (event) =>  {
    if (selfRef.current && !selfRef.current.contains(event.target)) {
      if (childRef.current && childRef.current.contains(event.target)) {
        return;
      }
      closePopper()
    } 
  }

  React.useEffect(() => {
    if (hideOnClickAway) {
      window.addEventListener('mousedown', handleClickOutside, true)
    }
    return () => {
      if (hideOnClickAway) {
        window.removeEventListener('mousedown', handleClickOutside, true)
      } 
    }
  },[])

  React.useEffect(() => {
    onStateChange(open)
  }, [open])

  return (
    <div ref={selfRef}>
      <Link underline='none' ref={linkRef} href="javascript:" onMouseEnter= {onMouseEnter} onClick={handleClick} sx={{paddingBottom:1, ...sx}}>
        <Stack direction='row' spacing={0} alignItems='center'>
          {label}
          {showDirectionArrows && (open ? <ArrowDropUp sx={{...directionArrowStyles}}/> : <ArrowDropDown sx={{...directionArrowStyles}}/>)}
        </Stack>
      </Link>
      <Popper
        disablePortal={disablePortal}
        onMouseLeave={handleClose}
        onBlur={handleClose}
        open={open}
        anchorEl={linkRef?.current ?? null}
        placement={placement}
      >
        <div ref={childRef}>
          {children}
        </div>
      </Popper>
    </div>
  );
}