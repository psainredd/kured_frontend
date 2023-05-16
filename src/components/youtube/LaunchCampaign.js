import { CheckItem } from "@/widgets/Text";
import Box from '@mui/material/Box';
import { Divider, Grid, ImageListItem, Stack } from '@mui/material';
import { MaskedImage } from "@/widgets/Image";
import { ContentSectionWithMUIIcon } from "../common/ContentSection";
import { Google, WhatsApp } from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";

export default function LaunchCampaign() {
    return(
        <Box sx={{width:'100%'}}>
            <Stack sx={{width: 1, paddingX:4, paddingY:3, marginX: 'auto'}} spacing={1}>
                <Box sx={{fontSize: 24, fontWeight: 700}}>
                    Launching the campaign
                </Box>
                <Grid container sx={{fontSize:14}} rowSpacing={2}>
                    <Grid item xs={12} md={9}>
                        Kured provides integration with multiple digital advertising platforms including Google&apos;s Ad Platform and Whatsapp Business API
                        to provide you smooth lauch experience. With Kured&apos;s marketing automation platform - 
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{ width:1}}>
                            <Stack spacing={1}>
                                <CheckItem>
                                    Create an automated launch pipeline
                                </CheckItem>
                                <CheckItem>
                                    Pre-Schedule launches
                                </CheckItem>      
                                <CheckItem>
                                    Rollback launches
                                </CheckItem>
                                <CheckItem>
                                    Gradual rollout of the campaign
                                </CheckItem>
                            </Stack>
                            <Stack spacing={1}>
                                <CheckItem>
                                    Rollout across multiple platforms
                                </CheckItem>
                                <CheckItem>
                                    Handle multiple accounts and rollouts at the same time
                                </CheckItem>
                                <CheckItem>
                                    Synchronize your rollout across multiple platform
                                </CheckItem>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2} sx={{fontSize:16, marginTop:1}} direction={{xs:'column'}} divider={<Divider sx={{background:'text.primary', opacity:1, height:'200px', marginY:'auto !important', display:{ xs:'none'}}} 
                            orientation="vertical" flexItem />}>
                                <ContentSectionWithMUIIcon title={"Google Ads API"} icon={<Google sx={{fontSize:20, color: blue[700]}}/>}>
                                    Kured in integrated with Google&apos;s Ads API which lets us to enable you to manage accounts with multiple marketing channels at one place without 
                                    the hassle of dealing with multiple portals. You can handle multiple marketing accounts transparently with our account management portal. 
                                    In addition to campaign management we also handle budgets and bidding through a single interface.
                                </ContentSectionWithMUIIcon>
                                <ContentSectionWithMUIIcon title={"WhatsApp Business API"} icon={<WhatsApp sx={{fontSize:20, color: green[700]}}/>}>
                                    Kured is integrated with WhatsApp Business API which lets us to enable you to manage agents, bots across mutliple accounts and communicate with them
                                    programmatically and manually. You can also manage accounting and billing
                                    in a seemless fashion with our single interface. It also allows you to coordinate a campaign across multiple social media platforms.
                                </ContentSectionWithMUIIcon>
                        </Stack>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <MaskedImage imgSrc={'/launch.jpeg'} />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}