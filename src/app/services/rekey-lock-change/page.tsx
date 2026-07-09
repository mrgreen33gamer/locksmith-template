// Keyline Locksmith — Rekey & Lock Change
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
  faLock, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faKey, faWrench, faCar,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function RekeyLockChangePage() {
  const expectations = [
    { icon: faSearch, title: "Hardware Assessment", description: "We check lock condition and recommend rekey vs. full replacement based on security — not upsells." },
    { icon: faFileContract, title: "Flat-Rate Per Cylinder or Package", description: "Clear pricing for single doors or whole-house packages before we start." },
    { icon: faCheckCircle, title: "Matched Keys That Work", description: "We pin cylinders carefully, test every door, and leave labeled keys that actually fit." },
    { icon: faShieldHalved, title: "Move-In & Turnover Ready", description: "Ideal after a purchase, roommate change, lost keys, or tenant turnover." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Same-Day Rekeys Available", description: "Most residential rekeys are completed in one visit during business hours." },
    { icon: faLock, title: "All Major Brands", description: "Schlage, Kwikset, Yale, Baldwin, commercial hardware, and more." },
    { icon: faShieldHalved, title: "Licensed Locksmith", description: "Proper pinning and master-key work — not a hardware-store guess." },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book", description: "Tell us how many doors and whether you want rekey or new hardware.", icon: faHeadset },
    { number: 2, title: "On-Site Review", description: "We inspect cylinders, keys, and door prep.", icon: faSearch },
    { number: 3, title: "Approve Quote", description: "Flat-rate package before pins come out.", icon: faFileContract },
    { number: 4, title: "Rekey or Replace", description: "Work completed, doors tested, keys labeled.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Fastest scheduling for whole-house rekeys.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Residential rekey packages available.", badge: "" },
    { town: "Woodway", benefit: "Premium hardware upgrades and rekeys.", badge: "" },
    { town: "Temple", benefit: "Bell County move-in rekeys.", badge: "" },
    { town: "Killeen", benefit: "Rental and residential rekey service.", badge: "" },
    { town: "McGregor", benefit: "Rural residential coverage.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Rekey without replacing hardware", us: "✅ When locks are solid", others: "❌ Often sell full kits only" },
    { feature: "Whole-house keying packages", us: "✅ Available", others: "❌ Per-door only" },
    { feature: "Flat-rate written quote", us: "✅ Always", others: "❌ Hourly surprises" },
    { feature: "Licensed locksmith", us: "✅ Always", others: "❌ Not always" },
    { feature: "Labeled keys + test every door", us: "✅ Standard", others: "❌ Inconsistent" },
  ];
  const faq = [
    { question: "When should I rekey instead of replace?", answer: "If the lock body is solid and only the key is compromised (lost keys, old roommates, new ownership), rekeying is usually faster and less expensive than full replacement." },
    { question: "How long does a whole-house rekey take?", answer: "Most 3–5 door homes are completed in a single visit. Larger properties or mixed brands may take longer." },
    { question: "Can you match all doors to one key?", answer: "Yes — we can key alike exterior doors so one key works everywhere you want it to." },
    { question: "Do you install new deadbolts too?", answer: "Yes. When hardware is worn, we recommend and install quality replacements with proper door prep." },
    { question: "Is rekeying good after buying a house?", answer: "Absolutely. You never know how many copies of the old keys exist. Rekeying is standard move-in security." },
    { question: "Can you rekey commercial hardware?", answer: "Yes — offices and retail suites are common. Ask about master-key systems for multi-user properties." },
  ];
  const crossServices = [
    { icon: faKey, title: "Emergency Lockout", body: "Get back in first — then rekey for long-term security.", link: "/services/emergency-lockout" },
    { icon: faWrench, title: "Smart Lock Installation", body: "Upgrade to codes and app access after rekey day.", link: "/services/smart-locks" },
    { icon: faCar, title: "Car Keys & Fobs", body: "Automotive keys when house keys aren't the only problem.", link: "/services/car-keys" },
    { icon: faLock, title: "Commercial Access Control", body: "Business hardware and credential programs.", link: "/services/commercial-access" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Rekey & Lock Change" }]} />
      <SectionIntro title="Rekey & Lock Change in Waco, TX" subtitle="Rekey existing locks or install new hardware after a move, lost keys, or tenant turnover — flat-rate packages, labeled keys, licensed locksmiths." />
      <TrustBar headline="Move-ins and turnovers trust Keyline Locksmith for rekeys" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect on Rekey Day" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose Keyline for Rekeys" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/rekey-lock-change" title="Rekey Service Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Rekey & Lock Change FAQs" /></div>
      <CTABanner headline="Need Every Door on a New Key?" subline="Same-day rekeys available. Flat-rate packages. Licensed & insured." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule a Rekey or Lock Change" cityName="Waco" slug="services/rekey-lock-change" spot="rekey-page-form" formVariant={2} /></div>
    </main>
  );
}
