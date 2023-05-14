import * as React from 'react';
import { Slide, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import { blue, cyan, lightBlue } from '@mui/material/colors';

export const convertToId = (arg) => (''+ arg.replace(/\s/g, '_')).toLocaleLowerCase();
export const StyledTab = styled(Tab)({
    color: lightBlue[300],
    minWidth:20,
    textTransform: "none",
    paddingX:2,
    '&:hover, &:active' : {
        color:cyan[300],
        background:'none',
        borderBottom: `1px solid ${lightBlue[300]}`
    }
});

export const StyledButtonTab = styled(Tab) (({theme}) => ({
    fontWeight: 500,
    textTransform: "none",
    fontSize:12,
    height:60,
    backgroundColor:lightBlue[300],
    marginLeft:0, 
    overflow:'visible',
    ' &.Mui-selected' : {
        backgroundColor: blue[700],
        color: '#FFF',
        borderBottom: 'none',
        '&::after': {
            borderBottomColor: blue[700],
            borderRightColor: blue[700],    
        }
    },
    '&::after': {
        position: 'absolute',
        top: '12%',
        height: 0,
        width: 0,
        left:'calc(100% - 24px)',
        rotate:'315deg',
        borderRadius:0,
        border: '23.5px solid transparent',
        boxShadow: '3px 3px 0px rgb(255 255 255 / 100%) !important',
        zIndex:10,
        borderBottomColor: lightBlue[300],
        borderRightColor: lightBlue[300],
        content:'""'
    }
}));

export function KuredTab(props) {
    return (<StyledTab {...props} disableRipple disableFocusRipple indicatorColor='secondary'/>);
}

export function ButtonTab(props) {
    return (<StyledButtonTab {...props} disableRipple disableFocusRipple/>);
}

export function TabContent({value, index, children, slideDirection='right', ...args}) {
    return (
        <Slide direction='right' in={value===index}> 
            <Box hidden={value!==index} {...args}>
                {children}
            </Box>
        </Slide>
    )
}

export function TabsPanel({labels, children, ...props}) {
    const [tabPanelIndex, setTabPanelIndex] = React.useState(0);
    const handleTabChange = (event, newValue) => setTabPanelIndex(newValue);
    return(
        <Box sx={{width: 1}}>
            <Box>
                <Tabs value={tabPanelIndex} onChange={handleTabChange} {...props} variant="fullWidth">
                    {labels.map(label => (<KuredTab label={label} id={convertToId(label)} key={label}/>))} 
                </Tabs>
            </Box>
            { children && children.map((child, index) =>(<TabContent value={tabPanelIndex} index={index} key={index}>{child}</TabContent>))}
        </Box>
    )
}

export function ButtonsTabPanel({labels, children, ...props}) {
    const [tabPanelIndex, setTabPanelIndex] = React.useState(0);
    const handleTabChange = (event, newValue) => setTabPanelIndex(newValue);
    return(
        <Box sx={{width: 1}}>
            <Box>
                <Tabs sx={{borderRadius:2}} TabIndicatorProps={{
                            style: {
                                height:0,
                            }}}
                        value={tabPanelIndex} onChange={handleTabChange} {...props} variant="fullWidth">
                    {labels.map((label, index) => 
                            (<ButtonTab label={label} id={convertToId(label)} key={index} 
                                sx={{
                                    paddingLeft:`${index!=0 && 30}px`,
                                    '&::after': {
                                        display:`${index == labels.length - 1 ? 'none' : 'inline'}`
                                    }
                                }}
                            />))} 
                </Tabs>
            </Box>
            { children && children.map((child, index) =>(<TabContent value={tabPanelIndex} index={index} key={index}>{child}</TabContent>))}
        </Box>
    )
}