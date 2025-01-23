import { Box, Link, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function OnHiatusCard({isSorry = false, message, linkBackText, linkBackLink}) {
    return (
      <Stack justifyContent='space-between' alignItems='center' sx={{width:1, height:1}} spacing={10}>
        <Stack spacing={2} alignItems='center'>
          <img src={isSorry?'/sad_robot.png':'/icons/chat.svg'} width='50px'/>
          <Box sx={{fontSize:28, fontWeight:600}}>
            {isSorry? `Oops...!!`: 'Thank You!'}  
          </Box>
        </Stack>
        <Stack spacing={1} alignItems='center'>
          <Box sx={{fontSize:16}}>
            {message}
          </Box>
          <Link href={linkBackLink} underline='none' sx={{color:blue[700], fontSize:14}}>
            {linkBackText}
          </Link>
        </Stack>
      </Stack>
    )
}