import { Stack } from '@mui/material'
import SinglePlatformSection from '@/components/home/SinglePlatformSection';
import MarketingSection from '@/components/home/MarketingSection';
import MessagingSection from '@/components/home/MessagingSection';
import DataHostingSection from '@/components/home/DataHostingSection';
import HomePageTopSection from '@/components/home/HomeTopSection';
import PageLayout from '@/components/common/Layout';
import FooterSection from '@/components/common/Footer';

export default function Home() {
  return (
    <PageLayout title ='Kured'> 
      <HomePageTopSection/>
      <SinglePlatformSection/>
      <MarketingSection/>
      <MessagingSection/>
      <DataHostingSection/>
    </PageLayout> 
  )
}