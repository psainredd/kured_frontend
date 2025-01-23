import { AnonymousUserPageLayout } from "@/components/common/Layout";
import AnonymousUserTopSection from '@/components/common/AnonymousUserTopSection';
import YouTubeIntroSection from '@/components/youtube/YouTubeStatsSection';
import YouTubeTopSectionDetails from '@/components/youtube/YouTubeTopSection';
import React from 'react';
import MessagingSection from '@/components/youtube/AudienceTargeting';
import GoogleCampaignTypes from '@/components/youtube/GoogleCampaignTypes';
import KuredResponsibilities from '@/components/youtube/KuredResponsibilities';
import NextStepsSection from '@/components/youtube/NextSteps';

export default function Home() {
  return (
    <AnonymousUserPageLayout title ='Kured | Youtube Advertising'>
        <AnonymousUserTopSection>
            <YouTubeTopSectionDetails/>
        </AnonymousUserTopSection>
        <YouTubeIntroSection/>
        <MessagingSection/>
        <GoogleCampaignTypes/>
        <KuredResponsibilities/>
        <NextStepsSection/>
    </AnonymousUserPageLayout>      
  )
}