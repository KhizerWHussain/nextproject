import React from "react";
import style from "./adminposts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "../../lib/actions";

const AdminPosts = async () => {
  const { data } = await getPosts();

  return (
    <div className={style.container}>
      <h1>Posts</h1>
      {data &&
        data?.map((item, i) => (
          <div className={style.post} key={`${i}.${item.id}`}>
            <div className={style.detail}>
              <Image
                src={item?.image || "No Avatar"}
                alt={item?.name}
                width={50}
                height={50}
              />
              <span className={style.title}>{item?.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={item?._id} />
              <button className={style.delBtn}>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminPosts;
