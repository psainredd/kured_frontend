import { Box, Stack, Grid, Divider } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue, lightBlue } from '@mui/material/colors';

export default function DataHostingSection() {
    return (
      <Box sx={{backgroundColor:'#FFF', width:'100%', paddingBottom:4, paddingTop:{xs:4, sm:0}}}>
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
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, position:'relative'}} spacing={3}>
            <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
              Data Storage Solution
            </Box>
            <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:'500px', xs:1}}}>
              Store patient and business data with our storage solution
            </Box>
            <Grid container sx={{fontSize:{md:16, xs:14}}} rowSpacing={{xs:2, md:0}}>
              <Grid item xs={12} md={9}>
                  We know how valuable your patient data is. We therefore provide you with an option to store your data on your premise or
                  use a hybrid solution where you store sensitive data on your permise and save other data on cloud. We also offer reliable data backups
                  with multiple cloud providers so that you don&apos;t have to worry about losing your data.
              </Grid>
            </Grid>
            <Stack 
              divider={<Divider sx={{background:lightBlue[300], opacity:1, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
              orientation="vertical" flexItem />} direction={{md:'row', xs:'column'}} sx={{paddingTop:1}} spacing={2} >
              <Stack spacing={2}>
              <Box>
                  <img src='/icons/firewall_protected.svg' width='40px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Firewall protected
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Your on premise data center is secured behind a firewall to protect your data from external attacks.
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/user_ownership.svg' width='40px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Access Control
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  We follow the need-to-know principle. Users are allowed to access the data on the need to know basis.
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/secure_backup.svg' width='35px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Secure Backup
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Your data is encrypted and backedup to cloud thus protecting you against unforseen disasters. 
                </Box>
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <img src='/icons/access_monitoring.svg' width='40px'/>
                </Box>
                <Box sx={{fontSize: 16, fontWeight: 700}}>
                  Active Access Monitoring
                </Box>
                <Box sx={{fontSize:16, fontWeight:400}}>
                  Access to your data is actively monitored, so that you can be alerted about potential breach ASAP.
                </Box>
              </Stack>
            </Stack>
            <Stack direction='row' spacing={2}>
              <KuredButton label='Contact Us' sx={{
                color: '#FFFFFF', 
                backgroundColor: '#1976d2',
                '&:hover, &:active': 
                  {
                    color:'#1976d2'
                  }
              }}/>
              <KuredButton label='Learn more' sx={{
                color: blue[700], 
                backgroundColor: 'none',
                '&:hover, &:active': 
                  {
                    backgroundColor:'#1976d2 !important',
                    color:'#FFF'
                  }
              }}/>  
            </Stack>
          </Stack>
        </Box>
      </Box>
    )
  }