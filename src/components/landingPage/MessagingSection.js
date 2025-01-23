import { Box, Stack, Grid, Divider } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { lightBlue } from '@mui/material/colors';

export default function MessagingSection() {
    return (
      <Box sx={{width:'100%', backgroundColor:'#0a2540', paddingBottom:{sm:18, xs:0}}}>
        <Box
          sx={{
            backgroundColor:'#0a2540',
            transform: 'skewY(-10deg)',
            height: 275,
            width: '100%',
            marginY:'-135px',
            display:{xs:'none', md:'block'}
          }}/>
        <Box>
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:5, position:'relative', color:'white'}} spacing={3}>
            <Box sx={{color: lightBlue[300], fontSize: 16, fontWeight: 700}}>
              Messaging Platform
            </Box>
            <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:'500px', xs:1}}}>
              Improve your customer service experience with our messaging platform
            </Box>
            <Grid container sx={{fontSize:{md:16, xs:14}}} rowSpacing={{xs:2, md:0}}>
              <Grid item xs={12} md={9}>
                  Our Platform integrates with Whatsapp business platform and other communication tools partners to provide you with the 
                  state of the art notifications platform which can cater to your custom needs. We offer automated notification and Alerting
                  for as low as &#x20B9;0.50 per message. For more information, please contact our sales team.
              </Grid>
            </Grid>
            <Stack 
              divider={<Divider sx={{background:'white', opacity:.25, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
              orientation="vertical" flexItem />} direction={{md:'row', xs:'column'}} sx={{paddingTop:3}} spacing={2} >
              <Stack spacing={2}>
              <Box>
                  <img src='/icons/notification.svg' width='40px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Notifications
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Our notifiation platform helps you configure custom notifications to notify users of booking status,
                  doctor availability, report availability and many such scenarios. Our platform supports multiple communication
                  channels like SMS, Whatsapp and Email.
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/query.svg' width='50px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Automated customer support
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Whatsapp Business API allows customers to automate customer support workflows. Our platform 
                  integrates with Whatsapp business to help you create automated customer support for basic patient management tasks like appointment
                  booking, cancelling, diagnostic test queries and so on.
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/target_user.svg' width='50px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Targeted remarketing
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Repeat customers are the easiest and most profitable of all customers. Our platform helps you target your past patients
                  with ads specific to their requirements and needs. It also helps you target users who are in your target geocode. 
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/personal_interaction.svg' width='55px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Personlised Patient Interaction
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Our platform also enables patient interaction with clinicians by providing a private communication channel through Whatsapp without 
                  compromising privacy of either party. This helps you to keep in touch with your patients, thus retaining their loyalty in the future.
                </Box>
              </Stack>
            </Stack>
            <Stack direction='row' sx={{paddingTop:2}} spacing={2}>
              <KuredButton label='Contact Us' sx={{
                color: '#0a2540', 
                backgroundColor: `${lightBlue[300]} !important`,
                '&:hover, &:active': 
                  {
                    backgroundColor: 'rgba(10, 31, 64, 0.25) !important',
                    color:`${lightBlue[300]}  !important`
                  }
              }} onClick={() => window.open('/contactUs', '_self')}/>
              <KuredButton label='Learn more' sx={{
                color: `white`, 
                backgroundColor: 'none !important',
                '&:hover, &:active': 
                  {
                    backgroundColor: 'rgba(255, 255, 255, 1) !important',
                    color:`#0a2540 !important`  
                  }
              }} onClick={() => window.open('/messaging', '_self')}/>
            </Stack>
          </Stack>
        </Box>
      </Box>
    )
  }