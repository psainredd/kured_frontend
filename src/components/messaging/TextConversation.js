import { Box, Stack } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const leftDirection = 'left'
export const rightDirection = 'right'

export function TextConversation({children}) {
  return (
    <Stack sx={{width:1}} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={2} sx={{userSelect: 'none', overflow:'hidden', width:'max(40%, 275px)', height: '500px', padding:3, paddingBottom:3, backgroundColor:'#F9F9F9', borderRadius:5, boxShadow:'1px 6px 14px rgb(0 0 0 / 20%)', border:5, borderColor:grey[400]}}>
        {children}
      </Stack>
    </Stack>
  )
}

export function TextMessage({
  children, 
  direction,
  showAuxStyles=true
}) {
  const isLeft = direction == leftDirection;
  const backgroundColor = isLeft ? blue[700] : 'white';
  const color = isLeft? '#FFF' : '#000'
  const beforeStyle = {
    '&::before':{
      position: 'absolute',
      top:0,
      left:'-10px',
      rotate:'270deg',
      border: `10px solid transparent`,
      borderBottomColor: blue[700],
      borderRightColor: blue[700],
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
      backgroundColor:backgroundColor, 
      borderRadius:2,
      paddingX:2,
      paddingY:2,
      fontSize:15,
      color:color,
      maxWidth:1,
      ...auxStyle      
    };
  return (
    <Stack sx={{position:'relative'}} direction='row' justifyContent={isLeft ? 'flex-start': 'flex-end'}>
      <Box sx={{...style}}>
        {children}
      </Box>
    </Stack>
  )
}