import { useState } from "react";
import PopperMenu from "./DropDownMenu";
import { KuredStyledToggleButton } from "./Buttons";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { primaryThemeColor } from "./Color";
import { blue } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const YTDValue = 367
export const periodRanges = [
    {value:7, label:'1 Week'}, 
    {value:30, label:'1 Month'}, 
    {value:90, label:'3 Months'}, 
    {value:180, label:'6 Months'},
    {value:YTDValue, label:'YTD'},
    {value: 365, label: '1 Year'}
]

Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.DOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

export function MonthSelectorDropDown({onValueChanged=()=>{}}) {
    const enhancedValues = months.map(month =>  ({value: month, label:month}));
    return (
        <KuredPeriodDropDown values={enhancedValues}
                                dropdownHeading={"SELECT MONTH"}
                                onValueChanged={onValueChanged}     
        />
    )
}

export function PeriodSelectorDropDown({labelsx, dropdownItemsx, onValueChanged = () => {}}) {
    return (
        <KuredPeriodDropDown values={periodRanges} labelsx={labelsx} dropdownItemsx={dropdownItemsx}
                                dropdownHeading={"SELECT PERIOD"}
                                onValueChanged={onValueChanged}

        />
    )
}

function KuredPeriodDropDown({values, dropdownHeading, labelsx, dropdownItemsx, onValueChanged=()=>{}}) {
    const [selectedValue, setSelectedValue] = useState(values[0])
    const label = <Typography sx={{color:blue[700], ...labelsx, fontWeight:500}}>{selectedValue.label}</Typography>
    const onChange = (newVal) => {
        setSelectedValue(newVal)
        onValueChanged(newVal)
    }
    return (
        <PopperMenu 
            label = {label}
            showDirectionArrows = {true}
            hideOnClickAway = {true}
            showOnMouseEnter = {false}
            disablePortal={false}
            directionArrowStyles={{color:blue[700], fontSize:18}}
            sx={{width:'fit-content', display:'block'}}
        >
            <DropDownList sx={dropdownItemsx}
                values={values} 
                selectedValue={selectedValue} 
                onChange={(newVal) => onChange(newVal)} 
                heading={dropdownHeading}/>   
        </PopperMenu>
    )
}

export function DropDownList({values, sx, heading, selectedValue, onChange = () => {}}) {
    const theme = useTheme()
    const onValueChanged = (newVal) => {
        onChange(newVal)
    }
    const list = values.map(val => 
        <KuredStyledToggleButton key={val} sx={{
                                        py:.5, 
                                        pl:1, 
                                        mb:0,
                                        '&.Mui-selected, &.Mui-selected:hover': {
                                            color: `${theme.palette.secondary.main} !important`,
                                            fontSize: {lg:15, xs:12},
                                            fontWeight: 700,
                                            backgroundColor: `${theme.palette.primary.main}`
                                        },
                                    }} 
                                    selected={(selectedValue ? val.value==selectedValue.value : false)}
                                    onChange={() => onValueChanged(val)}>
            <Typography sx={{ py:.5, pl:1.5, pr:10, color:`${val.value==selectedValue?.value ? '#FFF' : primaryThemeColor}`, ...sx}}>{val.label}</Typography>
        </KuredStyledToggleButton>)
    return (
        <Card sx={{pb:0, mb:0, boxShadow:'0 0 30px rgba(0,0,0,0.2)'}}>
            <CardContent sx={{mx:0, px:0, mb:0, pb:`${0} !important`}}>
                <Stack  sx={{mb:1.5, pb:0}}>
                    {heading && <Typography sx={{letterSpacing:1, fontSize:11, mb:1, px:2}}>{heading}</Typography>}
                    {...list}
                </Stack>
            </CardContent>
        </Card>
    )
}