import { AnonymousUserPageLayout } from "@/components/common/Layout";
import AnonymousUserTopSection from "@/components/common/AnonymousUserTopSection";
import PatientSupport from "@/components/messaging/CustomerServiceSection";
import MessagingTopSectionDetails from "@/components/messaging/MessagingTopSection";
import NotificationSection from "@/components/messaging/Notification";
import WhatsAppIntro from "@/components/messaging/WhatsAppIntro";
import MarketingSection from "@/components/messaging/marketingSection";
import NextStepsSection from "@/components/youtube/NextSteps";

export default function Home() {
    return (
      <AnonymousUserPageLayout title ='Kured | Messaging'>
          <AnonymousUserTopSection>
              <MessagingTopSectionDetails/>
          </AnonymousUserTopSection>
          <NotificationSection/>
          <WhatsAppIntro/>
          <PatientSupport/>
          <MarketingSection/>
          <NextStepsSection/>
      </AnonymousUserPageLayout>      
    )
  }