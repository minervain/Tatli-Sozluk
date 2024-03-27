import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Cupcake.png'
import '../Styles/Components/Header.scss'

function Navbar() {

  const navigate=useNavigate();
  const Yonlendir = () => {
    navigate('/login  '); 

  }

  return (
    <div>
      <header className="text-white p-3 logo font-semibold" >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className=" w-10 h-10" />
            <span className="text-xl font-semibold">Tatlı Sözlük</span>
          </div>

          <nav className="space-x-4 ">
            <Link to="/" className="link-style">
              Anasayfa
            </Link>
            <Link to="/Leaderboard" className="link-style">
              Leaderboard
            </Link>
            <Link to="/flow" className="link-style">
              Yemek
            </Link>
            <Link to="/haber" className="link-style">
              Haber
            </Link>
            <Link to="/flow" className="link-style">
              Spor
            </Link>
            <Link to="/flow" className="link-style">
              Sağlık
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="#" className="link-style">
              Profil
            </Link>
            <Link to="#" className="link-style">
              Ayarlar
            </Link>
            <button onClick={Yonlendir} className="bg-white text-blue-500 px-4 py-2 rounded-full">
              Giriş Yap
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
