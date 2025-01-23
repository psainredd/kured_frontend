import { Box, Stack } from '@mui/material';
import AnonymousUserHeaderBand from './AnonymousUserHeaderBand';

export default function AnonymousUserTopSection({children, fullScreenHeight=true}) {
    return (
        <Box sx={{height:{lg:fullScreenHeight?'100vh':'100%', md:'100%'}}}>
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
                <AnonymousUserHeaderBand darkTheme={false}/>
                {children}
            </Stack>
        </Box>
    )
}