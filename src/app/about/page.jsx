import AboutImage from "../../../public/about.png";
import CustomImage from "@/components/CustomImage";
import styles from "./about.module.css";

const boxesArray = [
  {
    id: 1,
    title: "10 K+",
    text: "Year of Experience",
  },
  {
    id: 1,
    title: "10 K+",
    text: "Year of Experience",
  },
  {
    id: 1,
    title: "10 K+",
    text: "Year of Experience",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver, and better
        </h1>
        <p className={styles.desc}>
          Nunc lobortis accumsan quam, vitae aliquam dui viverra sit amet. Nunc
          rhoncus ante velit, eu accumsan nunc faucibus quis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Sed eu nibh lectus. Curabitur sit amet massa tortor.
          Morbi lobortis bibendum nulla sit amet pellentesque.
        </p>
        <div className={styles.boxes}>
          {boxesArray.map((item, i) => (
            <div className={styles.box} key={`${i}.${item.id}`}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <CustomImage
          image={AboutImage}
          alt={"about image"}
          priority={true}
          unoptimized={false}
          key={"about"}
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
