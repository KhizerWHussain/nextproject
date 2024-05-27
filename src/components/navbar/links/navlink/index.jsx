"use client";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item, index }) => {
  const pathname = usePathname();
  return (
    <Link
      key={`${index}.${item.id}`}
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
