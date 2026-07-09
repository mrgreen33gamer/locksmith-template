// Keyline Locksmith — Safe Services
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
  faVault, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faKey, faLock, faBuildingShield,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function SafeServicesPage() {
  const expectations = [
    { icon: faSearch, title: "Careful Assessment", description: "We identify safe type and opening method that prioritizes your contents." },
    { icon: faFileContract, title: "Quoted Before Work", description: "Opening, combination change, or relocation scoped with a clear price." },
    { icon: faCheckCircle, title: "Non-Destructive When Possible", description: "We prefer methods that preserve the safe — drilling is a last resort with approval." },
    { icon: faShieldHalved, title: "Identity Verification", description: "Proof of ownership required before any safe is opened." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Home & Business Safes", description: "Gun safes, document safes, and many commercial units." },
    { icon: faVault, title: "Combination Changes", description: "New combos after staff changes or forgotten codes." },
    { icon: faShieldHalved, title: "Licensed Locksmith", description: "Professional safe work — not forced entry amateurs." },
  ];
  const processSteps = [
    { number: 1, title: "Call With Safe Details", description: "Brand, size, and whether combination or key is lost.", icon: faHeadset },
    { number: 2, title: "Ownership Check", description: "ID and proof of ownership verified.", icon: faSearch },
    { number: 3, title: "Quote Method", description: "Opening approach and price approved first.", icon: faFileContract },
    { number: 4, title: "Open & Secure", description: "Contents protected; new combo optional.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Primary safe service dispatch.", badge: "Home Base" },
    { town: "Temple", benefit: "Home and business safe openings.", badge: "" },
    { town: "Killeen", benefit: "Residential and commercial safes.", badge: "" },
    { town: "Hewitt", benefit: "Home safe combination changes.", badge: "" },
    { town: "Woodway", benefit: "Premium residential safe service.", badge: "" },
    { town: "McGregor", benefit: "Rural residential coverage.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Non-destructive methods preferred", us: "✅ Standard", others: "❌ Drill first" },
    { feature: "Ownership verification", us: "✅ Required", others: "❌ Inconsistent" },
    { feature: "Combination change after open", us: "✅ Available", others: "❌ Open only" },
    { feature: "Flat-rate quote before work", us: "✅ Always", others: "❌ Open-ended" },
    { feature: "Licensed locksmith", us: "✅ Always", others: "❌ Not always" },
  ];
  const faq = [
    { question: "Can you open a safe without the combination?", answer: "Often yes. Method depends on safe type. We quote before starting and prioritize non-destructive approaches when possible." },
    { question: "Will you damage my safe?", answer: "We avoid damage when possible. If drilling is required, we explain tradeoffs and get approval first." },
    { question: "Do you change combinations?", answer: "Yes — after openings or when employees change and the old combo is compromised." },
    { question: "Can you move a heavy safe?", answer: "Some relocation help is available depending on size, stairs, and access. Call for a site assessment." },
    { question: "What proof of ownership do you need?", answer: "Photo ID and documents tying you to the property or safe (receipt, photos, property access). We will not open without verification." },
    { question: "Do you work on gun safes?", answer: "Many common residential gun safes yes — provide brand and model when you call." },
  ];
  const crossServices = [
    { icon: faKey, title: "Emergency Lockout", body: "Home and business lockouts 24/7.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "Door security after securing the safe.", link: "/services/rekey-lock-change" },
    { icon: faBuildingShield, title: "Commercial Access Control", body: "Business-wide access hardware.", link: "/services/commercial-access" },
    { icon: faVault, title: "Smart Lock Installation", body: "Modernize entry while securing valuables.", link: "/services/smart-locks" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Safe Services" }]} />
      <SectionIntro title="Safe Services in Waco, TX" subtitle="Safe opening, combination changes, and careful service for home and business safes — with ownership verification and non-destructive methods preferred." />
      <TrustBar headline="Keyline Locksmith — careful safe work for Central Texas" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Safe Service Includes" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Call Keyline for Safes" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/safe-services" title="Safe Service Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Safe Services FAQs" /></div>
      <CTABanner headline="Locked Out of a Safe?" subline="Ownership verified. Careful methods. Flat-rate quotes before work." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request Safe Service" cityName="Waco" slug="services/safe-services" spot="safe-services-page-form" formVariant={2} /></div>
    </main>
  );
}
