import { Box, Stack } from "@mui/material";

export function Label({value}) {
    return (
      <Box sx={{fontSize:14, fontWeight:600}}>
        {value}
      </Box>
    )
}

export function FormItem({direction='row', label, children}) {
    const isRowAligned = direction == 'row';
    return (
      <Stack direction={{xs:'column', md:direction}} justifyContent={{xs:'space-around', md:isRowAligned?'space-between':'space-around'}} 
            alignItems={{xs:'flex-start', md:isRowAligned?'center':'flex-start'}} spacing={{xs:1, md:2}}>
        <Label value={label}/>
        {children}
      </Stack>
    )
}