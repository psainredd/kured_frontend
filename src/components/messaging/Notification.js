import { KuredButton } from '@/widgets/Buttons';
import { Box, Grid, Stack } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import { TextConversation, TextMessage, leftDirection } from './TextConversation';
import { CheckItem } from '@/widgets/Text';
import WhatsAppConversation, { WhatsAppMessage } from './WhatsAppConversation';

export default function NotificationSection() {
    return (
        <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', width:'100%', paddingY: 4}}>
            <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},}} spacing={3} >
                <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
                    Notifications
                </Box>
                <Grid container sx={{fontSize:16}}>
                    <Grid item xs={12} md={6}>
                      <TextSection/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{display:{xs:'none', md:'block'}}}>
                            <TextConversation>
                                <TextMessage direction={leftDirection}>
                                    Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                                    15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                                    hospital before 15 minutes of your appointment. Thank You.
                                </TextMessage>
                                <TextMessage direction={leftDirection}>
                                    Thank You for choosing Allay Health. Your report is now ready for pick up.
                                    Please visit our diagnostic center by 6PM today to collect it.
                                </TextMessage>
                            </TextConversation>
                        </Box>
                    </Grid>
                </Grid>
                <KuredButton label='Contact Us' sx={{
                    marginTop: 4,
                    color: '#FFFFFF', 
                    backgroundColor: `${blue[700]}`,
                    '&:hover, &:active': 
                    {
                        backgroundColor: `none !important`,
                        color:`${blue[700]} !important`
                    }
                    }} onClick={() => window.open('/contactUs', '_self')}/>  
                <WhatsAppSection/>
            </Stack>
        </Box>
    )
}

function TextSection() {
    return(
        <Stack spacing={3}>
            <Box sx={{fontSize: 32, fontWeight: 600, width: {md:.9, xs:1}, lineHeight: '1.2'}}>
                Reach out to patients at every step of the way
            </Box>
            <Box>
                Kured messaging platform enables you to notify patients at each step of the appointment right from the booking status,
                doctor availability, report availability, sending prescriptions, notifiations about upcoming appointments and many more. 
                Kured is integrated with WhatsApp Business API and several text message integrators like Twilio to give you seemless experience.
            </Box>
            <Stack spacing={1}>
                <CheckItem iconColor={blue[700]}>
                    Send automated notification messages
                </CheckItem>
                <CheckItem iconColor={blue[700]}>
                    Schedule periodic notifications
                </CheckItem>      
                <CheckItem iconColor={blue[700]}>
                    Bulk notification messages
                </CheckItem>
                <CheckItem iconColor={blue[700]}>
                    NLP based message handling
                </CheckItem>
                <CheckItem iconColor={blue[700]}>
                    Customizable message templates
                </CheckItem>
                <CheckItem iconColor={blue[700]}>
                    Text based, media based or interactive
                </CheckItem>
            </Stack>            
        </Stack>
    )
}

function WhatsAppSection() {
    return (
        <Stack justifyContent={'center'} alignContent={'center'} sx={{zIndex:10, display:{xs:'none', md:'block'}}}>
            <WhatsAppConversation>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    Dear Mr.Rajeev K, Your appointment with Dr.Praveen Shetty is scheduled on
                    15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                    hospital before 15 minutes of your appointment. Thank You.
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false}  centerAlignText={true} sx={{marginTop:-1, width:.8}}>
                    <Box sx={{color: lightBlue[500], fontWeight:500}}>
                        Get Directions to the clinic
                    </Box>
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    Thank You for choosing Allay Health. Your report is now ready for pick up.
                    Please visit our diagnostic center by 6PM today to collect it.
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false} centerAlignText={true} sx={{marginTop:-1, width:.8}}>
                    <Box sx={{color: lightBlue[500], fontWeight:500}}>
                        Get a soft copy
                    </Box>
                </WhatsAppMessage>
            </WhatsAppConversation>
        </Stack>
    )
}