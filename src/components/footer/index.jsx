import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>KH</div>
      <div className={styles.text}>
        KH creative thoughts agency all rights reserved
      </div>
    </div>
  );
};

export default Footer;
