// src/components/Layout.tsx
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;
