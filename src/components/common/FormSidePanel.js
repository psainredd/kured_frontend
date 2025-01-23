import { KuredButton } from "@/widgets/Buttons";
import { CheckItem } from "@/widgets/Text";
import { Box, Grid, Stack } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function FormSidePanel({title, actionSubtitle, actionButtonLabel, actionButtonOnClick = (e) =>{}, children}) {
    return (
      <Box sx={{mt:{md:5, xs:0}, mb:4, width:{lg:.75, xs:1}}}>
        <Grid container spacing={2} justifyContent={{md:'flex-start', xs:'center'}} alignItems={{md:'flex-start', xs:'center'}}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2} justifyContent={'space-between'} alignItems={'space-between'} sx={{paddingX:{md:0, xs:3}, display:{md:'block', xs:'none'}}}>
              <Stack spacing={2}>
                <Box sx={{fontSize: 54, fontWeight:600, lineHeight:'1.3'}}>
                  {title}
                </Box>
                <Box sx={{fontSize:15, fontWeight:500}}>
                  With Kured you can:
                </Box>
                <Stack spacing={1} sx={{pl:2}}>
                  <CheckItem>
                      Reach out to new patient base
                  </CheckItem>
                  <CheckItem>
                      Promote your healthcare institution with audience that matter
                  </CheckItem>
                  <CheckItem>
                      Be in touch with your patients in every step of the way
                  </CheckItem>
                  <CheckItem>
                      Automate routine customer service workflows
                  </CheckItem>
                  <CheckItem>
                      Improve your workflow efficiency by better data management
                  </CheckItem>
                  <CheckItem>
                      Store and archive your data on premise or in the cloud
                  </CheckItem>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                  <Box sx={{fontSize:15, fontWeight:500}}>
                      {actionSubtitle}
                  </Box>
                  <KuredButton label={actionButtonLabel} onClick={(e) => actionButtonOnClick(e)} 
                    sx={{
                      color: `white`, 
                      backgroundColor: `${blue[700]} !important`,
                      marginTop:2,
                      '&:hover, &:active': 
                      {
                          backgroundColor: 'rgba(255, 255, 255, 0) !important',
                          color:`#0a2540 !important`  
                      }
                  }}/>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack justifyContent={'center'} alignItems={'center'} sx={{mt:{md:1, xs:0}}}>
              <Box component="form" sx={{boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', borderRadius:2, padding:3,backgroundColor:'white', width:{md:1, xs:.9}}}>
                {children}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    )
}

export function Form({actionLabel, onSubmit=(e)=>{}, children, disableActionButton=false, itemSpacing=2}) {
    return (
        <Stack spacing={itemSpacing}>
            {children}
            <Stack direction = 'row' justifyContent='flex-end'>
                <KuredButton label={actionLabel} 
                    disabled={disableActionButton}
                    sx={{
                        color: `white`, 
                        backgroundColor: `${blue[700]} !important`,
                        marginTop:2,
                        '&:hover, &:active': 
                        {
                            backgroundColor: 'rgba(255, 255, 255, 0) !important',
                            color:`#0a2540 !important`  
                        },
                        '&:disabled' : {
                          color: `white`, 
                          backgroundColor: `${blue[300]} !important`
                        }
                    }}
                    onClick={(e) =>{onSubmit(e)}}
                />
            </Stack>
        </Stack>
    )
}