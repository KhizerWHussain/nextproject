import CustomImage from "@/components/CustomImage";
import styles from "./singlepost.module.css";
import Image from "../../../../public/noavatar.png";

const SinglePostPage = () => {
  const detailsArray = [
    {
      id: 1,
      title: "Author",
      value: "Khizer Hussain",
    },
    {
      id: 2,
      title: "Published",
      value: "20.05.2024",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <CustomImage
          image={Image}
          alt={"details"}
          fill
          priority={false}
          unoptimized={false}
          key={"detail"}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <CustomImage
            image={Image}
            alt={"details"}
            priority={false}
            unoptimized={false}
            key={"detail"}
            className={styles.avatar}
            width={50}
            height={50}
          />
          {detailsArray.map((item, i) => (
            <div className={styles.detailText} key={`${i}.${item.id}`}>
              <span className={styles.detailTitle}>{item.title}</span>
              <span className={styles.detailValue}>{item.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          Nam eu nunc eu lectus accumsan feugiat nec a quam. Curabitur iaculis
          elementum dui ac faucibus. In at tortor sed lacus mollis vestibulum id
          quis sem. Quisque nec felis mauris. Integer auctor, nibh eu sodales
          dictum, lectus arcu ultricies erat, vitae efficitur nunc felis et
          odio. Aenean tincidunt fermentum nisl, ac placerat neque molestie in.
          Morbi gravida metus at velit pulvinar, a feugiat ex dignissim. Fusce
          laoreet sem vel arcu hendrerit
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
