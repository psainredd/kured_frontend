import { ListItemText, MenuItem, MenuList, Paper, Stack } from '@mui/material';
import * as React from 'react';
import { Box } from '@mui/system';
import PopperMenu from '@/widgets/DropDownMenu';

export default function PopOverIconMenu ({
                            iconButton, 
                            children, 
                            showMenuOnMouseOver = false, 
                            position = 'bottom-end', 
                            showArrow = true, 
                            arrowOptions = {},
                            onStateChange = () => {}
                        }) {

    return (
        <PopperIconMenu 
            label ={iconButton} 
            showMenuOnMouseOver={showMenuOnMouseOver} 
            position={position}
            onStateChange={onStateChange}
            showArrow={showArrow}
        >
            <IconMenuModalWindow showArrow={showArrow} arrowOptions={arrowOptions}>
                {children}
            </IconMenuModalWindow>
        </PopperIconMenu>
    )
}

function PopperIconMenu({label, children, onStateChange = () => {}, sx, showMenuOnMouseOver = true, position='bottom'}) {
    const fontColor = 'text.primary';
    return (
      <PopperMenu label={label} sx={{...fontColor, fontSize:14, ...sx}} onStateChange={onStateChange} 
                    showOnMouseEnter={showMenuOnMouseOver} placement={position} hideOnClickAway={true}>
        {children}
      </PopperMenu>
    );
}
  
export function IconMenuModalWindow({children, showArrow = false, arrowOptions={}}) {
    const style = { 
        maxWidth: '100%', 
        minWidth: {xs: '200px', md:'250px'},
        borderRadius:2, 
        backgroundColor: 'white', 
        paddingx: 3,
        boxShadow: '1px 6px 5px rgb(0 0 0 / 20%) !important'
    }

    return (
        <>
            { showArrow && 
                <Box component='span' 
                    sx={{
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            bottom: arrowOptions.bottom ?? "96%",
                            left: arrowOptions.left ??{md:"80%", xs:'75%'}, 
                            border: '.75rem solid transparent',   
                            borderTop: 'none',
                            borderBottomColor: '#fff',
                            filter: 'drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))'
                        }
                    }}
                />
            }
            <Paper sx={{...style, mt:1}}>
                <MenuList>
                { children }
                </MenuList>
            </Paper>
        </>
    )
}
  
export function IconMenuItem({onClick, children}){
    return (
        <MenuItem onClick={onClick} disableRipple disableTouchRipple>
            <ListItemText>
                <Stack direction='row' spacing={1} alignItems={'center'}>
                    {children}
                </Stack>
            </ListItemText> 
        </MenuItem>
    )
}