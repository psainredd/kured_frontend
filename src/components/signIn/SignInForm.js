import { Form } from "@/components/common/FormSidePanel";
import { Box, Link, Stack, useTheme } from "@mui/material";
import React from "react";
import { FormItem } from "@/widgets/FormItem";
import { InputField, KuredCheckbox, PasswordWidget } from "@/widgets/Inputs";
import { blue } from "@mui/material/colors";
import { logIntoKured, resendOTPForMFA, verifyOTP} from "@/api/Login";
import SubmitOTPForm from "./SubmitOTP";
import { ForgotUserNameOrPassword } from "./ForgotUserNameOrPwd";
import RequestFailure from "./RequestFailure";
import { getUserFQUserName, isMFAEnabled, isUserAuthenticated, saveUserLocally, useUserContext } from "@/userContext";

export default function SignInForm({changeWidget}) {
    const [isVerifyOTP, setIsVerifyOtp] = React.useState(false)
    const [resendingOtp, setResendingOtp] = React.useState(false)
    const [authError, setAuthError] = React.useState(false)
    const [authInProgress, setAuthInProgress] = React.useState(false)
    const [resendOtpTimeout, setResendOtpTimeout] = React.useState(60)
    const [otpLength, setOtpLength] = React.useState(6)
    const [responseData, setResponseData] = React.useState(null)
    const [rememberMe, setRememberMe] = React.useState(false)
    const {setLoggedInUser} = useUserContext()
    
    const onSuccess = (response) => {
        setResponseData(response)

        if (isUserAuthenticated(response)) {
            saveUserLocally(response, setLoggedInUser)
        
        } else if (isMFAEnabled(response)) {
            setAuthError(false)
            setAuthInProgress(false)
            setIsVerifyOtp(true)
            setResendingOtp(false)
            setResendOtpTimeout(response.otpDetails.resendTimeout)
            setOtpLength(response.otpDetails.otpLength)
        }
    }
    
    const onAuthFailed = () => {
        setAuthError(true)
        setAuthInProgress(false)
    }
    
    const onRequestFailure = () => changeWidget(<RequestFailure />)

    const onLoginRequest = (username, password, rememberMe) => {
        setAuthInProgress(true)
        setAuthError(false)
        setRememberMe(rememberMe)
        logIntoKured(username, password, rememberMe, onSuccess, onAuthFailed, onRequestFailure)
    }

    const onVerifyOtp = (otp) => {
        setAuthInProgress(true)
        setAuthError(false)
        verifyOTP(getUserFQUserName(responseData), otp, rememberMe, onSuccess, onAuthFailed, onRequestFailure)
    }

    const resendOtp = () => {
        setAuthInProgress(true)
        setAuthError(false)
        setResendingOtp(true)
        var userName = getUserFQUserName(responseData) 
        resendOTPForMFA(userName, onSuccess, onRequestFailure)
    }

    const onForgotPassword = () => changeWidget( <ForgotUserNameOrPassword isForgotUserName={false} changeWidget={changeWidget}/> )
    const onForgotUsername = () => changeWidget( <ForgotUserNameOrPassword isForgotUserName={true} changeWidget={changeWidget}/> )

    return (
        <>
            {
                !isVerifyOTP ? 
                    <SignIn authInProgress={(authInProgress)}
                            authError={authError}
                            onLoginRequest={onLoginRequest}
                            onForgotPassword={onForgotPassword}
                            onForgotUsername={onForgotUsername}
                    /> :
                    <SubmitOTPForm 
                        otpLength={otpLength} 
                        resendOtpTimeout={resendOtpTimeout}
                        onVerifyOtp={onVerifyOtp}
                        authError = {authError}
                        resendOtp={resendOtp}
                        resendingOtp={resendingOtp}
                        authInProgress = {authInProgress}
                    />
            }
        </>
    )
}

function SignIn ({  authInProgress,
                    authError,
                    onLoginRequest = () => {}, 
                    onForgotUsername = () => {}, 
                    onForgotPassword = () => {}
                }) {
    const [userName, setUserName] = React.useState('')
    const [userNameError, setUserNameError] = React.useState(false)
    const [userNameErrorText, setUserNameErrorText] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordErrorText, setPasswordErrorText] = React.useState('')
    const [rememberMe, setRememberMe] = React.useState(false)

    const theme = useTheme()
    
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
            onLoginRequest(userName, password, rememberMe)
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={'Sign In'} onSubmit={(e) => onSubmit(e)} disableActionButton={authInProgress}>
            
            <FormItem label='Username' direction="column">
                <InputField sx={{width:1}} placeholder={'username'} error={userNameError} value={userName} 
                    onChange={(value) => setUserName(value)} helperText={userNameErrorText}/>
            </FormItem>

            <FormItem label='Password' direction='column'>
                <PasswordWidget sx={{width:1}} placeholder={'password'} error={passwordError} value={password} 
                    onChange={(value) => setPassword(value)} helperText={passwordErrorText}/>
            </FormItem>
            
            <Stack spacing={2} justifyContent={'space-between'} direction={{md:'row', xs:'column'}}>
                <Link onClick={onForgotUsername} href='#' underline='none' sx={{color:blue[700], fontSize:14}}>
                    Forgot Username?
                </Link>
                <Link onClick={onForgotPassword} href='#' underline='none' sx={{color:blue[700], fontSize:14}}>
                    Forgot Password?
                </Link>
            </Stack>
            
            <KuredCheckbox label="Remember Me" checked={rememberMe} onChange={(newVal) => setRememberMe(newVal)} 
                checkBoxStyles={{color:`${theme.palette.primary.main}`}}/>

            { authError &&
                <Box sx={{color:`${theme.palette.error.main}`, fontSize:14, fontWeight:400}}>
                    The credentials you have entered are incorrect. Please try again with valid credentials.
                </Box>
            }
            
            { authInProgress &&
                <Box sx={{fontSize:12, fontWeight:400}}>
                    Signing into Kured...
                </Box>
            }
        </Form>
    )
}