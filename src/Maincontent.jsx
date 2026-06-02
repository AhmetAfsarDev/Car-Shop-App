import React, { useState } from 'react';
import Header from "./Header.jsx"; 
import Modellerimiz from "./Modellerimiz.jsx";
import Homepage from "./Home-page.jsx";
import Informationpage from "./Information.jsx";
import Businesspage from "./Business.jsx";
import Adress from "./Adress.jsx";

function Maincontent() {
  const [aktifSekme, setAktifSekme] = useState("Home");

  // Gelen veriyi doğrudan state'e atıyoruz
  const sekmeDegistir = (sayfaAdi) => {
    setAktifSekme(sayfaAdi);
  };

  return (
    <div className='Main-content'>
      <Header onMenuClick={sekmeDegistir} />
      
      <div className='Content'>
        {aktifSekme === "Home" && <Homepage />}
        {aktifSekme === "Adress" && <Adress />}
        {aktifSekme === "Models" && <Modellerimiz />}
        {aktifSekme === "Business" && <Businesspage />}
        {aktifSekme === "Information" && <Informationpage />}
      </div>
    </div>
  );
}

export default Maincontent;