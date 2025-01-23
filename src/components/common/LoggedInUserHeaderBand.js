import { Box, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BlueLogo } from './Logo';
import UserProfileButton from './UserProfileButton';
import NotificationsWidget from './NotificationsWidget';

export default function LoggedInUserHeaderBand({visibilty = true}) {
  const logo = <BlueLogo width={110}/>
  return (
    <Box sx={{width: 1, pt:'10px', mb:1, backgroundColor:grey[100], fontWeight:450, 
                position:visibilty?'fixed':'relative',
                visibility:visibilty ? 'visible' : 'hidden',
                top:0, }}>
      <Stack direction='row' justifyContent= 'space-between' alignItems='space-between' sx={{paddingX:{xs:2, sm:3, md:5, lg:10}, pb:1}}>
        {logo}
        <Stack direction='row' spacing={{md:4, xs:0}} justifyContent='space-between' alignItems='center'>
          <UserProfileButton/>
          <NotificationsWidget/>
        </Stack>
      </Stack>
    </Box>  
  )
}