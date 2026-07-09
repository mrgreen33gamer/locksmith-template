"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faKey, faLock, faWrench, faBuildingShield,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No proactive rekey schedule at turnover", consequence: "Units go live with old keys still in circulation — driving lockouts, complaints, and security risk." },
    { icon: faFileInvoiceDollar, problem: "Lock costs blow up CapEx with no warning", consequence: "Without multi-unit pricing, rekey waves and hardware swaps land as surprise line items." },
    { icon: faUsers, problem: "Tenants disrupted by late or no-show techs", consequence: "Missed access windows create complaints to the PM office that reliable scheduling would avoid." },
    { icon: faBuilding, problem: "Different units get different quality of work", consequence: "Rotating freelancers leave inconsistent hardware and keying across the portfolio." },
    { icon: faClipboardList, problem: "No single point of contact for multi-property work", consequence: "Coordinating separate quotes and crews for each building wastes management time." },
    { icon: faHandshake, problem: "Vendors don't understand PM workflows", consequence: "Access notices, owner approvals, and turnover timelines all move on their own schedule." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Rekey Planning", description: "Phased schedules across units and buildings — turnovers, common doors, and CapEx upgrades." },
    { icon: faFileInvoiceDollar, title: "Locked-In, Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes so ownership sees predictable numbers." },
    { icon: faUsers, title: "Tenant-Friendly Scheduling", description: "We coordinate access windows so your office isn't fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk units, document hardware, and prioritize risk.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-unit pricing synced to turnovers and CapEx cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move unit-by-unit with consistent keying quality.", icon: faRocket },
    { number: 4, title: "Standing Service", description: "Optional standing rekey/lockout support for the portfolio.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 80, label: "Multi-unit properties serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 15, label: "PM companies on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit rekey planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated project lead", others: "❌ Different tech each time" },
    { feature: "Tenant communication support", us: "✅ Built into scheduling", others: "❌ Minimal notice" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOAs, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule rekeys and lock changes around your turnover calendar and can often turn units same-week." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you standardize smart locks across a complex?", answer: "Yes. Consistent brands, code workflows, and documentation are part of our multi-unit approach." },
    { question: "What areas do you cover for PM work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faKey, title: "Emergency Lockout", body: "Tenant and maintenance lockouts resolved fast.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "Turnover rekeys across units.", link: "/services/rekey-lock-change" },
    { icon: faWrench, title: "Smart Lock Installation", body: "Code-based access for rentals.", link: "/services/smart-locks" },
    { icon: faBuildingShield, title: "Commercial Access Control", body: "Common-area and office hardware.", link: "/services/commercial-access" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and scattered-site PM work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban rental portfolios.", badge: "" },
    { town: "Woodway", benefit: "Premium rentals and townhomes.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site residential portfolios.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Locksmith Service for Property Management" subtitle="Portfolio-wide rekeys, lockouts, smart locks, and access hardware for multi-unit and scattered-site properties across Central Texas." />
      <TrustBar headline="Property managers trust Keyline Locksmith for turnovers and standing service" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Managers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="PM Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a PM Portfolio Quote" cityName="Waco" slug="industries/property-management" spot="pm-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Locksmith Who Understands Turnovers?" subline="COIs available. Volume pricing. Single point of contact." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
