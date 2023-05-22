import PageLayout from "@/components/common/Layout";
import TopSection from "@/components/common/TopSection";
import { Person } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function About() {
    return (
        <PageLayout title={'Kured | About'} bodysx={{height:'100vh'}}>
            <TopSection fullHeight={false}>
                <Box sx={{mt:{md:5, xs:0}, mb:4, width:{lg:.75, xs:1}}}>
                    <AboutUsSection/>
                </Box>
            </TopSection>
        </PageLayout>
    )
}

function AboutUsSection() {
    return (
        <Grid container sx={{height:1}} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={5.5}>
                <ProfileSection name={'Sainath Reddy Potlapadu'}>
                    <Box sx={{fontSize: 16}}>
                        A veteran in the industry, Sainath has more than 10 years experience. 
                        He has worked in Microsoft, Amazon, Redbus previously. 
                        He completed his graduation in Computer Science from JNTU in 2012.
                    </Box>
                </ProfileSection>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={5.5}>
                <ProfileSection name={'Abdul Samad Peshmam'}>
                    <Box sx={{fontSize: 16}}>
                        A gastroenterologist by training, Abdul Samad completed his MBBS from Deccan Medical College 
                        and completed his PG in Medicine and Super Speciality in Gastroenterology from Osmania University, Hyderabad. 
                    </Box>
                </ProfileSection>
            </Grid>
        </Grid>
    )
}

function ProfileSection({name, children}) {
    return (
        <Box component="form" sx={{boxShadow: '1px 6px 14px rgb(0 0 0 / 20%) !important', borderRadius:2, padding:3,backgroundColor:'white', width:{md:1, xs:.9}}}>
            <Stack spacing={3}>
                <Avatar sx={{width:72, height:72}}>
                    <Person sx={{color:grey[500]}}/>
                </Avatar>
                <Stack direction='row' spacing={2}>     
                    <Typography sx={{fontWeight:600, fontSize:30}}>{name}</Typography>
                </Stack>
                {children}
            </Stack>
        </Box>
    )
}