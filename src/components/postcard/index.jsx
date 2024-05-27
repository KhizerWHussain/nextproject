import React from "react";
import styles from "./postcard.module.css";
import CustomImage from "../CustomImage";
import Link from "next/link";

const PostCardComponent = ({ item }) => {
  const { id, image, date, title, desc, slug } = item;
  return (
    <div className={styles.container} key={id}>
      <div className={styles.top}>
        {image && (
          <div className={styles.imgContainer}>
            <CustomImage
              image={image}
              alt={"blog"}
              fill
              priority={true}
              unoptimized={false}
              key={"blog"}
            />
          </div>
        )}
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={`/blog/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCardComponent;
