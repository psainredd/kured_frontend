import { CheckItem } from "@/widgets/Text";
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import { MaskedImage } from "@/widgets/Image";

export default function MonitoringKPIs() {
    return(
        <Box sx={{width:'100%'}}>
            <Stack sx={{width: 1, paddingX:4, paddingY:3, marginX: 'auto'}} spacing={1}>
                <Box sx={{fontSize: 24, fontWeight: 700}}>
                    Monitoring KPIs
                </Box>
                <Grid container sx={{fontSize:14}} rowSpacing={2}>
                    <Grid item xs={12} md={9}>
                        Effectiveness of the campaign is measured by performance of KPIs which we set earlier in the campaign process. Kured provides
                        campaign dashboard which integrates metrics from multiple sources like number of the impressions from your video ad, patient footfall
                        during the campaign period, average patient spend during the campaign and so on. Kured provides you
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{ width:1}}>
                            <Stack spacing={1}>
                                <CheckItem>
                                    A single dashboard to monitor your campaign&apos;s performance
                                </CheckItem>
                                <CheckItem>
                                    Real time metrics business performance metrics
                                </CheckItem>      
                                <CheckItem>
                                    Campaign performance across multiple channels
                                </CheckItem>
                                <CheckItem>
                                    Integration with real time patient traffic data
                                </CheckItem>
                            </Stack>
                            <Stack spacing={1}>
                                <CheckItem>
                                    Customizable reporting
                                </CheckItem>
                                <CheckItem>
                                    Performance against preset benchmarks
                                </CheckItem>
                                <CheckItem>
                                    In house patient survey tools
                                </CheckItem>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <MaskedImage imgSrc={'/KPI_Dashboard.png'} >
                            </MaskedImage>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}