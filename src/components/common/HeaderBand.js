import * as React from 'react';
import { Box, Button, Collapse, IconButton, Stack, Typography } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { BlueLogo, WhiteLogo } from './Logo'
import Paper from '@mui/material/Paper';
import { Divider, ListItemText, MenuItem, MenuList } from '@mui/material';
import PopperMenu from '@/widgets/DropDownMenu';
import { AccountBox, AccountBoxRounded, Call, Campaign, CampaignRounded, ChatBubble, Cloud, ExpandLess, ExpandMore, Menu, MessageOutlined, WhatsApp, YouTube } from '@mui/icons-material';
import { primaryThemeColor } from '@/widgets/color';

export function HeaderBand({darkTheme=true}) {
  const logo = darkTheme ? <WhiteLogo/> : <BlueLogo/>
  const position = darkTheme ? {} :{left:0}
  return (
    <Box sx={{width:{xs:1, lg:.75}, paddingX:{lg: 0, md:1, xs:2}, paddingY:'20px', color:'#FFF', fontWeight:450, position:darkTheme? 'absolute': 'relative', top:0,  ...position, zIndex:10}}>
      <Stack direction='row' justifyContent= 'space-between'>
        {logo}
        <Stack direction='row' spacing={{lg:10, sm:10}} justifyContent='space-between' alignItems='center' sx={{display:{md:'flex', xs:'none'}}}>
          <Stack direction='row' spacing={8} justifyContent='center' alignItems='center'>
            <HeaderMenuItem label='Marketing' darkTheme={darkTheme}>
              <Box sx={{display:{xs:'none', md:'flex'}}}>
                <MarketingMenu darkTheme={darkTheme}/>
              </Box>
            </HeaderMenuItem>
            <HeaderMenuItem label='Messaging' darkTheme={darkTheme}/>
            <HeaderMenuItem label='Cloud Services' darkTheme={darkTheme}/>
            <HeaderMenuItem label='Contact Us' darkTheme={darkTheme}/>
          </Stack>
          <SignInButton darkTheme={darkTheme}/>
        </Stack>
        <CompactMenu darkTheme={darkTheme}/>
      </Stack>
    </Box>  
  )
}

function HeaderMenuItem({label, darkTheme, children, onClick = () => {}, sx, showMenuOnMouseOver = true, position='bottom'}) {
  const fontColor = {color: darkTheme ? '#FFF' : 'text.primary'};
  return (
    <PopperMenu label={label} sx={{...fontColor, fontSize:14, ...sx}} onClick={onClick} showOnMouseEnter={showMenuOnMouseOver} placement={position}>
      {children}
    </PopperMenu>
  );
}

function CompactMenu({darkTheme}) {
  return (
    <Box sx={{display:{xs:'flex', md:'none'}}}>
      <HeaderMenuItem label ={<CompactMenuButton darkTheme={darkTheme}/>} showMenuOnMouseOver={false} position='bottom-end'>
        <Box sx={{display:{xs:'flex', md:'none'}}}>
          <CompactMenuItems darkTheme={darkTheme}/>
        </Box>
      </HeaderMenuItem>
    </Box>
  )
}

function SignInButton({darkTheme}) {
  const style = {
    color : darkTheme ? '#0a2540' : '#FFF',
    backgroundColor : darkTheme ? '#FFF !important' : '#0a2540 !important',
    borderColor: darkTheme ? '#FFF' : '#0a2540',
    '&:hover, &:active': 
    {
      background: 'none !important',
      color: darkTheme ? '#FFF !important' : '#0a2540 !important'
    },
  }
  return (
    <KuredButton label='Sign In' sx={{
      ...style
    }}/>
  )
}

function PopOverMenu({darkTheme, children, showDivider = true}) {
  
  const style = { 
    maxWidth: '100%', 
    borderRadius:2, 
    backgroundColor: darkTheme ? 'rgba(0,0,30,0.4)' : 'rgba(240,240,240)', 
    paddingx: 3,
  }
  
  return (
    <Paper sx={{...style}}>
      <MenuList>
        { children }
      </MenuList>
    </Paper>
  )
}

function PopOverMenuItemText({icon, children, darkTheme}){
  return (
    <ListItemText>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        {icon}
        <Typography sx={{fontWeight: 500, color: darkTheme? '#FFF': '#0a2540', fontSize:14}}>{children}</Typography>
      </Stack>
    </ListItemText> 
  )
}

function MarketingMenuItems({darkTheme}) {
  return (
    <>
      <MenuItem onClick={() => window.open('/video_marketing', '_self')}>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<YouTube sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>YouTube</PopOverMenuItemText>
      </MenuItem>
      <Divider sx={{mx:1}}/>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<ChatBubble sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>SMS / Whatsapp</PopOverMenuItemText>
      </MenuItem>
    </>
  )
}

function MarketingMenu ({darkTheme}) {
  return (
    <PopOverMenu darkTheme={darkTheme} showDivider={false}>
      <MarketingMenuItems darkTheme={darkTheme}/>
    </PopOverMenu>
  )
}

function CompactMenuButton({darkTheme, onClick = ()=>{}}) {
  return (
    <Button disableTouchRipple disableFocusRipple disableRipple 
        sx={{
          borderRadius: `20px !important`,
          textTransform: 'none',
          color : darkTheme ? '#0a2540' : '#FFF',
          backgroundColor : darkTheme ? '#FFF !important' : '#0a2540 !important',
          width: 'fit-content',
          height: 'fit-content',
          '&:hover, &:active': 
          {
            borderColor: darkTheme ? '#FFF' : '#0a2540',
            border:1,
            background: 'none !important',
            color : darkTheme ? '#FFF !important' : `${primaryThemeColor} !important`
          },
      }} onClick={() => onClick()}>
        <Menu fontSize='40px !important'/>
    </Button>
  )
}

function CompactMenuItems ({darkTheme}) {
  return (
    <PopOverMenu darkTheme={darkTheme} showDivider = {false}>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<CampaignRounded sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>Marketing</PopOverMenuItemText>
      </MenuItem>
      <Divider sx={{mx:2}}/>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<ChatBubble sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>Messaging</PopOverMenuItemText>
      </MenuItem>
      <Divider sx={{mx:2}}/>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<Cloud sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>Cloud Services</PopOverMenuItemText>
      </MenuItem>
      <Divider sx={{mx:2}}/>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<Call sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>Contact Us</PopOverMenuItemText>
      </MenuItem>
      <Divider sx={{mx:2}}/>
      <MenuItem>
        <PopOverMenuItemText darkTheme = {darkTheme} icon={<AccountBoxRounded sx={{fontSize:16, color: darkTheme? '#FFF': '#0a2540'}}/>}>Sign In</PopOverMenuItemText>
      </MenuItem>
    </PopOverMenu>
  )
}