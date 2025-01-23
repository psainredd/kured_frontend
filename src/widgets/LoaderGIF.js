import * as React from 'react';
import Head from 'next/head';
import { Box, Stack } from '@mui/material';

export default function LoaderGIF() {
    return(
      <Box sx={{width:1, height:'100vh' }}>
        <Head>
          <title>Kured</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style>
            {`
              .loading-spinner {
                animation: rotate 1.5s linear infinite;
              }
              
              @keyframes rotate {
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
        </Head>
        <Stack sx={{width:1, height:1}} justifyContent='center' alignItems='center'>
          {<img src={'/kured_symbol.svg'} width='50px' className='loading-spinner'/>}
        </Stack>
      </Box>
    )
  }