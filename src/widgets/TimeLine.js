import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PropTypes from 'prop-types';
import { green, lightBlue } from '@mui/material/colors';

export function KuredTimeline({children, showLineConnectorAtTheEnd=true, ...props}) {
    children = Array.isArray(children) ? children : [children] 
    return(
        <Timeline sx={{marginBlock:0, marginInline: 0, paddingInline:0}} {...props}>
            
            {children.map((child, index)=>(
                <TimelineItem sx={{':before':{flex:0, p:0}}} key={index}>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' sx={{ border: (theme)=> `3px solid ${green[500]}`, boxShadow: 'none', my:0}}/>
                        {(showLineConnectorAtTheEnd ? true : index < children.length -1) && <TimelineConnector/>}
                    </TimelineSeparator>
                    <TimelineContent sx={{py:0, mt:-1/2}}>{child}</TimelineContent>
                </TimelineItem>  
            ))}
        </Timeline>
    );
}

KuredTimeline.propTypes = {
    children: PropTypes.arrayOf(PropTypes.any).isRequired
}