import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { StyledLink } from './Link';
import { KuredTooltip } from './ToolTip';
import { KuredCaptionTextIcon } from './TextIcon';
import KuredTextLink from './Link';


export function ShortformUserInfo({imgSrc, name, profileUrl, caption, showToolTip=false, ...props}) {

    const userNameLink = (
            <StyledLink underline='none' sx={{fontWeight: 500, visibility:'visible'}} href={profileUrl}> 
                {name}
            </StyledLink>)

    const userNameWidget = showToolTip ? (<KuredTooltip title={name}>{userNameLink}</KuredTooltip>) : userNameLink; 
    return(
        
        <Stack justifyContent={'center'} alignItems={'center'} direction='row' sx={{width:1}}>
            <Avatar src={imgSrc}/>
            <Stack sx={{ml:1}}>
                <Typography variant="body" component="div" sx={{fontSize: 14}}>
                    {userNameWidget}
                </Typography>
                <Typography variant="caption" component="div">
                    {caption}
                </Typography>
            </Stack>
        </Stack>
        
    );
}

export function SidePanelBadge({imgSrc, imgLink, name, nameLink, captions}) {
    return (
        <Stack sx={{textAlign: 'center', alignItems: 'center'}}>
            <Link href={`${imgLink}`} target='_blank'>
                <Avatar src={`${imgSrc}`} sx={{width: 150, height: 150, border: '12px solid #f7f7f7'}}/>
            </Link>
            <KuredTextLink sx={{fontWeight: 500, fontSize: 18, mb:1}} href={`${nameLink}`}>{name}</KuredTextLink>
            {captions && captions.map(caption => (
                <KuredCaptionTextIcon key={caption.label} spacing={1/2} sx={{mb:1/2, fontSize: 13}} icon={caption.icon} label={caption.label}/>
            ))}
        </Stack>
    );
}

export function UserBadge({imgSrc, imgLink, name, nameLink, captions}) {
    return (
        <Stack sx={{textAlign: 'center', alignItems: 'center'}}>
            <Link href={`${imgLink}`} target='_blank'>
                <Avatar src={`${imgSrc}`} sx={{width: 100, height: 100}}/>
            </Link>
            <KuredTextLink sx={{fontWeight: 500, fontSize: 18, my:1}} href={`${nameLink}`}>{name}</KuredTextLink>
            {captions && captions.map(caption => (
                <KuredCaptionTextIcon key={caption.label} spacing={1/2} sx={{mb:1/2, fontSize: 13}} icon={caption.icon} labelStyles={caption.labelStyles} label={caption.label}/>
            ))}
        </Stack>
    );
}