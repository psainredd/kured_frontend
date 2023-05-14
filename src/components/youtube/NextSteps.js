import { KuredButton } from "@/widgets/Buttons";
import { primaryThemeColor } from "@/widgets/color";
import { Cloud, Sell, SettingsSystemDaydream } from "@mui/icons-material";
import { Autocomplete, Box, Divider, Grid, Link, Stack, TextField } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";
import { ContentSectionWithMUIIcon } from "../common/ContentSection";

export default function NextStepsSection({darkBackground=false}) {
  const color = darkBackground ? '#FFF' : primaryThemeColor
  const backgroundColor = darkBackground ? primaryThemeColor : '#FFF'
  return (
    <Box sx={{width:'100%', backgroundColor:backgroundColor, paddingTop:15, paddingBottom:15, color:color}}>
      <Box sx={{display:'block', overflow:'auto'}}>
        <Stack sx={{width: {md:'.75', xs:1}, display:'block', overflow:'auto', paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},  position:'relative'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack spacing={3} sx={{width:.7}}>
                  <Box sx={{fontSize: 24, fontWeight: 600}}>
                    Ready to get started? Get in touch to create an account.
                  </Box>
                  <Box sx={{fontSize:{md:16, xs:14}}}>
                    Reach out to new patients and improve experience to your current patients by joining with us.
                  </Box>
                  <KuredButton label='Contact Us' sx={{
                      color: 'white', 
                      backgroundColor: `${blue[700]}`,
                      '&:hover, &:active': 
                      {
                          backgroundColor: `${backgroundColor} !important`,
                          color:`${blue[700]}  !important`
                      }
                      }} 
                      href='/contactUs'/>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3} sx={{borderLeft:1, borderColor:'divider', paddingLeft:1}}>
              <Stack spacing={2}>
                  <ContentSectionWithMUIIcon title={"Complete solution for all your hospital needs"} icon={<DoubleCloudIcon/>} showDivider={false}>
                      Learn more about how Kured can help you improve your reach and improve patient experience <Link sx={{textDecoration:'none'}}></Link>
                  </ContentSectionWithMUIIcon>
                  <KuredButton label='Get started now' sx={{
                      color: blue[700], 
                      backgroundColor: `none`,
                      fontSize:14,
                      padding:'0 !important', 
                      '&:hover, &:active': 
                      {
                          backgroundColor: `${backgroundColor} !important`,
                          color:`${blue[700]}  !important`
                      }
                      }} 
                      href='/contactUs'/>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3} sx={{borderLeft:1, borderColor:'divider', paddingLeft:1}}>
              <Stack spacing={2} alignItems={'flex-start'} justifyContent={'flex-start'}>
                  <ContentSectionWithMUIIcon title={"Pricing for hospital of any size"} icon={<DoubleSellIcon sx={{fontSize:20, color: blue[700]}}/>} showDivider={false}>
                      Usage-based pricing flexible on the capabilities you need
                  </ContentSectionWithMUIIcon>
                  <KuredButton label='Pricing Details' sx={{
                      color: blue[700], 
                      fontSize:14,
                      backgroundColor: `none`,
                      padding:'0 !important', 
                      '&:hover, &:active': 
                      {
                          backgroundColor: `${backgroundColor} !important`,
                          color:`${blue[700]}  !important`
                      }
                      }} 
                      href='/contactUs'/>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  )

}

function DoubleCloudIcon() {
    return (
        <Stack direction='row' spacing={0}>
            <SettingsSystemDaydream sx={{fontSize:20, color: `${blue[700]}`}}/>
            <Cloud sx={{fontSize:10,  marginLeft: -1.9, marginTop:.63, zIndex:10, color: `${lightBlue[300]}`}}/>
        </Stack>
    )
}

function DoubleSellIcon() {
    return (
        <Stack direction='row' spacing={0}>
            <Sell sx={{fontSize:20, color: `${blue[700]}`, zIndex:2}}/>
            <Sell sx={{fontSize:20, marginLeft:-3,color: `${lightBlue[300]}`}}/>
        </Stack>
    )
}