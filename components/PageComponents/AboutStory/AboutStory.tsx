// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "We started Keyline Locksmith because we were tired of watching homeowners get ripped off by fly-by-night lockout scams."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Luis Mercado</span>
              <span className={styles.pullTitle}>Founder, Keyline Locksmith</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2005 in Waco, TX, Keyline Locksmith started with one truck and one principle:
              give homeowners the straight story about their locks and keys, charge a fair price, and back the
              work with a real guarantee. No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with a crew of licensed locksmiths
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2005', label: 'Founded in Waco' },
                { year: '2012', label: 'Expanded to 5 techs' },
                { year: '2018', label: '10,000 calls answered' },
                { year: '2024', label: '2,400+ systems serviced' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
