'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Hardware & Brands We Install',
    items: [
      { name: 'Schlage',        type: 'brand', icon: '🔑' },
      { name: 'Kwikset',        type: 'brand', icon: '🔑' },
      { name: 'Yale',           type: 'brand', icon: '🔑' },
      { name: 'August',         type: 'brand', icon: '🔑' },
      { name: 'Baldwin',        type: 'brand', icon: '🔑' },
      { name: 'Medeco',         type: 'brand', icon: '🔑' },
      { name: 'Mul-T-Lock',     type: 'brand', icon: '🔑' },
      { name: 'Master Lock',    type: 'brand', icon: '🔑' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'Licensed Locksmith',   type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',     type: 'cert', icon: '✓' },
      { name: 'ALOA Member Practices', type: 'cert', icon: '✓' },
      { name: 'Workmanship Guaranteed', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Emergency Lockouts',   type: 'tool', icon: '🔐' },
      { name: 'Rekey & Hardware',     type: 'tool', icon: '🔐' },
      { name: 'Smart Locks',          type: 'tool', icon: '🔐' },
      { name: 'Automotive Keys',      type: 'tool', icon: '🔐' },
      { name: 'Access Control',       type: 'tool', icon: '🔐' },
      { name: 'Safe Opening',         type: 'tool', icon: '🔐' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Licensed Work, Trusted Hardware',
  subtitle = 'We install and service major lock brands — licensed locksmiths, no shortcuts on security or materials.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <span className={styles.groupLabel}>{group.label}</span>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className={`${styles.item} ${item.type === 'cert' ? styles.itemCert : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: gi * 0.06 + ii * 0.04, duration: 0.4, ease: 'easeOut' }}
                  >
                    {item.type === 'cert' ? (
                      <div className={styles.certCheck} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    ) : (
                      <div className={styles.itemDot} aria-hidden="true" />
                    )}
                    <span className={styles.itemName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
