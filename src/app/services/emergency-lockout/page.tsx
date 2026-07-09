// Keyline Locksmith — Emergency Lockout Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faKey, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faLock, faCar, faWrench,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function EmergencyLockoutPage() {

  const expectations = [
    { icon: faSearch,       title: "Fast Arrival", description: "We prioritize emergency lockouts and aim for rapid response across Waco and nearby towns — day or night." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start", description: "You get a clear price before we open anything. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Non-Destructive Entry When Possible", description: "We prefer methods that leave your door and lock intact. Damage is a last resort — and we'll tell you first." },
    { icon: faShieldHalved, title: "Workmanship Guaranteed", description: "Every lockout we complete is handled by a licensed locksmith. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "24/7 Emergency Response", description: "We answer nights, weekends, and holidays. A lockout can't wait until Monday morning." },
    { icon: faKey,          title: "Home, Office & Vehicle", description: "Residential doors, commercial suites, and automotive lockouts — one call covers all three." },
    { icon: faShieldHalved, title: "Licensed Locksmith", description: "Every tech is a licensed locksmith, bonded and insured. You're never dealing with an unlicensed subcontractor." },
  ];

  const processSteps = [
    { number: 1, title: "Call Us", description: "Tell us location and type of lockout. We dispatch immediately when possible.", icon: faHeadset },
    { number: 2, title: "Tech Arrives", description: "On time, identified, with the tools needed for most residential and auto locks.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Secure Entry", description: "We get you back in carefully, test the lock, and leave you secured.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years serving Waco-area homes and businesses", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full emergency lockout coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-hour lockout service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for ETA.", badge: "" },
    { town: "Temple",       benefit: "Full lockout coverage for Bell County homes and cars.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always quoted", others: "❌ Hourly + estimate only" },
    { feature: "24/7 emergency response", us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "Licensed locksmiths", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Non-destructive entry preferred", us: "✅ Standard practice", others: "❌ Often drill first" },
    { feature: "Home, office & vehicle", us: "✅ All three", others: "❌ Residential only" },
  ];

  const faq = [
    { question: "How much does an emergency lockout cost in Waco?", answer: "Most residential lockouts range from $75–$200 depending on time of day and lock type. After-hours rates may apply. We quote flat-rate before starting." },
    { question: "How fast can you get here?", answer: "In most of Waco and nearby towns we aim for under 30–45 minutes depending on traffic and current call volume. Call (254) 820-2020 for a live ETA." },
    { question: "Will you damage my door or lock?", answer: "We use non-destructive methods whenever possible. If drilling or hardware damage is required, we explain options and get your approval first." },
    { question: "Do you open cars too?", answer: "Yes — vehicle lockouts are a core service. We also cut and program car keys and fobs when needed." },
    { question: "Do I need ID?", answer: "Yes. We verify identity and right of access before opening a property or vehicle — for your protection and ours." },
    { question: "Do you service commercial properties?", answer: "Yes — offices, retail suites, and multi-unit properties are within our scope. Call to discuss after-hours access." },
  ];

  const crossServices = [
    { icon: faLock,   title: "Rekey & Lock Change", body: "New keys for existing locks after a lockout or lost key set.", link: "/services/rekey-lock-change" },
    { icon: faWrench, title: "Smart Lock Installation", body: "Upgrade to keypad or app access so lockouts are rarer.", link: "/services/smart-locks" },
    { icon: faCar,    title: "Car Keys & Fobs", body: "Cut and program replacement keys when you're locked out of the car.", link: "/services/car-keys" },
    { icon: faKey,    title: "Commercial Access Control", body: "Business access hardware and credential updates.", link: "/services/commercial-access" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Emergency Lockout" },
      ]} />

      <SectionIntro
        title="Emergency Lockout Service in Waco, TX"
        subtitle="24/7 home, office, and vehicle lockouts — flat-rate pricing, non-destructive entry when possible, and licensed locksmiths who show up fast."
      />

      <TrustBar headline="20,000+ Central Texas calls answered by Keyline Locksmith" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for a Lockout" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Keyline Locksmith First" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/emergency-lockout" title="Emergency Lockouts Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Emergency Lockout FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Locked Out Right Now? Call Us."
        subline="24/7 emergency response. Flat-rate pricing. Licensed, bonded & insured."
        primaryText="Call Us Now"
        primaryLink="tel:+12548202020"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Schedule Emergency or Standard Lockout Help" cityName="Waco" slug="services/emergency-lockout" spot="emergency-lockout-page-form" formVariant={2} />
      </div>

    </main>
  );
}
