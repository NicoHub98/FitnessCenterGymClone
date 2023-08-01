import styles from './styles.module.css'

const Section = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Section;