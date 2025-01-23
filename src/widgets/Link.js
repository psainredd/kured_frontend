import { Link } from "@mui/material"
import { styled } from "@mui/system"

export const StyledLink = styled(Link) (({theme}) => ({
    color:`${theme.palette.text.primary}`,
    '&:hover, &:active' : {
        color:`${theme.palette.primary.main}`,
    }
  }))

  export default function KuredTextLink({children, sx, ...props}) {
      return (
          <StyledLink underline='none' {...props} sx={{...sx}}>
              {children}
          </StyledLink>
      )
  }