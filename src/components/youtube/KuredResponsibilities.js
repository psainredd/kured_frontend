import { KuredButton } from '@/widgets/Buttons';
import { ButtonsTabPanel } from '@/widgets/TabsPanel';
import { Box, Grid, Stack } from '@mui/material';
import { blue } from '@mui/material/colors';
import ContentSection from '../common/ContentSection';
import CreateCampaign from './PreLaunchChecklist';
import LaunchCampaign from './LaunchCampaign';
import MonitoringKPIs from './MonitoringKPIs';
import PostCampaignReview from './PostCampaignReview';

const steps=['Create Campaign', 'Launch Campaign', 'Monitor KPIs', 'Post Campaign Review']

export default function KuredResponsibilities() {
    return (
        <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', width:'100%', paddingY: 4}}>
            <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},}} spacing={3} >
                <Box sx={{color: blue[700], fontSize: 16, fontWeight: 700}}>
                    Our role in your success
                </Box>
                <Box sx={{fontSize: 32, fontWeight: 600, width: {md:500, xs:1}, lineHeight: '1.2'}}>
                    Kured guides you through each step of your marketing campaign
                </Box>
                <Grid container sx={{fontSize:16}}>
                    <Grid item xs={12} md={9}>
                        Kured provides a number of solutions which will help you automate and excel at each step in your marketing campaign.
                        Below card provides more details about each marketing step and our role in it.
                    </Grid>
                </Grid>
                <KuredButton label='Know more' sx={{
                    marginTop: 4,
                    color: '#FFFFFF', 
                    backgroundColor: `${blue[700]}`,
                    '&:hover, &:active': 
                    {
                        backgroundColor: `none !important`,
                        color:`${blue[700]} !important`
                    }
                    }}/>
                <Box sx={{backgroundColor:'#FFF', boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', zIndex:10, borderRadius:3, padding:2, overflow:'hidden'}}>
                    <ButtonsTabPanel labels={steps}>
                        <CreateCampaign/>
                        <LaunchCampaign/>
                        <MonitoringKPIs/>
                        <PostCampaignReview/>
                    </ButtonsTabPanel>
                </Box>
            </Stack>
        </Box>
    )
}