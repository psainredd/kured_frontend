import * as React from 'react';
import { Grid, Popper, Slide, Stack, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import StickyBox from "react-sticky-box";
import queryString from 'query-string';
import SidePanel, { MenuPanel } from './SidePanel';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import LoaderGIF from '@/widgets/LoaderGIF';
import { useContext } from 'react';
import { RequestPanelItemContext } from '@/components/dashboard/DashboardMain';

const getFullMenuList = (dashboardItems) => {
    var result = [...dashboardItems]
    dashboardItems.forEach(element => {
        if (element.childMenuItems) {
            result = [...result, ...element.childMenuItems]
        }
    });
    return result;
}

export default function DashboardLayout({badge, dashboardItems, showMinWidth = true, onHideSidePanel = () => {}}) {
    const fullDashboardItems = getFullMenuList(dashboardItems).map(item => ({...item}))
    const enhancedDashboardItems = dashboardItems.map(item => ({...item})) ;
    const [sidePanelItemId, setSidePanelItemId] = React.useState(enhancedDashboardItems[0].id);
    const {requestedPanel} = useContext(RequestPanelItemContext)    
    const [isPageLoaded, setPageLoged] = React.useState(false);
    const containerRef = React.useRef(null);
    const theme = useTheme();
    const isMdOrUp = useMediaQuery(theme.breakpoints.up('md'));
    const onSidePanelItemChanged = (value) => setSidePanelItemId(value);

    const getSelectedSidePanelItem = (fragmentId) => fullDashboardItems.filter(item => item.id == fragmentId)[0]??enhancedDashboardItems[0];

    const getTitle = () => 'Kured | ' + getSelectedSidePanelItem(sidePanelItemId).name;

    React.useEffect(() => {
        let fragmentId = queryString.parseUrl(window.location.href, {parseFragmentIdentifier: true}).fragmentIdentifier;
        setSidePanelItemId(getSelectedSidePanelItem(fragmentId).id)
        setPageLoged(true)
    },[]);

    React.useEffect(() => {
        if (requestedPanel) {
            setSidePanelItemId(requestedPanel)
        }
    }, [requestedPanel])

    if (!isPageLoaded) {
        return (<LoaderGIF/>)
    }

    return (
        <div ref={containerRef}>
            <Box sx={{backgroundColor: '#F0F0F0'}}>
                <Head>
                    <title>{getTitle()}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Popover handleClose={onHideSidePanel} open={!isMdOrUp && !showMinWidth} linkRef={containerRef.current}>
                    <Slide direction='right' in={!isMdOrUp && !showMinWidth} container={containerRef.current}>
                        <Box sx={{display:{md:'none', xs:'block', mt:-2, width:'250px'}}}>
                            <SidePanelContent
                                    badge={badge}
                                    enhancedDashboardItems={enhancedDashboardItems}
                                    sidePanelItemId={sidePanelItemId}
                                    onSidePanelItemChanged={onSidePanelItemChanged}
                                    showMinWidth={showMinWidth}
                            />
                        </Box>
                    </Slide>
                </Popover>
                <Box sx={{width: 1,height:1}}>
                    <Grid container columnSpacing={{xs:0, md:2}} sx={{width: 1, ml:0, px:{xs:1, md:2}}}>
                        <Grid item md={showMinWidth ? 0.6 :2.2} sx={{display:{md:'block', xs:'none'}}}>
                            <SidePanelContent
                                badge={badge}
                                enhancedDashboardItems={enhancedDashboardItems}
                                sidePanelItemId={sidePanelItemId}
                                onSidePanelItemChanged={onSidePanelItemChanged}
                                showMinWidth={showMinWidth}
                                />

                        </Grid>
                        <Grid item md={showMinWidth ? 11.4 : 9.8} xs={12}>
                            <Box sx={{ml:1}}>
                                {getSelectedSidePanelItem(sidePanelItemId).panel}
                            </Box>
                        </Grid>
                    </Grid> 
                </Box>
            </Box>
        </div>     
    )
}

function SidePanelContent({badge, enhancedDashboardItems, sidePanelItemId, onSidePanelItemChanged, showMinWidth}) {
    return (
        <StickyBox>
            <Box sx={{py:{xs:0, md:2}}}>
                <SidePanel showMinWidth={showMinWidth}>
                    {badge}
                    <MenuPanel menuItems={enhancedDashboardItems} 
                        selectedItemId={sidePanelItemId}
                        onItemSelected={(value) => onSidePanelItemChanged(value)}
                        showMinWidth = {showMinWidth}
                    />
                </SidePanel>
            </Box>
        </StickyBox>
    )
}

function Popover({handleClose, open, linkRef, placement, children}) {
    const selfRef = useRef(null)
    const handleClickOutside = (event) =>  {
        if (selfRef && selfRef.current && !selfRef.current.contains(event.target)) {
          handleClose()
        }
      }
    React.useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside, true)
        return () => window.removeEventListener('mousedown', handleClickOutside, true)
      },[])
    return (
        <Popper
            disablePortal={false}
            open={open}
            anchorEl={linkRef?.current ?? null}
            placement={placement}>
            <Box ref={selfRef}>
                {children}
            </Box>
        </Popper>
    )
}