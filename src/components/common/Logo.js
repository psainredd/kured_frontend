import { Link } from "@mui/material";

export function WhiteLogo({width = 130, sx}) {
    return (
    <Link href='\' sx={{...sx}}><img src='/kured_logo.svg' width={width}/></Link>  
    );
}

export function BlueLogo({width = 130, sx}) {
    return (
    <Link href='\' sx={{...sx}}><img src='/logo_blue.svg' width={width}/></Link>  
    );
}

export function LogoSymbol({width = 50, sx}) {
    return (
        <Link href='\' sx={{...sx}}><img src='/kured_symbol.svg' width={width}/></Link>  
    )
}

export function WhiteLogoSymbol({width = 50, sx}) {
    return (
        <Link href='\' sx={{...sx}}><img src='/logo_white_symbol.svg' width={width}/></Link>  
    )
}