import CustomImage from "@/components/CustomImage";
import styles from "./contact.module.css";
import ContactImage from "../../../public/contact.png";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <CustomImage
          image={ContactImage}
          fill
          alt={"contact"}
          priority={true}
          unoptimized={false}
          className={styles.img}
          key={"contact"}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
