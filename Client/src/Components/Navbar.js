import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Cupcake.png'
import '../Styles/Components/Header.scss'

function Navbar() {
  return (
    <div>
      <header className= "text-white p-3 logo" >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className=" w-10 h-10"  />
            <span className="text-xl font-semibold">Tatlı Sözlük</span>
          </div>

          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Anasayfa
            </Link>
            <Link to="/Leaderboard" className="hover:underline">
              Leaderboard
            </Link>
            <Link to="#" className="hover:underline">
              Akış
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="#" className="hover:underline">
              Profil
            </Link>
            <Link to="#" className="hover:underline">
              Ayarlar
            </Link>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
              Giriş Yap
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
