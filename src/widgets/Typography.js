import { Stack, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react'
import { AllayTooltip } from './ToolTip';

export function H6({children, ...props}) {
    return (
        <Typography variant='h6' component='div' {...props}>
            {children}
        </Typography>
    )
}

export function H7({children, sx, ...props}) {
    return (
        <Typography variant='h6' component='div' sx={{ fontSize:18, ...sx}} {...props}>
            {children}
        </Typography>
    )
}

export function H8({children, sx, ...props}) {
    return (
        <Typography variant='body' component='div' sx={{ fontSize:18, fontWeight:500, ...sx}} {...props}>
            {children}
        </Typography>
    )
}

export function BodyMain({children, sx, ...props}) {
    return (
        <Typography variant='body1' component='div' sx={{...sx}} {...props}>
            {children}
        </Typography>
    )
}

export function BodyMain700({children, sx, ...props}) {
    return (
        <Typography variant='body1' component='div' sx={{fontWeight: 700, ...sx}} {...props}>
            {children}
        </Typography>
    )
}

export function BodySecondary({children, sx, ...props}) {
    return (
        <Typography variant='body2' component='div' sx={{fontSize: 15, ...sx}} {...props}>
            {children}
        </Typography>
    )
}

export function Body2({children, ...props}) {
    return (
        <Typography variant='body2' component='div' {...props}>
            {children}
        </Typography>
    )
}

export function Caption({children, ...props}) {
    return (
        <Typography variant='caption' component='div' {...props}>
            {children}
        </Typography>
    )
}

export function Paragraph({children, ...props}) {
    return (
        <Typography variant='body1' component='p' {...props}>
            {children}
        </Typography>
    )
}

export function TextWithInfoBubble({children, toolTipText, infoBubbleStyles, ...props}) {
    return (
        <Stack direction='row' sx={{alignItems: 'center'}} spacing={1/2}>
            {children}
            <AllayTooltip title={toolTipText}>
                <InfoIcon sx={{fontSize:16, color: (theme)=> `${theme.typography.body2.color}`, ...infoBubbleStyles}}/>
            </AllayTooltip> 
        </Stack>
    )
}