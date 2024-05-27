import Link from "next/link";
import Links from "./links";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default NavbarComponent;
