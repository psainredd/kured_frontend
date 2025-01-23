import { OutlinedInput, Stack, TextField } from '@mui/material';
import * as React from 'react'

export default function OTPInput({length=4, otpError = false, sx, onChange = (newVal) =>{}, showPlaceHolder=false}) {
    const [values, setValues] = React.useState(new Array(length).fill(''));
    let elementRefs = React.useRef([]);
    elementRefs.current = new Array(length).fill('').map((_, index) => elementRefs.current[index] || React.createRef());
    const handleInputChange = (target, value, index) => {
        if(isNaN(value)) {
            return;
        }
        let newvalues = [...values];
        newvalues[index] = value;
        setValues(newvalues);
        onChange(newvalues.join(''))
        if (value && index+1 < length) {
            elementRefs.current[index+1].focus();
        }
    }
    return(
        <Stack direction='row' spacing={2} sx={{...sx}}>
            {
                new Array(length).fill('').map((_, index) => (
                    <div key = {index}>
                        <TextField 
                            inputRef={elementRefs.current[index]}
                            error={otpError} 
                            class={`OTP-${index}`} 
                            placeholder={showPlaceHolder ? '&#8226;': ''} 
                            sx={{minWidth:'30px'}} 
                            value={values[index]} 
                            onChange={({target}) => handleInputChange(target, target.value, index)} 
                            inputProps={{maxLength: 1,style:{padding:8, textAlign:'center'}}}/>
                    </div>
                ))
            }
        </Stack>
    )
}