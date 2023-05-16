import FormSidePanel, { Form } from "@/components/common/FormSidePanel";
import PageLayout from "@/components/common/Layout";
import OnHiatusCard from "@/components/common/OnHiatusCard";
import TopSection from "@/components/common/TopSection";
import { Box, Link, Stack } from "@mui/material";
import React from "react";
import { HiatusContext } from "./_app";
import { FormItem } from "@/widgets/FormItem";
import { EmailId, InputField, PasswordWidget, PhoneNumber } from "@/widgets/Inputs";
import { blue, red } from "@mui/material/colors";
import { ValidateEmail, ValidateMobileNumer } from "@/util";
import { KuredButtonWithStartIcon } from "@/widgets/Buttons";

export default function SignIn() {
    return (
        <PageLayout title={'Kured | Sign In'} bodysx={{height:'100vh'}}>
            <TopSection fullScreenHeight={false}>
                <TopSectionDetails/>
            </TopSection>
        </PageLayout>
    )
}

function TopSectionDetails() {
    const title = 'Sign into Kured portal'
    const actionSubtitle = 'Want to create an account'
    const actionButtonLabel = 'Contact Us'
    const actionButtonOnClick = (e) => {window.open('/contactUs','_self')}
    return (
      <FormSidePanel title={title} actionSubtitle={actionSubtitle} actionButtonLabel={actionButtonLabel} actionButtonOnClick={actionButtonOnClick}>
        <RightSection/>
      </FormSidePanel>
    )
  }
  
function RightSection() {
  const [destination, setDestination] = React.useState(0);
  switch (destination) {
    case 0:
        return <SignInForm onFormSubmit={(value) => setDestination(value)}/>
    case 1:
        return <GetUserNameForm onFormSubmit={(value) => setDestination(value)}/>
    case 2:
        return <GetPasswordForm onFormSubmit={(value) => setDestination(value)}/>
    default:
        return <OnHiatusCard isSorry={true}/>
  }
}

function SignInForm({onFormSubmit}) {
    const [userName, setUserName] = React.useState('')
    const [userNameError, setUserNameError] = React.useState(false)
    const [userNameErrorText, setUserNameErrorText] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordErrorText, setPasswordErrorText] = React.useState('')

    const onSubmit =(event) => {
        var noErrors = true;
        if (!userName) {
            noErrors = false
            setUserNameError(true)
            setUserNameErrorText('Please enter user name')
        } else {
            setUserNameError(false)
            setUserNameErrorText('')
        }
        if (!password) {
            noErrors = false
            setPasswordError(true)
            setPasswordErrorText('Please enter password')
        } else {
            setPasswordError(false)
            setPasswordErrorText('')
        }
        if (noErrors) {
            onFormSubmit(10)
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={'Sign In'} onSubmit={(e) => onSubmit(e)}>
            <FormItem label='User Name' direction="column">
                <InputField sx={{width:1}} placeholder={'user name'} error={userNameError} value={userName} onChange={(value) => setUserName(value)} helperText={userNameErrorText}/>
            </FormItem>
            <FormItem label='Password' direction='column'>
                <PasswordWidget sx={{width:1}} placeholder={'password'} error={passwordError} value={password} onChange={(value) => setPassword(value)} helperText={passwordErrorText}/>
            </FormItem>
            <Stack spacing={2} justifyContent={'space-between'} direction={{md:'row', xs:'column'}}>
                <Link onClick={()=>onFormSubmit(1)} href='#' underline='none' sx={{color:blue[700], fontSize:14}}>
                    Forgot Username?
                </Link>
                <Link onClick={()=>onFormSubmit(2)} href='#' underline='none' sx={{color:blue[700], fontSize:14}}>
                    Forgot Password?
                </Link>
            </Stack>
        </Form>
    )
}

function GetUserNameForm({onFormSubmit}) {
    const [emailId, setEmailId] = React.useState('')
    const [emailError, setEmailError] = React.useState(false)
    const [emailErrorText, setEmailErrorText] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState(false)
    const [phoneNumberErrorText, setPhoneNumberErrorText] = React.useState('')

    const onSubmit =(event) => {
        var noErrors = true;
        if (!emailId || !ValidateEmail(emailId)) {
            noErrors = false
            setEmailError(true)
            setEmailErrorText('Please enter a valid Email Id')
        } else {
            setEmailError(false)
            setEmailErrorText('')
        }
        if (!phoneNumber || !ValidateMobileNumer(phoneNumber)) {
            noErrors = false
            setPhoneNumberError(true)
            setPhoneNumberErrorText('Please enter a valid phone number')
        } else {
            setPhoneNumberError(false)
            setPhoneNumberErrorText('')
        }
        if (noErrors) {
            onFormSubmit(10)
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={'Get Username'} onSubmit={(e) => onSubmit(e)}>
            <HeadingSection title={'Please provide following details'} topic={'Reset Password'} onBackPressed={(e) => onFormSubmit(0)}/>
            <FormItem label='Email Id' direction="column">
                <EmailId sx={{width:1}} error={emailError} value={emailId} helperText={emailErrorText} onChange={(value) => setEmailId(value)}/>
            </FormItem>
            <FormItem label='Phone Number' direction="column">
                <PhoneNumber sx={{width:1}} value={phoneNumber} error={phoneNumberError} helperText={phoneNumberErrorText} onChange={(value) => setPhoneNumber(value)}/>
            </FormItem>
        </Form>
    )
}

function GetPasswordForm({onFormSubmit}) {
    const [userName, setUserName] = React.useState('')
    const [userNameError, setUserNameError] = React.useState(false)
    const [userNameErrorText, setUserNameErrorText] = React.useState('')
    const [emailId, setEmailId] = React.useState('')
    const [emailError, setEmailError] = React.useState(false)
    const [emailErrorText, setEmailErrorText] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState(false)
    const [phoneNumberErrorText, setPhoneNumberErrorText] = React.useState('')

    const onSubmit =(event) => {
        var noErrors = true;
        if (!userName) {
            noErrors = false
            setUserNameError(true)
            setUserNameErrorText('Please enter user name')
        } else {
            setUserNameError(false)
            setUserNameErrorText('')
        }
        if ((!emailId || !ValidateEmail(emailId)) && (!phoneNumber || !ValidateMobileNumer(phoneNumber))) {
            noErrors = false
            setEmailError(true)
            setEmailErrorText('Please enter a valid Email Id')
            setPhoneNumberError(true)
            setPhoneNumberErrorText('Please enter a valid phone number')
        } else {
            setEmailError(false)
            setEmailErrorText('')
            setPhoneNumberError(false)
            setPhoneNumberErrorText('')
        }
        if (noErrors) {
            onFormSubmit(10)
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={'Reset Password'} onSubmit={(e) => onSubmit(e)}>
            <HeadingSection title={'Please provide following details'} topic={'Reset Password'} onBackPressed={(e) => onFormSubmit(0)}/>
            <FormItem label='User name' direction="column">
                <InputField sx={{width:1}} placeholder={'user name'} error={userNameError} value={userName} onChange={(value) => setUserName(value)} helperText={userNameErrorText}/>
            </FormItem>
            <FormItem label='Phone Number'>
                <PhoneNumber value={phoneNumber} error={phoneNumberError} helperText={phoneNumberErrorText} onChange={(value) => setPhoneNumber(value)}/>
            </FormItem>
            <Stack alignItems={'flex-start'} justifyContent={'center'} sx={{fontWeight:700}}>
                Or
            </Stack>
            <FormItem label='Email Id'>
                <EmailId error={emailError} value={emailId} helperText={emailErrorText} onChange={(value) => setEmailId(value)}/>
            </FormItem>
        </Form>
    )
}

function HeadingSection({topic, title, onBackPressed = (e)=> {}}) {
    return (
        <Stack  justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Stack sx={{width:1}} direction='row' justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{fontSize:14, fontWeight: 700, color:blue[700]}}>
                    {topic}
                </Box>
                <KuredButtonWithStartIcon onClick={(e)=> onBackPressed(e)}/>
            </Stack>
            <Box sx={{fontSize:18, fontWeight:700}}>
                {title}
            </Box>
        </Stack>
    )
}