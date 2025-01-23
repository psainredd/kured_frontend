import { Box, Card, CardContent, DialogTitle, Grid, IconButton, Stack, ToggleButton, Typography, useMediaQuery } from "@mui/material";
import { TextMessage, leftDirection, rightDirection } from "../../messaging/TextConversation";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { primaryThemeColor } from "@/widgets/Color";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputField } from "@/widgets/Inputs";
import { KuredButton, SendButton } from "@/widgets/Buttons";
import { useTheme } from "@emotion/react";
import { GetMenuItemsForArray, KuredMenu, Menu } from "@/widgets/KuredMenu";
import { DialogWithTransition, KuredDialog } from "@/widgets/Dialog";
import { useState } from "react";
import { DropDownList } from "@/widgets/PeriodSelectorDropDown";
import { blue } from "@mui/material/colors";
import { KuredTooltip } from "@/widgets/ToolTip";
import { useStompClient } from "@/api/StompClient";
import { useEffect } from "react";

export default function Messages() {
    const [currentConversation, setCurrentConversation] = useState()
    const onMessageReceived = (message) => {
        console.log(message)
        alert("Received Whatsapp Message")
    }
    const {stompClient, connectStompClient, disconnectStompClient} = useStompClient("/topic/greetings", onMessageReceived)
    useEffect(() => {
        connectStompClient();
        return disconnectStompClient;
    },[])
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={5} sm={4} md={3} sx={{ml:-2}}>
                <MessageList/>
            </Grid>
            <Grid item xs={7} sm={8} md={9}>
                <Conversation/>
            </Grid>
        </Grid>
    )
}

function MessageList() {
    return (
        <Stack sx={{borderRadius: 3, height:'90vh', overflow:'hidden',border:'1px solid white',}}>
            <MessageListHeader/>
            <Stack sx={{py:1, pr:1, mt:1,height:'85vh', overflow:'scroll'}} spacing={.1}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </Stack>
        </Stack>
    )
}

function Message() {
    const data = {
        name: 'Sainath Reddy',
        number: '+91-9113831625',
        assignedTo: 'Unassigned',
        createdTime: Date.now,
    }
    return (
        <ToggleButton disableFocusRipple disableRipple disableTouchRipple sx={{p:0, textTransform:'none', borderRadius:0,}}>
            <Card sx={{width:1, pb:0, boxShadow:'none !important', borderRadius:0, transition: 'none !important'}}>
                <CardContent sx={{width:1, p:'8px !important', px:'16px !important', boxShadow:'none !important'}}>
                    <Stack justifyContent='flex-start' alignItems='flex-start' spacing={1}>
                        <Typography sx={{fontSize: 14, fontWeight:500}}>{data.name}</Typography>
                        <Typography sx={{ color:`${primaryThemeColor}DD`}}>
                            12
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </ToggleButton>
    )
}

function Conversation() {
    const theme = useTheme()
    const isSmOrUp = useMediaQuery(theme.breakpoints.up('sm'))
    const maxWidth = isSmOrUp ? '60%': '90%';
    return (
        <Box>
            <Stack spacing={2} sx={{border:'2px solid white', borderRadius: 3, height:'90vh', overflow:'hidden', backgroundColor:`${primaryThemeColor}11`}}>
                <Header/>
                <Stack sx={{px:2, py:1, height:'85vh', overflow:'scroll'}} spacing={2}>
                    <TextMessage direction={leftDirection} maxWidth={maxWidth}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={leftDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Thank You for choosing Allay Health. Your report is now ready for pick up.
                        Please visit our diagnostic center by 6PM today to collect it.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                    <TextMessage direction={rightDirection} maxWidth={maxWidth} showAuxStyles={false} hiddenAuxStyle={{mt:-1}}>
                        Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                        15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                        hospital before 15 minutes of your appointment. Thank You.
                    </TextMessage>
                </Stack>
                <Comment/>
            </Stack>
        </Box>
    )
}

function Header() {
    const [openAssignTopUp, setOpenAssignTopUp] = useState(false)
    const [openClosePopUp, setOpenClosePopUp] = useState(false)
    const [openBlockPopUp, setOpenBlockPopUp] = useState(false)
    const values = ['Assign', 'Close', 'Block']
    const menuItems = GetMenuItemsForArray(values, (label => <Typography sx={{pl:.1, pr:7, py:.5, fontWeight:500}}>{label}</Typography>))
    const handleMenuItemClicked = (val) => {
        switch(val) {
            case 'Assign':
                setOpenAssignTopUp(true)
                return;
            case 'Close':
                setOpenClosePopUp(true)
                return
            case 'Block':
                setOpenBlockPopUp(true)
                return
        }
    }
    return (
        <Box sx={{backgroundColor:`white`}}>
            <Stack direction='row' justifyContent={'space-between'} sx={{px:3, pl:5, py:2}}>
                <Typography sx={{fontWeight:500, fontSize: 18, color:`${primaryThemeColor}BB`}}>Rajeev K</Typography>
                <KuredMenu menuItems={menuItems} label={(
                    <IconButton disableFocusRipple disableRipple disableTouchRipple sx={{p:0}}>
                        <MoreVertIcon/>
                    </IconButton>
                )} onMenuItemClicked={(val) => handleMenuItemClicked(val)}/>
            </Stack>   
            <AssignToPopUp open={openAssignTopUp} onClose={() => setOpenAssignTopUp(false)}/>
            <CloseConverstionTopUp open={openClosePopUp} onClose={() => setOpenClosePopUp(false)}/>
            <BlockConverstionTopUp open={openBlockPopUp} onClose={() => setOpenBlockPopUp(false)}/>
        </Box>
    )
}

function MessageListHeader() {
    const sortOptions = ['Sort by date', 'Sort by department', 'Sort by status']
    const sortMenuItems = GetMenuItemsForArray(sortOptions, (label => <Typography sx={{pl:.1, py:.5}}>{label}</Typography>))

    const filterOptions = ['Filter by status', 'Filter by department']
    const filterMenuItems = GetMenuItemsForArray(filterOptions, (label => <Typography sx={{pl:.1, py:.5}}>{label}</Typography>))
    return (
        <Box sx={{backgroundColor:`white`}}>
            <Stack direction='row' justifyContent={'space-between'} sx={{px:3, py:2}}>
                <KuredMenu menuItems={filterMenuItems} label={(
                    <IconButton disableFocusRipple disableRipple disableTouchRipple sx={{p:0}}>
                        <KuredTooltip title='Filter messages' placement='top'><FilterAltIcon/></KuredTooltip>
                    </IconButton>
                )}/>
                <KuredMenu menuItems={sortMenuItems} label={(
                    <IconButton disableFocusRipple disableRipple disableTouchRipple sx={{p:0}}>
                        <KuredTooltip title='Sort messages' placement='top'><SortIcon/></KuredTooltip>
                    </IconButton>
                 )}/>
            </Stack>    
        </Box>
    )
}

function Comment() {
    return (
        <Box sx={{}}>
            <Stack direction='row' justifyContent={'space-between'} sx={{px:1, pb:1}} alignItems={'center'} spacing={1}>
                <InputField multiline={true} minRows={2} maxRows={2} sx={{width:'100%', backgroundColor:'white', borderRadius:2,px:3, color:`${primaryThemeColor}CC`}}/>
                <KuredButton label="Send" sx={{ 
                        borderRadius:2, 
                        backgroundColor:primaryThemeColor, 
                        color:'white', 
                        py:2,
                        '&:hover, &:active': 
                        {
                            background: 'none !important',
                            color: primaryThemeColor,
                            border: `2px solid ${primaryThemeColor}`
                        },  
                    }}/>
            </Stack>    
        </Box>
    )
}

function AssignToPopUp({open, onClose = () => {}}) {
    const departments = ['General Medicine', 'Gyneacology', 'Neurology', 'Nephrology', 'Oncology', 'Cardiology', 'Internal Medicine', 'Dermatology', 'Orthopaedics', 'Paediatrics'];
    const values = departments.map(dept => ({
        value: dept,
        label: dept
    }))
    const [selectedValue, setSelectedValue] = useState(null)
    const handleClose = () => {
        setSelectedValue(null)
        onClose()
    }
    return (
        <DialogWithTransition open={open} onClose={handleClose} dialogStyles={{p:0, overflow:'hidden', borderRadius:1, width: 300}}>
            <Stack sx={{backgroundColor:'white !important', width:1}}>
                <Box sx={{fontWeight: 400, fontSize:18, backgroundColor:`${primaryThemeColor}DD`, color:'white', px:4, py:2}}>
                    Assign this message to
                </Box>
                <DropDownList values={values} heading={'DEPARTMENTS'} selectedValue={selectedValue} onChange={(newVal) => setSelectedValue(newVal)}/>
                {
                    selectedValue && 
                    <KuredButton label={'Assign to ' + selectedValue.label} 
                            sx={{ 
                                    width:1,
                                    backgroundColor: blue[700], 
                                    color:'white', 
                                    borderRadius:0, 
                                    py:1
                                }}
                        onClick={() => onClose()}
                    /> 
                }
            </Stack>
        </DialogWithTransition>         
    )
}


function CloseConverstionTopUp({open, onClose = () => {}}) {
    return (
        <DialogWithTransition open={open} onClose={onClose} dialogStyles={{p:0}}>   
            <DialogTitle>
                Do you want to close this Conversation?
            </DialogTitle>
            <Stack alignItems={'flex-end'} sx={{m:1, mb:2, mr:2}}>
                <KuredButton label={'Close now'} 
                        sx={{
                                backgroundColor: blue[700], 
                                color:'white', 
                            }}
                    onClick={() => onClose()}
                />
            </Stack>               
        </DialogWithTransition>         
    )
}

function BlockConverstionTopUp({open, onClose = () => {}}) {
    return (
        <DialogWithTransition open={open} onClose={onClose} dialogStyles={{p:0}}>   
            <DialogTitle>
                Do you want to block this Conversation?
            </DialogTitle>
            <Stack alignItems={'flex-end'} sx={{m:1, mb:2, mr:2}}>
                <KuredButton label={'Block now'} 
                        sx={{
                                backgroundColor: blue[700], 
                                color:'white', 
                            }}
                    onClick={() => onClose()}
                />
            </Stack>               
        </DialogWithTransition>         
    )
}