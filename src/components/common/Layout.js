import { Box, Stack } from "@mui/material";
import Head from "next/head";
import FooterSection from "./Footer";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { HiatusContext } from "@/pages/_app";
import { getSavedLoggedInUser, useUserContext } from "@/userContext";
import { useEffect } from "react";
import LoaderGIF from "@/widgets/LoaderGIF";
import { useState } from "react";

export function AnonymousUserPageLayout ({title, children, bodysx}) {
  const {loggedInUser, gotUserFromRemote} = useUserContext();
  const onHiatus = useContext(HiatusContext);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = getSavedLoggedInUser()

    if (savedUser) {
      history.replaceState(null, '', '/home')
      window.open('/home', '_self')
      return;
    }
    
    if (gotUserFromRemote) {
      setLoading(false)
    }
  }, [loggedInUser, isLoading, gotUserFromRemote])
  
  return (
     <PageLayout title={title} longFormFooter={true} bodysx={bodysx} isLoading = {isLoading}>
        { onHiatus && 
          <Stack justifyContent={'center'} alignItems={'center'} sx={{width:1, position:'absolute', top:0, left:0, paddingY:1, 
            backgroundColor:red[900], color:'#FFF'}}>
            We are on a hiatus right now. We will be back soon.
          </Stack>
        }
        {children}
     </PageLayout>
    )
}

function PageLayout ({title, children, bodysx, longFormFooter, isLoading = true, showFooter = true}) {
  if (isLoading) {
    return (
      <LoaderGIF/>
    )
  }
  return (
     <Box sx={{width:'100%'}}>
      {title && 
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      }
      <Stack sx={{...bodysx}}>
        {children}
      </Stack>
      {showFooter && <FooterSection longForm={longFormFooter}/>}
    </Box>
  )
}

export function LoggedInUserPageLayout({title, bodysx, children, showFooter = false}) {
  const {loggedInUser, gotUserFromRemote} = useUserContext(); 
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = getSavedLoggedInUser()
    
    if (savedUser) {
      setLoading(false)
    } else if (gotUserFromRemote) {
      window.open('/', '_self')
    }
  
  }, [loggedInUser, isLoading, gotUserFromRemote])

  return (
    <PageLayout title={title} longFormFooter={false} bodysx={bodysx} isLoading = {isLoading} showFooter={showFooter}>
        {children}  
     </PageLayout>
  )
}