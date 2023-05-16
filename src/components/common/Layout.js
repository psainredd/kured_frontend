import { Box, Stack } from "@mui/material";
import Head from "next/head";
import FooterSection from "./Footer";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { HiatusContext } from "@/pages/_app";

export default function PageLayout({title, children, bodysx}) {
  const onHiatus = useContext(HiatusContext);
  return (
     <Box sx={{width:'100%'}}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack sx={{...bodysx}}>
        { onHiatus && 
          <Stack justifyContent={'center'} alignItems={'center'} sx={{width:1, position:'absolute', top:0, left:0, paddingY:1, backgroundColor:red[900], color:'#FFF'}}>
            We are on a hiatus right now. We will be back soon.
          </Stack>
        }
        {children}
        <FooterSection/>
      </Stack>
    </Box>
    )
}