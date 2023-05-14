import Box from '@mui/material/Box';
import { green, lightBlue} from '@mui/material/colors';
import { ArrowRight, CheckCircle } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { CheckIcon } from '@/widgets/Icons';

export function CheckItem({iconColor=`${green[700]}`, children}) {
    return(
        <Stack direction='row' spacing={1} alignItems={'center'}>
            <CheckIcon sx={{color:`${iconColor}`, fontSize:14}}/>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export function PointItem({iconColor=`${lightBlue[300]}`,children}) {
    return (
        <Stack direction='row' spacing={1} alignItems={'center'}>
            <ArrowRight sx={{color:`${iconColor}`, fontSize:14}}/>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export function CheckCircleItem({iconColor=`${green[700]}`, children}) {
    return(
        <Stack direction='row' spacing={1} alignItems={'center'}>
            <CheckCircle sx={{color:`${iconColor}`, fontSize:14}}/>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}