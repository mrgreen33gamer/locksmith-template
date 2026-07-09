// Keyline Locksmith — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2005",
      description: "Keyline Locksmith was founded in Waco by Luis Mercado, a Waco native and lead locksmith with 20+ years in the trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust at Your Door",
      description: "Every technician on our team is background-checked, licensed, bonded & insured. We treat every home and business we enter with the same respect we'd want for our own families.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full hardware package when a rekey will do. We won't drill a lock when non-destructive entry works. Our reputation is built on straight talk.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 20000, label: "Calls answered across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm emergency or scheduled service that fits your timeline.", icon: faClipboardCheck },
    { number: 2, title: "Assess Honestly", description: "A licensed locksmith inspects the lock or vehicle and explains options in plain English — not just the most expensive one.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed.", icon: faBolt },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality hardware, clean workmanship, 24/7 Emergency Response · Workmanship Guaranteed.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Keyline Locksmith"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2005. 24/7 Lockouts · Locks · Keys · Security — honest work at fair prices for the families and businesses we've called neighbors for 20 years."
      />

      <TrustBar headline="20,000+ Central Texas calls answered — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="20 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Need a Locksmith You Can Trust?"
        subline="Licensed, bonded & insured. Flat-rate pricing. 24/7 emergency response."
        primaryText="Call (254) 820-2020"
        primaryLink="tel:+12548202020"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />

    </main>
  );
}
