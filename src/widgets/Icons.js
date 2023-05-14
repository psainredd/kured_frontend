import { Check } from "@mui/icons-material";

export function CheckIcon({sx}) {
    const {color} = sx;
    return (
        <Check sx={{...sx, backgroundColor:`${color}44`, borderRadius:'50%', padding:'2px'}}/>
    );
}