import { Outlet } from "react-router-dom";
import Header from "./componets/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
