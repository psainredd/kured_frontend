import PageLayout from "@/components/common/Layout";
import TopSection from "@/components/common/TopSection";
import PatientSupport from "@/components/messaging/CustomerServiceSection";
import MessagingTopSectionDetails from "@/components/messaging/MessagingTopSection";
import NotificationSection from "@/components/messaging/Notification";
import WhatsAppIntro from "@/components/messaging/WhatsAppIntro";
import MarketingSection from "@/components/messaging/marketingSection";
import NextStepsSection from "@/components/youtube/NextSteps";

export default function Home() {
    return (
      <PageLayout title ='Kured | Messaging'>
          <TopSection>
              <MessagingTopSectionDetails/>
          </TopSection>
          <NotificationSection/>
          <WhatsAppIntro/>
          <PatientSupport/>
          <MarketingSection/>
          <NextStepsSection/>
      </PageLayout>      
    )
  }