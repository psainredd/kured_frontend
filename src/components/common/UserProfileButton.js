import { Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { LinkButton } from '../../widgets/Buttons';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { Menu, Person } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { getUserAccountBal, getUserFirstName, getUserInitials, getUserLastName, useUserContext } from '@/userContext';
import { IconMenuItem } from '@/widgets/PopperIconMenu';
import { useState } from 'react';
import PopOverIconMenu from '@/widgets/PopperIconMenu';

export default function UserProfileButton() {
    const {loggedInUser} = useUserContext()
    const [isOpen, setIsOpen] = useState(false)

    const userInitials = () => loggedInUser ? getUserInitials(loggedInUser) : null
    const iconButton = (
        <IconButton 
            avatarLabel={userInitials()}
            isOpen={isOpen}
        />
    )

    if (!loggedInUser) {
        return (<></>)
    }

    return (
        <PopOverIconMenu
            showMenuOnMouseOver={false}
            showArrow = {true}
            iconButton={iconButton}
            onStateChange={(isOpen) => setIsOpen(isOpen)}
        >
            <MenuItems loggedInUser={loggedInUser}/>
        </PopOverIconMenu>
    )
}

function IconButton({avatarLabel, isOpen}) {
    var linkStartIcon = <Menu sx={{width:18, height: 18, color: grey[700]}}/>
    return (
        <Box id="user-profile-widget" 
            sx={{
                border:1, 
                p:.7, 
                borderRadius:10, 
                borderColor: grey[500], 
                boxShadow: isOpen ? '1px 6px 5px rgb(0 0 0 / 20%) !important' : '',
                '&:hover': {
                    boxShadow: '1px 6px 5px rgb(0 0 0 / 20%) !important'
                }
            }}
        >
            <LinkButton id='profile-overview' endIcon={linkStartIcon} sx={{color: 'text.primary'}}>
                <Avatar sx={{ width: 30, height: 30, bgcolor:'primary.main', color:'white' }}>
                    {
                        avatarLabel ? 
                            <Typography sx={{fontSize:12, color:'white'}}>{avatarLabel}</Typography> : 
                            <Person sx={{color:'white', width: 20, height: 20}}/>
                    }
                </Avatar>
            </LinkButton>
        </Box>
    )
}
  
function MenuItems ({loggedInUser}) {
    const menuItem = (onClick, label) => {
        return (
            <IconMenuItem onClick={onClick}>
                {label}
            </IconMenuItem>
        )
    }

    const prominentMenuItem = (onClick, label) => {
        return (
            <IconMenuItem onClick={onClick}>
                <Typography sx={{fontWeight: 500, py:.5}}>{label}</Typography>
            </IconMenuItem>
        )
    }

    const divider = <Divider sx={{mx:2}}/>
    const userNameWidget = loggedInUser ? ( <>
                                                <Stack spacing={0} sx={{pb:1.5, px:2, pt:.5}}>
                                                    <Typography sx={{fontSize:18}}>
                                                        { (getUserFirstName(loggedInUser) ?? '') + ' ' + (getUserLastName(loggedInUser)?? '') }
                                                    </Typography>
                                                    <Typography sx={{color:'secondary.main', fontSize:12}}>
                                                        Avail. Balance: &#x20B9;{ getUserAccountBal(loggedInUser) ?? '0'}
                                                    </Typography>
                                                </Stack>
                                                {divider}
                                            </>) : (<></>)

    return (
        <>
            {userNameWidget}
            {prominentMenuItem(()=>{}, 'Dashboard')}
            {prominentMenuItem(()=>{}, 'Account')}
            {prominentMenuItem(()=>{}, 'Notifications')}
            {divider}
            {menuItem(()=>{}, 'Sign Out')}
            {menuItem(()=>{}, 'Help')}
        </>
    )
}