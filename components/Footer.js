import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          As we hope our work (and the even harder work of others) will one day
          no longer be needed, we ask for the implementation of proper roadmaps
          and release calendars on every official survey. To support us, please
          consider doing the same. - SYP Team
        </p>
      </footer>
    </>
  );
}
