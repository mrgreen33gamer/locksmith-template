// Keyline Locksmith — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faKey, faLock, faWrench, faCar, faBuildingShield, faVault,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faKey,
      title: "Emergency Lockout",
      body: "Home, office, and vehicle lockouts 24/7. Non-destructive entry whenever possible — fast arrival across Waco and Central Texas.",
      link: "/services/emergency-lockout",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faLock,
      title: "Rekey & Lock Change",
      body: "Rekey existing hardware or install new locks after a move, lost keys, or tenant turnover — one set of keys that actually work.",
      link: "/services/rekey-lock-change",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faWrench,
      title: "Smart Lock Installation",
      body: "Keypad, Wi-Fi, and app-enabled locks installed and configured correctly for homes and rentals — codes, batteries, and walkthrough included.",
      link: "/services/smart-locks",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faCar,
      title: "Car Keys & Fobs",
      body: "Cut and program automotive keys and fobs on-site for most makes — often faster and less expensive than the dealership.",
      link: "/services/car-keys",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faBuildingShield,
      title: "Commercial Access Control",
      body: "Door hardware, credentials, and access updates for offices, retail, and multi-unit properties — after-hours options available.",
      link: "/services/commercial-access",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faVault,
      title: "Safe Services",
      body: "Safe opening, combination changes, and relocation help for home and business safes — careful work that prioritizes your contents.",
      link: "/services/safe-services",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 20,   label: "Years of local locksmith experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we pick a lock or change hardware. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed · Bonded & Insured",
      description: "Every tech is a licensed locksmith, bonded and insured. No unlicensed freelancers working alone on your doors.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2005",
      description: "We're not a franchise. Keyline Locksmith was founded in Waco by Luis Mercado. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm emergency or scheduled service that fits your timeline.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess On-Site",
      description: "A licensed locksmith inspects the lock or vehicle, explains the issue in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Guaranteed",
      description: "Quality hardware, clean workmanship, 24/7 Emergency Response · Workmanship Guaranteed. We leave when you're secured.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Security Assessment",
      description: "We diagnose what's actually needed — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Careful, Respectful Work",
      description: "Non-destructive entry when possible, hardware cleaned up, keys labeled. Your home or business left secure and tidy.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Hardware & Testing",
      description: "Trusted lock brands and automotive programming — tested before we leave so you know everything works.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest response and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does locksmith service cost in Waco?",
      answer: "Most residential lockouts and rekeys range from $75–$250 depending on time of day and complexity. Smart lock installs and automotive programming vary by brand. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes — emergency lockout service is available 24/7 including nights, weekends, and holidays. Call us at (254) 820-2020 anytime.",
    },
    {
      question: "How quickly can you arrive?",
      answer: "Most emergency lockouts in Waco and nearby towns are same-hour during busy periods and typically under 30–45 minutes depending on traffic and distance.",
    },
    {
      question: "What locksmith services do you offer?",
      answer: "Emergency lockouts, rekey & lock change, smart lock installation, car keys & fobs, commercial access control, and safe services.",
    },
    {
      question: "Are you licensed, bonded, and insured?",
      answer: "Yes — Keyline Locksmith is a licensed locksmith company, bonded and insured. Credentials available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — workmanship is guaranteed on the services we perform. Hardware warranties follow manufacturer coverage where applicable.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted locksmith — licensed, bonded, insured, and 24/7 ready"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <CTABanner
        headline="Locked Out? Keys Sorted Fast."
        subline="24/7 lockouts, rekeys, and hardware upgrades — damage-free entry whenever possible."
        primaryText="Call (254) 820-2020"
        primaryLink="tel:+12548202020"
        secondaryText="Emergency Dispatch"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Locksmith Services for Home & Business"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes Keyline Locksmith Different"
        />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Locksmith Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
    </main>
  );
}
