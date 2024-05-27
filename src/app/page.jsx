import CustomImage from "@/components/CustomImage";
import styles from "./home.module.css";
import BrandImage from "../../public/brands.png";
import HeroImage from "../../public/hero.gif";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis leo magna, at placerat nisi pellentesque id. Nulla facilisi.
          Nam vitae purus eget ante tincidunt faucibus. Aliquam magna mauris,
          aliquam ac dictum ut, ultricies vitae risus.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <CustomImage
            image={BrandImage}
            fill
            alt="brands"
            unoptimized={false}
            priority={true}
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <CustomImage
          image={HeroImage}
          fill
          alt="hero"
          unoptimized={false}
          priority={true}
          className={styles.HeroImg}
        />
      </div>
    </div>
  );
};

export default Home;
