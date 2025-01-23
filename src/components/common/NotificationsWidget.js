import { getUserAccountBal, getUserFirstName, getUserInitials, getUserLastName, useUserContext } from '@/userContext';
import { KuredAvatar } from '@/widgets/Avatar';
import PopOverIconMenu, { IconMenuItem } from '@/widgets/PopperIconMenu';
import { Notifications } from '@mui/icons-material';
import { Divider, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function NotificationsWidget() {
    const {loggedInUser} = useUserContext()
    const [isOpen, setIsOpen] = useState(false)

    const userInitials = () => loggedInUser ? getUserInitials(loggedInUser) : null
    const iconButton = (
        <IconButton 
            hasUnseenNotifications={true}
            isOpen={isOpen}
        />
    )

    if (!loggedInUser) {
        return (<></>)
    }

    return (
        <Box sx={{display:{xs:'none', md:'block'}}}>
            <PopOverIconMenu
                showMenuOnMouseOver={false}
                showArrow = {true}
                iconButton={iconButton}
                onStateChange={(isOpen) => setIsOpen(isOpen)}
                arrowOptions= {
                    {left: '90%'}
                }
            >
                <MenuItems loggedInUser={loggedInUser}/>
            </PopOverIconMenu>
        </Box>
    )
}

function IconButton({isOpen, hasUnseenNotifications = true}) {
    return (
        <KuredAvatar 
            hasBadge={hasUnseenNotifications} 
            sx={{ 
                width: 40, 
                height: 40, 
                border:1,
                backgroundColor:grey[300], 
                color:'white', 
                boxShadow: isOpen ? '1px 6px 5px rgb(0 0 0 / 20%) !important' : '', 
            }}
        >
            <Notifications sx={{color: grey[700], fontSize: 22}}/>
        </KuredAvatar>
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