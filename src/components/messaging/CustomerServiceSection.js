import { Box, Stack, Grid, Divider } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue, lightBlue } from '@mui/material/colors';
import { primaryThemeColor, shadedBackground } from '@/widgets/Color';
import { CheckCircleItem, CheckItem } from '@/widgets/Text';
import WhatsAppConversation, { WhatsAppMessage, rightDirection } from './WhatsAppConversation';
import { leftDirection } from './TextConversation';

export default function PatientSupport() {
    return (
      <Box sx={{backgroundColor: '#F0F0F0', width:'100%', pb:25, pt:0}}>
        <Box
          sx={{
            backgroundColor: '#F0F0F0',
            transform: 'skewY(-10deg)',
            height: 275,
            width: '100%',
            marginY:'-135px',
            zIndex:-100,
            display:{xs:'none', md:'block'}
          }}/>      
        <Box>
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:2, position:'relative'}} spacing={3}>
            <MainSection/>
            <KuredButton label='Contact Us' sx={{
                color: '#FFFFFF', 
                backgroundColor: '#1976d2',
                '&:hover, &:active': 
                  {
                    color:'#1976d2'
                  }
              }} onClick={() => window.open('/contactUs', '_self')}/>
          </Stack>
        </Box>
      </Box>
    )
}

function MainSection() {
    return (
        <Grid container sx={{marginTop:3}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={5}>
                <TextContent/>
            </Grid>
            <Grid item xs={12} md={7} justifyContent={'center'} alignItems={'center'}>
                <Conversation/>
            </Grid>
        </Grid>
    )
}


function TextContent({sx}) {
    return (
        <Stack spacing={3} sx={{...sx}}>
            <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700, ...sx}}>
                Patient Support
            </Box>
            <Box sx={{...sx, fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:.9, xs:1}}}>
                Support patients on India&apos;s preferred messaging app
            </Box>
            <Box sx={{...sx, fontSize:{md:16, xs:14}}}>
                With Kured messaing platform equip your healthcare facilities with digital omnichannel solutions to increase patient loyalty 
                and satisfaction while reducing costs by connecting with them through their favorite digital channels such as WhatsApp, SMS and more. 
                Provide self-service options on WhatsApp using our chatbot building platform and 
                enable them to connect with healthcare staff through chat, video, or voice calls.
            </Box>
            <PointedFacts/>
        </Stack>
    )
}

function BlueCheckItem({children}) {
    return (
        <CheckItem iconColor={blue[700]}>
            {children}
        </CheckItem>
    )
}

function PointedFacts() {
    return(
       <Stack spacing={1}>
            <BlueCheckItem>
                Automate responses to common queries  
            </BlueCheckItem>
            <BlueCheckItem>
                Connect with patients at anytime
            </BlueCheckItem>
            <BlueCheckItem>
                Set up a virtual assistant to interact with patients
            </BlueCheckItem>
            <BlueCheckItem>
                Enable easy bill payment
            </BlueCheckItem>
            <BlueCheckItem>
                Check appointment and medical history, follow up on medication refills
            </BlueCheckItem>
            <BlueCheckItem>
                Automate manual tasks 
            </BlueCheckItem>
            <BlueCheckItem>
                Connect with patients faster  
            </BlueCheckItem>
            <BlueCheckItem>
                Manage and respond to urgent situations   
            </BlueCheckItem> 
        </Stack>            
    )
}

function Conversation() {
    return (
        <Stack justifyContent={'center'} alignContent={'center'} sx={{zIndex:10, display:{xs:'none', md:'block'}}}>
            <WhatsAppConversation height={{md:650}} width='90%'>
                <WhatsAppMessage direction={rightDirection} showReadReceipt={true} maxWidth='80%' isReceived={true} isBlueTicked={true}>
                    Hi, I would like to book an appointment with Dr.Jai Kumar
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    Dr.Jai Kumar has openings from 6:30 PM tomorrow. Please provide date for the appointment
                </WhatsAppMessage>
                <WhatsAppMessage direction={rightDirection} showReadReceipt={true} maxWidth='80%' isReceived={true} isBlueTicked={true}>
                    Tomorrow at 7:30 PM
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    Booking appointment tomorrow at 7:30 PM with Dr.Jai Kumar
                </WhatsAppMessage>
                <Grid container sx={{width:.84}}>
                    <Grid item xs={6}>
                        <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false}  centerAlignText={true} sx={{marginTop:-1, width:1}}>
                            <Box sx={{color: lightBlue[500], fontWeight:500}}>
                                Confirm
                            </Box>
                        </WhatsAppMessage>
                    </Grid>
                    <Grid item xs={6}>
                        <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false}  centerAlignText={true} sx={{marginTop:-1, width:1}}>
                            <Box sx={{color: lightBlue[500], fontWeight:500}}>
                                Cancel
                            </Box>
                        </WhatsAppMessage>
                    </Grid>
                </Grid>
                <WhatsAppMessage direction={rightDirection} showReadReceipt={true} maxWidth='80%' isReceived={true} isBlueTicked={true}>
                    Confirm
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    Dear Mr.Rajeev K, Your appointment with Dr.Jai Kumar is scheduled on
                    15th July 2023 at 07:30 PM at our Jubliee Hills branch. Please reach the 
                    hospital before 15 minutes of your appointment. Thank You.
                </WhatsAppMessage>
            </WhatsAppConversation>
        </Stack>
    )
}