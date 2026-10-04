import { createFileRoute } from "@tanstack/react-router";
import { BriefForm } from "@/components/brief-form";
import { Hero } from "@/components/hero";
import { InsightStudio } from "@/components/insight-studio";
import { MethodSection } from "@/components/method-section";
import { PackagesSection } from "@/components/packages-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-canvas">
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <InsightStudio />
        <MethodSection />
        <PackagesSection />
        <BriefForm />
      </main>
      <SiteFooter />
    </div>
  );
}
