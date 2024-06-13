import Link from "next/link";
import Links from "./links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const NavbarComponent = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>
        Logo
      </Link>
      <Links session={session} />
    </div>
  );
};

export default NavbarComponent;
