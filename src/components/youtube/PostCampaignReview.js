import { CheckItem } from "@/widgets/Text";
import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import { MaskedImage } from "@/widgets/Image";

export default function PostCampaignReview() {
    return(
        <Box sx={{width:'100%'}}>
            <Stack sx={{width: 1, paddingX:4, paddingY:3, marginX: 'auto'}} spacing={1}>
                <Box sx={{fontSize: 24, fontWeight: 700}}>
                    Post Campaign Review
                </Box>
                <Grid container sx={{fontSize:14}} rowSpacing={2}>
                    <Grid item xs={12} md={9}>
                        In this step we take stock of how the campaign went, create review reports, budget review, channelwise performance report,
                        demographic performance report, feedback collection and so on. Kured provides you tools to collect data, summarize it,
                        generate reports automatically.
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={{md:'row', xs:'column'}} spacing={{md:10, xs:1}} sx={{ width:1}}>
                            <Stack spacing={1}>
                                <CheckItem>
                                    Collect campaign data from multiple marketing channels
                                </CheckItem>
                                <CheckItem>
                                    Collect business performance data
                                </CheckItem>      
                                <CheckItem>
                                    Automated report generation
                                </CheckItem>
                                <CheckItem>
                                    Slicing and dicing of collected data
                                </CheckItem>
                            </Stack>
                            <Stack spacing={1}>
                                <CheckItem>
                                    Tools for feedback collection
                                </CheckItem>
                                <CheckItem>
                                    Benchmark comparision
                                </CheckItem>
                                <CheckItem>
                                    Sanitize data to become input for next cycle
                                </CheckItem>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <MaskedImage imgSrc={'/customers_by_marketing.png'} />
                            <MaskedImage imgSrc={'/customers_by_source.png'} />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}