import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Deals from "@/components/Deals/Deals";
import Newsletter from "@/components/Newsletter/Newsletter";
import OurServices from "@/components/OurServices/OurServices";
import CardCategories from "@/components/CardCategory/CardCategories";

export default function Home() {
  return (
    <>
      <Intro />
      {/* <Deals /> */}
      <CardCategories />
      <OurServices />
      <Newsletter />
    </>
  );
}
