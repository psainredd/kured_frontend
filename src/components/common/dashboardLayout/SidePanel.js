import * as React from 'react';
import { Box, Card, CardContent, Collapse, Stack, Typography } from '@mui/material'
import { KuredStyledToggleButton } from '@/widgets/Buttons';
import { primaryThemeColor } from '@/widgets/Color';
import { useTheme } from 'styled-components';
import { KuredTooltip } from '@/widgets/ToolTip';
import { KeyboardArrowDown, KeyboardArrowUp, Remove } from '@mui/icons-material';

export function MenuPanel ({selectedItemId, onItemSelected, menuItems, showMinWidth = false}) {
    const menuData = [...menuItems];
    const theme = useTheme();
    return (
        <Stack>
            {menuData.map((data) => (
                data.childMenuItems ? 
                    <MenuItemWithChildren data={data} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={onItemSelected}/> :
                    <MenuItem data={data} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={onItemSelected}/>
            ))}
        </Stack>
    )
}

function MenuItem({data, showMinWidth, selectedItemId, onStateChange, isChild = false, isParent = false, endIcon}) {
    return (
        <KuredTooltip title={data.name} placement="left" value={data.name}>
            <KuredStyledToggleButton sx={{ px:showMinWidth ? 0: 'auto', justifyContent:`${showMinWidth? 'center': 'left'}`}}
                disableFocusRipple disableRipple disableTouchRipple
                value={data.id} 
                selected={selectedItemId == data.id} 
                onChange={() => onStateChange(data.id)}
                href={`#${isParent?"":data.id}`}>
                <Stack direction={'row'}  key={data.name} justifyContent={showMinWidth?'center':'space-between'} sx={{width:1}}>
                    <Stack direction='row'  alignItems={'center'} justifyContent={'center'} spacing={showMinWidth?0:1} sx={{px: showMinWidth ? 0:2, py:1/3}}>
                        <Typography sx={{display:'inline-flex',  verticalAlign: 'center', color: 'inherit', fontSize:'inherit', fontWeight: 'inherit'}}>
                            {isChild ? <Remove sx={{fontSize:(showMinWidth? 10:14)}}/>: data.icon}
                        </Typography>
                        <Typography sx={{display:'inline-flex',  verticalAlign: 'center', color: 'inherit', fontSize:'inherit', fontWeight: 'inherit'}}>
                            {!showMinWidth && data.name}
                        </Typography>
                        
                    </Stack>
                    {showMinWidth?<></>:endIcon}
                </Stack>    
            </KuredStyledToggleButton>
        </KuredTooltip>
    )
}

function MenuItemWithChildren({data, showMinWidth, selectedItemId, onStateChange}) {
    const currentItemSelected = selectedItemId == data.id || data.childMenuItems.filter(m => m.id == selectedItemId).length == 1
    const [showChildren, setShowChildren] = React.useState(currentItemSelected);
    
    return (
        <Stack>
            <MenuItem 
                data={data} 
                showMinWidth={showMinWidth} 
                selectedItemId={selectedItemId} 
                onStateChange={(id) => setShowChildren(!showChildren)} 
                isParent={true}
                endIcon={showChildren ? <KeyboardArrowUp sx={{fontSize:18, mt:.5}}/> :<KeyboardArrowDown sx={{fontSize:18, mt:.5}}/>}
                />
            <Collapse in={showChildren}>
                <Box sx={{ml:2}}>
                {data.childMenuItems.map(child => (
                        <MenuItem data={child} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={onStateChange} isChild={true}/>
                ))}
                </Box>
            </Collapse>
        </Stack>
    )
}

export default function SidePanel ({children, showMinWidth = false,...props}) {
    return (
        <Card sx={{height:{md:`calc(100vh - 32px)`, xs:'100vh'}, backgroundColor: primaryThemeColor, overflow: 'scroll', scrollbarWidth:'thin'}}>
            <CardContent sx={{px: '0 !important'}}>
                {children}
            </CardContent>
        </Card>
    )
}