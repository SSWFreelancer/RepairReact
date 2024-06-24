import Clients from "./components/Clients/Clients";
import Contacts from "./components/Contacts/Contacts";
import Cost from "./components/RepairCost/Cost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import Services from "./components/Services/Services";
import Control from "./components/Control/Control";
import Works from "./components/Works/Works";
import Costs from "./components/Costs/Costs";
import Ways from "./components/Ways/Ways";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Discount from "./components/Discount/Discount";
import Faq from "./components/Faq/Faq";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("popuplock");
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove("popuplock");
  };

  return (
    <>
      <Header openPopup={openPopup} />
      <div className="page">
        <Main />
        <Cost openPopup={openPopup} />
        <Clients />
        <Services openPopup={openPopup} />
        <Control />
        <Works openPopup={openPopup} />
        <Costs />
        <Ways openPopup={openPopup} />
        <AboutCompany />
        <Discount />
        <Faq />
        <Contacts />
      </div>
      <Footer />
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
}
