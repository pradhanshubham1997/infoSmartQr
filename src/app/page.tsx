import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { TargetUsers } from "@/components/TargetUsers";
import { Benefits } from "@/components/Benefits";
import { Demo } from "@/components/Demo";
import { Testimonial } from "@/components/Testimonial";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <ProblemSolution />
      <Features />
      <TargetUsers />
      <Benefits />
      <Demo />
      <Testimonial />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
