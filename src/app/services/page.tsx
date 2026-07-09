// Keyline Locksmith — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faKey, faLock, faWrench, faCar, faBuildingShield, faVault,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faKey,            title: "Emergency Lockout", body: "24/7 home, office, and vehicle lockouts. Non-destructive entry when possible — fast arrival across Central Texas.", link: "/services/emergency-lockout" },
    { icon: faLock,           title: "Rekey & Lock Change", body: "Rekey existing hardware or install new locks after a move, lost keys, or tenant turnover.", link: "/services/rekey-lock-change" },
    { icon: faWrench,         title: "Smart Lock Installation", body: "Keypad, Wi-Fi, and app-enabled locks installed and configured for homes and rentals.", link: "/services/smart-locks" },
    { icon: faCar,            title: "Car Keys & Fobs", body: "Cut and program automotive keys and fobs — often on-site, often faster than the dealership.", link: "/services/car-keys" },
    { icon: faBuildingShield, title: "Commercial Access Control", body: "Door hardware and credentials for offices, retail, and multi-unit properties.", link: "/services/commercial-access" },
    { icon: faVault,          title: "Safe Services", body: "Safe opening, combination changes, and careful service for home and business safes.", link: "/services/safe-services" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we pick a lock or change hardware. No hourly billing, no surprise add-ons." },
    { icon: faShieldHalved,   title: "Licensed · Bonded & Insured", description: "Every tech is a licensed locksmith, bonded and insured." },
    { icon: faUsers,          title: "Locally Owned Since 2005", description: "Founded in Waco by Luis Mercado. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm emergency or scheduled service.", icon: faHeadset },
    { number: 2, title: "We Assess On-Site", description: "A licensed locksmith inspects and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality hardware, clean workmanship, Workmanship Guaranteed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years of local locksmith experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does locksmith service cost in Waco?", answer: "Most residential lockouts and rekeys range from $75–$250 depending on time of day and complexity. Smart locks and automotive programming vary by brand. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on all lock brands?", answer: "Yes — Schlage, Kwikset, Yale, Baldwin, Medeco, Master Lock, and most commercial hardware. Call if you have a specialty brand." },
    { question: "Do you offer 24/7 emergency service?", answer: "Yes — emergency lockouts are available 24/7 including nights, weekends, and holidays. Call (254) 820-2020 anytime." },
    { question: "Are you bonded and insured?", answer: "Yes — Keyline Locksmith is licensed, bonded, and insured." },
    { question: "Do you offer a warranty?", answer: "Yes — workmanship is guaranteed on the services we perform. Hardware warranties follow manufacturer coverage where applicable." },
    { question: "Do you serve Temple and Killeen?", answer: "Yes — Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and surrounding Central Texas." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Locksmith Services for Waco & Central Texas"
        subtitle="Emergency lockouts, rekey, smart locks, car keys, commercial access, and safes — done right, priced upfront, backed by 24/7 Emergency Response · Workmanship Guaranteed."
      />

      <TrustBar headline="20,000+ Central Texas calls answered by Keyline Locksmith" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose Keyline" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Locksmith Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need a Locksmith Today?"
        subline="24/7 emergency response available. Flat-rate pricing. Workmanship Guaranteed."
        primaryText="Call (254) 820-2020"
        primaryLink="tel:+12548202020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
