import YouTubeDataCharts from '@/components/youtube/charts';
import { KuredButton } from '@/widgets/Buttons';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export default function YouTubeIntroSection() {
    return (
        <Box sx={{backgroundColor: 'rgba(10, 31, 64, 0.05)', width:'100%', paddingY: 4}}>
            <Stack sx={{width: {md:'.75', xs:1}, paddingX:{xs:3, md:0}, margin: {md: 'auto', xs:'0'},}} spacing={3} >
                <Box sx={{color: red[700], fontSize: 16, fontWeight: 700}}>
                    YouTube
                </Box>
                <Box sx={{fontSize: 32, fontWeight: 600, width: {md:500, xs:1}, lineHeight: '1.2'}}>
                    A goto place for entertainment and news for Indians
                </Box>
                <Grid container sx={{fontSize:16}} spacing={1}>
                    <Grid item xs={12} md={9}>
                        Youtube is the second largest search engine in the world. With over 2 Billion monthly active users worldwide and 567 active users in 
                        India it is the most effective marketing platform in India. Youtube delivers 4.8X greater effectiveness than TV and impacts incremental sales.
                        2 in 3 Indians say that they would rather give up TV than Youtube for a month.
                    </Grid>
                </Grid>
                <Grid container sx={{paddingX:2, color:red[700]}} spacing={2}>
                <Grid item xs={12} md={3.5}>
                    <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>567</Box>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>m</Box>
                    </Stack>
                    <Box sx={{color:'text.primary', fontSize:{lg:16, md:13}, fontWeight:300}} textAlign='center'>
                        Active users of Youtube in India
                    </Box>
                    </Stack>
                </Grid>
                <Divider sx={{background:'#0a2540', height:'175px', marginX:1, opacity:0.25, marginY:'auto !important', display:{md:'block', xs:'none'}}} 
                    orientation="vertical" flexItem />
                <Grid item xs={12} md={3.5}>
                    <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>2</Box>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>/</Box>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>3</Box>
                    </Stack>
                    <Box sx={{color:'text.primary', fontSize:{lg:16, md:14}, fontWeight:300}} textAlign='center'>
                        2 out of 3 Indians would give up TV for a month rather than Youtube
                    </Box>
                    </Stack>
                </Grid>
                <Divider sx={{background:'#0a2540', opacity:.25, marginX:1, height:'175px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
                    orientation="vertical" flexItem />
                <Grid item xs={12} md={3.5}>
                    <Stack alignItems='center' justifyContent={{md:'left', xs:'center'}}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:900}}>4.8</Box>
                        <Box sx={{fontSize:{lg:72, md:54, xs:48}, fontWeight:100}}>X</Box>
                    </Stack>
                    <Box sx={{color:'text.primary', fontSize:{md:14, lg:16}, fontWeight:300}} textAlign='center'>
                        Delivers 4.8X greater effectiveness than TV and impacts incremental sales.
                    </Box>
                    </Stack>
                </Grid>
                </Grid>
                <KuredButton label='Contact Us' sx={{
                    marginTop: 4,
                    color: '#FFFFFF', 
                    backgroundColor: `${blue[700]}`,
                    '&:hover, &:active': 
                    {
                        backgroundColor: `none !important`,
                        color:`${blue[700]} !important`
                    }
                    }}/>
                <Box paddingY={3}>
                    <YouTubeDataCharts/>
                </Box>  
            </Stack>
        </Box>
    )
}
  