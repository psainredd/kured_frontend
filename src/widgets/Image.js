import { Box, CardMedia, Stack } from "@mui/material";

export function MaskedImage({imgSrc, filterColor, children, imageWidth=.8, imageHeight=1}) {
    return(
      <Box sx={{
        display:{md:'block', xs:'none'}, 
        overflow:'hidden',
        position:'relative',
        borderRadius:3,
        background:'#FFF',  
        width: .8,
        boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important',
        height:1,
        marginTop:4,
        }}>
          <CardMedia src={imgSrc} component='img' sx={{width:1, height:1, objectFit:'fill', borderRadius:3}}/>
        <Stack sx={{
            top:0, 
            left:0, 
            position:'absolute', 
            boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important',
            height:1,
            width:1,
            color:'#FFF',
            borderRadius:3, 
            background: `linear-gradient(to bottom, #FFFFFF00, ${filterColor}F0 80%)`}}
          justifyContent={'flex-end'} alignItems={'center'} spacing={0}>
          {children}
        </Stack>
      </Box>
    )
  }