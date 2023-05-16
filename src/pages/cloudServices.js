import PageLayout from '@/components/common/Layout';
import TopSection from '@/components/common/TopSection';
import DataHostingSection from '@/components/home/DataHostingSection';
import NextStepsSection from '@/components/youtube/NextSteps';
import { KuredButton } from '@/widgets/Buttons';
import { primaryThemeColor } from '@/widgets/color';
import { Grid, Box, Stack, CardMedia, Divider } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';

export default function CloudServices() {
  return (
    <PageLayout title={'Kured | Cloud Services'}>
        <TopSection>
          <TopSectionDetails/>
        </TopSection>
        <SinglePlatformSection/>
        <DataHostingSection/>
        <AISection/>
        <NextStepsSection/>
    </PageLayout>      
  )
}


function TopSectionDetails() {
  return (
    <Stack justifyContent={'center'} alignItems={'flex-start'}  sx={{width:{lg:.75, xs:1}, paddingY:5, paddingX:{xs:2, lg:0}}} spacing={5}>
      <Stack direction='row' justifyContent='center' alignItems={'center'}>
        <Stack sx={{width:{md:500, xs:1}, marginRight:5}}>
          <Box sx={{fontSize: {xs:40, sm:48, lg:66}, fontWeight:600, lineHeight:'1.3', marginRight:20}}>
            Solutions for all your tech needs
          </Box>
          <Box sx={{fontSize: 16, fontWeight:400}}>
            We provide state of the art products and services to move your healthcare business - from individual practioners to large hospitals - to the future.
          </Box>
        </Stack>
        <Box sx={{display:{md:'block', xs:'none'}}}>
          <img src='/images/home_main.png' width='750'/>
        </Box>
      </Stack>
      <Box sx={{width:{md:500, xs:1}}}>
        <Stack>
          <Stack direction='row' sx={{paddingTop:2}} spacing={2}>
            <KuredButton label='Contact Us' sx={{
              color: '#FFF', 
              backgroundColor: `${blue[700]}`,
              '&:hover, &:active': 
                {
                  backgroundColor: '#FFF !important',
                  color:`${blue[700]}  !important`
                }
            }}
            href='/contactUs'
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

function SinglePlatformSection() {
  return (
    <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', marginTop: 4, width:'100%', pt: 4, pb:5}}>
      <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},}} spacing={3} >
        <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
          Comprehensive Solution
        </Box>
        <Box sx={{fontSize: 32, fontWeight: 600, width: {md:500, xs:1}, lineHeight: '1.2'}}>
          A one stop shop for all your technology needs
        </Box>
        <Grid container sx={{fontSize:{md:18, xs:16}}} spacing={1}>
          <Grid item xs={12} md={6}>
              Our platform that brings together everything that&apos;s required to maintain 
              a healthcare facility of any size. Our product suite include solutions from patient management, 
              integration with all popular accounting software, HR management, clinical data management, 
              data archiving and ML and data science pipeline. Our state of the art cyber security pipeline secures your patient data and privacy.
          </Grid>
          <Grid item xs={12} md={6}>
            Our AI pipeline provides following features - enterprise imaging, image interpretation in radiology, remote patient monitoring,
            insurance assistance, personalized medicine, clinical data mining & patient management.
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
        }} onClick={() => window.open('/contactUs', '_self')}/>
        <Stack sx={{width:'100%'}} alignItems='center' justifyContent='center' spacing={2}>
          <Stack direction='row' spacing={{md:4, xs:0}} alignItems='center'>
            <Box sx={{display:{md:'block', xs:'none'}}}>
              <img src={`/patientApp.png`} loading="lazy" width='250px' justifyContent='center'/>
            </Box>
            <CardMedia autoPlay='true' loop component='video' src='/home_vid.mp4' 
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

function AISection() {
  return (
    <Box sx={{width:'100%', mt:20}}>
      <Box
        sx={{
          backgroundColor:'#0a2540',
          transform: 'skewY(-10deg)',
          height: 275,
          width: '100%',
          marginY:'-135px',
          display:{xs:'none', md:'block'}
        }}/>
      <Box sx={{backgroundColor:'#0a2540'}}>
        <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:5, position:'relative', color:'white'}} spacing={3}>
          <Box sx={{color: lightBlue[300], fontSize: 16, fontWeight: 700}}>
            AI Integerated Platform
          </Box>
          <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:'500px', xs:1}}}>
            World class AI integrated platform with NIC medical database integration
          </Box>
          <Stack 
            divider={<Divider sx={{background:'white', opacity:.25, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
            orientation="vertical" flexItem />} direction={{md:'row', xs:'column'}} sx={{paddingTop:3}} spacing={2} >
            <Stack spacing={2}>
              <Box>
                <img src='/icons/xray.svg' width='50px'/>
              </Box>
              <Box sx={{fontSize: 16, fontWeight: 700}}>
                Medical Image processing
              </Box>
              <Box sx={{fontSize:16, fontWeight:400}}>
                Our radiology suite is integrated with the cutting edge 
                AI pipeline, which helps in assisting our radiologists and clinicians.
                We also provide world class enterprise imaging solutions to prepare and archive your 
                medical images for future use.
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Box>
                <img src='/icons/medicalData.svg' width='50px'/>
              </Box>
              <Box sx={{fontSize: 16, fontWeight: 700}}>
                Critical data analysis
              </Box>
              <Box sx={{fontSize:16, fontWeight:400}}>
                Our clinician assistance solutions mine patient data from past consultations and all
                medical data available to provide wholistic picture of patient&apos;s health. This helps clinicians
                make accurate diagnosis and tailor treatement personally to each patient.
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Box>
                <img src='/icons/productivity.svg' width='50px'/>
              </Box>
              <Box sx={{fontSize: 16, fontWeight: 700}}>
                Non clinicial workflow assistance
              </Box>
              <Box sx={{fontSize:16, fontWeight:400}}>
                Our AI pipeline doesn&apos;t just help you in clinical workflows. Our platform offers solutions for your healthcare facility&apos;s 
                day to day management backed by robust AI & ML stack. For example, we are currently in a pilot project to help GGH, Kurnool integrate
                with NIC&apos;s e health portal, reducing their hardware infrastructure cost. 
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Box>
                <img src='/icons/research.svg' width='40px'/>
              </Box>
              <Box sx={{fontSize: 16, fontWeight: 700}}>
                Research pipeline
              </Box>
              <Box sx={{fontSize:16, fontWeight:400}}>
                At Kured, we want to put our state of the art AI pipeline to good use, not just to solve problems of today, but to team with 
                research institutions to solve problems of the future. We are in process of teaming up with KMC to put all the data and pipelines to good use. 
              </Box>
            </Stack>
          </Stack>
          <Stack direction='row' sx={{paddingTop:2}} spacing={2}>
            <KuredButton label='Contact Us' sx={{
              color: `white`, 
              backgroundColor: `${blue[700]}`,
              '&:hover, &:active': 
                {
                  backgroundColor: `${primaryThemeColor}`,
                  color:`#FFF !important`  
                }
            }} href = '/contactUs'/>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

function CyberSecuritySection() {
  return(
    <Box sx={{width:1}}>
      <Box
        sx={{
          backgroundColor:'white',
          height: 500,
          width: '100%',
          display:{xs:'none', md:'block'}
        }}/>
    </Box>
  )  
}