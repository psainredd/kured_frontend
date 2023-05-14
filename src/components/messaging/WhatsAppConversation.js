import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { grey, lightBlue } from '@mui/material/colors';
import { DoneAllRounded, DoneRounded } from '@mui/icons-material';

const whatsappGreen = '#dcf8c6'
const whatsappBackground = '#ece5dd'
export const leftDirection = 'left';
export const rightDirection = 'right';

export default function WhatsAppConversation({height = 500, width = 'max(50%, 500px)',children}) {
  return(
    <Stack sx={{width:1, marginY:5}} justifyContent={'center'} alignItems={'center'}>
        <Stack spacing={2} sx={{userSelect: 'none', overflow:'hidden', width:{width}, height:{height}, padding:3, backgroundColor:whatsappBackground, borderRadius:3, boxShadow:'1px 6px 14px rgb(0 0 0 / 20%)'}}>
            {children}
        </Stack>
    </Stack>
  )
}

export function WhatsAppMessage({
  children, 
  direction,
  showReadReceipt = false, 
  isBlueTicked = false, 
  isReceived = false,
  showAuxStyles = true,
  maxWidth = '60%',
  centerAlignText = false,
  sx
}) {
  const isLeft = direction == leftDirection;
  const backgroundColor = isLeft ? whatsappGreen : 'white';
  const beforeStyle = {
    '&::before':{
      position: 'absolute',
      top:0,
      left:'-10px',
      rotate:'270deg',
      border: `10px solid transparent`,
      borderBottomColor: whatsappGreen,
      borderRightColor: whatsappGreen,
      content:'""'
    }
  }
  const afterStyle = {
    '&::before':{
      position: 'absolute',
      left:'calc(100% - 10px)',
      top:0,
      rotate:'180deg',
      border: `10px solid transparent`,
      borderBottomColor: 'white',
      borderRightColor: 'white',
      content:'""'
    }
  }
  const auxStyle = showAuxStyles ? (isLeft ? beforeStyle : afterStyle) : {};
  const style =  
    {
      ...sx,
      backgroundColor:backgroundColor, 
      borderRadius:2,
      paddingTop:2,
      paddingBottom: showReadReceipt ? 1 : 2, 
      paddingRight: showReadReceipt ? 1 : 2,
      paddingLeft:2,
      color:'#000',
      maxWidth:{maxWidth},
      boxShadow:'1px 6px 14px rgb(0 0 0 / 20%)',
      ...auxStyle
    };
  const readReceiptIcon = isReceived ? <DoneAllRounded sx={{fontSize:'15px', color: isBlueTicked ? lightBlue[500]: grey[500]}}/>  
                                     : <DoneRounded sx={{fontSize:'15px', color:grey[500]}}/> 
  const justifyContent = centerAlignText ? 'center' : 'space-between'
  return (
    <Stack sx={{position:'relative'}} direction='row' justifyContent={isLeft ? 'flex-start': 'flex-end'}>
      <Box sx={{...style}}>
        <Stack direction={'row'} justifyContent={justifyContent} spacing={.5} alignItems={'space-between'}>
          <Box sx={{paddingBottom: showReadReceipt ? 1 : 0,}}>
            {children}
          </Box>
          {
            showReadReceipt &&
            <Stack justifyContent={'flex-end'}>
              {readReceiptIcon}
            </Stack>
          }
        </Stack>
      </Box>
    </Stack>
  )
}