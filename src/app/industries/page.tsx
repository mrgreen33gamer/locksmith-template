"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A property manager, an auto dealer, and a retail security lead all work differently. Before we quote, we learn your access process, budget cycle, and downtime constraints.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed, Bonded & Insured",
      description: "We're based in Waco, TX with licensed locksmiths and full insurance — the documentation multi-unit, fleet, and retail projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Lockouts, Rekey & Access — One Vendor",
      description: "Whether your project needs multi-unit rekeys, fleet key programming, or retail access hardware — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 200,  label: "Commercial and multi-unit security projects completed",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 20,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving PM, dealers, and retail clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Commercial and multi-unit properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Retail, apartments, and fleet operations.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban commercial.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium rentals.", badge: "" },
    { town: "McGregor", benefit: "Light industrial and commercial properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 20+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Licensed commercial locksmith crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "24/7 Emergency Response · Workmanship Guaranteed", us: "✅ On every job", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does Keyline Locksmith work with?",
      answer: "We have dedicated experience with property management companies, auto dealers & fleets, and retail security — in addition to residential locksmith services.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around access rules, turnover calendars, and security requirements — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
    {
      question: "Do you provide insurance certificates?",
      answer: "Yes — COIs for property managers, dealers, and ownership groups are available on request.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Property management, auto dealers & fleets, and retail security — locksmith and access solutions built for how your operation actually runs."
      />
      <TrustBar headline="B2B clients trust Keyline Locksmith for access and security work" />
      <div className={styles.section}><SectionIndustriesServed /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose Keyline" /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="B2B Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Business Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} /></div>
      <CTABanner
        headline="Need a Locksmith Who Understands Your Industry?"
        subline="COIs available. Volume pricing. Single point of contact."
        primaryText="Call (254) 820-2020"
        primaryLink="tel:+12548202020"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
