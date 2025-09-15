import Header from "@/components/Header";
import HorizontalScrollSection from "@/components/Horizontal-scroll-section";
import OverlayScrollSection from "@/components/Overlay-scroll-section";
import PersonalGrowthSection from "@/components/Personal-growth-section";

export default function Home() {
  return (
    <div>
      <Header />
      <PersonalGrowthSection />
      <HorizontalScrollSection />
      <OverlayScrollSection />
    </div>
  );
}
