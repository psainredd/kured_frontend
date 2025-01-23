import * as React from 'react'
import { Alert, Box, Button, Card, CardContent, FormHelperText, Snackbar, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { green, red } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';

export const extractFileNameFromPath = (arg) => arg.split('\\').slice(-1);
export const getRandomInt = (max) => Math.floor(Math.random()*max);

const FileUploadSuccessMessage = (fileName) => `Successfully uploaded file - ${fileName}`;
const FileUploadFailedMessage = (fileName) => `Unable to upload file - ${fileName}`;
const FileUploadMessage = (fileName, success) => success ? 
                                                    FileUploadSuccessMessage(fileName) : 
                                                        FileUploadFailedMessage(fileName);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? green[800] : theme.palette.primary.dark,
    },
  }));

const UploadButton = styled(Button) (({ theme }) =>({
    borderRadius: 25,
    textTransform: 'none',
    px:'16px !important',
    fontSize: 12,
    '&:hover, &:active' :{
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
        border: `2px solid ${theme.palette.primary.main}`
    }
}))

function uploadFile (fileName, files) {
    // Need to upload files. For now, returning a random success or failure response
    return getRandomInt(2) > 0 ? true : false;
}

function FileUploadMessageWidget({fileName, success}) {
    if (success) {
        return (
            <>
                <CheckCircleIcon sx={{color:green[800], fontSize: 18, mb:-1/2, mr:1/2}}/>
                <Typography variant="body" sx={{fontSize: 13}} component="span">
                    {FileUploadSuccessMessage(fileName)}
                </Typography>
            </>
        )        
    }
    return (
        <>
            <ReportIcon sx={{color:red[800], fontSize: 18, mb:-1/2, mr:1/2}}/>
            <Typography variant="body" sx={{fontSize: 13}} component="span">
                {FileUploadFailedMessage(fileName)}
            </Typography>
        </>
    )
}

export default function UploadFileWidget({imgSrc}) {
    const [isFileUploading, setFileUploading] = React.useState(false);
    const [snackbarOpen, setSnackBarOpen] = React.useState(false);
    const [fileName, setFileName] = React.useState('');
    const [fileUploadSuccess, setfileUploadSuccess] = React.useState(true);

    const handleSnackbarClose = () =>{setSnackBarOpen(false)};

    const handleFileUpload = (target) => {
        const {value, files} = target;
        if (null == value) {
            console.log("Inside null value upload")
            target.value = '';
            return;
        }
        let fileName = extractFileNameFromPath(value);
        setFileUploading(true);
        setFileName(fileName);
        setTimeout(
            () => {
                // This statement is required to enable input to fire the onChange event if the same file is tried to be uploaded again.
                target.value = '';
                handleFileUploadResponse(fileName, uploadFile(fileName, files))
            }, 10000);
    }

    const handleFileUploadResponse = (fileName, success) => {
        console.log(`Inside handle File Upload Response with response status - ${success}`)
        setFileUploading(false);
        setSnackBarOpen(true);
        setfileUploadSuccess(success);
    }
    
    return (
        <Stack direction='row' spacing={2} >
            <Box
                component="img"
                src={imgSrc}
                alt="DJ"
                sx = {{
                    width: 100,
                    height : 100,
                    fill: 'none'
                }}
            />
            <Stack spacing={1} sx={{width: 3/4}}>
                <input accept="image/*" id="uploadPhoto" type="file" hidden 
                    onInput={({target})=> handleFileUpload(target)}
                />
                <label htmlFor="uploadPhoto">
                    <UploadButton disableTouchRipple disableFocusRipple disableRipple 
                        startIcon={<FileUploadOutlinedIcon sx={{fontSize:'16px !important'}}/>} component='span'>
                            Upload Photo
                    </UploadButton>
                </label>
                <FormHelperText sx={{color:'text.secondary', fontSize: 12}}>
                    Allowed JPG, GIF or PNG. Max size of 2MB
                </FormHelperText>
                <BorderLinearProgress sx={{display: `${isFileUploading ? 'block' : 'none'}`}}/>
                <Stack direction='row' sx={{display: `${fileName && !isFileUploading ? 'block' : 'none'}`}}>
                    <FileUploadMessageWidget fileName={fileName} success={fileUploadSuccess}/>
                </Stack>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{vertical: 'top', horizontal:'right' }}>
                    <Alert severity={fileUploadSuccess?"success":"error"} sx={{ width: '100%' }}>
                        {FileUploadMessage(fileName, fileUploadSuccess)}
                    </Alert>
                </Snackbar>
            </Stack>
        </Stack>
    )
}