import * as React from 'react'; 
import { Stack, Typography } from '@mui/material';
import { StyledLink } from './Link';
import { grey } from '@mui/material/colors';

import { ShortformUserInfo } from './User';
import { DataGridAcceptButton, DataGridCancelButton, DataGridPrintButton, DataGridViewButton } from './Buttons';
import { BodyMain } from './Typography';

export function renderHeader(name) {
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <BodyMain sx={{fontWeight: 500, margin:'auto'}}>{name}</BodyMain>
        </Stack>
    )
}

export function RenderUserInfo({imgSrc, name, profileUrl, caption, showToolTip=false}) {
    return(
        <ShortformUserInfo {...{imgSrc, name, profileUrl, caption, showToolTip}}/>
    );
}

export function RenderDateWithTime(params) {
    const {date, time} = params
    return (
        <Stack sx={{display: 'inline-flex', margin:'auto', textAlign:'center'}}>
            <Typography variant="body" component="div" sx={{fontSize:'14px'}}>
                {date}
            </Typography>
            <Typography variant="body" component="div" sx={{fontSize:'14px', color:grey[600]}}>
                {time}
            </Typography>
        </Stack>
    )
}

export function GenericRenderCell(params) {
    return (
        <Stack sx={{display: 'inline-flex', margin:'auto', textAlign:'center'}}>
            <BodyMain>
                {params.value}
            </BodyMain>
        </Stack>
    )
}

export const DataGridActionTypes = {
    print: (printUrl, showLabel=false) => (<DataGridPrintButton printUrl={printUrl} showLabel={showLabel}/>),
    view: (url, showLabel=false) => (<DataGridViewButton url={url} showLabel={showLabel}/>),
    accept: (onAccept, showLabel=false) => (<DataGridAcceptButton onAccept={onAccept} showLabel={showLabel}/>),
    cancel: (onCancel, showLabel=false) =>(<DataGridCancelButton onCancel={onCancel} showLabel={showLabel}/>)
}

export function RenderActions({print, view, accept, cancel}) {
    return (
        <Stack direction='row'sx={{width: 1, justifyContent:'space-around'}}>
            {(print && print)}
            {(view && view)}
            {(accept && accept)}
            {(cancel && cancel)}
        </Stack>
    );
}

export function RenderLink(props) {
    const {label, href} = props;
    return(
        <StyledLink underline='none' sx={{fontWeight: 500, visibility:'visible', margin: 'auto'}} href={href} target="_blank">
            {value}
        </StyledLink>
    );
}

export function RenderPatientInfo(params) {
    const name = params.value;
    const id= params.row.patientId;
    const imgSrc = `/images/patients/${id}.jpg`
    const profileUrl = `/dashboard#${id}`
    const caption = `#${id}`;
    return (
        <RenderUserInfo imgSrc={imgSrc} name={name}
            profileUrl={profileUrl} caption={caption}
            showToolTip={true}/> 
    )
}
