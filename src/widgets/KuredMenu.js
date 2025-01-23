import Menu from '@mui/material/Menu';
import { Link, MenuItem, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { primaryThemeColor } from './Color';
import { blue } from '@mui/material/colors';

export function KuredMenu({menuItems, label, sx, labelSx, heading, children, showPopUpPointer = true, showDirectionArrows = false, directionArrowStyles, onMenuItemClicked=()=>{}}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const headerRef = useRef(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e && headerRef?.current && headerRef.current.contains(e.target)) {
            return;
        }
        console.log('inside handleClose')
        setAnchorEl(null);
    };
    const onItemSelected = (value) => {
        onMenuItemClicked(value)
    } 
    const pointerStyles = (
        showPopUpPointer ? 
        {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        } : {}
    );
    const menuItemElements = children??(menuItems.map(menuItem => (
                                                    <MenuItem key={menuItem.value} onClick={() => onItemSelected(menuItem.value)}>
                                                        {menuItem.itemElement}
                                                    </MenuItem>
                                                ))) 
    return(
        <>
            <Link underline='none' href='javascript:' onClick={handleClick} sx={{paddingBottom:1, ...labelSx}}>
                <Stack direction='row' spacing={0} alignItems='center'>
                    {label}
                    {
                        showDirectionArrows && 
                        (open ? <ArrowDropUp sx={{...directionArrowStyles}}/> : <ArrowDropDown sx={{...directionArrowStyles}}/>)
                    }
                </Stack>
            </Link>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        '&:before':{...pointerStyles},
                        ...sx    
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {heading && <Typography ref={headerRef} sx={{letterSpacing:1, fontSize:11, my:1, px:2, textTransform: 'uppercase'}}>{heading}</Typography>}
                {...menuItemElements}
            </Menu>
        </>
    )
}

export function GetMenuItemsForArray (input, valueToElementConverter) {
    return input.map(val => ({
        value: val,
        itemElement: valueToElementConverter ? valueToElementConverter(val) : val
    }))
}