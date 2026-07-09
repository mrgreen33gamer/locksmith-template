// Locksmith Hero C — Night city blocks + key hub + amber response ring
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function ServiceAreaMap({
  mapCenterLabel,
  mapPins,
  coverageLabel,
}: {
  mapCenterLabel: string;
  mapPins: Array<{ label: string; x: number; y: number }>;
  coverageLabel?: string;
}) {
  return (
    <div
      className={`${styles.mapCard} ${styles.nightMap}`}
      role="img"
      aria-label={`Service area map centered on ${mapCenterLabel}`}
    >
      <svg
        className={styles.mapSvg}
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lockNightGlow" cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor="rgba(234, 179, 8, 0.16)" />
            <stop offset="50%" stopColor="rgba(234, 179, 8, 0.05)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
          <linearGradient id="lockBlockLit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
          </linearGradient>
        </defs>

        {/* Deep night wash */}
        <rect width="400" height="320" fill="rgba(8, 10, 18, 0.55)" />
        <rect width="400" height="320" fill="url(#lockNightGlow)" />

        {/* City street grid */}
        <g stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none">
          <line x1="0" y1="70" x2="400" y2="70" />
          <line x1="0" y1="130" x2="400" y2="130" />
          <line x1="0" y1="190" x2="400" y2="190" />
          <line x1="0" y1="250" x2="400" y2="250" />
          <line x1="60" y1="0" x2="60" y2="320" />
          <line x1="140" y1="0" x2="140" y2="320" />
          <line x1="220" y1="0" x2="220" y2="320" />
          <line x1="300" y1="0" x2="300" y2="320" />
          <line x1="360" y1="0" x2="360" y2="320" />
        </g>

        {/* Building blocks */}
        <rect x="72" y="82" width="56" height="38" fill="url(#lockBlockLit)" stroke="rgba(255,255,255,0.08)" />
        <rect x="152" y="82" width="56" height="38" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="232" y="82" width="56" height="38" fill="url(#lockBlockLit)" stroke="rgba(255,255,255,0.08)" />
        <rect x="72" y="142" width="56" height="38" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.06)" />
        <rect x="152" y="142" width="56" height="38" fill="url(#lockBlockLit)" stroke="rgba(234,179,8,0.15)" />
        <rect x="232" y="142" width="56" height="38" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
        <rect x="312" y="142" width="40" height="38" fill="url(#lockBlockLit)" stroke="rgba(255,255,255,0.07)" />
        <rect x="72" y="202" width="56" height="38" fill="url(#lockBlockLit)" stroke="rgba(255,255,255,0.07)" />
        <rect x="152" y="202" width="56" height="38" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <rect x="232" y="202" width="56" height="38" fill="url(#lockBlockLit)" stroke="rgba(255,255,255,0.07)" />

        {/* Window dots on blocks */}
        <g fill="rgba(234, 179, 8, 0.35)">
          <circle cx="86" cy="94" r="1.5" />
          <circle cx="98" cy="94" r="1.5" />
          <circle cx="110" cy="94" r="1.5" />
          <circle cx="86" cy="106" r="1.5" />
          <circle cx="98" cy="106" r="1.5" />
          <circle cx="246" cy="154" r="1.5" />
          <circle cx="258" cy="154" r="1.5" />
          <circle cx="270" cy="154" r="1.5" />
          <circle cx="86" cy="214" r="1.5" />
          <circle cx="98" cy="214" r="1.5" />
          <circle cx="246" cy="214" r="1.5" />
          <circle cx="258" cy="214" r="1.5" />
        </g>

        {/* Amber response ring (static SVG) */}
        <circle
          cx="200"
          cy="160"
          r="78"
          fill="none"
          stroke="rgba(234, 179, 8, 0.28)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          className={styles.responseRingSvg}
        />
        <circle
          cx="200"
          cy="160"
          r="52"
          fill="none"
          stroke="rgba(234, 179, 8, 0.4)"
          strokeWidth="1.25"
        />
      </svg>

      {/* Amber response rings (CSS pulse) */}
      <div className={`${styles.rings} ${styles.amberRings}`} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ring1}`} />
        <span className={`${styles.ring} ${styles.ring2}`} />
        <span className={`${styles.ring} ${styles.ring3}`} />
      </div>

      {/* Key-shaped hub pin */}
      <div className={`${styles.centerPin} ${styles.keyHub}`}>
        <div className={styles.keyPinIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="9" r="4.5" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12.5 11.5 L20 19 M17 16 L20 16 L20 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className={styles.centerLabel}>{mapCenterLabel}</span>
      </div>

      {mapPins.map((pin) => (
        <div
          key={`${pin.label}-${pin.x}-${pin.y}`}
          className={styles.satPin}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <span className={`${styles.satDot} ${styles.amberDot}`} />
          <span className={styles.satLabel}>{pin.label}</span>
        </div>
      ))}

      {coverageLabel && (
        <div className={`${styles.coverageBadge} ${styles.amberBadge}`}>
          <span className={`${styles.coverageDot} ${styles.amberDot}`} />
          {coverageLabel}
        </div>
      )}
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Locksmith — Since 2005";
  const headlineLines = ['Locked Out.', 'Keys Lost.'];
  const headlineAccent = 'Keyline Locksmith.';
  const subheadline =
    '24/7 Lockouts · Locks · Keys · Security. Flat-rate pricing. Fast emergency response. Workmanship Guaranteed. Serving Waco and Central Texas with licensed, bonded locksmiths.';
  const primaryCta = { label: 'Call (254) 820-2020', href: 'tel:+12548202020' };
  const secondaryCta = { label: 'Get Help Now', href: '/contact' };
  const chips = [
    '24/7 Emergency',
    'No Contracts',
    'Licensed Locksmith',
    '20+ Yrs Local',
    'Workmanship Guaranteed',
  ];
  const mapCenterLabel = 'Service HQ';
  const mapPins = [
    { label: 'Waco', x: 42, y: 48 },
    { label: 'Temple', x: 68, y: 62 },
    { label: 'Killeen', x: 58, y: 72 },
  ];
  const coverageLabel = 'Central Texas coverage';

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <ServiceAreaMap
            mapCenterLabel={mapCenterLabel}
            mapPins={mapPins}
            coverageLabel={coverageLabel}
          />
        </motion.div>
      </div>
    </section>
  );
}
