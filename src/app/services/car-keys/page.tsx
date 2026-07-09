// Keyline Locksmith — Car Keys & Fobs
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
  faCar, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faKey, faLock, faWrench,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function CarKeysPage() {
  const expectations = [
    { icon: faSearch, title: "Vehicle Identification", description: "We confirm year, make, model, and key type before quoting programming." },
    { icon: faFileContract, title: "Upfront Programming Price", description: "Cut + program quoted clearly — often less than dealership wait times and prices." },
    { icon: faCheckCircle, title: "On-Site When Possible", description: "Many keys and fobs are completed at your location without a tow to the dealer." },
    { icon: faShieldHalved, title: "Test Before We Leave", description: "Start, lock, unlock, and remote functions verified with you present." },
  ];
  const whyFeatures = [
    { icon: faClock, title: "Faster Than the Dealership", description: "Skip multi-day parts orders when we can program on-site." },
    { icon: faCar, title: "Most Makes Supported", description: "Domestic and many import vehicles — call with your VIN for confirmation." },
    { icon: faShieldHalved, title: "Licensed Automotive Locksmith Work", description: "Proper cut and program procedures — not a mall kiosk guess." },
  ];
  const processSteps = [
    { number: 1, title: "Call With Vehicle Info", description: "Year, make, model, and whether you have a working key.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "Flat-rate for cut, program, or both.", icon: faSearch },
    { number: 3, title: "On-Site Service", description: "We come to you when the vehicle and key type allow.", icon: faFileContract },
    { number: 4, title: "Test & Hand Off", description: "All buttons and ignition functions verified.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Fastest automotive key response.", badge: "Home Base" },
    { town: "Temple", benefit: "Bell County car key programming.", badge: "" },
    { town: "Killeen", benefit: "Fleet and personal vehicle keys.", badge: "" },
    { town: "Hewitt", benefit: "On-site residential vehicle service.", badge: "" },
    { town: "Woodway", benefit: "Fob replacement and programming.", badge: "" },
    { town: "Bellmead", benefit: "Quick local automotive coverage.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Often on-site service", us: "✅ Many vehicles", others: "❌ Dealership only" },
    { feature: "Transparent programming price", us: "✅ Quoted first", others: "❌ Parts + labor surprises" },
    { feature: "No multi-day wait for many jobs", us: "✅ Same-day possible", others: "❌ Order and wait" },
    { feature: "Vehicle lockout help too", us: "✅ 24/7 available", others: "❌ Separate vendor" },
    { feature: "Licensed locksmith", us: "✅ Always", others: "❌ Varies" },
  ];
  const faq = [
    { question: "Can you program a key if I have zero working keys?", answer: "Often yes, depending on the vehicle's immobilizer system. All-keys-lost jobs may cost more — we'll quote after confirming the vehicle." },
    { question: "Do you cut transponder keys?", answer: "Yes — cut and program transponder keys for many makes when equipment supports them." },
    { question: "Is it cheaper than the dealer?", answer: "Frequently yes, especially when you factor wait times. We quote flat-rate so you can compare." },
    { question: "Can you replace fob batteries?", answer: "Yes for many fobs. If the case is damaged we can discuss full replacement." },
    { question: "What if I'm locked out of the car?", answer: "We handle vehicle lockouts 24/7, then can quote a spare key so it doesn't happen twice." },
    { question: "Do you work on high-security laser-cut keys?", answer: "Many yes — call with year/make/model so we can confirm equipment support before you wait." },
  ];
  const crossServices = [
    { icon: faKey, title: "Emergency Lockout", body: "24/7 car lockouts when keys are inside.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "House keys after you sort the car.", link: "/services/rekey-lock-change" },
    { icon: faWrench, title: "Smart Lock Installation", body: "Upgrade home access while you're securing keys.", link: "/services/smart-locks" },
    { icon: faCar, title: "Commercial Access Control", body: "Fleet and facility access programs.", link: "/services/commercial-access" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Car Keys & Fobs" }]} />
      <SectionIntro title="Car Keys & Fobs in Waco, TX" subtitle="Cut and program automotive keys and fobs — often on-site, often faster and less expensive than the dealership." />
      <TrustBar headline="Drivers across Central Texas call Keyline for car keys" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Automotive Key Service Includes" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Skip the Dealer Wait" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/car-keys" title="Car Key Service Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Car Keys & Fobs FAQs" /></div>
      <CTABanner headline="Lost Your Only Car Key?" subline="Call for year/make/model. On-site programming available for many vehicles." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request Car Key Service" cityName="Waco" slug="services/car-keys" spot="car-keys-page-form" formVariant={2} /></div>
    </main>
  );
}
