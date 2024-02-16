import Inquiry from "@/components/Inquiry/Inquiry";
import Recommend from "@/components/Recommend/Recommend";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.pageContainer} container`}>
      <Inquiry />
      <Recommend />
    </div>
  );
}
