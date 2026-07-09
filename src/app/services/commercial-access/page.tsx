// Keyline Locksmith — Commercial Access Control
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
  faBuildingShield, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faKey, faLock, faVault,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialAccessPage() {
  const expectations = [
    { icon: faSearch, title: "Site Walk & Access Map", description: "We document doors, hours, and who needs access before recommending hardware." },
    { icon: faFileContract, title: "Scoped Commercial Quote", description: "Clear line items for hardware, labor, and after-hours work." },
    { icon: faCheckCircle, title: "Minimal Business Disruption", description: "Evening and weekend installs available so you stay open." },
    { icon: faShieldHalved, title: "Credential Hygiene", description: "We help retire old keys/cards and document who has access." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "After-Hours Options", description: "Retail and office work scheduled outside peak customer hours." },
    { icon: faBuildingShield, title: "Hardware + Access Control", description: "From commercial levers to electronic credentials." },
    { icon: faShieldHalved, title: "COIs Available", description: "Insurance certificates for property managers and ownership groups." },
  ];
  const processSteps = [
    { number: 1, title: "Discovery Call", description: "Doors, users, and compliance needs.", icon: faHeadset },
    { number: 2, title: "On-Site Survey", description: "Hardware and wiring conditions documented.", icon: faSearch },
    { number: 3, title: "Proposal", description: "Phased or full-scope written quote.", icon: faFileContract },
    { number: 4, title: "Install & Train", description: "Hardware live, staff briefed, keys/cards issued.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-door commercial projects.", badge: "Home Base" },
    { town: "Temple", benefit: "Retail and office access work.", badge: "" },
    { town: "Killeen", benefit: "Commercial suites and multi-tenant buildings.", badge: "" },
    { town: "Hewitt", benefit: "Small business hardware upgrades.", badge: "" },
    { town: "Woodway", benefit: "Professional office suites.", badge: "" },
    { town: "Bellmead", benefit: "Light commercial properties.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "After-hours commercial installs", us: "✅ Available", others: "❌ Business hours only" },
    { feature: "COI for property managers", us: "✅ On request", others: "❌ Delayed or missing" },
    { feature: "Single point of contact", us: "✅ Project lead", others: "❌ Different tech each visit" },
    { feature: "Key + electronic hybrid plans", us: "✅ Supported", others: "❌ One-size-fits-all" },
    { feature: "Licensed locksmith crew", us: "✅ Always", others: "❌ Mixed trades" },
  ];
  const faq = [
    { question: "Do you install electronic access control?", answer: "Yes — from standalone keypads to multi-door credential systems depending on building needs. We scope honestly for your size." },
    { question: "Can you rekey an entire office suite?", answer: "Yes — master-key systems and key-alike packages for multi-user commercial spaces." },
    { question: "Do you work with property managers?", answer: "Yes — turnovers, suite rekeys, and standing commercial accounts are core work." },
    { question: "Can you provide insurance certificates?", answer: "Yes — COIs for PMs and ownership groups are available on request." },
    { question: "Do you handle panic hardware and storefront doors?", answer: "Many common commercial door hardware jobs yes — survey first for specialty exit devices." },
    { question: "What about after employee turnover?", answer: "We rekey, re-card, or change codes so former staff no longer have access — scheduled quickly." },
  ];
  const crossServices = [
    { icon: faKey, title: "Emergency Lockout", body: "After-hours business lockouts.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "Suite rekeys after staff changes.", link: "/services/rekey-lock-change" },
    { icon: faVault, title: "Safe Services", body: "Business safe opening and service.", link: "/services/safe-services" },
    { icon: faBuildingShield, title: "Smart Lock Installation", body: "Smaller suites that fit smart hardware.", link: "/services/smart-locks" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Commercial Access Control" }]} />
      <SectionIntro title="Commercial Access Control in Waco, TX" subtitle="Door hardware, credentials, and access updates for offices, retail, and multi-unit properties — with after-hours options and COIs available." />
      <TrustBar headline="Businesses across Central Texas trust Keyline for commercial access" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Commercial Access Projects Include" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Business Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-access" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Access FAQs" /></div>
      <CTABanner headline="Need Access Control That Matches Your Hours?" subline="After-hours installs available. Flat-rate scopes. Licensed & insured." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request a Commercial Access Quote" cityName="Waco" slug="services/commercial-access" spot="commercial-access-page-form" formVariant={2} /></div>
    </main>
  );
}
