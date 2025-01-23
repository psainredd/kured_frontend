import { getUserFirstName, getUserLastName } from "@/userContext";
import { Stack, Typography } from "@mui/material";

export function UserProfileSummary({loggedInUser}) {
    
    const firstName = getUserFirstName(loggedInUser) ?? ''
    const lastName = getUserLastName(loggedInUser) ?? ''
    const fullName = firstName + ' ' + lastName

    return (
        <Stack spacing={0} sx={{pb:1.5, px:2, pt:.5}}>
            <Typography sx={{fontSize:18}}>
                { fullName }
            </Typography>
            <Typography sx={{color:'secondary.main', fontSize:12}}>
                Avail. Balance: &#x20B9;{ getUserAccountBal(loggedInUser) ?? '0'}
            </Typography>
        </Stack>
    )
}