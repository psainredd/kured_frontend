import { Box, Stack, Grid, Divider } from '@mui/material'
import { KuredButton } from '@/widgets/Buttons'
import { blue } from '@mui/material/colors';
import ContentSection from '../common/ContentSection';

export default function GoogleCampaignTypes() {
    return (
      <Box sx={{backgroundColor:'#FFF', width:'100%', paddingBottom:4}}>
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
          <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'}, paddingY:2, position:'relative'}} spacing={3}>
            <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
              Ad Campaign Types
            </Box>
            <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:500, xs:1}}}>
              Multiple Campaign Types to better suite your needs
            </Box>
            <Grid container sx={{fontSize:{md:16, xs:14}}} rowSpacing={{xs:2, md:0}}>
              <Grid item xs={12} md={9}>
                Google provides multiple campaign types to suite your campaign needs. We have filtered a few important types which may be relevant to your business needs.
              </Grid>
            </Grid>
            <Stack spacing={1} sx={{fontSize:16}} direction={{md:"row", xs:'column'}} divider={<Divider sx={{background:'text.primary', opacity:1, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
              orientation="vertical" flexItem />}>
                <ContentSection title={"Display campaign"} iconSrc={'/icons/website.svg'}>
                  Display campaigns serve visually engaging ads on the Google Display Network. The Display Network helps you reach people as they browse millions of websites, apps, and Google-owned properties.
                </ContentSection>
                <ContentSection title={"Discovery campaign"} iconSrc={'/icons/discover.svg'}>
                  Discovery campaigns help you deliver highly visual, inspiring personalized ad experiences to people who are ready to discover and engage with your brand—all through a single Google Ads campaign.
                </ContentSection>
                <ContentSection title={"Performance Max campaign"} iconSrc={'/icons/store.svg'}>
                  Performance Max campaigns for store goals are designed to help businesses provide their potential customers the information that they need to decide when and how to visit their stores.
                </ContentSection>
                <ContentSection title={"Video campaign"} iconSrc={'/icons/vidAd.svg'}>
                  Video campaigns let you show ads in videos on YouTube and on websites and apps running on Google video partners. This article explains the benefits of Video campaigns and how you can use them to meet your business goals.
                </ContentSection>
            </Stack>
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
            </Stack>
          </Stack>
        </Box>
      </Box>
    )
  }