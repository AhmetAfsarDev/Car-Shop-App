import React from 'react';
import "./App.css";

function Header({ onMenuClick }) { // Prop ismini daha açıklayıcı yaptım
  
  return (
    <div className='Header'>
      <div className='Logocontainer'>
        <img className='Logo' src='./public/Logo.png' alt='Logo' />
      </div>
      
      <ul>
        {/* Her bir li tıklandığında ilgili string'i gönderiyoruz */}
        <li className='navlist' onClick={() => onMenuClick("Home")}>Ana Sayfa</li>
        <li className='navlist' onClick={() => onMenuClick("Adress")}>Şubeler</li>
        <li className='navlist' onClick={() => onMenuClick("Models")}>Modellerimiz</li>
        <li className='navlist' onClick={() => onMenuClick("Business")}>İş birliği</li>
        <li className='navlist' onClick={() => onMenuClick("Information")}>Hakkımızda</li>
      </ul>
    </div>
  );
}

export default Header;