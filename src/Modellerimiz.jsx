import React, { useRef } from 'react'
import DB from "./Db.json"

function Modellerimiz() {

  const inputRef = useRef(null);

  const Modelsearch = (e) => {
    if (e.key === "Enter") {

      const inputValue = inputRef.current.value;

      for (let i = 0; i < DB.length; i++) {
        if (inputValue === DB[i].carbranddata) {
 
          let control=inputValue;

          let carcard = document.createElement("div");
          let carinfo = document.createElement("div");
          let brandlogo = document.createElement("div");

          let carbrand = document.createElement("span");
          let carmodel = document.createElement("span");
          let Year = document.createElement("span");
          let carcolor = document.createElement("span");
          let price = document.createElement("span");

          let carimg = document.createElement("img");
          let brandlogoimg = document.createElement("img");

          carimg.classList.add("carimg");
          brandlogoimg.classList.add("Brandlogoimg");

          carbrand.classList.add("carbrand");
          carmodel.classList.add("carmodel");
          Year.classList.add("Year");
          carcolor.classList.add("carcolor");
          price.classList.add("price");

          carcard.classList.add("carcard");
          carinfo.classList.add("carinfo");
          brandlogo.classList.add("brandlogo");

          carimg.src = DB[i].carimgdata;
          brandlogoimg.src = DB[i].brandlogoimgdata;

          carbrand.textContent = "Marka: "+DB[i].carbranddata;
          carmodel.textContent = "Model: "+DB[i].carmodeldata;
          Year.textContent = "Üretim yılı: "+DB[i].yeardata;
          carcolor.textContent = "Renk: "+DB[i].carcolordata;
          price.textContent = "Fiyat: "+DB[i].Pricedata;

          carcard.appendChild(carimg);
          carcard.appendChild(carinfo);
          carcard.appendChild(brandlogo);

          carinfo.appendChild(carbrand);
          carinfo.appendChild(carmodel);
          carinfo.appendChild(Year);
          carinfo.appendChild(carcolor);
          carinfo.appendChild(price);

          brandlogo.appendChild(brandlogoimg);

          document.querySelector(".carmodelcontainer").appendChild(carcard);

        
          inputRef.current.value = "";
        }
      }
    }
  }

  return (
    <div className='Model-Page'>
      <div className='navbar'>
        <input
          ref={inputRef}
          onKeyDown={Modelsearch}
          type='text'
          className='Modelsearch'
          placeholder='Araç markası yazınız...'
        />
      </div>

      <div className='Model-container'>
        <div className="carmodelcontainer">
          {/* static card */}
        </div>
      </div>
    </div>
  )
}

export default Modellerimiz