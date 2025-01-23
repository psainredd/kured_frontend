import SinglePlatformSection from '@/components/landingPage/SinglePlatformSection';
import MarketingSection from '@/components/landingPage/MarketingSection';
import MessagingSection from '@/components/landingPage/MessagingSection';
import DataHostingSection from '@/components/landingPage/DataHostingSection';
import HomePageTopSection from '@/components/landingPage/HomeTopSection';
import { AnonymousUserPageLayout } from "@/components/common/Layout";

export default function Home() {
  return (
    <AnonymousUserPageLayout title ='Kured'> 
      <HomePageTopSection/>
      <SinglePlatformSection/>
      <MarketingSection/>
      <MessagingSection/>
      <DataHostingSection/>
    </AnonymousUserPageLayout> 
  )
}