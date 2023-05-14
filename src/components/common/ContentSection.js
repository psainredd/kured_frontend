const { Stack, Divider, Box } = require("@mui/material");

export default function ContentSection({title, iconSrc, children}) {
  return (
    <Stack direction ='row' spacing={2} sx={{marginRight:2}}>
        <Divider sx={{background:'#FFF', opacity:0.25, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
            orientation="vertical" flexItem />
        <Stack spacing={2}>
            <Box>
                <img src={iconSrc} width='40px'/>
            </Box>
            <Box sx={{fontSize: 16, fontWeight: 700}}>
                {title}
            </Box>
            <Box sx={{fontSize:16, fontWeight:400}}>
                {children} 
            </Box>
        </Stack>
    </Stack>
  )
}

export function ContentSectionWithMUIIcon({title, icon, children, showDivider=true}) {
    return (
      <Stack direction ='row' spacing={1} sx={{marginRight:2}}>
        {showDivider && 
            <Divider sx={{background:'#FFF', opacity:0.25, height:'200px', marginY:'auto !important', display:{md:'block', xs:'none'}}} 
              orientation="vertical" flexItem />}
          <Stack spacing={1}>
              <Box>
                  {icon}
              </Box>
              <Box sx={{fontSize: 16, fontWeight: 700}}>
                  {title}
              </Box>
              <Box sx={{fontSize:14, fontWeight:400}}>
                  {children} 
              </Box>
          </Stack>
      </Stack>
    )
  }