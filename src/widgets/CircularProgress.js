import * as React from 'react'
import { Box, CircularProgress, circularProgressClasses } from '@mui/material'

export function KuredCircularProgress({value = 75, color, thickness = 3, size=80,  containerStyle, progressStyles, children, ...props}) {
    const [percentage, setPercentage] = React.useState(0);
    React.useEffect(() => { setTimeout(()=>{setPercentage(value)}, 500)}, [value])
    return (
        <Box sx={{ position: 'relative', alignItems: 'center', justifyContent: 'center', ...containerStyle}}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) => theme.palette.grey[200],
                }}
                size={size}
                thickness={thickness}
                {...props}
                value={100}
            />
            <CircularProgress
                variant='determinate'
                value={percentage}
                disableShrink
                sx={{
                    color: `${color}`,
                    position: 'absolute',
                    transform:'rotate(-180deg) !important',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    ...progressStyles
                }}
                size={size}
                thickness={thickness}
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb:1
                }}
            >
                {children}
            </Box>
        </Box>
    );
  }