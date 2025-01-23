import LocationOnSharp from '@mui/icons-material/LocationOnSharp';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';

export function KuredDefaultTextIcon({label, icon, ...props}) {
    return (
        <Stack direction='row' sx={{alignItems: 'center'}}>
            {icon}
            <Typography component='span' variant='body1'>
                {label}
            </Typography>
        </Stack>
    )
}

export function KuredCaptionTextIcon({label, icon, sx, labelStyles, ...props}) {
    return (
        <Stack direction='row' spacing ={1/2} sx={{alignItems: 'center', ...sx}}>
            {icon}
            <Typography component='div' variant='body2' sx={{...labelStyles}}>
                {label}
            </Typography>
        </Stack>
    )
}

export function KuredCustomTextIcon({label, icon, ...props}) {
    return (
        <Stack direction='row' sx={{alignItems: 'center'}} {...props}>
            {icon}
            {label}
        </Stack>
    )
}

export function LocationTextWithIcon({locationString, labelStyles, iconStyles, containerStyles, ...props}) {
   const locationIcon = <LocationOnSharp sx={{fontSize:16, color: (theme)=> `${theme.typography.body2.color}`, ...iconStyles}}/>
   return (
       <KuredCaptionTextIcon label={locationString} icon={locationIcon} sx={containerStyles} labelStyles={labelStyles} {...props}/>
   )
}