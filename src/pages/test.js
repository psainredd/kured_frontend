import { MenuItems } from '@/components/dashboard/DashboardLayout';
import { KuredStyledToggleButton } from '@/widgets/Buttons';
import { primaryThemeColor } from '@/widgets/Color';
import { KuredTooltip } from '@/widgets/ToolTip';
import { KeyboardArrowRight, Remove, SubdirectoryArrowRight } from '@mui/icons-material';
import { Box, Collapse, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function Home() {
    const [showMinWidth, setShowMinWidth] = useState(true);
    const [selectedItemId, setSelectedItemId] = useState(null)
    const dashboardItems = MenuItems.map(mi => mi(() => setShowMinWidth(!showMinWidth)))
    return (
        <Stack sx={{width:50, backgroundColor:primaryThemeColor}} key={data.id}>
            {
                dashboardItems.map((data) => (
                    data.childMenuItems ? 
                    <MenuItemWithChildren key= {data.id} data={data} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={setSelectedItemId}/> :
                    <MenuItem key= {data.id} data={data} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={setSelectedItemId}/>))
            }
            
        </Stack>
    )
}

function MenuItem({data, showMinWidth, selectedItemId, onStateChange, isChild = false}) {
    return (
        <KuredTooltip title={data.name} placement="left" value={data.name}>
            <KuredStyledToggleButton sx={{ px:showMinWidth ? 0: 'auto', justifyContent:`${showMinWidth? 'center': 'left'}`}}
                disableFocusRipple disableRipple disableTouchRipple
                value={data.id} 
                selected={selectedItemId == data.id} 
                onChange={() => onStateChange(data.id)}
                href={`#${data.id}`}>
                <Stack direction='row'  alignItems={'center'} justifyContent={'center'} spacing={showMinWidth?0:1} sx={{px: showMinWidth ? 0:2, py:1/3}}>
                    <Typography sx={{display:'inline-flex',  verticalAlign: 'center', color: 'inherit', fontSize:'inherit', fontWeight: 'inherit'}}>
                        {isChild ? <Remove sx={{fontSize:(showMinWidth? 16:'auto')}}/>: data.icon}
                    </Typography>
                    <Typography sx={{display:'inline-flex',  verticalAlign: 'center', color: 'inherit', fontSize:'inherit', fontWeight: 'inherit'}}>
                        {!showMinWidth && data.name}
                    </Typography>
                </Stack>
            </KuredStyledToggleButton>
        </KuredTooltip>
    )
}

function MenuItemWithChildren({data, showMinWidth, selectedItemId, onStateChange}) {
    const [showChildren, setShowChildren] = useState(true);
    
    return (
        <Stack>
            <MenuItem data={data} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={(id) => setShowChildren(!showChildren)}/>
            <Collapse in={showChildren}>
                <Box sx={{ml:(showMinWidth?2:2)}}>
                {data.childMenuItems.map(child => (
                        <MenuItem key={child.id} data={child} showMinWidth={showMinWidth} selectedItemId={selectedItemId} onStateChange={onStateChange} isChild={true}/>
                ))}
                </Box>
            </Collapse>
        </Stack>
    )
}