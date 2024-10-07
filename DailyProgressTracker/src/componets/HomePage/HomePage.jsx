import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";
import HomePageMainButtons from "./HomePageMainButtons";

export default function HomePage() {
  const navigate = useNavigate();

  function selectTab() {
    navigate("/add");
  }

  return (
    <main
      className={`${styles.homeBgImg} lg:h-[100vh] h-fit  bg-cover 
      grid lg:grid-cols-2 grid-cols-1 lg:py-16 py-20  gap-5 place-items-center
      `}
    >
      <HomePageMainButtons onClick={() => selectTab("add")}>
        <h2 className="text-2xl font-extrabold">Add Work</h2>
        <p>Add work to monitor your progess</p>
      </HomePageMainButtons>

      <HomePageMainButtons onClick={() => selectTab("add")}>
        <h2 className="text-2xl font-extrabold">Monitor Work</h2>
        <p>Monitor your works and hours</p>
      </HomePageMainButtons>

      <HomePageMainButtons onClick={() => selectTab("add")}>
        <h2 className="text-2xl font-extrabold">Monitor Previous Day</h2>
        <p>Monitor your works and hours of the previous day</p>
      </HomePageMainButtons>

      <HomePageMainButtons onClick={() => selectTab("add")}>
        <h2 className="text-2xl font-extrabold">Monitor Previous week</h2>
        <p>monitor your progress of previous week</p>
      </HomePageMainButtons>
    </main>
  );
}
