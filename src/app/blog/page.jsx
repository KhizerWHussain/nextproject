import PostCardComponent from "@/components/postcard";
import styles from "./blog.module.css";
import Image from "../../../public/noavatar.png";
import { getPosts } from "@/lib/data";

const postsArray = [
  {
    id: 1,
    title: "Title",
    desc: "description",
    date: "01.01.2024",
    image: Image,
  },
  {
    id: 2,
    title: "Title",
    desc: "description",
    date: "01.01.2024",
    image: Image,
  },
  {
    id: 3,
    title: "Title",
    desc: "description",
    date: "01.01.2024",
    image: Image,
  },
  {
    id: 4,
    title: "Title",
    desc: "description",
    date: "01.01.2024",
    image: Image,
  },
];

const BlogPage = async () => {
  const posts = await getPosts();

  console.log("posts => ", posts);

  return posts ? (
    <div className={styles.container}>
      {posts?.map((item, i) => (
        <div className={styles.post} key={`${i}.${item.id}`}>
          <PostCardComponent item={item} />
        </div>
      ))}
    </div>
  ) : null;
};

export default BlogPage;
