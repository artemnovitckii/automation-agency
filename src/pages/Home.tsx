import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <Pricing />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <FAQ />
    </>
  );
};

export default Home;
