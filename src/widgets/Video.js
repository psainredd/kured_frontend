import { CardMedia } from "@mui/material";

export function BackgroundVideo({src, sx, autoPlay = true}) {
    return (
        <CardMedia sx={{...sx}} autoPlay={autoPlay} muted={true} loop component='video' loading="lazy" src={src}/>
    )
}