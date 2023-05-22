import { Box, Stack, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Mail, YouTube } from '@mui/icons-material';

export default function FooterSection() {
    return (
      <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', width:'100%', paddingTop:4, paddingBottom:1, paddingX:{xs:3, md:0}}}>
        <Stack sx={{width: {md:'.75', xs:1} ,margin: {md:'auto', sx:2},}}>
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
          <Stack direction='row' spacing={0.4} justifyContent='center' alignItems='center' sx={{fontSize:12, marginTop:2}}>
              <CopyrightIcon sx={{fontSize:12}}/>
              <Box>2023, Allay Health Private Limited.</Box>
            </Stack>
        </Stack>
      </Box>
    );
  }