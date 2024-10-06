import styles from "../styles/HomePage.module.css";
import HomePageMainButtons from "./HomePageMainButtons";

export default function HomePage() {
  return (
    <main
      className={`${styles.homeBgImg} lg:h-[100vh] h-fit  bg-cover 
      grid lg:grid-cols-2 grid-cols-1 lg:py-16 py-20  gap-5 place-items-center

      `}
    >
      <HomePageMainButtons
        title={"Add Work"}
        description={"Add work to monitor your progess"}
      />
      <HomePageMainButtons
        title={"Monitor Work"}
        description={"Monitor your works and hours"}
      />
      <HomePageMainButtons
        title={"Monitor Previous Day"}
        description={"Monitor your works and hours of the previous day"}
      />
      <HomePageMainButtons
        title={"Monitor Previous week"}
        description={"monitor your progress of previous week"}
      />
    </main>
  );
}
