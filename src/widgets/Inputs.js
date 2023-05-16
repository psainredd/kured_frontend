import { TextField, Autocomplete, Box } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material'
import * as React from 'react'
import { grey } from "@mui/material/colors";
import { isNumber } from "@/util";


export function InputField({placeholder, value, onChange, error=false, disabled=false, helperText='', multiline=false, minRows=3, maxRows=3, sx, InputProps={}, isNumber=false ,...props}) {
    onChange=onChange??(x=>x);
    return(
        <TextField value={value} type={isNumber ? 'number': 'text'} error={error} helperText={helperText} placeholder={placeholder} disabled={disabled} variant="standard" multiline={multiline} minRows={multiline?minRows:1} maxRows={multiline?maxRows:1}
                onChange={({target}) => onChange(target.value)} sx={{ width:{md:.7, xs:1}, paddingY: .5, paddingX:1, borderRadius:'4px', backgroundColor: '#F0F0F0 !important',...sx,}}  
                {...props} InputProps={{disableUnderline: true, ...InputProps}}/>
    )
}   
  
export function Select({value, placeholder='', onChange = ()=>{}, helperText='', error=false, options, sx={}, multiple=false, readOnly, textFieldProps = {} ,...props}) {
    const [open, setOpen] = useState(false);
    return (
        <Autocomplete   
          open={open}
          multiple={multiple}
          onOpen={() => !readOnly && setOpen(true)}
          value = {value}
          onChange={(event, newValue) => onChange(newValue)}
          onClose={() => setOpen(false)}
          options={options}
          sx={{width:{md:.7, xs:1}, paddingY: .5, paddingX:1, borderRadius:'4px', backgroundColor: '#F0F0F0 !important',...sx}}
          {...props}
          renderInput={(params) =>
            <TextField {...params} helperText={helperText} error={error} variant='standard' InputProps={{
              ...params.InputProps, 
              disableUnderline:true,
            }} placeholder={placeholder}/>}
        />
    )
}

export function PasswordWidget({placeholder, value, onChange, error=false, helperText='', disabled=false, sx, InputProps={},...props}) {
    const [showPwd, setShowPwd] = React.useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <TextField {...props} value={value} error={error} helperText={helperText} placeholder={placeholder} disabled={disabled} variant="standard"
          onChange={({target})=> onChange(target.value)}
          sx={{ width:{md:.7, xs:1}, paddingY: .5, paddingX:1, borderRadius:'4px', backgroundColor: '#F0F0F0 !important',...sx,}}
          type={showPwd? 'text' : 'password'}
          InputProps={{disableUnderline: true, 
            ...InputProps,
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPwd(prev=> !prev)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPwd ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
          }}
        />
    )
}

export function PhoneNumber({value, error=false, onChange=(value)=>{}, helperText='', ...props}) {
  const handleMobileNumberChange = (value) => {
    if(isNumber(value) && value.length <= 10) {
        onChange(value)
    } else {
      onChange('')
    }
  }
  return (
    <InputField placeholder={'90000 00000'} isNumber={true} {...props}
      InputProps={{ 
        startAdornment: 
          <InputAdornment position="start">
            <Box sx={{color:`${grey[500]} !important`}}>
              +91
              </Box>
            </InputAdornment>
        }} 
        error={error} value={value} onChange={(value) => handleMobileNumberChange(value)} helperText={helperText}/>
  )
}

export function EmailId({value, error=false, onChange=(value) => {}, helperText='', ...props}) {
  return (
    <InputField {...props} placeholder={'ram@example.com'} error={error} value={value} onChange={(value) => onChange(value)} helperText={helperText}/>
  )
}
  