import PostCardComponent from "@/components/postcard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "creative thoughts agency",
};

const getAllPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/v1/blog", {
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

const BlogPage = async () => {
  // fetch data with an api
  const { data } = await getAllPosts();
  // console.log(data);

  // fetch data without api
  // const { data } = await getPosts();

  return data ? (
    <div className={styles.container}>
      {data?.map((item, i) => (
        <div className={styles.post} key={`${i}.${item.id}`}>
          <PostCardComponent item={item} />
        </div>
      ))}
    </div>
  ) : null;
};

export default BlogPage;
