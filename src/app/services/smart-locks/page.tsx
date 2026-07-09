// Keyline Locksmith — Smart Lock Installation
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faKey, faLock, faCar,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function SmartLocksPage() {
  const expectations = [
    { icon: faSearch, title: "Door Prep Check", description: "We verify backset, bore, and Wi-Fi/Bluetooth needs before recommending a model." },
    { icon: faFileContract, title: "Honest Product Advice", description: "Keypad-only vs. full smart — we match features to how you actually live." },
    { icon: faCheckCircle, title: "Install + App Walkthrough", description: "Mounted, aligned, codes set, and you leave knowing how to use it." },
    { icon: faShieldHalved, title: "Backup Key Access", description: "We configure mechanical overrides and batteries so you're never stranded." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Install Day Scheduling", description: "Most residential smart locks install in a single visit." },
    { icon: faWrench, title: "Major Smart Brands", description: "Schlage Encode, Yale, August, Kwikset Halo, and more." },
    { icon: faShieldHalved, title: "Rental-Friendly Setups", description: "Code management workflows landlords actually use." },
  ];
  const processSteps = [
    { number: 1, title: "Consult", description: "Goals: codes for guests, rental turnover, or family access.", icon: faHeadset },
    { number: 2, title: "Fit Check", description: "Door prep and network readiness verified.", icon: faSearch },
    { number: 3, title: "Install", description: "Hardware installed, sealed, and aligned.", icon: faFileContract },
    { number: 4, title: "Configure", description: "App setup, codes, auto-lock, and testing.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Fastest smart lock install scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Residential smart lock upgrades.", badge: "" },
    { town: "Woodway", benefit: "Premium hardware installs.", badge: "" },
    { town: "Temple", benefit: "Bell County residential installs.", badge: "" },
    { town: "Killeen", benefit: "Rental and residential smart locks.", badge: "" },
    { town: "China Spring", benefit: "Rural residential installs.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Door prep verification first", us: "✅ Always", others: "❌ Box-store install and pray" },
    { feature: "App configuration included", us: "✅ Walkthrough", others: "❌ Hardware only" },
    { feature: "Rental code workflows", us: "✅ Available", others: "❌ Not considered" },
    { feature: "Flat-rate install pricing", us: "✅ Written quote", others: "❌ Hourly" },
    { feature: "Licensed locksmith", us: "✅ Always", others: "❌ Handyman only" },
  ];
  const faq = [
    { question: "Which smart lock is best for rentals?", answer: "Models with easy code creation/deletion and solid mechanical backup work best. We'll recommend based on turnover frequency and Wi-Fi reliability." },
    { question: "Do I need Wi-Fi?", answer: "Not always. Bluetooth and keypad-only locks work without Wi-Fi; full remote access typically needs a hub or Wi-Fi bridge." },
    { question: "Can you install on metal or thick doors?", answer: "Often yes with the right model and prep. We'll assess before promising a specific product." },
    { question: "What about deadbolt bore size?", answer: "We measure backset and bore. Nonstandard prep may need a different model or plate work — quoted upfront." },
    { question: "Do you remove old hardware cleanly?", answer: "Yes. We fill/patch minor cosmetic issues when practical and leave the door looking finished." },
    { question: "Can multiple family members have codes?", answer: "Yes — unique codes and schedules are part of setup when the hardware supports it." },
  ];
  const crossServices = [
    { icon: faLock, title: "Rekey & Lock Change", body: "Mechanical rekey when smart isn't the right upgrade yet.", link: "/services/rekey-lock-change" },
    { icon: faKey, title: "Emergency Lockout", body: "24/7 help if codes fail or batteries die.", link: "/services/emergency-lockout" },
    { icon: faCar, title: "Car Keys & Fobs", body: "Automotive keying for the rest of your access life.", link: "/services/car-keys" },
    { icon: faWrench, title: "Commercial Access Control", body: "Business-grade access beyond a single smart deadbolt.", link: "/services/commercial-access" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Smart Lock Installation" }]} />
      <SectionIntro title="Smart Lock Installation in Waco, TX" subtitle="Keypad, Wi-Fi, and app-enabled locks installed and configured correctly — for homes and rentals across Central Texas." />
      <TrustBar headline="Homeowners and landlords trust Keyline for smart lock installs" />
      <div className={styles.section}><WhatToExpect sectionTitle="What a Smart Lock Install Includes" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Keyline for Smart Locks" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/smart-locks" title="Smart Lock Installs Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Smart Lock FAQs" /></div>
      <CTABanner headline="Ready for Codes Instead of Keys?" subline="Professional install + app setup. Flat-rate pricing. Licensed locksmiths." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Smart Lock Installation" cityName="Waco" slug="services/smart-locks" spot="smart-locks-page-form" formVariant={2} /></div>
    </main>
  );
}
