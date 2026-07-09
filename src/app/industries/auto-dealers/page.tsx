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
  faCar, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock, faCalendarAlt,
  faKey, faLock, faWrench, faBuildingShield,
} from "@fortawesome/free-solid-svg-icons";

export default function AutoDealersIndustryPage() {

  const painPoints = [
    { icon: faCar, problem: "Lost or unprogrammed keys stall deliveries", consequence: "Sold units sit because a key or fob isn't ready — killing CSI scores and delivery schedules." },
    { icon: faFileInvoiceDollar, problem: "Dealership key pricing eats margin", consequence: "OEM key channels are slow and expensive for used inventory and lot operations." },
    { icon: faUsers, problem: "Lot security gaps after staff turnover", consequence: "Old facility keys and codes still work when they shouldn't." },
    { icon: faBuilding, problem: "Showroom and service-bay access is inconsistent", consequence: "Different doors, different hardware, no master plan." },
    { icon: faClipboardList, problem: "No vendor for both vehicle keys and building access", consequence: "Two contractors, two invoices, two points of failure." },
    { icon: faHandshake, problem: "Slow response when a customer is stranded on the lot", consequence: "Lockouts during delivery or test-drive handoffs create bad first impressions." },
  ];

  const whyFeatures = [
    { icon: faCar, title: "Automotive + Facility Locksmithing", description: "Car keys, fobs, lot lockouts, and building rekeys under one vendor." },
    { icon: faFileInvoiceDollar, title: "Dealer-Friendly Pricing", description: "Clear rates for common key types and standing lot support." },
    { icon: faUsers, title: "Fast Response for Deliveries", description: "We prioritize dealer calls that block a delivery or CSI metric." },
  ];

  const processSteps = [
    { number: 1, title: "Needs Assessment", description: "Inventory key types, facility doors, and peak delivery windows.", icon: faSearch },
    { number: 2, title: "Service Agreement", description: "Standing rates and response expectations documented.", icon: faCalendarAlt },
    { number: 3, title: "On-Call Execution", description: "Keys programmed and facility hardware maintained as needed.", icon: faRocket },
    { number: 4, title: "Ongoing Support", description: "Staff turnover rekeys and quarterly access reviews optional.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 40, label: "Dealer and fleet accounts supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "On-time completion for scheduled jobs", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Vehicle + facility under one vendor", us: "✅ Both", others: "❌ Separate contractors" },
    { feature: "Dealer-priority response", us: "✅ Available", others: "❌ Residential queue only" },
    { feature: "On-site programming when possible", us: "✅ Many vehicles", others: "❌ Tow to dealer only" },
    { feature: "Facility rekey after staff changes", us: "✅ Same day options", others: "❌ Slow scheduling" },
    { feature: "Licensed & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you program keys for used car inventory?", answer: "Yes for many makes when our equipment supports the immobilizer system. Call with year/make/model for confirmation." },
    { question: "Can you support fleet operators too?", answer: "Yes — municipal, contractor, and commercial fleets needing spare keys and lockout help." },
    { question: "Do you rekey dealership facilities?", answer: "Yes — showroom, service, and lot building hardware, including after staff turnover." },
    { question: "Can we set standing rates?", answer: "Yes — many dealers prefer a simple rate card for common key jobs and after-hours lockouts." },
    { question: "What areas do you cover?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faKey, title: "Car Keys & Fobs", body: "Cut and program inventory and customer keys.", link: "/services/car-keys" },
    { icon: faWrench, title: "Emergency Lockout", body: "Lot and delivery lockouts resolved fast.", link: "/services/emergency-lockout" },
    { icon: faLock, title: "Rekey & Lock Change", body: "Facility rekeys after staff changes.", link: "/services/rekey-lock-change" },
    { icon: faBuildingShield, title: "Commercial Access Control", body: "Showroom and service bay access hardware.", link: "/services/commercial-access" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Primary dealer and fleet support hub.", badge: "Home Base" },
    { town: "Temple", benefit: "Bell County dealership coverage.", badge: "" },
    { town: "Killeen", benefit: "High-volume dealer corridor support.", badge: "" },
    { town: "Hewitt", benefit: "Satellite lots and storage sites.", badge: "" },
    { town: "Woodway", benefit: "Specialty and luxury inventory support.", badge: "" },
    { town: "Bellmead", benefit: "Used inventory and lot operations.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Auto Dealers & Fleets" }]} />
      <SectionIntro title="Locksmith Service for Auto Dealers & Fleets" subtitle="Car keys, fobs, lot lockouts, and facility access for dealerships and fleets across Central Texas." />
      <TrustBar headline="Dealers call Keyline when keys and access can't wait" />
      <div className={styles.section}><IndustryPainPoints industry="auto dealers and fleets" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Dealers & Fleets" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Dealers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/auto-dealers" title="Dealer Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Auto Dealers & Fleets FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Dealer / Fleet Quote" cityName="Waco" slug="industries/auto-dealers" spot="auto-dealers-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need Keys Before Delivery Day?" subline="Automotive programming + facility rekeys. Flat-rate scopes. Licensed & insured." primaryText="Call (254) 820-2020" primaryLink="tel:+12548202020" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
