"use client";
import React, { useEffect } from "react";
import { register } from "../../lib/actions";
import styles from "./register.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  console.log(state);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account ? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
