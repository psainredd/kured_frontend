import { TextField, Autocomplete, Box, FormLabel, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material'
import * as React from 'react'
import { blue, grey } from "@mui/material/colors";
import { isNumber } from "@/util";
import { DatePicker } from "@mui/x-date-pickers";


export function InputField({placeholder, value, onChange, error=false, disabled=false, helperText='', multiline=false, minRows=3, maxRows=3, sx, InputProps={}, isNumber=false ,...props}) {
    onChange=onChange??(x=>x);
    return(
        <TextField value={value} type={isNumber ? 'number': 'text'} error={error} helperText={helperText} placeholder={placeholder} 
            disabled={disabled} variant="standard" 
            multiline={multiline} minRows={multiline?minRows:1} maxRows={multiline?maxRows:1}
            onChange={({target}) => onChange(target.value)} 
            sx={{ width:{md:.7, xs:1}, paddingY: .5, paddingX:1, borderRadius:'4px', backgroundColor: '#F0F0F0 !important',...sx,}}  
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
    <InputField placeholder={'90000 00000'} type="tel" {...props}
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

export function KuredCheckbox({label = '', checked=true, intermediate=false, checkBoxStyles = {}, labelStyles = {}, onChange = (isChecked) => {}}) {
  return (
    <FormControlLabel
      label={<Typography sx={{...labelStyles}}>{label}</Typography>}
      control={
        <Checkbox disableFocusRipple disableRipple 
          size="small"
          sx={{
            ...checkBoxStyles,
            '&.Mui-checked': {
              color: blue[700],
            },
            pl:0,
            /*'& .MuiSvgIcon-root': { fontSize: 16 }*/
          }}
          checked={checked}
          indeterminate={intermediate}
          onChange={(e) => onChange(e.target.checked)}
        />
      }
    />
  )
}

export function KuredDatePicker({maxDate=null, minDate, helperText='', error=false, value, onChange, label}) {
  return (
    <DatePicker maxDate={maxDate} minDate={minDate} slotProps={{ textField: { variant: 'standard', helperText:`${helperText}`, error:{error}} }} 
      label={label}
      value={value}
      onChange={(newValue) => onChange(newValue)}
      sx={{
          width:{md:.7, xs:1},
          px:2, 
          backgroundColor: '#F0F0F0', 
          'div':{
              '&:before' :{
              borderBottom:'none !important',
              transition: 'none !important',
              },
              '&:after' :{
                  borderBottom:'none !important',
                  transition: 'none !important' 
              }
          },
          ' input': {
              py:'8px !important',
          }
      }}/>
  )
}
  