import { Box, Link, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function OnHiatusCard({isSorry = false}) {
    return (
      <Stack justifyContent='center' alignItems='center' sx={{width:1, height:'100%'}} spacing={2}>
        <img src={isSorry?'/sad_robot.png':'/icons/chat.svg'} width='50px'/>
        <Box sx={{fontSize:28, fontWeight:600}}>
          {isSorry? `We're Sorry!`: 'Thank You!'}  
        </Box>
        <Stack spacing={1} alignItems='center'>
          <Box sx={{fontSize:16}}>
            {`We are currently on a hiatus. We'll ${isSorry ? 'back ' :'get back to you'} as soon as possible!`}
          </Box>
          <Link href='\' underline='none' sx={{color:blue[700], fontSize:14}}>
            Read the latest updates from Kured
          </Link>
        </Stack>
      </Stack>
    )
}