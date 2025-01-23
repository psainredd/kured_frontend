import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Dialog, DialogContent,  Paper, Slide } from '@mui/material';

const StyledDialog = styled(Dialog) ({
    position: 'absolute',
    right: 'initial',
    bottom: 'initial',
    top: 'initial',
    left: 'initial',
    width: 300,
    marginTop: '0.7rem'
});

function PaperComponent(props) {
    return (
        <Paper {...props} 
            sx={{m:'0px !important', 
                width: '100% !important',  
                boxSizing: 'border-box', 
                overflowY:'initial !important',
                borderRadius: 2,
                '&.MuiDialog-paper':{ 
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: 0,
                        height: 0,
                        bottom: '100%',
                        left: '1em', // offset should move with padding of parent
                        border: '.75rem solid transparent',   
                        borderTop: 'none',
                        borderBottomColor: '#fff',
                        filter: 'drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))'
                    }}
        }}/>
    )
}

export function KuredDialog({open, handleCancel, containerId, children, hideBackdrop=false, ...props}) {
    return (
        <StyledDialog   onClose={handleCancel} 
                        open={open} 
                        fullWidth 
                        hideBackdrop={hideBackdrop}
                        onBackdropClick={handleCancel}
                        PaperComponent={PaperComponent}
                        container={()=> document.getElementById(`${containerId}`)}
                        {...props}>
            <DialogContent>
                {children}
            </DialogContent>
        </StyledDialog>
    )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export function DialogWithTransition({children, open, onClose, dialogStyles}) {
    return (
        <Dialog open={open} onClose={() => onClose()} TransitionComponent={Transition}>
            <DialogContent sx={{...dialogStyles}}>
                {children}
            </DialogContent>
        </Dialog>
    )
}