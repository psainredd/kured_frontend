import { Box, Stack, CardMedia, Grid, Divider } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue } from '@mui/material/colors';
import { BackgroundVideo } from '@/widgets/Video';

export default function MarketingSection() {
    return (
      <Box sx={{backgroundColor:'#FFF', width:'100%'}}>
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
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:5, position:'relative'}} spacing={3}>
            <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
              Marketing Automation
            </Box>
            <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:'500px', xs:1}}}>
              Advertise where it matters
            </Box>
            <Grid container sx={{fontSize:{md:16, xs:14}}} rowSpacing={{xs:2, md:0}}>
              <Grid item xs={12} md={6}>
                  <b>Youtube</b> is the second largest search engine in the world. It is goto place for Indians for 
                  entertainment and news. Youtube has 567 million active users in India which is expected to grow to
                  833 million by the end of 2025. Youtube delivers 4.8X greater effectiveness than TV and impacts incremental sales.
              </Grid>
              <Grid item xs={12} md={6} sx={{paddingLeft:{xs:0, md:2}}}>
                We provide a one stop shop for all your digital marketing needs. Our solutions help you schedule marketing campaigns, assess
                their impact and learn from it to help you better your campaigns in the future.
              </Grid>
              <Grid item xs={12} md={6} sx={{marginTop:{xs:0, md:2}}}>
                  2 in 3 Indians say that they would rather give up TV than Youtube for a month. Youtube provides a way to micro target your ads,
                  check your campaign effectiveness and is easy on your budget compared to other options.
              </Grid>
            </Grid>
            <Stack direction='row' spacing={2}>
              <KuredButton label='Contact Us' sx={{
                  color: '#FFFFFF', 
                  backgroundColor: '#1976d2',
                  '&:hover, &:active': 
                    {
                      color:'#1976d2'
                    }
                }}
                onClick={() => window.open('/contactUs', '_self')}
              />
              <KuredButton label='Learn more' sx={{
                  color: blue[700], 
                  backgroundColor: 'none',
                  '&:hover, &:active': 
                    {
                      backgroundColor:'#1976d2 !important',
                      color:'#FFF'
                    }
                }}
                onClick={() => window.open('/videoMarketing', '_self')}
              />  
            </Stack>
            <Grid container sx={{paddingX:3}} spacing={2}>
              <Grid item xs={12} md={3.5}>
                <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                  <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>567</Box>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>m</Box>
                  </Stack>
                  <Box sx={{color:'#707070', fontSize:{lg:16, md:13}, fontWeight:400}} textAlign='center'>
                    Active users of Youtube in India
                  </Box>
                </Stack>
              </Grid>
              <Divider sx={{background:'#0a2540', height:'175px', marginX:1, opacity:0.25, marginY:'auto !important', display:{md:'block', xs:'none'}}} 
                orientation="vertical" flexItem />
              <Grid item xs={12} md={3.5}>
                <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                  <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>2</Box>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>/</Box>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>3</Box>
                  </Stack>
                  <Box sx={{color:'#707070', fontSize:{lg:16, md:14}, fontWeight:400}} textAlign='center'>
                    2 out of 3 Indians would give up TV for a month rather than Youtube
                  </Box>
                </Stack>
              </Grid>
              <Divider sx={{background:'#0a2540', opacity:.25, marginX:1, height:'175px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
                orientation="vertical" flexItem />
              <Grid item xs={12} md={3.5}>
                <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                  <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>4.8</Box>
                    <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>X</Box>
                  </Stack>
                  <Box sx={{color:'#707070', fontSize:{md:14, lg:16}, fontWeight:400}} textAlign='center'>
                    Delivers 4.8X greater effectiveness than TV and impacts incremental sales.
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Stack sx={{width:'100%', paddingY:{xs:0, md:5}}} alignItems='center' justifyContent='center' spacing={2}>
              <Box sx={{display:{md:'block', xs:'none'}, zIndex:10, width:{lg:'60%', md: .9}}}>
                <BackgroundVideo src='/vid_marketing.mp4' sx={{width:'100%', zIndex:10, borderRadius:5, boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important'}}/>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    )
  }