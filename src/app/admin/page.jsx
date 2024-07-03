import React, { Suspense } from "react";
import style from "./admin.module.css";
import AdminPosts from "./../../components/AdminPosts";
import AdminPostForm from "./../../components/AdminPostForm/index";
import AdminAddUsers from "./../../components/AdminAddUsers/index";
import AdminUserForm from "./../../components/AdminUserForm/index";

const AdminPage = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<p>...loading</p>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={style.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col}>
          <Suspense fallback={<p>...loading</p>}>
            <AdminAddUsers />
          </Suspense>
        </div>
        <div className={style.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
