import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Trainers from "./pages/Trainers";
import Contacts from "./pages/Contacts";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "about":
        return <About />; 
      case "trainers":
        return <Trainers />;
      case "contacts":
        return <Contacts />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {renderPage()}

      <Footer onNavigate={handleNavigate} />
    </>
  );
}
