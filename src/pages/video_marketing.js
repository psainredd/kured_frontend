import PageLayout from '@/components/common/Layout';
import TopSection from '@/components/common/TopSection';
import YouTubeIntroSection from '@/components/youtube/YouTubeStatsSection';
import YouTubeTopSectionDetails from '@/components/youtube/YouTubeTopSection';
import React from 'react';
import MessagingSection from '@/components/youtube/AudienceTargeting';
import GoogleCampaignTypes from '@/components/youtube/GoogleCampaignTypes';
import KuredResponsibilities from '@/components/youtube/KuredResponsibilities';
import NextStepsSection from '@/components/youtube/NextSteps';

export default function Home() {
  return (
    <PageLayout title ='Kured | Youtube Advertising'>
        <TopSection>
            <YouTubeTopSectionDetails/>
        </TopSection>
        <YouTubeIntroSection/>
        <MessagingSection/>
        <GoogleCampaignTypes/>
        <KuredResponsibilities/>
        <NextStepsSection/>
    </PageLayout>      
  )
}