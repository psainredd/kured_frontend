import { Box, Stack } from '@mui/material';
import { HeaderBand } from './HeaderBand';

export default function TopSection({children}) {
    return (
        <Box sx={{height:{lg:'100vh', md:'100%'}}}>
            <Box
                sx={{
                    backgroundColor:'#F0F0F0',
                    transform: 'skewY(-10deg)',
                    position: 'absolute',
                    top: -150,
                    height: 550,
                    width: '100%',
                    zIndex: -10
                }}>
            </Box>
            <Stack sx={{width: 1}} justifyContent='space-between' alignItems='center'>
                <HeaderBand darkTheme={false}/>
                {children}
            </Stack>
        </Box>
    )
}