import Image from "next/image";
import ConnectWithUs from "@/component/ConnectWithUS";
import Footer from "@/component/Footer";
import PartnerWithUs from "@/component/PartnerWithUs";
import FinanceService from "@/component/FinanceService";
import Service from "@/component/Service";
import TrustSection from "@/component/Trustsection";
import Finance from "@/component/Finance";
import HeroSection from "@/component/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Finance />
      <TrustSection />
      <FinanceService />
      <Service />
      <PartnerWithUs />
      <ConnectWithUs />
    </>
  );
}
