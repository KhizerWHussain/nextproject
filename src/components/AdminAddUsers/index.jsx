import React from "react";
import style from "./addusers.module.css";
import { getAllUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "../../lib/actions";

const AdminAddUsers = async () => {
  const { data } = await getAllUsers();

  console.log("data +> ", data);

  return (
    <div className={style.container}>
      <h1>Users</h1>
      {data &&
        data?.map((item, i) => (
          <div className={style.post} key={`${i}.${item.id}`}>
            <div className={style.detail}>
              <Image
                src={item?.image ? item?.image : ""}
                alt={item?.name}
                width={50}
                height={50}
              />
              <span className={style.title}>{item?.title}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={item?._id} />
              <button className={style.delBtn}>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminAddUsers;
