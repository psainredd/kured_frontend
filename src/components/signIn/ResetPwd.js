import { useState } from "react"
import { Form } from "../common/FormSidePanel"
import { FormItem } from "@/widgets/FormItem"
import { InputField, PasswordWidget } from "@/widgets/Inputs"
import { HeadingSection } from "./HeadingSection"
import { Box, useTheme } from "@mui/material"

export default function ResetPwd ({  
        userName,
        requestInProgress,
        onBackPressed = () => {},
        authError,
        onResetPassword = () => {}, 
    }) {
    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorText, setPasswordErrorText] = useState('')

    const [confirmPwd, setConfirmPwd] = useState('')
    const [confirmPwdError, setConfirmPwdError] = useState(false)
    const [confirmPwdErrorText, setConfirmPwdErrorText] = useState('')

    const theme = useTheme()

    const onSubmit =(event) => {
        var noErrors = true;
        
        if (!password) {
            noErrors = false
            setPasswordError(true)
            setPasswordErrorText('Please enter password')
        } else {
            setPasswordError(false)
            setPasswordErrorText('')
        }

        if (!confirmPwd) {
            noErrors = false
            setConfirmPwdError(true)
            setConfirmPwdErrorText('Please confirm password')
        } else {
            setConfirmPwdError(false)
            setConfirmPwdErrorText('')
        }

        if (password != confirmPwd) {
            noErrors = false
            setPasswordError(true)
            setPasswordErrorText('')
            setConfirmPwdError(true)
            setConfirmPwdErrorText('Password and Confirmed Password do not match')
        }

        if (noErrors) {
            onResetPassword(password)
        }
        event.preventDefault()
    }

    return (
        <Form actionLabel={'Reset Password'} onSubmit={(e) => onSubmit(e)} disableActionButton={requestInProgress}>
            
            <HeadingSection title={'Reset Your Password'} topic={"Reset password"} onBackPressed={onBackPressed} 
                backButtonLabel={'Back to SignIn'}/>

            <FormItem label='Username' direction="column" spacing={{xs:1}}>
                <InputField sx={{width:1}} placeholder={'username'} value={userName} readOnly={true} />
            </FormItem>

            <FormItem label='Password' direction='column' spacing={{xs:1}}>
                <PasswordWidget sx={{width:1}} placeholder={'password'} error={passwordError} value={password} 
                    onChange={(value) => setPassword(value)} helperText={passwordErrorText}/>
            </FormItem>

            <FormItem label='Confirm Password' direction='column' spacing={{xs:1}}>
                <PasswordWidget sx={{width:1}} placeholder={'confirm password'} error={confirmPwdError} value={confirmPwd} 
                    onChange={(value) => setConfirmPwd(value)} helperText={confirmPwdErrorText}/>
            </FormItem>

            { authError &&
                <Box sx={{color:`${theme.palette.error.main}`, fontSize:14, fontWeight:400}}>
                    Your window to reset password has expired. Please verify your username/mobile number again.
                </Box>
             }

            { requestInProgress &&
                <Box sx={{fontSize:12, fontWeight:400}}>
                    Resetting password...
                </Box>
            }
        </Form>
    )
}