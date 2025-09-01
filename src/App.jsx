import Header from "./components/modules/header";
import Sidebar from "./components/modules/Sidebar";
import { Routes, Route } from "react-router-dom";
import Owerview from "./pages/Owerview";
import { useEffect, useState } from "react";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  useEffect(() => {
    // اگر صفحه موبایل بود، سایدبار بسته باشه
    if (window.innerWidth < 640) {
      setIsOpenSidebar(false);
    }
  }, []);

  return (
    <>
      <Header isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
      <div className="mt-16">
        <Sidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />

        <div
          className={`${
            isOpenSidebar ? "sm:ml-62.5" : "sm:ml-15"
          } bg-red-500 transition-all duration-300`}
        >
          <Routes>
            <Route path="/" element={<Owerview />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
