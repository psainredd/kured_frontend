import { Box, Card, CardContent, Grid, Slider, Stack, Typography } from "@mui/material";
import AreaChart from "../../charts/TestAreaChart";
import { primaryThemeColor } from "@/widgets/Color";
import { green, lightBlue } from "@mui/material/colors";
import { ArrowDropDown, ArrowDropUp, Remove } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { PeriodSelectorDropDown, YTDValue, periodRanges } from "@/widgets/PeriodSelectorDropDown";
import { useState } from "react";
import { getPatientReportData } from "@/api/HomePageData";
import { KuredCircularProgress } from "@/widgets/CircularProgress";
import { DepartmentWiseRevenueBreakUp } from "../../charts/TestPieChart";
import { KuredTooltip } from "@/widgets/ToolTip";
import { useContext } from "react";
import { MinWidthContext } from "../DashboardMain";

const getLabel = (period) => {
    const prefix = "vs previous ";
    switch(period.value) {
        case 7:
            return prefix + "week";
        case 30:
            return prefix + "month";
        case 365:
            return prefix + "year";
        case YTDValue:
                return "Year to Date";
        default:
            return prefix + period.label;
    }
}

const getDataForPeriod = (period, data) => {
    switch(period.value) {
        case 7:
            return data?.weekData;
        case 30:
            return data?.monthData;
        case 365:
            return data?.yearData;
        case 90:
            return data?.quarterData;
        case 180:
            return data?.halfYearData;
        case YTDValue:
            return data?.YTDData
        default:
            return null;
    }
}

export default function UserHome() {
    return(
        <Stack spacing={1} sx={{ml:-2}}>
            <TopSection/>
            <ChartSection/>
        </Stack>
    )
}

function ChartSection() {
    return (
        <Grid container columnSpacing={2} rowSpacing={2} sx={{mx:-2}} justifyContent={'stretch'} alignItems={'stretch'}>
            <Grid item lg={8} xs={12} sx={{ml:-2}}>
                <AreaChart/>
            </Grid>
            <Grid item lg={4} xs={12} sx={{mr:-2, ml:{xs:-2, lg:0}}}>
                <RightSection/>
            </Grid>
        </Grid>
    )
}

function RightSection() {
    const theme = useTheme() 
    const greenColor = theme.palette.success.main;
    const redColor = theme.palette.error.main;
    return (
        <Grid container rowSpacing={2} columnSpacing={2} justifyContent={'space-between'} alignItems={'space-between'}>
            <Grid item xs={12} md={6} lg={12}>
                <DepartmentWiseRevenueBreakUp containerStyles={{height:1}}/>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
                <Grid container columnSpacing={2} rowSpacing={2} sx={{height:1}}>
                    <Grid item xs={12} lg={6}>
                        <AverageRevPerPatient color={greenColor} title={'Avg. Revenue per patient'} value={1234} progressValue={50} abbTitle={'ARpP'}/> 
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <AverageRevPerPatient color={redColor} title={'Avg. Revenue per doctor'} value={250000} progressValue={80} abbTitle={'ARpD'}/>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

function AverageRevPerPatient({color, title, value, progressValue, abbTitle}) {
    const showMinWidth = useContext(MinWidthContext)
    const caption = `Your are in ${progressValue} percentile for ${abbTitle}`;
    const captionFull = `Your are in ${progressValue} percentile for ${title}`;
    const progressMt = showMinWidth ? 2.4 : 1
    const progressMb = showMinWidth ? 2.4 : .5
    return (
        <Card >
            <CardContent sx={{pb:'15px !important'}}>
                <Stack justifyContent={'space-between'} alignItems={'space-between'} >
                    <Typography sx={{fontSize: 13, fontWeight:500, color:{color}}}>{title}</Typography>
                    <Stack justifyContent='center' alignItems={'center'} sx={{height:1}}>
                        <KuredCircularProgress size={120} value={progressValue} color={color} containerStyle={{mt:progressMt, mb:progressMb}}>
                            <KuredTooltip title={captionFull} placement="top" value={caption}>
                                <Stack alignItems='center' justifyContent='center' direction='row'>
                                    <Typography sx={{fontSize:18, fontWeight:400, mr:.1, color:{color}}}>&#8377;</Typography>
                                    <Typography sx={{fontSize: 22, color:{color}}}>
                                        {value}
                                    </Typography>
                                </Stack>
                            </KuredTooltip>
                        </KuredCircularProgress>
                        <Box sx={{display:{xs:'block', lg:'block'}, mt:1}}>
                            <KuredTooltip title={captionFull} placement="top" value={caption}>
                                <Typography sx={{fontSize:{lg:10, xs:13}, fontWeight:400}}>{caption}</Typography>
                            </KuredTooltip>
                        </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

function TopSection() {
    const patientData = getPatientReportData()
    const revenueData = getPatientReportData()
    const balance = getPatientReportData()
    const campaigns = getPatientReportData()
    const currencyIcon = <Typography sx={{fontSize:24, fontWeight:400, mr:.1}}>&#8377;</Typography>
    return (
        <Box>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item md={3} xs={6}>
                    <PeriodDataSummary data={patientData} title='Patient Count'/>
                </Grid>
                <Grid item md={3} xs={6}>
                    <PeriodDataSummary 
                        data={revenueData} 
                        valuePrefix={currencyIcon} 
                        title='Revenue'/>
                </Grid>
                <Grid item md={3} xs={6}>
                    <BalanceSummary/>
                </Grid>
                <Grid item md={3} xs={6}>
                    <Campaigns/>
                </Grid>
            </Grid>
        </Box>
    )
}

function PeriodDataSummary({data, title, valuePrefix, valueSuffix}) {
    const [period, setPeriod] = useState(periodRanges[0]);
    const dataForPeriod = getDataForPeriod(period, data);
    const theme = useTheme() 
    const changeColor = () => dataForPeriod?.percentChange > 0 ? green[700]: 
                                (dataForPeriod?.percentChange < 0 ? theme.palette.error.main: lightBlue[700]);
    return (
        <Card>
            <CardContent sx={{height:175}}>
                <Stack>
                    <Stack direction='row' justifyContent={'space-between'} alignItems='baseline'>
                        <Typography sx={{fontSize: 15, fontWeight:500}}>{title}</Typography>
                        <PeriodSelectorDropDown labelsx={{fontSize: 12}} dropdownItemsx={{fontSize:13}} onValueChanged={(val) => setPeriod(val)}/>
                    </Stack>
                    <Stack sx={{justifyContent:'center', alignItems:'center', minHeight: 100}}>
                        {dataForPeriod &&
                            <>
                                <Stack direction='row' alignItems='center' justifyContent='center'>
                                    {valuePrefix && valuePrefix}
                                    <Typography sx={{fontSize: 36, color:`${primaryThemeColor}DD`}}>
                                        {dataForPeriod.value}
                                    </Typography>
                                    {valueSuffix && valueSuffix}
                                </Stack>
                                <Stack direction='row' alignItems='center'>
                                    <Typography sx={{fontSize: 13, fontWeight:500, color:`${changeColor()}`, ml:2}}>
                                        {dataForPeriod.percentChange > 0 ? `+${dataForPeriod.percentChange}%` : 
                                        (dataForPeriod.percentChange < 0 ? `${dataForPeriod.percentChange}%` : `No Change`)}
                                    </Typography>
                                    {dataForPeriod.percentChange > 0 ? 
                                        <ArrowDropUp sx={{fontSize:30, width:30, height:30, color:green[700]}}/> :  
                                        (dataForPeriod.percentChange < 0 ? <ArrowDropDown sx={{fontSize:30, width:30, height:30, color:`${theme.palette.error.main}`}}/> :
                                        <Remove sx={{fontSize:30, width:15, height:30, ml:.5, color:lightBlue[700]}}/>)
                                    }
                                </Stack>
                                <Typography sx={{fontSize: 11}}>{getLabel(period)}</Typography>
                            </>
                        }
                        {
                            dataForPeriod == null && 
                            <Typography sx={{color:`${primaryThemeColor}DD`}}>
                                    No data found for time period
                            </Typography>
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

function BalanceSummary() {
    const theme = useTheme() 
    return (
        <Card>
            <CardContent sx={{height:175}}>
                <Stack>
                    <Typography sx={{fontSize: 15, fontWeight:500}}>Account Balance</Typography>
                    <Stack justifyContent='center'>
                        <Stack alignItems='center' justifyContent='center' direction='row' sx={{mt:1}}>
                            <Typography sx={{fontSize:24, fontWeight:400, mr:.1}}>&#8377;</Typography>
                            <Typography sx={{fontSize: 36, color:`${primaryThemeColor}DD`}}>
                                1235
                            </Typography>
                        </Stack>
                        <Slider value={5} disableRipple disableTouchRipple sx={{
                            '&.MuiSlider-root > span:nth-child(1)':{
                                backgroundImage: 'linear-gradient(to right, red, yellow, green) !important',
                                opacity:'1 !important',
                                height:7
                            },
                            '&.MuiSlider-root > span:nth-child(2)':{
                                color:"transparent",
                                opacity:'1 !important',
                            },
                            '&.MuiSlider-root > span:nth-child(3)':{
                                height:'15px',
                                width:'7px',
                                color:'white',
                                border: '2px solid black',
                                borderRadius:'0 !important',
                                '&:after, &:before': {
                                    display:'none'
                                },
                                'input' :{
                                    display:'none'
                                },
                            }
                        }}/>
                        <Stack direction='row' justifyContent='space-between' alignItems='space-between' sx={{width:1, mt:-1}}>
                            <Typography sx={{fontSize:12}}>Low</Typography>
                            <Typography sx={{fontWeight:500, fontSize:{md:14, xs:13}}}>Status</Typography>
                            <Typography sx={{fontSize:12}}> High</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

function Campaigns() { 
    return (
        <Card>
            <CardContent sx={{height:175}}>
                <Stack>
                    <Typography sx={{fontSize: 15, fontWeight:500}}>Campaigns</Typography>
                    <Stack justifyContent='center'>
                        <Stack alignItems='center' justifyContent='center' direction='row' sx={{mt:1}}>
                            <Typography sx={{fontSize: 36, color:`${primaryThemeColor}DD`}}>
                                12
                            </Typography>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' alignItems='space-between' sx={{width:1, mt:1}}>
                            <Stack justifyContent='center' alignItems='center'>
                                <Typography sx={{fontWeight:500, fontSize:12}}>Completed</Typography>
                                <Typography sx={{fontSize:18}}>10</Typography>
                            </Stack>
                            <Stack justifyContent='center' alignItems='center'>
                                <Typography sx={{fontWeight:500, fontSize:12}}>Active</Typography>
                                <Typography sx={{fontSize:18}}>10</Typography>
                            </Stack>
                            <Stack justifyContent='center' alignItems='center'>
                                <Typography sx={{fontWeight:500, fontSize:12}}>Scheduled</Typography>
                                <Typography sx={{fontSize:18}}>10</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}