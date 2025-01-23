import { Form } from "@/components/common/FormSidePanel";
import { Box } from "@mui/material";
import React from "react";
import { HeadingSection } from "./HeadingSection";
import { ValidateMobileNumer } from "@/util";
import { InputField, PhoneNumber } from "@/widgets/Inputs";
import { FormItem } from "@/widgets/FormItem";
import SubmitOTPForm from "./SubmitOTP";
import RequestFailure from "./RequestFailure";
import SignInForm from "./SignInForm";
import { forgotPassword, forgotUsername, resetPwd, verifyForgotPasswordOTP, verifyForgotUserNameOTP } from "@/api/Login";
import ResetPwd from "./ResetPwd";
import TaskCompletedCard from "../common/TaskCompletedCard";

const FORGOT_USERNAME_PASSWORD_WIDGET = 0
const VERIFY_OTP_WIDGET = 1
const RESET_PWD_WIDGET = 2

export function ForgotUserNameOrPassword({isForgotUserName = false, changeWidget}) {

    const [currentWidgetId, setCurrentWidgetId] = React.useState(FORGOT_USERNAME_PASSWORD_WIDGET)
    
    const [requestInProgress, setRequestInProgress] = React.useState(false)
    const [authError, setAuthError] = React.useState(false)
    const [resendingOtp, setResendingOtp] = React.useState(false)

    const [resendOtpTimeout, setResendOtpTimeout] = React.useState(60)
    const [otpLength, setOtpLength] = React.useState(6)
    
    const [userId, setUserId] = React.useState()
    const [fqUserName, setFqUserName] = React.useState()

    const onSendOtpSuccess = (response) => {        
        setRequestInProgress(false)
        setResendingOtp(false)
        setResendOtpTimeout(response.resendTimeout)
        setOtpLength(response.otpLength)
        setCurrentWidgetId(VERIFY_OTP_WIDGET)
    }

    const onVerifyOTPSuccess = (response) => {
        setFqUserName(response.fqUserName)
        setRequestInProgress(false)
        setAuthError(false)
        setCurrentWidgetId(RESET_PWD_WIDGET)
    }

    const onResetPasswordSuccess = (response) => {
        changeWidget(
            <TaskCompletedCard title={'Password Updated'} linkBackText={"Sign into Kured"} linkBackLink={'/signIn'} 
                message={"Your password has been successfully updated"}/>
        )
    }

    const onAuthFailure = () => {
        setAuthError(true)
        setRequestInProgress(false)
    }
    const onRequestFailure = () => changeWidget(<RequestFailure/>)
   
    const backToSignIn = () => changeWidget(<SignInForm changeWidget={changeWidget}/>)
    const onBackPressedInSubmitOtp = () => {
        setCurrentWidgetId(FORGOT_USERNAME_PASSWORD_WIDGET)
        setAuthError(false)
    }

    const onSendOtp = (id) => {
        setRequestInProgress(true)
        setUserId(id)
        if (isForgotUserName) {
            forgotUsername(id, onSendOtpSuccess, onRequestFailure)
        } else {
            forgotPassword(id, onSendOtpSuccess, onRequestFailure)
        }
    }

    const onVerifyOtp = (otp) => {
        setRequestInProgress(true)
        setAuthError(false)
        if (isForgotUserName) {
            verifyForgotUserNameOTP(userId, otp, onVerifyOTPSuccess, onAuthFailure, onRequestFailure)
        } else {
            verifyForgotPasswordOTP(userId, otp, onVerifyOTPSuccess, onAuthFailure, onRequestFailure)
        }
    }

    const onResetPassword = (password) => {
        setRequestInProgress(true)
        setAuthError(false)
        resetPwd(fqUserName, password, onResetPasswordSuccess, onAuthFailure, onRequestFailure)
    }

    const onResendOtp = () => {
        setResendingOtp(true)
        onSendOtp(userId)
    }

    switch(currentWidgetId) {
        case FORGOT_USERNAME_PASSWORD_WIDGET:
            return (
                <UserIdForm
                    isForgotUserName={isForgotUserName}
                    onSendOtp={onSendOtp}
                    requestInProgress={requestInProgress}
                    onBackPressed={backToSignIn}
                />
            )
        case VERIFY_OTP_WIDGET:
            return(
                <SubmitOTPForm
                    otpLength={otpLength} 
                    resendOtpTimeout={resendOtpTimeout}
                    onVerifyOtp={onVerifyOtp}
                    authError={authError}
                    authInProgress = {requestInProgress}
                    showBackButton = {true}
                    onBackPressed={onBackPressedInSubmitOtp}
                    resendingOtp = {resendingOtp}
                    resendOtp={onResendOtp}
                />
            )
        case RESET_PWD_WIDGET:
            return (
                <ResetPwd
                    userName={fqUserName}
                    requestInProgress={requestInProgress}
                    authError={authError}
                    onBackPressed={backToSignIn}
                    onResetPassword={onResetPassword}
                />
            )
    }
}

function UserIdForm({isForgotUserName, requestInProgress = false, onSendOtp = () => {}, onBackPressed}) {

    const [userName, setUserName] = React.useState('')
    const [userNameError, setUserNameError] = React.useState(false)
    const [userNameErrorText, setUserNameErrorText] = React.useState('')

    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState(false)
    const [phoneNumberErrorText, setPhoneNumberErrorText] = React.useState('')

    const topic = () => {
        if (isForgotUserName) {
            return "Forgot Username"
        } 
        return "Forgot Password"
    } 

    const title = () => {
        if (isForgotUserName) {
            return "Enter your registered mobile number"
        }
        return "Enter your username"
    }

    const isValidUserName = () => {
        if (!userName) {
            setUserNameError(true)
            setUserNameErrorText('Please enter username')
            return false
        } 
        setUserNameError(false)
        setUserNameErrorText('')
        return true;
    }

    const isValidPhoneNumber = () => {
        if (!phoneNumber || !ValidateMobileNumer(phoneNumber)) {
            setPhoneNumberError(true);
            setPhoneNumberErrorText('Please enter a valid phone number');
            return false;
        } 
        setPhoneNumberError(false)
        setPhoneNumberErrorText('')
        return true;
    }

    const isValidUserId = () => {
        if (isForgotUserName) {
            return isValidPhoneNumber()
        } else {
            return isValidUserName()
        }
    }

    const getUserId = () => {
        if (isForgotUserName) {
            return phoneNumber
        } else {
            return userName
        }
    }

    const onSubmit = (event) => {
        if (isValidUserId()) {
            onSendOtp(getUserId())
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={"Send OTP"} onSubmit={(e) => onSubmit(e)} disableActionButton={requestInProgress}>
            <HeadingSection title={title()} topic={topic()} onBackPressed={onBackPressed}/>
            
            <Box sx={{py:5}}>
                
                { isForgotUserName ?
                    <FormItem label='Mobile Number' direction="column">
                        <PhoneNumber sx={{width:1}} value={phoneNumber} error={phoneNumberError} helperText={phoneNumberErrorText} 
                            onChange={(value) => setPhoneNumber(value)}/>
                    </FormItem> :
                    <FormItem label='Username' direction="column">
                        <InputField sx={{width:1}} placeholder={'username'} error={userNameError} value={userName} 
                            onChange={(value) => setUserName(value)} helperText={userNameErrorText}/>
                    </FormItem>
                }

            </Box>
            
            {
                requestInProgress &&
                <Box sx={{fontSize:12, fontWeight:400}}>
                    Requesting OTP...
                </Box>
            }
 
        </Form>
    )
}