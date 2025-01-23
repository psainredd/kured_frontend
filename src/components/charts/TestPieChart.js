import { Card, CardContent, Stack, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export function DepartmentWiseRevenueBreakUp({containerStyles}) {
    var series= [44, 55, 41, 17, 15];
    var options= {
        labels: ['General Medicine', 'Pediatrics', 'Cardiology', 'Neurology', 'Pharmacy'],
        legend: {
            position: 'bottom'
        }
    }
    return (
        <Card sx={{...containerStyles}}>
            <CardContent>
                <Stack sx={{width:1}} spacing={{lg:0, xs:7}}>
                    <Typography sx={{fontWeight: 500, fontSize:15}}>Revenue per department</Typography>
                    <ApexCharts options={options} series={series} type="pie"/>
                </Stack>
            </CardContent>
        </Card>
    )
}