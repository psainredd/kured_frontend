import * as React from 'react';
import { MaskedImage } from '@/widgets/Image';
import { KuredTimeline } from '@/widgets/TimeLine';
import { Box, Stack } from '@mui/material';
import { blue, green, grey } from '@mui/material/colors';
import { useState } from 'react';
import { primaryThemeColor } from '@/widgets/color';

export function WhatsAppFeatureLine({focusHeightFactor = .5, color=green[700]}) {
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const inputRef1 = React.useRef(null);
  const inputRef2 = React.useRef(null);
  const inputRef3 = React.useRef(null);
  const inputRef4 = React.useRef(null);
  const inputRef5 = React.useRef(null);
  
  const eventListener = () => {
    var actIdx = activeIndex;
    if (screen.height*focusHeightFactor > inputRef1.current.getBoundingClientRect().y){
      actIdx = 0
    } 
    if (screen.height*focusHeightFactor > inputRef2.current.getBoundingClientRect().y) {
      actIdx = 1
    }
    if (screen.height*focusHeightFactor > inputRef3.current.getBoundingClientRect().y) {
      actIdx = 2
    }
    if (screen.height*focusHeightFactor > inputRef4.current.getBoundingClientRect().y) {
      actIdx = 3
    }
    if (screen.height*focusHeightFactor > inputRef5.current.getBoundingClientRect().y) {
      actIdx = 4
    }
    if (actIdx > 0 && inputRef1.current.getBoundingClientRect().y > screen.height*focusHeightFactor) {
        actIdx = -1 
    }
    setActiveIndex(actIdx)
  }

  const getTextColor = (index) => {
    if (index == activeIndex) {
      return `${color} !important`
    }
    return `${grey[500]} !important`
  }

  React.useEffect(() => {
    window.addEventListener('scroll', eventListener);
  
    return () =>
      window.removeEventListener('scroll', eventListener);
  }, []);

  
  return (
    <Box sx={{marginY:3, height:1}}>
      <KuredTimeline showLineConnectorAtTheEnd={false}>
        <div ref={inputRef1}>
          <TextContent sx={{color:getTextColor(0)}} title={'Send Customizable Notifications'}>
            Send customizable interactive notifications to your patients which can be text-based or media-based.
          </TextContent>
        </div>
        <div ref={inputRef2}>
          <TextContent sx={{color:getTextColor(1)}} title={'Automated payment Collection'}>
            Allow customers to pay with the help of links over WhatsApp and keep your patients satisfied. 
          </TextContent>
        </div>
        <div ref={inputRef3}>
          <TextContent sx={{color:getTextColor(2)}} title={'Customer service entrypoints'}>
            Use native entry points like a custom button to make it easier for patients to start conversations with you
          </TextContent>
        </div>
        <div ref={inputRef4}>
          <TextContent sx={{color:getTextColor(3)}} title={'Build your customer service workflow'}>
            Give patients a faster way to respond to chatbots with quick reply messages. 
            They can choose from up to 3 options when interacting over WhatsApp. 
          </TextContent>
        </div>
        <div ref={inputRef5}>
          <TextContent sx={{color:getTextColor(4)}} title={'Showcase your hospital'}>
            Showcase your clinic with personlized promotions and marketing campaigns using multi-product and single-product messages
          </TextContent>
        </div>
      </KuredTimeline>
    </Box>
  )
}

function TextContent({title, children, sx}) {
  return (
      <Stack spacing={1} sx={{...sx, height:{lg:'400px', md:'500px'}, width: {xs:1}, paddingLeft:3,}}>
          <Box sx={{fontSize: 48, fontWeight: 600, lineHeight: '1'}}>
            {title}
          </Box>
          <Box sx={{...sx, fontSize:{md:18, xs:16}}}>
              {children}
          </Box>    
      </Stack>
  )
}
