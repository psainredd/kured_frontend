import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import PageLayout from '@/components/common/Layout';
import { blue, cyan, green, lightBlue, purple, red, yellow } from '@mui/material/colors';
import { Box, Stack } from '@mui/material';
import { KuredCircularProgress } from '@/widgets/CircularProgress';
import { KuredTooltip } from '@/widgets/ToolTip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const userCountOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      },
      beginAtZero: false,
    },
    y: {
      grid: {
        display: true,
      },
      beginAtZero: true,
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '# of YouTube users in India from 2019 to 2028',
    },
  },
};

export const userCountData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
  datasets: [
    {
      label: '# Users in Millions',
      data: [265, 337.66, 424.69, 497.93, 574.28, 637.1, 696.6, 745.5, 789.61, 826.44],
      backgroundColor: blue[700],
    }
  ],

};

export const userAgeDistPieData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', 'Above 65'],
  datasets: [
    {
      label: '% of Users by Age Group',
      data: [14.5, 20.2, 16.5, 11.9, 8.9, 9.7],
      backgroundColor: [
        red[500],
        yellow[500],
        green[500],
        blue[500],
        cyan[300],
        purple[500],
      ],
      borderColor: [
        red[500],
        yellow[500],
        green[500],
        blue[500],
        cyan[300],
        purple[500],
      ],
    },
  ],
};

export const userAgeDistPieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'YouTube users as per their age',
    },
  },
};

export const RevenuePercentPieData = {
  labels: ['TV', 'Digital', 'Other'],
  datasets: [
    {
      label: '% Ad Revenue spent in 2022',
      data: [39, 45, 16],
      backgroundColor: [
        cyan[500],
        purple[500],
        yellow[500],
      ],
      borderColor: [
        cyan[500],
        purple[500],
        yellow[500],
      ],
    },
  ],
};

export const RevenuePercentPieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    },
    title: {
      display: true,
      text: '% Ad Revenue spent in 2022',
    },
  },
};


export default function YouTubeDataCharts(){
  return (
    <Stack spacing = {2} justifyContent={'center'} alignItems={'center'} sx={{marginY:3, zIndex:10}}>
        <Box sx={{width:{md:.6, xs:1}, borderRadius:5, boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', padding:4, backgroundColor:'#FFFFFF00'}}>
            <Bar options={userCountOptions} data={userCountData} height={200}/>
        </Box>
        <Stack direction={{md:'row', xs:'column'}} spacing={3}>
            <Stack sx={{backgroundColor:'#FFFFFF00'}} justifyContent={'center'} alignItems={'center'} spacing={3}>
            <Box sx={{boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', borderRadius:5, padding:3}}>
                <Pie data={userAgeDistPieData} options={userAgeDistPieOptions}/>
            </Box>
            <Box sx={{boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', borderRadius:5, padding:3}}>
                <Pie data={RevenuePercentPieData} options={RevenuePercentPieOptions}/>
            </Box>
            </Stack>
            <Box sx={{ borderRadius:5, boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', padding:4, backgroundColor:'#FFFFFF00'}}>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                <KuredTooltip title={'% of marketers vote for YouTube as the second-most important social media platform'} placement="left-start">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box sx={{marginX:2, fontWeight:300, fontSize: 12, width:'100px'}}>% of marketers who vote for YouTube as the second-most important social media platform</Box>
                    <KuredCircularProgress value={70} color={red[600]} thickness={5} size={200}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{xs:48}, fontWeight:900, color: red[400]}}>70</Box>
                        <Box sx={{fontSize:{xs:48}, fontWeight:100, color: red[400]}}>%</Box>
                    </Stack>
                    </KuredCircularProgress>
                </Stack>
                </KuredTooltip>
                <KuredTooltip title={'% of internet users in India watch YouTube'} placement="left-start">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <KuredCircularProgress value={93} color={lightBlue[600]} thickness={5} size={200}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{xs:48}, fontWeight:900, color: lightBlue[400]}}>93</Box>
                        <Box sx={{fontSize:{xs:48}, fontWeight:100, color: lightBlue[400]}}>%</Box>
                    </Stack>
                    </KuredCircularProgress>
                    <Box sx={{marginX:2, fontWeight:300, fontSize: 12, width:'100px'}}>% of internet users in India who watch YouTube</Box>
                </Stack>
                </KuredTooltip>
                <KuredTooltip title={'% of users you can reach through YouTube'} placement="left-start">
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box sx={{marginX:2, fontWeight:300, fontSize: 12, width:'100px'}}>% of users you can reach through YouTube</Box>
                    <KuredCircularProgress value={70} color={green[600]} thickness={5} size={200}>
                    <Stack direction='row' justifyContent='flex-start' alignItems='baseline' spacing='2px'>
                        <Box sx={{fontSize:{xs:48}, fontWeight:900, color: green[400]}}>60</Box>
                        <Box sx={{fontSize:{xs:48}, fontWeight:100, color: green[400]}}>%</Box>
                    </Stack>
                    </KuredCircularProgress>
                </Stack>
                </KuredTooltip>
            </Stack>
            </Box>
        </Stack>
    </Stack>
  )
}
