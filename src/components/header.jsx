import imgLogo from "../img/logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Services from './Services';
import Main from './Main';
import AboutCompany from "./AboutCompany";
import AboutProgram from "./AboutProgram";
import AllReviews from "./AllReviews";



function Header() {
  const burgerNav = () =>{
    document.getElementById('left_nav').style.display = "flex";
  } 
  const closeNav = () =>{
    document.getElementById('left_nav').style.display = "none";
  } 
    return(
        <div>
          <div className="left_nav" id="left_nav">
            <nav >
              <ul>
                <a href="/"><li>Главная</li></a>
                <a href="/Services"><li>Услуги</li></a>
                <a href="/AboutCompany"><li>О компании</li></a>
                <a href="/AboutProgram"><li>О программе</li></a>
                <a href="/AllReviews"><li>Отзывы</li></a>
                <a href="#footer" onClick={closeNav}><li>Контакты</li></a>
              </ul>
            </nav>
            <span onClick={closeNav}>&#10006;</span>
          </div>
        <header>
          <div className="head__nav">
            <div className="logo">
                <a href="/"><img src={imgLogo} alt="Logo"/></a>
                <span id="burgerNav" onClick={burgerNav}>&#9776;</span>
            </div>
            
            <nav >
              <ul>
                <a href="/"><li>Главная</li></a>
                <a href="/Services"><li>Услуги</li></a>
                <a href="/AboutCompany"><li>О компании</li></a>
                <a href="/AboutProgram"><li>О программе</li></a>
                <a href="/AllReviews"><li>Отзывы</li></a>
                <a href="#footer"><li>Контакты</li></a>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/AboutCompany" element={<AboutCompany/>}/>
            <Route path="/AboutProgram" element={<AboutProgram/>}/>
            <Route path="/AllReviews" element={<AllReviews/>}/>
          </Routes>
        </header>
        </div>
    )
}


export default Header;
