import { Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export function Label({value, sx, isRequired = false}) {
    return (
      <Stack direction={'row'}>
        <Box sx={{fontSize:14, fontWeight:600, ...sx}}>
          {value}
        </Box>
        {isRequired && <Typography sx={{color:red[700], fontSize:10}}>*</Typography>}
      </Stack>
    )
}

export function FormItem({direction='row', label, children, spacing={xs:1, md:2}}) {
    const isRowAligned = direction == 'row';
    return (
      <Stack direction={{xs:'column', md:direction}} justifyContent={{xs:'space-around', md:isRowAligned?'space-between':'space-around'}} 
            alignItems={{xs:'flex-start', md:isRowAligned?'center':'flex-start'}} spacing={spacing}>
        <Label value={label}/>
        {children}
      </Stack>
    )
}