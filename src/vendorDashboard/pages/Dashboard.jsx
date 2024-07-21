import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Login, Register, AddFirm, AddProduct } from "../components/forms";
import AllProducts from "../components/AllProducts";
import VendorDashboard from "./VendorDashboard";
import LandingPage from "../pages/LandingPage";

const Dashboard = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showAllProduct, setShowAllProduct] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showFirmTitle, setShowFirmTitle] = useState(true)

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setShowLogOut(true);
    }
  }, []);

  useEffect(()=>{
    const firmName = localStorage.getItem('firmName');
    const firmId = localStorage.getItem('firmId')
    if(firmName || firmId ){
        setShowFirmTitle(false)
    }
},[])

const logOutHandler = () => {
  if (confirm("Are you sure to logout?")) {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false);
    setShowFirmTitle(true);
  }
};
  const showDashboardHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowAllProduct(false);
    setShowDashboard(true);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowAllProduct(false);
    setShowDashboard(false);
  };
  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowAllProduct(false);
    setShowDashboard(false);
  };
  const showFirmHandler = () => {
    setShowFirm(true);
    setShowProduct(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowAllProduct(false);
    setShowDashboard(false);
  };
  const showProductHandler = () => {
    setShowFirm(false);
    setShowProduct(true);
    setShowRegister(false);
    setShowLogin(false);
    setShowAllProduct(false);
    setShowDashboard(false);
  };
  const showAllProductsHandler = () => {
    setShowFirm(false);
    setShowProduct(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowAllProduct(true);
    setShowDashboard(false);
  };

  return (
    <section>
      {!showLogOut && (
        <LandingPage
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
          showLogOut={showLogOut}
          logOutHandler={logOutHandler}
        />
      )}
      {showRegister && <Register showLoginHandler={showLoginHandler} />}
      {showLogin && <Login />}
      {showLogOut && (
        <div className=" bg-[#30638E] flex w-full md:flex-row flex-col h-[100vh]">
          <Sidebar
            showDashboardHandler={showDashboardHandler}
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler}
            logOutHandler={logOutHandler}
            showFirmTitle={showFirmTitle}
          />
          {showDashboard && <VendorDashboard />}
          {showLogOut && showFirm && <AddFirm />}
          {showProduct && <AddProduct />}
          {showAllProduct && <AllProducts />}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
