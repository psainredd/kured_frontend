import { Box, Stack, CardMedia, Grid } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue } from '@mui/material/colors';
import { BackgroundVideo } from '@/widgets/Video';

export default function SinglePlatformSection() {
    return (
      <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', width:'100%', paddingY: 4}}>
        <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},}} spacing={3} >
          <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
            Comprehensive Solution
          </Box>
          <Box sx={{fontSize: 32, fontWeight: 600, width: {md:500, xs:1}, lineHeight: '1.2'}}>
            A one stop shop for all your technology needs
          </Box>
          <Grid container sx={{fontSize:16}} spacing={1}>
            <Grid item xs={12} md={6}>
                Our platform that brings together everything that&apos;s required to maintain 
                a healthcare facility of any size. Our product suite include solutions from patient management, 
                patient relationship management, HR management, clinical data management, automated customer service,
                data archiving and ML and data science pipeline. Our state of the art cyber security pipeline secures your patient data and privacy.
            </Grid>
            <Grid item xs={12} md={6}>
              We also offer data archiving and hybrid cloud solution where you can save your data on premise and back it for disaster recovery. 
              Our state of the art ML pipeline helps you with automatic digitization of analog health records and also integrate with our new ML 
              diagnostic solutions to provide state of the art care for your patients.
            </Grid>
          </Grid>
          <KuredButton label='Contact Us' sx={{
            marginTop: 4,
            color: '#FFFFFF', 
            backgroundColor: '#1976d2 !important',
            '&:hover, &:active': 
              {
                backgroundColor: 'rgba(10, 31, 64, 0.25) !important',
                color:'#1976d2  !important'
              }
          }}/>
          <Stack sx={{width:'100%'}} alignItems='center' justifyContent='center' spacing={2}>
            <Stack direction='row' spacing={{md:4, xs:0}} alignItems='center'>
              <Box sx={{display:{md:'block', xs:'none'}}}>
                <img src={`/patientApp.png`} loading="lazy" width='250px' justifyContent='center'/>
              </Box>
              <BackgroundVideo src='/home_vid.mp4' 
                sx={{ 
                    width:{md:'650px', xs:'1'},
                    borderRadius:2, 
                    boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important',
                }}/>
            </Stack>
            <Box sx={{display:{md:'block', xs:'none'}, zIndex:10, width:'60%'}}>
              <img src={`/Dashboard.png`} loading="lazy" style={{width:'100%', zIndex:10, borderRadius:'2%', boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important'}}/>
            </Box>
          </Stack>
        </Stack>
      </Box>
    )
  }
  