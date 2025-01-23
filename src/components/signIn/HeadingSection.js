import { KuredButtonWithStartIcon } from "@/widgets/Buttons";
import { Box, Stack } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export function HeadingSection({topic, title, showBackButton = true, onBackPressed = ()=> {}, backButtonLabel}) {
    return (
        <Stack justifyContent={'flex-start'} alignItems={'flex-start'} spacing={1}>
            <Stack sx={{width:1}} direction='row' justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{fontSize:14, fontWeight: 700, color:green[500]}}>
                    {topic}
                </Box>
                { showBackButton && <KuredButtonWithStartIcon label={backButtonLabel} onClick={(e)=> onBackPressed()}/> }
            </Stack>
            <Box sx={{fontSize:18, fontWeight:700}}>
                {title}
            </Box>
        </Stack>
    )
}