import PostCardComponent from "@/components/postcard";
import styles from "./blog.module.css";

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
  const posts = await getAllPosts();
  // console.log(data);

  // fetch data without api
  // const { data } = await getPosts();

  return (
    <div className={styles.container}>
      {posts &&
        posts?.data?.map((item, i) => (
          <div className={styles.post} key={`${i}.${item.id}`}>
            <PostCardComponent item={item} />
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
