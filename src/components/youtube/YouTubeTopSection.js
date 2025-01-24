import { KuredButton } from '@/widgets/Buttons';
import { BackgroundVideo } from '@/widgets/Video';
import { Box, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';
import { publicRuntimeConfig } from '../../../next.config';

export default function YouTubeTopSectionDetails() {
  return (
    <Stack justifyContent={'center'} alignItems={'flex-start'}  sx={{width: {md:'.75', xs:1}, paddingY:5, paddingX:{xs:3, md:0}}} spacing={5}>
      <Stack direction='row' justifyContent='center' alignItems={'center'}>
        <Stack sx={{width:{md:500, xs:1}, marginRight:5}} spacing={2}>
          <Box sx={{fontSize: {xs:40, sm:48, lg:66}, fontWeight:600, lineHeight:'1.3'}}>
            Advertise where it matters
          </Box>
          <Box sx={{fontSize: 16, fontWeight:400}}>
            Kured provides video marketing automation solutions which help you promote your hospital on one of the largest social media platform - 
            Youtube, set marketing KPIs, track your campaign against those KPis.
          </Box>
        </Stack>
        <BackgroundVideo src={`${publicRuntimeConfig.s3BaseUrl}/vid_marketing.mp4`} sx={{
            display:{md:'block', xs:'none'}, 
            borderRadius:5,
            width:{lg: .65, md:.65}, 
            boxShadow: {md:'1px 6px 14px rgb(0 0 0 / 20%) !important'}
        }}/>
      </Stack>
      <Box sx={{width:{md:500, xs:1}}}>
        <Stack direction='row' sx={{paddingTop:2}} spacing={2}>
            <KuredButton label='Contact Us' sx={{
                color: '#FFF', 
                backgroundColor: `${blue[700]} !important`,
                '&:hover, &:active': 
                {
                  backgroundColor: '#FFF !important',
                  color:`${blue[700]} !important`
                },
              }}
              href='/contactUs'
            />
        </Stack>
      </Box>
    </Stack>
  )
}