import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack, Divider, Typography } from '@mui/material'
import React from 'react';


function SimpleAccordion() {
    const[current, setCurrent] = React.useState(1);
    const handleChange = (index) => (event, isExpanded) => {
      setCurrent(isExpanded ? index: 1);
    }
    return (
      <Box>
        <AccordionSection index={1} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={2} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={3} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={4} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={5} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={6} handleChange={handleChange} currentIndex={current}/>
        <AccordionSection index={7} handleChange={handleChange} currentIndex={current}/>
      </Box>
    );
  }
  
  function AccordionSection({icon, summary, content, index, currentIndex, handleChange}) {
    return (
      <Accordion 
        sx={{ backgroundColor: 'text.primary', color:'#FFF', borderRadius:1}} 
        expanded={index === currentIndex} 
        onChange={handleChange(index)}>
        
        <AccordionSummary sx={{color:'#FFF', borderRadius:3}}
          expandIcon={<ExpandMoreIcon sx={{color:'#FFF'}}/>}>
          <Stack direction ='row' spacing={1} alignItems={'center'}>
            <Box>
              <img src='/icons/affinity.svg' width='30px'/>
            </Box>
            <Typography sx={{color:'#FFF', fontWeight:600, fontSize:16}}>Affinity segments</Typography>
          </Stack>
        </AccordionSummary>
        <Divider sx={{background:'white', opacity:.25, width:1, marginY:'auto !important', display:{md:'block', xs:'none'}}} 
              orientation="horizontal" flexItem />
        <AccordionDetails>
          <Typography sx={{color:'#FFF'}}>
            Allows you to reach users based on what they&apos;re passionate about and their habits and interests. You can reach people based on a holistic picture of their lifestyles, passions, and habits. Those in the affinity segment have demonstrated a qualified passion in the health segment, allowing you to reach the people that matter most with their products or offerings. 
        </Typography>
        </AccordionDetails>
      </Accordion>
    )
  }