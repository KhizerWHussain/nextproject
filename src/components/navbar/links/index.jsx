"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink";
import CustomImage from "@/components/CustomImage";
import MenuImage from "../../../../public/menu.png";
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";

const linksArray = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {linksArray.map((link, index) => (
          <NavLink item={link} index={index} key={index} />
        ))}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <CustomImage
        image={MenuImage}
        alt="menu"
        priority={true}
        unoptimized={false}
        key={"menu"}
        height={30}
        width={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLink}>
          {linksArray.map((link, i) => (
            <NavLink item={link} index={i} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
