import { Box, Stack, Grid } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue, lightBlue } from '@mui/material/colors'
import { primaryThemeColor, shadedBackground } from '@/widgets/color'
import { CheckCircleItem, CheckItem } from '@/widgets/Text'
import WhatsAppConversation, { WhatsAppMessage, leftDirection } from './WhatsAppConversation'

export default function MarketingSection() {
    return (
      <Box sx={{backgroundColor:primaryThemeColor, width:'100%', mb:5}}>
        <Box
          sx={{
            backgroundColor:primaryThemeColor,
            transform: 'skewY(-10deg)',
            height: 275,
            width: '100%',
            marginY:'-135px',
            zIndex:-100,
            display:{xs:'none', md:'block'}
          }}/>
        <Box>
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, pb:2, position:'relative', color:'#FFF'}} spacing={0}>
            <Content/>
            <KuredButton label='Contact Us' sx={{
                color: '#FFFFFF', 
                backgroundColor: '#1976d2',
                '&:hover, &:active': 
                  {
                    color:'#1976d2'
                  }
              }} onClick={() => window.open('/contactUs', '_self')}/>
            <Conversation/>  
          </Stack>
        </Box>
      </Box>
    )
}

function BlueCheckItem({children}) {
    return (
        <CheckCircleItem iconColor={lightBlue[300]}>
            {children}
        </CheckCircleItem>
    )
}


function TextSection() {
    return(
       <Stack spacing={1}>
            <BlueCheckItem>
                More than 5 million business are on WhatsApp world wide
            </BlueCheckItem>
            <BlueCheckItem>
                More than 1 billion messages in a single day
            </BlueCheckItem>      
            <BlueCheckItem>
                97% of internet users who use messaging apps use WhatsApp
            </BlueCheckItem>
            <BlueCheckItem>
                WhatsApp Business can boost sales by 127%
            </BlueCheckItem>
            <BlueCheckItem>
                Customer service approval improved by 225% with WhatsApp Business
            </BlueCheckItem>
            <BlueCheckItem>
                Every day, over 175 million people contact a business using WhatsApp Business.
            </BlueCheckItem>
        </Stack>            
    )
}

function Content() {
    return (
        <Grid container sx={{mb:3}}>
            <Grid item xs={12} md={9}>
                <TextContent/>
            </Grid>
        </Grid>
    )
}


function TextContent({sx}) {
    return (
        <Stack spacing={3} sx={{...sx, pt:2}}>
            <Box sx={{color: lightBlue[300], fontSize: 16, fontWeight: 700, ...sx}}>
              Markeing
            </Box>
            <Box sx={{...sx, fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:.9, xs:1}}}>
                Promote your hospital with WhatsApp
            </Box>
            <Box sx={{...sx, fontSize:{md:16, xs:14}}}>
                With Kured messaging platform you can now promote your healthcare institution by sending personlized promotions, running
                remarketing campaigns by targeting past customers, annouce new services and do many more. 
            </Box>  
            <TextSection/>  
        </Stack>
    )
}

function Conversation() {
    return (
        <Stack justifyContent={'center'} alignContent={'center'} sx={{zIndex:10, display:{xs:'none', md:'block'}}}>
            <WhatsAppConversation height={{md:650}} width='50%'>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%'>
                    <img src='disabilityday.jpeg' width='calc(90%)' height={300}/>
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false}  centerAlignText={true} sx={{marginTop:-1, width:1}}>
                    This International day of Persons with Disablities, we at Allay Health offer you <b>50% discount</b> on our <b>Comprehensive Health Checkup </b>
                    package for all people with disablities. Book an appointment now before all available slots fill up.
                </WhatsAppMessage>
                <WhatsAppMessage direction={leftDirection} showReadReceipt={false} maxWidth='80%' showAuxStyles={false}  centerAlignText={true} sx={{marginTop:-1, width:1}}>
                    <Box sx={{color: lightBlue[500], fontWeight:500}}>
                        Book Appointment Now
                    </Box>
                </WhatsAppMessage>
            </WhatsAppConversation>
        </Stack>
    )
}
