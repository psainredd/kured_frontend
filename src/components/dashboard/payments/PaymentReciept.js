import { Box, Card, CardContent, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import * as React from 'react'
import { InvoiceData } from '@/test/data';
import { BlueLogo } from '@/components/common/Logo';

const disclaimer = "This document is used for reference purposes only. This invoice is not legally binding. Kured India Private Limited reserves the right to change details in this invoice at any time if any discrepencies are found at customer's end."

const Section = ({children}) => (<Stack direction='row' sx={{justifyContent:'space-between'}}>{children}</Stack>)

function TopRow({data}) {
    return (
        <Section>
            <BlueLogo width='125'/>
            <Stack sx={{textAlign:'right'}}>
                <Typography variant='body1' component='div' sx={{fontWeight:700}}>
                    {`Kured Id: `}
                    <Typography variant='body1' component='span'>
                        {data.paymentId??"12314"}
                    </Typography>
                </Typography>
                <Typography variant='body1' component='div' sx={{fontWeight:700}}>
                    {`Creation Date: `}
                    <Typography variant='body1' component='span'>
                        {data.creationTime??(new Date(Date.now()).toDateString())}
                    </Typography>
                </Typography>
            </Stack>
        </Section>
    )
}

function FromAndToRow({data}) {
    return (
        <Section>
            <Stack>
                <Typography variant='h6' component='div' sx={{fontWeight: 600, mb:1/2}}>
                    Received From
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.createdBy??"John Doe"}
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.tenantLegalName??'Allay Healthcare Pvt. Ltd.,'}
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.tenantAddress??"806 Twin Willow Lane, Old Fort, Bangalore"}
                </Typography>
            </Stack>
            <Stack sx={{textAlign:'right'}}>
                <Typography variant='h6' component='div' sx={{fontWeight: 600, mb:1/2}}>
                    Payed To
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.receiverName??"Kured India Private Limited"}
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.receiverAddress1??'2286 Sundown Lane'},
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.receiverAddress2??'Hyderabad, Telangana 500001, India'}
                </Typography>
            </Stack>
        </Section>
    )
}

function PaymentMethodRow({data}) {
    return (
        <Section>
            <Stack>
                <Typography variant='h6' component='div' sx={{fontWeight: 600, mb:1}}>
                    Payment Method
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.paymentMethod??"Debit Card"}
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.obfuscatedPayerId??"XXXXXXXXXXXX-2541"}
                </Typography>
                <Typography variant='body1' component='div'>
                    {data.paymentIssuer??"JP Morgan Chase"}
                </Typography>
            </Stack>
        </Section>
    )
}

function LineItemsTable({data}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:600, fontSize: 16}}>
                            Transaction Id
                        </TableCell>
                        <TableCell sx={{fontWeight:600, fontSize: 16}} align='right'>Dr/Cr</TableCell>
                        <TableCell sx={{fontWeight:600, fontSize: 16}} align='right'>Creation Time</TableCell>
                        <TableCell sx={{fontWeight:600, fontSize: 16}} align='right'>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.lineItems.map(row => (
                        <TableRow key={row.desc}>
                            <TableCell>{row.transactionId??"afaffaf-12312fasf-asfdasf"}</TableCell>
                            <TableCell align="right">{row.drCr??'Cr'}</TableCell>
                            <TableCell align="right">{row.creationTime??(new Date(Date.now()).toDateString())}</TableCell>
                            <TableCell align="right">&#x20B9;{row.transactionAmount??"100"}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell sx={{fontWeight:600, fontSize: 16}} colSpan={2}>Total</TableCell>
                        <TableCell sx={{fontWeight:600, fontSize: 16}} align="right">&#x20B9;{data.totalAmount??"200"}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function Footer() {
    return(
        <Stack>
            <Typography variant='h6' component='div'>
                Disclaimer
            </Typography>
            <Typography variant='body2' component='p'>
                {disclaimer}
            </Typography>
        </Stack>
    )
}

export default function Invoice() {
    const data = InvoiceData;
    return(
        <CenteredLayout>
            <Card>
                <CardContent>
                    <Stack spacing={4} sx={{p:2}}>
                        <TopRow data={data}/>
                        <FromAndToRow data={data}/>
                        <PaymentMethodRow data={data}/>
                        <LineItemsTable data={data}/>
                        <Footer disclaimer={data.disclaimer}/>
                    </Stack>
                </CardContent>
            </Card>
        </CenteredLayout>
    )
}

export function CenteredLayout({layoutWidth = 2/3, children}) {
    return(
        <Box sx={{height: 'fit-content', boxSizing: 'border-box', backgroundColor: '#f8f9fa'}}>
            <Box sx={{ m: 3, display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <Box sx={{width: layoutWidth}}>
                    {children}                    
                </Box>
            </Box>
        </Box>
    )
}