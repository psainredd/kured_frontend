import { Box, Stack, CardMedia } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import AnonymousUserHeaderBand from '../common/AnonymousUserHeaderBand'

export default function HomePageTopSection() {
    return (
      <Box sx={{height:'100vh', overflow:'hidden'}}>
        <Stack sx={{width:1}} justifyContent={'center'} alignItems={'center'}>
          <Box sx={{position:'absolute', top:0, left:0, width:1, height:'100vh', backgroundColor:'rgba(0,0,30,0.4)', zIndex:-1}}/>
          <CardMedia sx={{
              height:'100vh', 
              overflow:'hidden', 
              width:1, 
              objectFit:'cover',
              zIndex:-10
            }} 
            autoPlay={true} muted={true} loop component='video' src='/background.mp4'/>
          <Stack justifyContent={'center'} sx={{width:1}} alignItems={'center'}>
            <AnonymousUserHeaderBand/>
          </Stack>  
          <Stack sx={{
              position:'absolute',
              width:1,
              height:'100vh',
              top: 0 
            }} justifyContent='center' alignItems='center'>
            <Box sx={{color:'#FFF', fontSize:{xs:40, sm:48, lg:70}, fontWeight: {xs:700, sm:800}, width:{xs:.9, md:.7}, textAlign:'center'}}>
              Reinvent your hospital with Kured
            </Box>
            <Box sx={{color:'#FFF', fontSize:{xs:16, sm:20, lg: 24}, fontWeight: {xs:400, md:500}, width:{xs:.8, md:.6}, textAlign:'center'}}>
              Improve your patient experience and reach out to new patients with our solutions. Get started now.
            </Box>
            <Stack direction='row' sx={{width: {xs:.8, md:.6}, marginTop:2}} justifyContent={'center'} spacing={{xs:2, md:6}}>
              <KuredButton label='Sign In' sx={{
                color: '#FFFFFF', 
                backgroundColor: 'none !important',
                border:1,
                '&:hover, &:active': 
                  {
                    backgroundColor: '#FFF !important',
                    color:'#0a2540  !important',
                    borderColor:'#FFF'
                  }
                }}
                onClick={() => window.open('/signIn', '_self')}
              />
              <KuredButton label='Contact Us' sx={{
                  color: '#0a2540',
                  backgroundColor: '#FFF !important',
                  border:1,
                  borderColor:'#FFF',
                  '&:hover, &:active': 
                  {
                    background: 'none !important',
                    color:`#FFF !important`
                  },
                }}
                onClick={() => window.open('/contactUs', '_self')}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    )
}