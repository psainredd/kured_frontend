import * as React from 'react';
import PageLayout from '@/components/common/Layout';
import StickyBox from 'react-sticky-box';
import { MaskedImage } from '@/widgets/Image';
import { Box, Stack } from '@mui/material';
import { WhatsAppFeatureLine } from '@/components/messaging/WhatsAppFeatures';
import TopSection from '@/components/common/TopSection';

export default function Home() {
  return(
    <PageLayout title='Test'>
      <TopSection/>
    </PageLayout>
  )
}
