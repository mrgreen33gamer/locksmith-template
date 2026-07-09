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
  faStore, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock, faCalendarAlt,
  faKey, faLock, faVault, faBuildingShield,
} from "@fortawesome/free-solid-svg-icons";

export default function RetailSecurityIndustryPage() {

  const painPoints = [
    { icon: faStore, problem: "Storefront hardware fails during peak hours", consequence: "Broken locks or stuck doors mean lost sales and security gaps." },
    { icon: faFileInvoiceDollar, problem: "After-hours lockouts cost more than planned", consequence: "No standing vendor means panic pricing when the manager is locked out." },
    { icon: faUsers, problem: "Employee turnover leaves keys in the wild", consequence: "Former staff still have access to stockrooms and cash offices." },
    { icon: faBuilding, problem: "Inconsistent hardware across locations", consequence: "Every store is a different key system with no master plan." },
    { icon: faClipboardList, problem: "Safe combinations never change", consequence: "Shared combos and forgotten codes create audit and theft risk." },
    { icon: faHandshake, problem: "Vendors don't work after retail hours", consequence: "Installs during open hours disrupt customers and staff." },
  ];

  const whyFeatures = [
    { icon: faStore, title: "Retail-Hours Friendly", description: "After-hours installs and emergency lockouts that protect sales time." },
    { icon: faFileInvoiceDollar, title: "Multi-Location Pricing", description: "Consistent rates across your Central Texas stores." },
    { icon: faUsers, title: "Staff Turnover Protocols", description: "Rekeys and combo changes when employees leave." },
  ];

  const processSteps = [
    { number: 1, title: "Location Survey", description: "Storefront, stockroom, office, and safe inventory.", icon: faSearch },
    { number: 2, title: "Security Plan", description: "Hardware, keys, and combo change schedule.", icon: faCalendarAlt },
    { number: 3, title: "After-Hours Work", description: "Installs and rekeys outside peak retail hours.", icon: faRocket },
    { number: 4, title: "Standing Support", description: "Lockout and turnover response when you need it.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 60, label: "Retail locations supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "After-hours retail installs", us: "✅ Available", others: "❌ Business hours only" },
    { feature: "Multi-location rate cards", us: "✅ Available", others: "❌ Re-quoted each store" },
    { feature: "Safe + door hardware together", us: "✅ One vendor", others: "❌ Split contractors" },
    { feature: "Staff turnover rekeys", us: "✅ Fast scheduling", others: "❌ Slow response" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work after store closing?", answer: "Yes — many retail installs and rekeys are scheduled after hours so you don't lose sales time." },
    { question: "Can you support multiple locations?", answer: "Yes — multi-store pricing and a single point of contact across Central Texas." },
    { question: "Do you service store safes?", answer: "Yes — openings, combination changes, and related safe service with ownership verification." },
    { question: "What about panic hardware and storefront doors?", answer: "Common commercial storefront hardware is in scope — we survey specialty exit devices before quoting." },
    { question: "Can you rekey after employee theft risk?", answer: "Yes — rapid rekey and combo change packages for high-risk turnover events." },
  ];

  const services = [
    { icon: faBuildingShield, title: "Commercial Access Control", body: "Storefront and stockroom access hardware.", link: "/services/commercial-access" },
    { icon: faKey, title: "Emergency Lockout", body: "Manager and after-hours lockouts.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "Staff turnover rekeys done fast.", link: "/services/rekey-lock-change" },
    { icon: faVault, title: "Safe Services", body: "Safe opening and combination changes.", link: "/services/safe-services" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Primary retail corridor support.", badge: "Home Base" },
    { town: "Temple", benefit: "Bell County retail locations.", badge: "" },
    { town: "Killeen", benefit: "High-traffic retail centers.", badge: "" },
    { town: "Hewitt", benefit: "Suburban retail suites.", badge: "" },
    { town: "Woodway", benefit: "Professional and boutique retail.", badge: "" },
    { town: "Bellmead", benefit: "Strip centers and local retail.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Retail Security" }]} />
      <SectionIntro title="Locksmith Service for Retail Security" subtitle="Storefront hardware, rekeys, lockouts, and safe service for retail locations across Central Texas — with after-hours options." />
      <TrustBar headline="Retail operators trust Keyline for access and safe security" />
      <div className={styles.section}><IndustryPainPoints industry="retail security" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Retail Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Retail Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/retail-security" title="Retail Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Retail Security FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Retail Security Quote" cityName="Waco" slug="industries/retail-security" spot="retail-security-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Storefront Security That Doesn't Kill Sales Hours?" subline="After-hours installs. Multi-location pricing. Licensed & insured." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
