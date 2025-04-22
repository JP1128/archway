import ContentSection from "../components/splash/content-section";
import CtaSection from "../components/splash/cta-section";
import HeroVideo from "../components/splash/hero-video";

export default function Page() {
  return (
    <main>
      <HeroVideo />
      <CtaSection />
      <ContentSection />
    </main>
  );
}
