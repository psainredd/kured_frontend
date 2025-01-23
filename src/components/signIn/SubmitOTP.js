import { Form } from "@/components/common/FormSidePanel";
import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { HeadingSection } from "./HeadingSection";
import GetOtp from "./GetOTP";

export default function SubmitOTPForm({ 
                                        otpLength = 6, 
                                        resendOtpTimeout = 60, 
                                        onVerifyOtp = (otp) => {},
                                        authError = false,
                                        showBackButton = false,
                                        resendingOtp = false,
                                        authInProgress = false,
                                        resendOtp = () => {},
                                        onBackPressed = () => {}
                                    }) {
    const [otpError, setOtpError] = React.useState(false)
    const [otp, setOtp] = React.useState('')
    const theme = useTheme()

    const onSubmit =(event) => {
        if (otp.length != otpLength) {
            setOtpError(true)
        } else {
            onVerifyOtp(otp)
        }
        event.preventDefault()
    }

    const resendOtpTTL = () => resendingOtp ? 0 : resendOtpTimeout;

    const onOtpValChange = (newVal) => {
        if (newVal.length >= otpLength) {
            setOtpError(false)
        }
        setOtp(newVal)
    }

    const onResendOtp = () => {
        resendOtp()
    }

    return (
        <Form actionLabel={'Verify Otp'} onSubmit={(e) => onSubmit(e)} disableActionButton={authInProgress}>
            <HeadingSection 
                title={'Enter the OTP sent to your mobile/emailId'} 
                topic={'Verify OTP'} 
                showBackButton={showBackButton}
                onBackPressed={onBackPressed}
            />
            <Stack spacing={5} sx={{pt:5}}>
                <GetOtp 
                    error={otpError} 
                    onChange={onOtpValChange} 
                    otpLength={otpLength} 
                    resendOtpTTL={resendOtpTTL()}
                    disableResend={authInProgress}
                    onResendOtp={onResendOtp}
                />
            </Stack>
            { authError &&
                <Box sx={{color:`${theme.palette.error.main}`, fontSize:14, fontWeight:400}}>
                    The OTP you entered is incorrect. Please try again with the correct one.
                </Box>
            }
            { authInProgress &&
                <Box sx={{fontSize:12, fontWeight:400}}>
                    {resendingOtp ? 'Resending OTP' :'Verifying OTP...'}
                </Box>
            }
        </Form>
    )
}