import * as React from 'react';
import { Divider, Grid, Link, Slide, Stack, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import { blue, cyan, lightBlue } from '@mui/material/colors';
import { LaunchOutlined } from '@mui/icons-material';
import { KuredButton } from '@/widgets/Buttons';
import { KuredTab, TabContent, convertToId } from '@/widgets/TabsPanel';
import ContentSection from '../common/ContentSection';

function CustomTabsPanel({labels, children, onTabChange= (newValue)=>{} ,...props}) {
    const [tabPanelIndex, setTabPanelIndex] = React.useState(0);
    const handleTabChange = (event, newValue) => {
      setTabPanelIndex(newValue);
      onTabChange(newValue);
    }
    return(
        <Box sx={{width: 1}}>
          <Grid container alignItems="flex-start" justify="center">
            <Grid xs={12} md={6}>
              <Stack sx={{width: {xs:1}, paddingRight:2, margin: {md: 'auto', xs:'0'}, paddingY:2, position:'relative', color:'white'}} spacing={3} justifyContent={'center'}>
                <Box sx={{color: lightBlue[300], fontSize: 16, fontWeight: 700}}>
                    Audience Targeting
                </Box>
                <Box sx={{fontSize: 32, fontWeight: 600, lineHeight: '1.2', width: {md:.9, xs:1}}}>
                    Target your campaign at the right people and the right time
                </Box>
                <Grid container sx={{fontSize:{md:16, xs:14}}} rowSpacing={{xs:2, md:0}}>
                    <Grid item xs={12}>
                        YouTube&apos;s audience tools help you find the people who matter the most to your business. You can reach potential customers based on
                        demographics like age, gender and location, as well as interests, life events and more. Google categorises audience for targeting based
                        on their activity on Google&apos;s services. 
                    </Grid>
                </Grid>
              { children && children.map((child, index) =>(<TabContent value={tabPanelIndex} index={index} key={index+""}>{child}</TabContent>))}
              </Stack>
            </Grid>
            <Grid xs={6}>
              <SideSection/>
            </Grid>
          </Grid>
          <Box sx={{marginTop:2}}>
            <Tabs value={tabPanelIndex} onChange={handleTabChange} {...props} variant="fullWidth" textColor="secondary" indicatorColor='secondary'>
              {labels.map(label => (<KuredTab label={label} id={convertToId(label)} key={label}/>))} 
            </Tabs>
          </Box>  
        </Box>  
    )
}

function TabPanel({children}) {
  return(
    <Box sx={{mt:2}}>
          {children}
    </Box>
  )
}

const tabLabels = ['Affinity Segments', 'Custom segments', 'Detailed demographics', 'Life events', 
                  'In-market', 'Remarketing segments']

function AudienceTargetingDetails() {
  return(
      <Box>
        <CustomTabsPanel labels={tabLabels}>
          <TabPanel>
            <ContentSection title={'Affinity Segments'} iconSrc={'/icons/affinity.svg'}>
              With affinity segments, you can reach people based on a holistic picture of their lifestyles, passions, and habits. 
              Those in the affinity segment have demonstrated a qualified passion in a given topic, allowing you to reach the people 
              that matter most with their products or offerings.
            </ContentSection>
          </TabPanel> 
          <TabPanel>
            <ContentSection title={'Custom Segments'} iconSrc={'/icons/custom_segments.svg'}>
              Custom segments let you decide how you want to reach your ideal segment by entering keywords, URLs and apps.
              You can set up a custom segment in your Display, Discovery, Gmail, Standard Shopping, and Video campaigns by including specific keywords, 
              URLs and apps related to your product or service. Google Ads will then display ads to people who are likely to be interested 
              in these keywords on pages, apps, and videos.
            </ContentSection>
          </TabPanel>
          <TabPanel>
            <ContentSection title={'Detailed Demographics'} iconSrc={'/icons/demographics.svg'}>
              Demographics commonly refer to age, gender, and parental status, 
              but detailed demographic segments are broad segments of the population that share common traits. 
              Detailed demographic segments include college students, homeowners, or new parents. 
            </ContentSection>
          </TabPanel>
          <TabPanel>
            <ContentSection title={'Life Events'} iconSrc={'/icons/life_event.svg'}>
              Life events are important life milestones, like graduating from college, moving homes, or getting married. 
              By understanding when these moments are taking place, you can tailor your advertising to reach the 
              right users with the right messages. Like other important milestones, life events are infrequent, 
              and as a result may reach a smaller segment compared to affinities. 
              However, since life events may correspond with many related purchasing decisions, 
              the segment is often larger than the in-market segment, which corresponds with a single purchasing decision.
            </ContentSection>
          </TabPanel>
          <TabPanel>
            <ContentSection title={'In Market Customers'} iconSrc={'/icons/in_market_customer.svg'}>
              This segment consists of customers who are in the market, which means that they&apos;re researching products and are actively considering buying 
              a service or product like yours. In-market segments are designed for advertisers focused on getting conversions from likely buyers. 
              These segments reach consumers close to completing a purchase.
              These users are researching health products, browsing pages more frequently, 
              and are actively considering buying a service or product like yours.
            </ContentSection>
          </TabPanel> 
          <TabPanel>
            <ContentSection title={'Remarketing (Your Data Segments)'} iconSrc={'/icons/remarket.svg'}>
              This segment consists of customers people who have already engaged with your company’s products and services, 
              including past visitors to a website, mobile app, videos, or customers who have given you their contact information.
              This segment includes people who’ve visited you, Customers who have shared information with you. 
              This online and offline data can help you reach and re-engage your customers.
            </ContentSection>
          </TabPanel>
        </CustomTabsPanel>
      </Box>
  )
}

function SideSection() {
  const googleAdsLink = 'https://support.google.com/google-ads/answer/2497941?_ga=2.262449807.2008246606.1683303228-1328989441.1672909744#zippy=%2Caffinity-segments%2Clife-events%2Cin-market-segments%2Ccustom-segments%2Ccustom-intent-segments-auto-created-display%2Cyour-data-segments-formerly-known-as-remarketing%2Cdetailed-demographics%2Chealth-in-market-segments%2Chealth-affinity-segments';
  const googleAdsVideos = 'https://www.youtube.com/@GoogleAds/videos';
  const vidRef = React.useRef(null);
  const onMouseEnter = () => {
    vidRef.current.play();
  }
  const onMouseLeave = () => {
    vidRef.current.pause();
  }
  return(
    <Box sx={{
      display:{md:'block', xs:'none'}, 
      objectFit:'contain',
      overflow:'hidden',
      position:'relative',
      borderRadius:3,
      background:'#FFF',  
      width: 1,
      }} onMouseEnter={() => onMouseEnter()} onMouseLeave = {() => onMouseLeave()}>
      <video src='/audience_targeting.mp4' ref={vidRef} width='100%' borderRadius={3} sx={{
          display:{md:'block', xs:'none'}
        }}/>  
      <Stack sx={{
          top:0, 
          left:0, 
          position:'absolute', 
          width:1,
          boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important',
          height:1, 
          borderRadius:3, 
          background: `linear-gradient(to bottom, #FFFFFF00, ${cyan[700]}F0 70%)`}}
        justifyContent={'flex-end'} alignItems={'center'}>
        <Box sx={{paddingX:5, paddingY:{lg:10, md:5}, color:'#FFF', fontSize:{lg:16, md:14}, fontWeight:400}}>
          Find more about audience targeting and optimized audience targeting in 
          <Link href={googleAdsLink} target='_blank' sx={{fontWeight:500, textDecoration:'none', color:'#FFF'}}> Google Ads&apos; Page.<LaunchOutlined sx={{fontSize:12, marginBottom:'-1px'}}/> </Link>
          You can also find more resources in Google Ads&apos; <Link href={googleAdsVideos} target='_blank' sx={{fontWeight:500, textDecoration:'none', color:'#FFF'}}> YouTube channel.<LaunchOutlined sx={{fontSize:12, marginBottom:'-1px'}}/></Link>
        </Box>
      </Stack>
    </Box>
  )
}

export default function MessagingSection() {
    return (
      <Box sx={{width:'100%', backgroundColor:'#0a2540', paddingTop:{md:0, xs:2}, paddingBottom:{md:25, xs:5}}}>
        <Box
          sx={{
            backgroundColor:'#0a2540',
            transform: 'skewY(-10deg)',
            zIndex:-10,
            height: 275,
            width: '100%',
            marginY:'-135px',
            display:{xs:'none', md:'block'}
          }}/>
        <Box sx={{display:'block', overflow:'auto'}}>
          <Stack sx={{width: {md:'.75', xs:1}, display:'block', overflow:'auto', paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},  position:'relative', color:'white'}} spacing={5}>
            <AudienceTargetingDetails/>
            <KuredButton label='Contact Us' sx={{
                color: '#0a2540', 
                backgroundColor: `${lightBlue[300]} !important`,
                '&:hover, &:active': 
                  {
                    backgroundColor: 'rgba(10, 31, 64, 0.25) !important',
                    color:`${lightBlue[300]}  !important`
                  }
              }} href='/contactUs'/>
          </Stack>
        </Box>
      </Box>
    )
  }