import { Box, Stack } from "@mui/material";
import Head from "next/head";
import FooterSection from "./Footer";

export default function PageLayout({title, children}) {
  return (
     <Box sx={{width:'100%'}}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack>
        {children}
        <FooterSection/>
      </Stack>
    </Box>
    )
}