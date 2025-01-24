import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { KuredTab } from '@/widgets/TabsPanel';
import { blue, green, lightBlue, orange, red } from '@mui/material/colors';
import { Grid, Slide, Stack } from '@mui/material';
import { CheckItem, PointItem } from '@/widgets/Text';
import { MaskedImage } from '@/widgets/Image';
import { primaryThemeColor } from '@/widgets/Color';
import { publicRuntimeConfig } from '../../../next.config';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Slide direction='up' in={true}>
            <Box sx={{ p: 3, color:'text.primary' }}>
                {children}
            </Box>
        </Slide>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CreateCampaign() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={{width:1}}>
        <Grid item xs={2}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider', width:1,marginTop:4 }}
            >
                <KuredTab label="Campaign Goal" sx={{color:blue[700]}}/>
                <KuredTab label="Establish KPIs" sx={{color:blue[700]}}/>
                <KuredTab label="Marketing Budget" sx={{color:blue[700]}}/>
                <KuredTab label="Target Audience" sx={{color:blue[700]}}/>
                <KuredTab label="Marketing Channels" sx={{color:blue[700]}}/>
                <KuredTab label="Create Ad" sx={{color:blue[700]}}/>
            </Tabs>
        </Grid>
        <Grid item xs={10}>
            <Box>
                <TabPanel value={value} index={0}>
                    <CampaignGoal/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <KPISection/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <BudgetingSection/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <TargetAudienceSection/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <MarketingChannels/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <CreateAd/>
                </TabPanel>
          </Box>
        </Grid>
    </Grid>
  );
}

function TabSection({title, children}) {
    return (
        <Stack spacing={2} sx={{marginRight:2}}>
            <Box sx={{fontSize: 24, fontWeight: 700}}>
                {title}
            </Box>
            {children}
        </Stack>
    )
}

function CampaignGoal() {
    return (
        <TabSection title={'Choosing the campaign goal'}>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12}>
                    Before we do anything we have to define an objective for the campaign. The more granular and quantifiable the goal is, the better
                    the chance of getting it realised. Clear cut goals can helps us plan and guage success. Based on our research and experience with other 
                    partners we help you set your campaign goals. 
                </Grid>
                <Grid item xs={12} md={9}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <CheckItem>
                                Raise brand awareness
                            </CheckItem>
                            <CheckItem>
                                Promote a new product
                            </CheckItem>      
                            <CheckItem>
                                Increase sales
                            </CheckItem>
                            <CheckItem>
                                Increase customers
                            </CheckItem>
                        </Stack>
                        <Stack spacing={1}>
                            <CheckItem>
                                Improve retention rate
                            </CheckItem>
                            <CheckItem>
                                Improve percentage of repeat customers
                            </CheckItem>
                            <CheckItem>
                                Get good publicity
                            </CheckItem>
                        </Stack>
                    </Stack> 
                </Grid>
                <Grid item xs={12}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <QuotationMaskedImage imgSrc={`${publicRuntimeConfig.s3BaseUrl}/goal.jpeg`} filterColor='#0a2540' 
                            quote="If you don’t know where you are going, you will probably end up somewhere else."
                            quoteAuthor='Laurence J. Peter'/>
                    </Stack>
                </Grid>
            </Grid>
        </TabSection>
    )
}

function QuotationMaskedImage({imgSrc, filterColor, quote, quoteAuthor}){
    return (
        <MaskedImage imgSrc={imgSrc} filterColor={filterColor}>
            <Box sx={{paddingX:5, width:1, fontSize:{lg:16, md:14}, fontWeight:500}}> 
                {quote}
            </Box>
            <Box sx={{paddingBottom:{lg:10, md:5}, marginLeft:'auto', paddingRight:'10%'}}>
                - {quoteAuthor}
            </Box>
        </MaskedImage>
    )
}

function KPISection() {
    return (
        <TabSection title={"Establish how we measure campaign's performance"}>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12} sx={{paddingRight:1}}>
                    This is the most crucial step in the entire pre lauch process. We have to establish some Key Performance Indicators (KPIs) against which we
                    can measure our campaign&apos;s performance. We&apos;ll work with you in coming up relevant KPIs for the campaign.  An important thing to note here is 
                    that KPIs for your campaign depend on its purpose and goal. Here are points to keep in mind while setting KPIs.
                </Grid>
                <Grid item xs={12} md={6} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <CheckItem iconColor={blue[700]}>
                                KPIs depend on campaign&apos;s goal
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Define KPI for each marketing channel you chose
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Define success criteria beyond campaign goals
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Have some checkpoints along the way to guage progress
                            </CheckItem>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{marginTop:2}}>
                    Examples of KPIs for different kind of campaign goals:
                </Grid>
                <Grid item xs={12} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <PointItem>
                                <b>For promoting a new product or service</b>: Pre-orders, sales, upsells
                            </PointItem>
                            <PointItem>
                                <b>For increasing brand awareness</b>: Sentiment, social mentions
                            </PointItem>
                            <PointItem>
                                <b>For gathering customer feedback or content</b>: Social mentions, engagement
                            </PointItem>
                            <PointItem>
                                <b>For generating revenue</b>: Leads, sales, upsells
                            </PointItem>
                            <PointItem>
                                <b>For boosting user engagement</b>: Blog shares, social shares, email interactions
                            </PointItem>
                            <PointItem>
                                <b>For advertising an upcoming event</b>: Ticket sales, vendor or entertainment bookings, social mentions
                            </PointItem>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </TabSection>
    )
}

function BudgetingSection() {
    return (
        <TabSection title={"Set Campaigning Budget"}>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12} sx={{paddingRight:1}}>
                    Budget can be a sensitive topic for many businesses. It is important to know your goals and means at your disposal to acheive 
                    those goals. This way you can plan it such a way that we don&apos;t have surprises when we are in too deep in the campaign. We will help
                    you in providing ideal budget range given your goals and means. We offer -
                </Grid>
                <Grid item xs={12} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <CheckItem iconColor={green[700]}>
                                Expertise on pricing models of different marketing channels
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Guidance in coming up with optimal budget given your campaign goals and means
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Tools to track your expenditure at each step of the campaign
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Notifications and Alerting tools to notify you when budgeting thresholds are breached
                            </CheckItem>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <MaskedImage imgSrc={`${publicRuntimeConfig.s3BaseUrl}/budget.jpeg`} filterColor={blue[700]}>
                            <Box sx={{paddingX:5, width:1, fontSize:{lg:16, md:14}, fontWeight:400, marginBottom:7}}>
                                You can calculate budget based on <b>Customer Life Value(CLV)</b>, which is the income you can generate from
                                an average customer. You&apos;ll never know how to develop an optimal marketing budget unless you know 
                                what the return on your investment needs to be. 
                            </Box>
                        </MaskedImage>
                    </Stack>
                </Grid>
            </Grid>
        </TabSection>
    )
}

function TargetAudienceSection() {
    return (
        <TabSection title='Identifying Target Audience'>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12} sx={{paddingRight:1}}>
                    Understanding the general demographic and general needs of your audience will help you craft a relevant, valuable, and memorable marketing campaign.
                    Almost all digital media platforms allow you to target your marketing to your target demographic. Our expertise in market research
                    helps you get to know your target demographic and target your campaign towards them. We provide -
                </Grid>
                <Grid item xs={12} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <CheckItem iconColor={blue[700]}>
                                Market research on target demographics suited for your business
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Guidance with tools provided by various marketing platforms to target your campaign
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Analytics tools to help you understand your previous customers
                            </CheckItem>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <MaskedImage imgSrc={`${publicRuntimeConfig.s3BaseUrl}/target_audience.jpeg`} filterColor={green[700]}>
                            <Box sx={{paddingX:5, width:1, fontSize:{lg:16, md:14}, fontWeight:400, marginBottom:5}}>
                                    Few characteristics to conside when determining target audience: age, gender, income, job, education, affinities
                            </Box>
                        </MaskedImage>
                    </Stack>
                </Grid>
            </Grid>
        </TabSection>
    )
}

function MarketingChannels() {
    return(
        <TabSection title={'Choosing right marketing channels'}>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12} sx={{paddingRight:1}}>
                    You can include multiple channels in your marketing campaign. Choosing right channels and right proportion of channels
                    is key for your campaign&apos;s success. The choice of campaigns depend on your target audience and your budget. We help
                    you with -
                </Grid>
                <Grid item xs={12} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{marginTop:2, width:1}}>
                        <Stack spacing={1}>
                            <CheckItem iconColor={green[700]}>
                                Understanding different marketing channels available in the market
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Marketing automation tools to integrate with your business workflow
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Tools to track multiple channels in your campaign in a single dashboard
                            </CheckItem>
                            <CheckItem iconColor={green[700]}>
                                Tools to manage accounts with multiple marketing channels
                            </CheckItem>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <MaskedImage imgSrc={`${publicRuntimeConfig.s3BaseUrl}/combination.jpeg`} filterColor={lightBlue[300]}>
                            <Box sx={{paddingX:5, width:1, fontSize:{lg:16, md:14}, fontWeight:400, marginBottom:5}}>
                                Choosing right combination of channels is crucial for a successful campaign. 
                                An effective marketing campaign incorporates multiple channels to “touch” potential customers as many times and in as many ways as possible.
                            </Box>
                        </MaskedImage>
                    </Stack>
                </Grid>
            </Grid>
        </TabSection>
    )
}

function CreateAd() {
    return (
        <TabSection title={'Create the Ad'}>
            <Grid container sx={{fontSize:14}}>
                <Grid item xs={12} sx={{paddingRight:1}}>
                  Your Ad conveys a message to potential customers and should always include a Call to Action (CTA). 
                  Your CTA should be specific and obvious to the people you are marketing to. 
                  It’s generally considered a marketing best practice to only include one CTA per campaign, in order to avoid confusing people or diluting your results.
                  We are not involved in this step as much as in other steps, but we can provide you with assistance required if need be. Here are the essential 
                  features an effective ad should have - 
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{paddingLeft:1}}>
                    <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{ width:1}}>
                        <Stack spacing={1}>
                            <CheckItem iconColor={blue[700]}>
                                Figure out what makes your ad stand out among others
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Use a powerful headline
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Make them an offer they can&apos;t refuse
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Use testimonials
                            </CheckItem>
                        </Stack>
                        <Stack spacing={1}>
                            <CheckItem iconColor={blue[700]}>
                                Include call for action
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Use exciting graphics
                            </CheckItem>
                            <CheckItem iconColor={blue[700]}>
                                Always over deliver on your promise
                            </CheckItem>
                        </Stack>
                    </Stack>
                    <Grid item xs={12}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <MaskedImage imgSrc={'/times_square.webp'} filterColor={primaryThemeColor}>
                            <Box sx={{paddingX:5, width:1, fontSize:{lg:16, md:14}, fontWeight:400, marginBottom:5}}>
                                Creating an effective ad is great, but your advertisements won’t get you far if you aren’t making your customers happy. 
                                Therefore, you should focus on providing all of your customers with the best experience that you can.
                            </Box>
                        </MaskedImage>
                    </Stack>
                </Grid>
                </Grid>
        </TabSection>
    )
}  