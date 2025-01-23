import * as React from 'react';
import { Badge, Card, CardContent, Divider, Grid, IconButton, Link, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material';
import { Cancel, Info, MailOutline, Menu, NotificationsOutlined, ReportProblem } from '@mui/icons-material';
import { primaryThemeColor } from '@/widgets/Color';
import { KuredAvatar } from '@/widgets/Avatar';
import { blue, lightBlue, yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { getSessionStartTime, getUserFirstName, getUserLastName, logoutUser, useUserContext } from '@/userContext';
import { GetMenuItemsForArray, KuredMenu } from '@/widgets/KuredMenu';
import { Person } from "@mui/icons-material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PaymentsIcon from '@mui/icons-material/Payments';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import UserHome from "./home/DashboardHome";
import Profile from "./profile/Profile";
import Appointments from "./appointments/Appointment";
import Messages from "./messages/Messages";
import Payments from "./payments/Payments";
import Campaigns from "./campaigns/Campaigns";
import UserMgmt from "./usermgmt/UserMgmt";
import Settings from "./settings/Settings";
import FooterSection from '../common/Footer';
import { RequestPanelItemContext } from './DashboardMain';
import { logout } from '@/api/Login';
import PopperMenu from '@/widgets/DropDownMenu';
import { isAlertNotification, isErrorNotification, isInfoNotification, getNotifications } from '@/api/Notifications';
import { KuredButton } from '@/widgets/Buttons';
import { useEffect } from 'react';
import { KuredTooltip } from '@/widgets/ToolTip';
import AddPayment from './payments/AddPayment';
import CreateCampaign from './campaigns/CreateCampaign';

export const HomeMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Home', <HomeIcon sx={iconStyles}/>, <UserHome/>)
export const ProfileMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Profile', <Person sx={iconStyles}/>, <Profile/>)
export const AppointmentsMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Appointments', <CalendarMonthIcon sx={iconStyles}/>, <Appointments/>)
export const MessagesMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Messages', <EmailIcon sx={iconStyles}/>, <Messages/>)
export const PaymentsMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Payments', <PaymentsIcon sx={iconStyles}/>, <Payments/>, [CreatePayments, PaymentsListMenuItem])
export const CampaignsMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Campaigns', <CampaignIcon sx={iconStyles}/>, <Campaigns/>, [CreateCampaignMenuItem, CampaignListMenuItem])
export const UserMgmtMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'User Management', <PeopleIcon sx={iconStyles}/>, <UserMgmt/>)
export const SettingsMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Settings', <SettingsIcon sx={iconStyles}/>, <Settings/>)
export const CreatePayments = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Add Payment', <PaymentsIcon sx={iconStyles}/>, <AddPayment/>)
export const PaymentsListMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'View Payments', <PaymentsIcon sx={iconStyles}/>, <Payments/>)
export const CreateCampaignMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'Create Google Campaign', <CampaignIcon sx={iconStyles}/>, <CreateCampaign/>)
export const CampaignListMenuItem = (onShowMinWidth) => GetItemData(onShowMinWidth, 'View Campaigns', <CampaignIcon sx={iconStyles}/>, <Payments/>)

export const MenuItems = [
    HomeMenuItem, 
    CampaignsMenuItem,
    PaymentsMenuItem,
    UserMgmtMenuItem,
    AppointmentsMenuItem,
    MessagesMenuItem,
    ProfileMenuItem,
    SettingsMenuItem
]

const GetItemData = (onShowMinWidth, name, icon, panel, children=null) => ({
    name : name,
    id: name.toLocaleLowerCase().replaceAll(' ', '_'),
    icon: icon,
    childMenuItems: children?.map(childFunc => childFunc(onShowMinWidth)),
    panel: <Layout name={name} onShowMinWidth={onShowMinWidth}>{panel}</Layout>
})

const iconStyles = {fontSize: 20};

function Layout({name, onShowMinWidth, children}) {
    return (
        <Stack spacing={2} sx={{pt:2, pb:1, minHeight:'100vh'}} justifyContent='space-between'>
            <Stack spacing={2}>
                <DashboardHeader onShowMinWidth={onShowMinWidth} name={name}/>
                {children}
            </Stack>
            <FooterSection longForm={false} sx={{backgroundColor:'none !important'}}/>
        </Stack>
    )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 1,
      border: `3px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      fontSize: 10,
    },
  }));

export function DashboardHeader({name, onShowMinWidth = () => {}}) {
    var messageCount = 10;
    var hasNotifications = true;
    const {setRequestedPanel} = React.useContext(RequestPanelItemContext);
    const title = name == 'Home' ? 'Home' : 'Home / ' + name
    const theme = useTheme()
    return (
        <Stack sx={{width:1, px:{xs:.5, md:0}}} direction='row' justifyContent='space-between' alignItems='center'>
            <Stack direction='row' spacing={2} sx={{ml:{xs:-2, sm:-1}}}>
                <IconButton disableFocusRipple disableRipple sx={{py:'0 !important'}} onClick={() => {onShowMinWidth();}}>
                    <Menu sx={{height:20, width:20, py:'0 !important'}}/>
                </IconButton>
                <Typography sx={{fontWeight: 600, fontSize: {md:20, sm:18, xs:16}, color: `${primaryThemeColor}CC`}}>
                    {title}
                </Typography>
            </Stack>
            <Stack direction='row' spacing={{sm:3, xs:2}} sx={{mr:{lg:3, xs:1}}}>
                <StyledBadge badgeContent={messageCount} color='error' max={999} 
                    sx={{
                        '& .MuiBadge-badge': {
                            right: `${messageCount > 1000? 3:0}`,
                            top: 0,
                            fontSize: 10,
                        }
                    }}>
                    <IconButton disableFocusRipple disableRipple sx={{p:'0 !important'}} onClick={() => setRequestedPanel(MessagesMenuItem().id)}>
                        <MailOutline sx={{height:22, width:22, py:'0 !important'}}/>
                    </IconButton>
                </StyledBadge>
                <Notifications hasNotifications={hasNotifications}/>
                <ProfileMenu/>
            </Stack>
        </Stack>
    )
}

export function ProfileMenu() {
    const {loggedInUser, setLoggedInUser} = useUserContext();
    const {setRequestedPanel} = React.useContext(RequestPanelItemContext);
    var firstName = getUserFirstName(loggedInUser)??'';
    var lastName = getUserLastName(loggedInUser)??'';
    var nameAbbr = (firstName.length > 0 ? firstName[0] : '') + (lastName.length > 0 ? lastName[0] : '')
    const theme = useTheme()
    const isSmOrUp = useMediaQuery(theme.breakpoints.up('sm'))
    const values = [ 'Home', 'Profile', 'Change Password', 'Logout']
    const menuItems = GetMenuItemsForArray(values);
    const timeSinceLoggedInStr = timeSinceLoggedIn(loggedInUser)
    const heading = <Typography sx={{fontWeight:500, letterSpacing:1, fontSize:11}}>Logged in  {timeSinceLoggedInStr} ago</Typography>
    const onLogoutSuccess = () => logoutUser(setLoggedInUser)
    return (
        <KuredMenu showDirectionArrows={isSmOrUp?true:false} menuItems={menuItems} heading={heading} labelSx={{pb:0}}
            label={
                <Stack direction = 'row' spacing = {1} alignItems='center'>
                    <KuredAvatar sx={{fontSize: {xs:12,sm:14}, width:{md:30, xs:25}, height: {md:30, xs:25}, bgcolor: lightBlue[300]}}>{nameAbbr}</KuredAvatar>
                    <Typography sx={{fontWeight: 500, fontSize:13, display:{sm:'block', xs:'none'}}}>Hi, {firstName}</Typography>
                </Stack>
            }
            sx={{
                ' li':{
                    fontWeight:500,
                    fontSize:13,
                    color: `${primaryThemeColor}FF`,
                    letterSpacing:.6,
                    '&:hover, &:active': 
                    {},
                },   
            }}>

            <MenuItem sx={{pl:3}} onClick={() => setRequestedPanel(HomeMenuItem().id)}>
                Home
            </MenuItem>
            <MenuItem sx={{pl:3}} onClick={() => setRequestedPanel(ProfileMenuItem().id)}>
                Profile
            </MenuItem>
            <MenuItem sx={{pl:3}} onClick={() => setRequestedPanel(SettingsMenuItem().id)}>
                Settings
            </MenuItem>
            <Divider sx={{mx:1}}/>
            <MenuItem sx={{pl:3, color:`${theme.palette.error.main} !important`, }} onClick={() => logout(onLogoutSuccess, onLogoutSuccess, onLogoutSuccess)}>
                Logout
            </MenuItem>                
        </KuredMenu>   
    )
}

const timeSinceLoggedIn = (loggedInUser) => {
    var loggedInTime = getSessionStartTime(loggedInUser) ?? Date.now();
    var secondsElapsedSinceLogin = Math.floor((Date.now() - loggedInTime)/1000);
    var minElapsedSinceLogin = Math.floor((secondsElapsedSinceLogin??0)/60);
    var hoursElapsedSinceLogin = Math.floor((minElapsedSinceLogin??0) / 60);

    if (hoursElapsedSinceLogin > 1) {
        return hoursElapsedSinceLogin + ' hours';
    } else if (minElapsedSinceLogin > 60) {
        return 'an hour'
    }else if (minElapsedSinceLogin > 1) {
        return minElapsedSinceLogin + ' min';
    } else if (secondsElapsedSinceLogin > 60) {
        return 'a min'
    } 
    return secondsElapsedSinceLogin + ' secs'
}

function NotificationBadge({hasNotifications}) {
    const theme = useTheme()
    return (
        <KuredTooltip title = 'Notifications' placement='right'>
            <StyledBadge variant={hasNotifications ? 'dot': 'standard'} color='success' 
                sx={{
                    '& .MuiBadge-badge': {
                        right: 4,
                        top: 2,
                        border: `3px solid ${theme.palette.background.paper}`,
                        borderRadius: 2,
                        padding: '4px 4px 4px 4px',
                    },
                    mt:{xs:.3, md:.4}
                }}
            >
                <IconButton disableFocusRipple disableRipple sx={{p:'0 !important'}}>
                    <NotificationsOutlined sx={{height:22, width:22, py:'0 !important'}}/>
                </IconButton>
            </StyledBadge>
        </KuredTooltip>
    )
}

function Notifications({hasNotifications}) {
    const [notifications, setNotifications] = React.useState([])
    const onSuccess = (responseData) => setNotifications(responseData)
    const onAuthFailure = () => logout(() => {}, () => {}, () => {})
    const onRequestFailure = () => {}
    
    useEffect(() => {
        getNotifications (onSuccess, onAuthFailure, onRequestFailure)
    },[])
    
    return (
        <PopperMenu
            label={<NotificationBadge hasNotifications={hasNotifications}/>}
            showOnMouseEnter={false}
            hideOnClickAway={true}
            
        >
            <Card sx={{mt:.5, minWidth:300}}>
                <CardContent sx={{pt:2, pb:`16px !important`}}>
                    <Stack>
                        <Typography sx={{fontSize:16, fontWeight: 500, mb:2}}>
                            Notifications
                        </Typography>
                        {notifications.length > 0 ? <NotificationList notifications={notifications}/> : <Typography sx={{fontSize:13}}>You have no new notifications</Typography>}
                    </Stack>
                </CardContent>
            </Card>
        </PopperMenu>
    )
}

function NotificationList({notifications}) {
    const list = notifications ?? []
    const notificationElements = list.map(n => (
        <Notification notification={n}/>
    ))
    return (<>{...notificationElements}</>)
}

function Notification({notification}) {    
    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={2}>
                <NotificationTypeWidget notification={notification}/>
            </Grid>
            <Grid item xs={8}>
                {notification.content}
            </Grid>
            <Grid item xs={2}>
                <KuredButton label='Clear' showEndIcon={false}/>
            </Grid>
        </Grid>
    )
}

function NotificationTypeWidget({notification}) {
    const theme = useTheme()
    const isInfo = isInfoNotification(notification);
    const isAlert = isAlertNotification(notification);
    const isError = isErrorNotification(notification);
    return (
        <>
            {isInfo && <Info sx={{color:blue[700], fontSize:18, mb:-.5}}/>}
            {isAlert && <ReportProblem sx={{color:yellow[700], fontSize:18, mb:-.5}}/>}
            {isError && <Cancel sx={{color:`${theme.palette.error.main}`, fontSize:18, mb:-.5}}/>}
            {!isInfo && !isAlert && !isAlert && <Info sx={{color:blue[700], fontSize:18, mb:-.5}}/>}
        </>
    )
}