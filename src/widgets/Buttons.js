import * as React from 'react';
import { styled } from '@mui/system';
import { Button, IconButton, ToggleButton } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PrintIcon from '@mui/icons-material/Print';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { blue, green, red } from '@mui/material/colors';
import { KuredTooltip } from './ToolTip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ArrowForward } from '@mui/icons-material';

export const KuredOutlinedSecondaryButton = styled(Button)( {
    fontSize:15,
    fontWeight:500,
    color:'#09e5ab',
    border: '2px solid',
    borderColor: '#09e5ab',
    borderBlockWidth: 2,
    '&:hover' :{
        color:'#FFFFFF',
        background:'#09e5ab',
        border: 'none'
    },
    '&:focus' :{
        color:'#FFFFFF',
        background:'#09e5ab',
        border: 'none'
    }
});

export const KuredPrimaryButton = styled(Button)({
    fontSize:13,
    fontWeight:500,
    border: '2px solid',
    borderColor: '#00d0f1',
    color:'#FFFFFF',
    backgroundColor:'#00d0f1',
    '&:hover' :{
        color:'#00d0f1',
        background:'#FFFFFF',
        border: '2px solid',
        borderColor: '#00d0f1',
        borderBlockWidth: 2,
    },
    '&:focus' :{
        color:'#00d0f1',
        background:'#FFFFFF',
        border: '2px solid',
        borderColor: '#00d0f1',
        borderBlockWidth: 2,
    }
});

export const KuredPrimaryOutlinedButton = styled(Button)( {
    fontSize:13,
    fontWeight:500,
    color:'#00d0f1',
    border: '2px solid',
    borderColor: '#00d0f1',
    borderBlockWidth: 2,
    '&:hover' :{
        color:'#FFFFFF',
        background:'#00d0f1',
        border: '2px solid',
        borderColor: '#00d0f1',
    },
    '&:focus' :{
        color:'#FFFFFF',
        background:'#00d0f1',
        border: '2px solid',
        borderColor: '#00d0f1',
    }
});

const KuredSecondaryButtonInternal = styled(Button)({
    fontSize:13,
    fontWeight:500,
    border: '2px solid',
    borderColor: '#09e5ab',
    color:'#FFFFFF',
    backgroundColor:'#09e5ab',
    '&:hover' :{
        color:'#09e5ab',
        background:'#FFFFFF',
        border: '2px solid',
        borderColor: '#09e5ab',
        borderBlockWidth: 2,
    },
    '&:focus' :{
        color:'#09e5ab',
        background:'#FFFFFF',
        border: '2px solid',
        borderColor: '#09e5ab',
        borderBlockWidth: 2,
    }
});

export function KuredSecondaryButton({children, sx, ...props}) {
    return (
        <KuredSecondaryButtonInternal sx={{...sx}} {...props} disableTouchRipple disableRipple disableFocusRipple>
            {children}
        </KuredSecondaryButtonInternal>
    )
}

const ButtonWithEffects = styled(Button)({
    textTransform:"none",
    background: 'none',
    '&:hover, &:active' : {
        marginLeft: '16px',
        transform: 'scale(1.05)',
        background:'none'
    },
    transition: 'margin .5s, transform .5s'
});

const ButtonWithMinimalEffects = styled(Button)({
    textTransform:"none",
    background: 'none',
    '&:hover, &:active' : {
        marginLeft: '4px',
        transform: 'scale(1.05)',
        background:'none'
    },
    transition: 'margin .3s, transform .3s'
});

export function KuredMenuItemWithEffects({children, sx, ...props}) {
    return (
        <ButtonWithEffects disableFocusRipple disableRipple disableTouchRipple {...props}
            sx={{...sx}}>
            {children}   
        </ButtonWithEffects>
    )
}

export function KuredMenuItemWithMinimalEffects({children, sx, destination='#', ...props}) {
    return (
        <ButtonWithMinimalEffects disableFocusRipple disableRipple disableTouchRipple {...props}
            sx={{...sx}} href={destination}>
            {children}   
        </ButtonWithMinimalEffects>
    )
}

export function SecondaryButton({children, ...props}) {
    return (
        <KuredSecondaryButton disableFocusRipple disableRipple disableTouchRipple {...props}>
            {children}
        </KuredSecondaryButton>
    )
}

export function LinkButton({children, sx, ...props}) {
    return (
        <Button {...props} disableRipple disableTouchRipple disableFocusRipple 
            sx={{
                padding: 0,
                m:0,
                textTransform: 'none',
                '&:hover, &:active': 
                {
                    background: 'none'
                },
                ...sx
            }}>
            {children}
        </Button>
    )
}

const ToggleBasicButton = styled(ToggleButton)(({theme}) =>({
    border: `none`,
    textTransform:"none",
    background:'none',
    color: theme.palette.text.primary,
    '&:hover, &:active': {
        background:'none'
    },
    '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#FFF'
    },
}))

const StyledToggleButton = styled(ToggleButton)({
    border: 'none',
    textTransform:"none",
    justifyContent: 'left',
    background:'none',
    '&:hover, &:active': {
        marginLeft: 16,
        transform: 'scale(1.05)',
        background:'none'
    },
    '&.Mui-selected, &.Mui-selected:hover': {
        background:'none'
    },
    transition: 'margin .5s, transform .5s',
})

const IRecommendToggleButtonInternal = styled(ToggleButton)({
    color: green[700],
    '&:hover, &:active, &.Mui-selected, &.Mui-selected:hover': {
        color: '#FFF',
        backgroundColor: green[700]
    },
    width: 'fit-content', 
    textTransform:'none',
    padding:'8px',
    borderRadius:25,
})

export function IRecommendToggleButton({children, sx, ...props}) {
    return (
        <IRecommendToggleButtonInternal disableRipple disableFocusRipple disableTouchRipple
                    {...props} sx={{...sx}}>
            {children}
        </IRecommendToggleButtonInternal>
    )
}


export function KuredToggleButtonWithEffects({children, sx, ...props}) {
    return (
        <StyledToggleButton disableFocusRipple disableRipple disableTouchRipple {...props} sx={{...sx}}>
            {children} 
        </StyledToggleButton>
    )
}

export function KuredToggleButton({children, sx, ...props}) {
    return (
        <ToggleBasicButton disableFocusRipple disableRipple disableTouchRipple {...props} sx={{...sx}}>
            {children}
        </ToggleBasicButton>
    )
}

function GenericDataGridButton({label, onClickHandler, color, backgroundColor, icon, iconButtonIcon, showLabel=false}) {
    if (showLabel) {
        return (
            <Button startIcon={icon}  
                    sx={{
                        textTransform: 'none', 
                        color:{color}, 
                        backgroundColor: {backgroundColor},
                    }} 
                    disableFocusRipple disableRipple
                    onClick={(e) => onClickHandler(e)}>
                {label}
            </Button>
        )
    }
    return(
        <KuredTooltip title={label}>
            <IconButton disableFocusRipple disableRipple 
                    sx={{
                        borderRadius: 1,
                        textTransform: 'none', 
                        color: color,
                        backgroundColor: {backgroundColor},
                        p:1
                    }} 
                    onClick={(e) => onClickHandler(e)}>
                {iconButtonIcon}
            </IconButton>
        </KuredTooltip>
    );

}

export function DataGridPrintButton({printUrl, showLabel = false}) {
    const clickHandler = (event) => {
        var newWin = window.open(printUrl, '_blank');
        newWin.focus();
        setTimeout( 
            function() {
                newWin.print();
            }, 100);
    }
    return (
        <GenericDataGridButton
            label = 'Print'
            onClickHandler ={(e) => clickHandler()}
            backgroundColor = 'rgba(17, 148, 247, 0.12)'
            color = {blue[700]}
            icon = {<PrintOutlinedIcon/>}
            iconButtonIcon={<PrintIcon/>}
            showLabel ={showLabel}/>
    )
}

export function DataGridViewButton({url, showLabel=false}) {
    const clickHandler = () => document.open(url, '_blank', 'noreferrer noopener');
    return (
        <GenericDataGridButton
            label = 'View'
            onClickHandler ={(e) => clickHandler()}
            backgroundColor = 'rgba(2, 182, 179,0.12)'
            color = {'#1db9aa'}
            icon = {<VisibilityOutlinedIcon/>}
            iconButtonIcon={<VisibilityIcon/>}
            showLabel ={showLabel}/>
    )
}

export function DataGridAcceptButton({onAccept, showLabel=false}) {
    return (
        <GenericDataGridButton
            label = 'Accept'
            onClickHandler ={(e) => onAccept()}
            backgroundColor = 'rgba(15, 183, 107,0.12)'
            color = {green[700]}
            icon = {<DoneIcon/>}
            iconButtonIcon={<CheckCircleIcon/>}
            showLabel ={showLabel}/>
    )
}

export function DataGridCancelButton({onCancel, showLabel=false}) {
    return (
        <GenericDataGridButton
            label = 'Cancel'
            onClickHandler ={(e) => onCancel()}
            backgroundColor = 'rgba(242, 17, 54,0.12)'
            color = {red[700]}
            icon = {<CloseIcon/>}
            iconButtonIcon={<CancelIcon/>}
            showLabel ={showLabel}/>
    )
}

export function EditButton({label="Edit", onClick}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple startIcon={<EditIcon fontSize='16px !important'/>} 
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, background:'none',}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function AddButton({label="Add", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple startIcon={<AddCircleIcon fontSize='16px !important'/>} 
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, background:'none', ...sx}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function ReplyButton({label="Reply", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple startIcon={<ReplyIcon fontSize='16px !important'/>} {...props}
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, background:'none', ...sx}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function ReplyButtonWithoutIcon({label="Reply", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple {...props}
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, background:'none', ...sx}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function CancelButton({label="Cancel", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple startIcon={<CancelIcon sx={{fontSize:'16px !important', mb:.3}}/>} {...props}
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, ...sx, background:'none', color: red[500]}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function CancelButtonWithoutIcon({label="Cancel", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple {...props}
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, ...sx, background:'none', color: red[500]}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function SendButton({label="Send", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple startIcon={<SendIcon sx={{fontSize: '16px !important'}}/>} {...props}
            sx={{textTransform: 'none', fontSize: 16, fontWeight: 500, py:0, ...sx, background:'none', color: red[500]}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function ShowMoreReplies({label="Show More Replies", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple endIcon={<KeyboardArrowDownIcon sx={{fontSize: '16px !important'}}/>} {...props}
            sx={{textTransform: 'none', fontSize: 14, fontWeight: 500, py:0, ...sx, background:'none',}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}

export function HideReplies({label="Hide Replies", onClick, sx, ...props}) {
    return (
        <Button disableTouchRipple disableFocusRipple disableRipple endIcon={<KeyboardArrowUpIcon sx={{fontSize: '16px !important'}}/>} {...props}
            sx={{textTransform: 'none', fontSize: 14, fontWeight: 500, py:0, ...sx, background:'none',}} onClick={() => onClick()}>
            {label}
        </Button>
    )
}


export function DeleteIconButton({onClick, sx, ...props}) {
    return (
        <IconButton disableFocusRipple disableRipple 
                sx={{
                    borderRadius: 1,
                    textTransform: 'none', 
                    color: '#FFF',
                    backgroundColor:red[700],
                    width: 'fit-content',
                    height: 'fit-content',
                    border: `1px solid ${red[700]}`,
                    p:1,
                    '&:hover, &:active': {
                        color:red[700],
                        backgroundColor: '#FFF',
                        border: `1px solid ${red[700]}`
                    },
                    ...sx,
                }}
                {...props} 
                onClick={(e) => onClick(e)}>
            <DeleteIcon/>
        </IconButton>
    )
}

export function AddIconButton({onClick, sx, ...props}) {
    return (
        <IconButton disableFocusRipple disableRipple 
                sx={{
                    borderRadius: 1,
                    textTransform: 'none', 
                    color: '#FFF',
                    backgroundColor:'secondary.main',
                    width: 'fit-content',
                    height: 'fit-content',
                    border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                    p:1,
                    '&:hover, &:active': {
                        color:'secondary.main',
                        backgroundColor: '#FFF',
                        border: (theme) => `2px solid ${theme.palette.secondary.main}`
                    },
                    '&.Mui-disabled': {
                        color: '#FFF',
                        backgroundColor:'secondary.main',
                        opacity: .4
                    },
                    ...sx,
                }} 
                {...props}
                onClick={(e) => onClick(e)}>
            <AddRoundedIcon/>
        </IconButton>
    )
}

export function KuredButton({onClick = (e) => {}, onMouseEnter = (e) => {}, sx, label='Sign Up', ...props}) {
    const [mouseOver, setMouseOver] = React.useState(false);
    const arrowForwardIcon = mouseOver? 
                              <ArrowForward sx= {{fontSize:'12px !important'}}/> :
                                <ArrowForwardIosIcon sx={{fontSize:'10px !important'}}/>;

    const onMouseOver = (e) => {
        setMouseOver(true);
        onMouseEnter(e);
    }

    const onMouseLeave = (e) => {
        setMouseOver(false);
    }
    
    return (
        <Button disableFocusRipple disableRipple
            endIcon={arrowForwardIcon}
            sx={{
                borderRadius: `20px !important`,
                textTransform: 'none',
                backgroundColor: '#FFFFFF !important',
                width: 'fit-content',
                height: 'fit-content',
                paddingX: `16px !important`,
                paddingY:`4px !important`,
                fontSize: 13,
                fontWeight: 500,
                '&:hover, &:active': 
                {
                  background: 'none !important',
                  color:'#FFF  !important'
                },
                ...sx
            }}
            {...props}
            onClick={(e) => onClick(e)}
            onMouseLeave={(e) => onMouseLeave(e)}
            onMouseEnter={(e) => onMouseOver(e)}>
            {label}
        </Button>
    )
}

export const StyledButton = styled(KuredMenuItemWithEffects)({
    color:'#FFFFFF',
    fontWeight: 400,
    fontSize: '13px',
    '&:hover, &:active' : {
        color:'#FFFFFF',
    },
  })