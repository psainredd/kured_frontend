import { Box, Stack, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Mail, YouTube } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export default function FooterSection({longForm = true, sx}) {
  return (
    <Box 
        sx={{
          backgroundColor: 'rgba(10, 31, 64, 0.05)', 
          width:'100%', 
          paddingTop:longForm ? 4 : 1, 
          paddingBottom:1, 
          paddingX:{xs:3, md:0},
          ...sx
          
      }}>
      <Stack sx={{width: {md:'.75', xs:1} ,margin: {md:'auto', sx:2}}}>
        { longForm &&
          <Stack direction={{sm:'row', xs:'column'}} justifyContent='space-between' spacing={2}alignItems='center'>
            <Link href='\'><img src='/logo_blue.svg' width='125'/></Link>
            <Stack direction='row' justifyContent='space-around' spacing={10} sx={{fontSize:14, fontWeight:400, paddingLeft:{xs:8, md:0}}} alignItems='center'>
              <Link href='/about' underline='none'>About</Link>
              <Link href='/contactUs' underline='none'>Contact</Link>
              <Link href='/' underline='none'>Terms & Conditions</Link>
            </Stack>
            <Stack direction='row' spacing={1}>
              <FacebookIcon sx={{fontSize:18}}/>
              <Mail sx={{fontSize:18}}/>
              <Link href='https://www.linkedin.com/company/kured-in?original_referer=' underline='none'><LinkedInIcon sx={{fontSize:18}}/></Link>
              <YouTube sx={{fontSize:18}}/>
            </Stack>
          </Stack> 
        }
        <Stack direction='row' spacing={0.4} justifyContent='center' alignItems='center' sx={{fontSize:13, marginTop:longForm? 2 :0}}>
            <CopyrightIcon sx={{fontSize:12}}/>
            <Box>2023, Kured India Private Limited.</Box>
          </Stack>
      </Stack>
    </Box>
  );
}