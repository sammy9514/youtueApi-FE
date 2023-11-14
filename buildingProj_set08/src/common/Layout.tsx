import { Outlet } from "react-router-dom";
import { Navv } from "./Nav";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Navv />
      <Outlet />
    </div>
  );
};
