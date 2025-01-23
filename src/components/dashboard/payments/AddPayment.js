import { Form } from "@/components/common/FormSidePanel";
import { primaryThemeColor } from "@/widgets/Color";
import { Label } from "@/widgets/FormItem";
import { InputField, KuredDatePicker, Select } from "@/widgets/Inputs";
import { H6, H7 } from "@/widgets/Typography";
import { Box, Card, CardContent, InputAdornment, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { DatePicker, MobileDatePicker, MobileDateTimePicker } from "@mui/x-date-pickers";
import React from "react";

const DrCr = ["Dr", "Cr"]
const paymentMethods = ["NEFT", "IMPS", "RTGS", "Google Pay", "Phone Pe", "Bharat Pe", "PayTM", "MOBIKWIK","Credit Card", "Debit Card","Internal", "Other"]
const paymentStatus = ["Approved", "Initiated", "Rejected"]

export default function AddPayment() {
    const [isOtherPaymentMethod, setOtherPaymentMethod] = React.useState(false)
    return (
        <Card sx={{width:1, height:1, pt:2}}>
            <CardContent>
                <Form actionLabel={'Create Payment'} onSubmit={(e) => {}}>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Payment transaction Id' sx={{fontWeight:500}}/>
                        <InputField/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Creation Date' sx={{fontWeight:500}}/>
                        <KuredDatePicker maxDate={Date.now()} />
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Payment Method' sx={{fontWeight:500}}/>
                        <Select options={[...paymentMethods]} />
                    </Stack>
                    {isOtherPaymentMethod && <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='' sx={{fontWeight:500}}/>
                        <InputField />
                    </Stack>}
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Financial Institution Name' sx={{fontWeight:500}}/>
                        <InputField/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='ObfuscatedAccount Number' sx={{fontWeight:500}}/>
                        <InputField/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Debit/Credit' sx={{fontWeight:500}}/>
                        <Select options={[...DrCr]} />
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Amount' sx={{fontWeight:500}}/>
                        <InputField isNumber={true} InputProps={{ startAdornment: <InputAdornment position="start"><Typography sx={{color:`${primaryThemeColor}99`}}>&#x20B9;</Typography></InputAdornment>,}}/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='PaymentStatus' sx={{fontWeight:500}}/>
                        <Select options={[...paymentStatus]} />
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Comments' sx={{fontWeight:500}}/>
                        <InputField multiline={true}/>
                    </Stack>
                </Form>
            </CardContent>
        </Card>
    )
}