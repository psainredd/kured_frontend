import { Autocomplete, Box, Grid, InputAdornment, Link, Stack, TextField } from "@mui/material"
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import * as React from 'react'
import { blue, grey } from "@mui/material/colors"
import PageLayout from "@/components/common/Layout";
import TopSection from "@/components/common/TopSection";
import { KuredButton } from "@/widgets/Buttons";
import { CheckItem } from "@/widgets/Text";
import { primaryThemeColor } from "@/widgets/color";
import { ValidateEmail, ValidateMobileNumer, isNumber } from "@/util"
import { HiatusContext } from "./_app";
import { EmailId, InputField, PhoneNumber, Select } from "@/widgets/Inputs";
import FormSidePanel, { Form } from "@/components/common/FormSidePanel";
import OnHiatusCard from "@/components/common/OnHiatusCard";
 
const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujrat', 
                'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karanataka', 'Kerala', 'Madhya Pradesh',
                'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
                'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']

export default function ContactUs() {
    return (
        <PageLayout title={'Kured | Contact Us'}>
            <TopSection fullScreenHeight={false}>
                <TopSectionDetails/>
            </TopSection>
        </PageLayout>
    )
}

function TopSectionDetails() {
  const title = 'Contact our business relations team'
  const actionSubtitle = 'Already have an account?'
  const actionButtonLabel = 'Sign In'
  const actionButtonOnClick = (e) => {window.open('/signIn','_self')}
  return (
    <FormSidePanel title={title} actionSubtitle={actionSubtitle} actionButtonLabel={actionButtonLabel} actionButtonOnClick={actionButtonOnClick}>
      <RightSection/>
    </FormSidePanel>
  )
}

function RightSection() {
  const onHiatus = React.useContext(HiatusContext)
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const onFormSubmittedCard = onHiatus ? <OnHiatusCard/> : <ThankYouCard/>
  return (
    formSubmitted ? onFormSubmittedCard : <CustomerDetailsSection onFormSubmit={() => setFormSubmitted(true)}/> 
  )
}

function CustomerDetailsSection({onFormSubmit = () => {}}) {
  const[firstName, setFirstName] = React.useState('');
  const[firstNameError, setFirstNameError] = React.useState(false);
  const[firstNameErrorText, setFirstNameErrorText] = React.useState('');
  const[lastName, setLastName] = React.useState('');
  const[lastNameError, setLastNameError] = React.useState(false);
  const[lastNameErrorText, setLastNameErrorText] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[emailError, setEmailError] = React.useState(false);
  const[emailErrorText, setEmailErrorText] = React.useState('');
  const[phoneNumber, setPhoneNumber] = React.useState('');
  const[phoneError, setPhoneError] = React.useState(false);
  const[phoneErrorText, setPhoneErrorText] = React.useState('');
  const[hospitalName, setHospitalName] = React.useState('');
  const[hospitalNameError, setHospitalNameError] = React.useState(false);
  const[hospitalNameErrorText, setHospitalNameErrorText] = React.useState('');
  const[hospitalSize, setHospitalSize] = React.useState(null);
  const[hospitalSizeError, setHospitalSizeError] = React.useState(false);
  const[hospitalSizeErrorText, setHospitalSizeErrorText] = React.useState('');
  const[bedCount, setBedCount] = React.useState(null);
  const[bedCountError, setBedCountError] = React.useState(false);
  const[bedCountErrorText, setBedCountErrorText] = React.useState('');
  const[city, setCity] = React.useState('');
  const[cityError, setCityError] = React.useState(false);
  const[cityErrorText, setCityErrorText] = React.useState('');
  const[state, setState] = React.useState(null);
  const[stateError, setStateError] = React.useState(false);
  const[stateErrorText, setStateErrorText] = React.useState('');
  const[comments, setComments] = React.useState('');
  const[commentsError, setCommentsError] = React.useState(false);
  const[commentsErrorText, setCommentsErrorText] = React.useState('');

  const handleMobileNumberChange = (value) => {
    if(isNumber(value) && value.length <= 10){
        setPhoneNumber(value)
    }
  }
  const onSubmit = (event) => {
    var noErrors = true;
    if (!firstName) {
        noErrors = false
        setFirstNameError(true)
        setFirstNameErrorText("Please enter your first name")
    } else {
        setFirstNameError(false)
        setFirstNameErrorText("")
    }
    if (!lastName) {
        noErrors = false
        setLastNameError(true)
        setLastNameErrorText("Please enter your last name")
    } else {
        setLastNameError(false)
        setLastNameErrorText('')
    }
    if (!email || !ValidateEmail(email)) {
        noErrors = false
        setEmailError(true)
        setEmailErrorText("Please enter a valid email Id")
    } else {
        setEmailError(false)
        setEmailErrorText('')
    }
    if (!phoneNumber || !ValidateMobileNumer(phoneNumber)) {
        noErrors = false
        setPhoneError(true)
        setPhoneErrorText("Please enter a valid mobile number")
    } else {
        setPhoneError(false)
        setPhoneErrorText("")
    }
    if (!hospitalName) {
        noErrors = false
        setHospitalNameError(true)
        setHospitalNameErrorText("Please enter your hospital name")
    } else {
        setHospitalNameError(false)
        setHospitalNameErrorText("")
    }
    if (!hospitalSize) {
        noErrors = false
        setHospitalSizeError(true)
        setHospitalSizeErrorText("Please select your hospital size")
    } else {
        setHospitalSizeError(false)
        setHospitalSizeErrorText("")
    }
    if (!bedCount) {
        noErrors = false
        setBedCountError(true)
        setBedCountErrorText("Please select bed count")
    } else {
        setBedCountError(false)
        setBedCountErrorText('')
    }
    if (!city) {
        noErrors = false
        setCityError(true)
        setCityErrorText("Please enter your city")
        
    } else {
        setCityError(false)
        setCityErrorText('')
    }
    if (!state) {
        noErrors = false
        setStateError(true)
        setStateErrorText("Please enter your state")
    } else {
        setStateError(false)
        setStateErrorText('')
    }
    if (noErrors) {
        onFormSubmit()
    }
    event.preventDefault()
  }
  
  return (
    <Form actionLabel={'Contact Us'} onSubmit={(e) => {onSubmit(e)}}>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='First Name'/>
        <InputField placeholder={'Ram'} error={firstNameError} value={firstName} onChange={(value) => setFirstName(value)} helperText={firstNameErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Last Name'/>
        <InputField placeholder={'Nath'} error={lastNameError} value={lastName} onChange={(value) => setLastName(value)} helperText={lastNameErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Email'/>
        <EmailId error={emailError} value={email} onChange={(value) => setEmail(value)} helperText={emailErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Phone'/>
        <PhoneNumber error={phoneError} value={phoneNumber} onChange={(value) => handleMobileNumberChange(value)} helperText={phoneErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Hospital Name'/>
        <InputField placeholder={'ABC Hospital'} error={hospitalNameError} value={hospitalName} onChange={(value) => setHospitalName(value)} helperText={hospitalNameErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Hospital Size'/>
        <Select placeholder='Select number of doctors' options={['1-10', '10-50', '50-100', '100+']} value={hospitalSize} 
            onChange={(value) => setHospitalSize(value)} error={hospitalSizeError} helperText={hospitalSizeErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='Bed Count'/>
        <Select placeholder='Select number of beds' options={['1-10', '10-50', '50-100', '100+']} value={bedCount}
            onChange={(value) => setBedCount(value)} error={bedCountError} helperText={bedCountErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='City'/>
        <InputField placeholder={'Hyderabad'} value={city} onChange={(value) => setCity(value)} error={cityError} helperText={cityErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems={{xs:'flex-start', md:'center'}} spacing={{xs:1, md:2}}>
        <Label value='State'/>
        <Select placeholder='State' options={states} value={state} onChange={(value) => setState(value)} error={stateError} helperText={stateErrorText}/>
      </Stack>
      <Stack direction={{xs:'column', md:'row'}} justifyContent={{xs:'space-around', md:'space-between'}} alignItems='flex-start' spacing={{xs:1, md:2}}>
        <Label value='Anything to add?'/>
        <InputField multiline={true} value={comments} onChange={(value) => setComments(value)} error={commentsError} helperText={commentsErrorText}/>
      </Stack>
    </Form>
  )
}

function Label({value}) {
  return (
    <Box sx={{fontSize:14, fontWeight:600}}>
      {value}
    </Box>
  )
}

function ThankYouCard() {
  return (
    <Stack justifyContent='center' alignItems='center' sx={{width:1, height:1}} spacing={2}>
      <img src='/icons/chat.svg' width='50px'/>
      <Box sx={{fontSize:28, fontWeight:600}}>
        Thank You!  
      </Box>
      <Stack spacing={1} alignItems='center'>
        <Box sx={{fontSize:16}}>
          We&apos;ll get back to you as soon as possible!
        </Box>
        <Link href='\' underline='none' sx={{color:blue[700], fontSize:14}}>
          Read the latest updates from Kured
        </Link>
      </Stack>
    </Stack>
  )
}