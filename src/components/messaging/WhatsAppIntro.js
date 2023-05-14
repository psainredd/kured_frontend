import { Box, Stack, Grid } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { green } from '@mui/material/colors';
import { CheckItem } from '@/widgets/Text';
import StickyBox from 'react-sticky-box';
import { WhatsAppFeatureLine } from './WhatsAppFeatures';

export default function WhatsAppIntro() {
    return (
      <Box sx={{backgroundColor:'#FFF', width:'100%', mb:15}}>
        <Box
          sx={{
            backgroundColor:'#FFF',
            transform: 'skewY(-10deg)',
            height: 275,
            width: '100%',
            marginY:'-135px',
            zIndex:-100,
            display:{xs:'none', md:'block'}
          }}/>
        <Box>
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:2, position:'relative'}} spacing={3}>
            <WhatsAppFacts/>
            <Stack direction='row' spacing={2}>
              <KuredButton label='Contact Us' sx={{
                color: '#FFFFFF', 
                backgroundColor: '#1976d2',
                '&:hover, &:active': 
                  {
                    color:'#1976d2'
                  }
              }}/> 
            </Stack>
          </Stack>
        </Box>
      </Box>
    )
}

function TextSection() {
    return(
       <Stack spacing={1}>
            <CheckItem>
                More than 5 million business are on WhatsApp world wide
            </CheckItem>
            <CheckItem>
                More than 1 billion messages in a single day
            </CheckItem>      
            <CheckItem>
                97% of internet users who use messaging apps use WhatsApp
            </CheckItem>
            <CheckItem>
                WhatsApp Business can boost sales by 127%
            </CheckItem>
            <CheckItem>
                Customer service approval improved by 225% with WhatsApp Business
            </CheckItem>
            <CheckItem>
                Every day, over 175 million people contact a business using WhatsApp Business.
            </CheckItem>
        </Stack>            
    )
}

function WhatsAppFacts() {
    return (
        <Grid container sx={{marginTop:3}}>
            <Grid item xs={12} md={6}>
                <StickyBox>
                    <TextContent/>
                </StickyBox>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{height:1, paddingLeft:4, display:{xs:'none', md:'block'}}}>
                    <WhatsAppFeatureLine focusHeightFactor={.2}/>
                </Box>
            </Grid>
        </Grid>
    )
}


function TextContent({sx}) {
    return (
        <Stack spacing={3} sx={{...sx, pt:2}}>
            <Box sx={{color: green[700], fontSize: 16, fontWeight: 700, ...sx}}>
              WhatsApp
            </Box>
            <Box sx={{...sx, fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:.9, xs:1}}}>
                Most popular messaging app in India
            </Box>
            <Box sx={{...sx, fontSize:{md:16, xs:14}}}>
                With more than 2.24 billion monthly active users WhatsApp is the most popular messaging apps in the world. With more than 480 million monthly
                active users, India is the largest market for WhatsApp and WhatsApp is the largest messaging app in India.
            </Box>
            <TextSection/>    
        </Stack>
    )
}
