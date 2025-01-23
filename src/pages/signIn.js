import FormSidePanel from "@/components/common/FormSidePanel";
import { AnonymousUserPageLayout } from "@/components/common/Layout";
import AnonymousUserTopSection from "@/components/common/AnonymousUserTopSection";
import React from "react";
import SignInForm from "../components/signIn/SignInForm";

export default function SignIn() {
    return (
        <AnonymousUserPageLayout title={'Kured | Sign In'} bodysx={{height:'100vh'}}>
            <AnonymousUserTopSection fullScreenHeight={false}>
                <TopSectionDetails/>
            </AnonymousUserTopSection>
        </AnonymousUserPageLayout>
    )
}

function TopSectionDetails() {
    const title = 'Sign into Kured portal'
    const actionSubtitle = "Don't have a Kured account?"
    const actionButtonLabel = 'Contact Us'
    const actionButtonOnClick = (e) => {window.open('/contactUs','_self')}
    return (
      <FormSidePanel title={title} actionSubtitle={actionSubtitle} actionButtonLabel={actionButtonLabel} actionButtonOnClick={actionButtonOnClick}>
        <RightSection/>
      </FormSidePanel>
    )
  }
  
function RightSection() {
    const [destination, setDestination] = React.useState(null);
    const changeWidget = (newDestination) => {
        setDestination(newDestination)
    }
    return(
        <>
            { destination ?? <SignInForm changeWidget={changeWidget}/> }
    
        </>
    )
}