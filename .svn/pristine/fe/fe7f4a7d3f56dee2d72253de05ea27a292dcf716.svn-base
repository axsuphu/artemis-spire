import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import { NavbarProvider } from "../components/NavBar/NavBarContext";

const MainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen max-w-1920 flex-col bg-space-black bg-cover bg-center">
        <NavbarProvider>
          <NavBar />
          <Outlet />
        </NavbarProvider>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
