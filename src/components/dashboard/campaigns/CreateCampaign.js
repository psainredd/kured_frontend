import { Form } from "@/components/common/FormSidePanel";
import { KuredButton } from "@/widgets/Buttons";
import { primaryThemeColor } from '../../../widgets/Color';
import { Label } from "@/widgets/FormItem";
import { InputField, KuredDatePicker, Select } from "@/widgets/Inputs";
import { Add, AddCircle, AddCircleOutline, PlusOne } from "@mui/icons-material";
import { Card, CardContent, InputAdornment, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import UploadFileWidget from "./UploadFileWidget";
import { useState } from "react";

const googleCampaignTypes = ["Display", "Discovery", "Video"]
const resourceType = ["Video", "Image", "Text", "Other"]

export default function CreateCampaign() {
    return (
        <Card sx={{width:1, height:1, pt:2}}>
            <CardContent>
                <Form actionLabel={'Create Campaign'} onSubmit={(e) => {}}>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Campaign Name' sx={{fontWeight:500}} isRequired={true}/>
                        <InputField/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Scheduled Start Date' sx={{fontWeight:500}}/>
                        <KuredDatePicker minDate={Date.now()} />
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Scheduled End Date' sx={{fontWeight:500}}/>
                        <KuredDatePicker minDate={Date.now()} />
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Allotted Budget' sx={{fontWeight:500}}/>
                        <InputField isNumber={true} InputProps={{ startAdornment: <InputAdornment position="start"><Typography sx={{color:`${primaryThemeColor}99`}}>&#x20B9;</Typography></InputAdornment>,}}/>
                    </Stack>
                    <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                        <Label value='Google Campaign Type' sx={{fontWeight:500}}/>
                        <Select options={[...googleCampaignTypes]} />
                    </Stack>
                    <AddCampaignResourceButton/>
                </Form>
            </CardContent>
        </Card>
    )
}

function CampaignResource({}) {
    return (
        <Stack spacing={2}>
                <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start'}} spacing={{xs:1, md:2}}>
                    <Label value='Name' sx={{fontWeight:500}}/>
                    <InputField/>
                </Stack>        
                <UploadFileWidget/>
            </Stack>
    )
}

function AddCampaignResourceButton({}) {
    const[onMouseOver, setOnMouseOver] = useState(false)
    return(
        <KuredButton label="Add Campaign Resource" onMouseEnter={(e) => setOnMouseOver(true)} onMouseLeave={(e) => setOnMouseOver(false)}
            sx={{
                backgroundColor:blue[700], 
                color:'white',
                border:`${blue[700]} solid 1px !important`,
                '&:hover, &:active': 
                {
                    background: 'none !important',
                    color:`${blue[700]} !important`,
                    border:`${blue[700]} solid 1px !important`
                },
            }} endIcon={<AddCircle 
                sx={{
                    fontSize: '14px !important', 
                    color:onMouseOver ? blue[700] : 'white', 
            }}/>}/>
    )
}