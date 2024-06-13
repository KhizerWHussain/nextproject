import CustomImage from "@/components/CustomImage";
import styles from "./singlepost.module.css";
import { getPost, getUser } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const { data } = await getPost(slug);
  return {
    title: data?.title,
    description: data?.description,
  };
};

const getSinglePost = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/blog/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  } catch (error) {
    console.log("error =>", error);
  }
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const { data } = await getSinglePost(slug);

  console.log(data);

  // const { data } = await getPost(slug);
  const user = await getUser(data.userId);

  const detailsArray = [
    {
      id: 1,
      title: "Author",
      value: user?.data?.username,
    },
    {
      id: 2,
      title: "Published",
      value: "20.05.2024",
    },
  ];

  return (
    <div className={styles.container} key={data?._id}>
      <div className={styles.imgContainer}>
        <CustomImage
          image={data?.image}
          alt={"details"}
          fill
          priority={false}
          unoptimized={false}
          key={"detail"}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.detail}>
          <CustomImage
            image={user?.data?.image}
            alt={"details"}
            priority={false}
            unoptimized={true}
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
        <div className={styles.content}>{data?.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
