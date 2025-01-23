import { KuredButton } from "@/widgets/Buttons";
import OTPInput from "@/widgets/OTPInput";
import { useSecondsTimer } from "@/widgets/Timer";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export default function GetOtp({
                                    otpLength, 
                                    resendOtpTTL = 60, 
                                    error, 
                                    disableResend = false,
                                    onChange = (newVal) => {}, 
                                    onResendOtp = () => {}
                                }) {
    const [resendOtpTimoutInSec] = useSecondsTimer(resendOtpTTL)
    return (
        <>
            <OTPInput length={otpLength} otpError={error} onChange={onChange}/>
            <ResendOtpTextWidget secondsLeft={resendOtpTimoutInSec}/>
            <ResendOTPButton visible={resendOtpTimoutInSec <= 0} onClick={onResendOtp} disabled={disableResend}/>
        </>
    )
}

function ResendOtpTextWidget({secondsLeft}) {
    return (<>
        { secondsLeft > 0 && 
          <Box sx={{fontSize:13}}>
            Request resend OTP in <b>{secondsLeft}</b> seconds
          </Box>
        }
    </>)
}

function ResendOTPButton({onClick = () => {}, visible, disabled = false}) {
    const theme = useTheme()
    const style = {
      backgroundColor : 'none !important',
      borderColor: 'none !important',
      '&:hover, &:active': 
      {
        background: 'none !important',
      },
      paddingX:0,
      paddingY:0
    }
    return (
        <>
            { visible && 
                <KuredButton 
                    label='Resend OTP' 
                    sx={{...style}} 
                    onClick={onClick}
                    disabled={disabled}
                />
            }
        </>
    )
  }