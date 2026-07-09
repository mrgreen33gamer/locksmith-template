// src/app/service-areas/page.tsx
// Keyline Locksmith — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest response times, 24/7 emergency lockouts, rekey, smart locks, car keys, commercial access, and safe services across all of Waco.',
    highlights:  ['Same-day service', 'Emergency dispatch', 'All services available'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full locksmith coverage for Hewitt homes and businesses. Fast dispatch from our Waco base — typically under 45 minutes.',
    highlights:  ['45-min dispatch', 'Residential & commercial', 'Rekey packages'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway's residential neighborhoods with the same flat-rate pricing and workmanship guarantee as every other area we cover.",
    highlights:  ['Flat-rate pricing', 'Workmanship Guaranteed', 'Licensed locksmiths'],
  },
  {
    city:        'Bellmead',
    slug:        'bellmead-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable locksmith service for Bellmead residents and businesses. Lockouts, rekeys, and security upgrades — same-day when available.',
    highlights:  ['Residential & commercial', 'Licensed locksmiths', 'No contracts'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential locksmith service for the China Spring area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Emergency available'],
  },
  {
    city:        'McGregor',
    slug:        'mcgregor-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Locksmith service for McGregor homes and light commercial properties — lockouts, rekeys, and access hardware.',
    highlights:  ['Shop & residential', 'Commercial hardware', 'Same-day when available'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Locksmith service for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Residential & commercial', 'Same-day when available'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service locksmith coverage for Temple. Medical district and surrounding neighborhoods served — residential and commercial.',
    highlights:  ['Full service coverage', 'All neighborhoods', 'Commercial & residential'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Waco, Hewitt, Woodway, Bellmead, China Spring, McGregor, Temple, Killeen, and most of Central Texas within about 60 miles of Waco. Call (254) 820-2020 to confirm your address.',
  },
  {
    question: 'Do you charge trip fees for outlying areas?',
    answer: 'Most addresses in our primary coverage area have no separate trip fee. Remote locations may include a modest travel charge disclosed before we dispatch.',
  },
  {
    question: 'Is 24/7 emergency service available outside Waco?',
    answer: 'Yes. Emergency lockouts are available 24/7 across our service area. ETA depends on distance and current call volume.',
  },
  {
    question: 'Do you offer the same services in every city?',
    answer: 'Yes — emergency lockouts, rekey & lock change, smart locks, car keys & fobs, commercial access, and safe services are available throughout our coverage area.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Coverage Map</span>
          <h1 className={styles.title}>Locksmith Service Areas Across Central Texas</h1>
          <p className={styles.subtitle}>
            Based in Waco — serving homes and businesses from McLennan County to Bell County with 24/7 emergency response.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {SERVICE_AREAS.map((area, i) => (
            <motion.article
              key={area.city}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <div className={styles.cardTop}>
                <h2 className={styles.city}>{area.city}</h2>
                {area.badge && <span className={styles.badge}>{area.badge}</span>}
              </div>
              <p className={styles.county}>{area.county}</p>
              <p className={styles.desc}>{area.description}</p>
              <ul className={styles.highlights}>
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.cardLink}>
                Request service in {area.city} →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <div className={styles.section}>
        <FAQ cityName="Central Texas" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="Not Sure If We Cover Your Address?"
        subline="Call (254) 820-2020 — we'll confirm coverage and give you a live ETA."
        primaryText="Call (254) 820-2020"
        primaryLink="tel:+12548202020"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
