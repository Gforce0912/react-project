import React, {useState} from "react";
import Cards from "./Cards";
import Icone_1 from "../img/icone1.svg"
import Icone_2 from "../img/icone2.svg"
import Icone_3 from "../img/icone3.svg"
import Footer from "./Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/swiper2.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Services () {


    function clickBtn1() {
        document.getElementById('frames').className = 'Service-frames'; 
      }
    function closeFrame(){
        document.getElementById('frames').className = 'frame_none';
    }

    function closesFrame(){
        document.getElementById('frames').className = 'frame_none';
    }
    function enterFrame(){
        if(frameInputValue1 != '' && frameInputValue2){
            document.getElementById('frameInputs').innerHTML = `Спасибо вам за то, что выбрали
            нас. Наш специалист свяжется с
            вами в ближайшее время`;
            document.getElementById('frameInputs').className = 'frame_input-none'; 
            document.getElementById('frameBtn').innerHTML = `<button id="frameClose">Закрыть</button>`; 
            document.getElementById('frameClose').onclick = function () {
                document.getElementById('frames').className = 'frame_none';      
            }
        }
        else{
            document.getElementById('frameInput1').style = `
            border: solid 2px rgb(255, 95, 95);
            `; 
            document.getElementById('frameInput2').style = `
            border: solid 2px rgb(255, 95, 95);
            `;             
        }

    }
    const [frameInputValue1, setFrameInputValue1] = useState('')
    const [frameInputValue2, setFrameInputValue2] = useState('')
    
        
    return(
        <div className="MAIN">
            <div className="frame_none" id='frames'>
                <div className="Service-frame_inputs">
                            <button id="closeFrame" onClick={closeFrame}>&#10006;</button>
                            <div id="frameInputs"  className="frameInput-none">
                                <input id='frameInput1' value={frameInputValue1} onChange={ev => setFrameInputValue1(ev.target.value)} type="text" className="Service-frame_input" placeholder="Ваше имя"/>
                                <input id='frameInput2' value={frameInputValue2} onChange={ev => setFrameInputValue2(ev.target.value)} type="text" className="Service-frame_input" placeholder="Ваш номер"/>
                            </div>
                        </div>
                        <div className="Service-frame_btn" id="frameBtn">
                            <button id="frameEnter" onClick={enterFrame}>Отправить</button>
                        </div>
                </div>
            <div className="services_head">
                <h2>Варианты программ</h2>
                <a href="/"><span>&lt;</span> На главную</a>
            </div>
        <div className="main_services_cards">
        <div className="services_cards">
                <Cards content={{
                id: "Icone_1",
                class: "cards-footer1 cards-f cards-serv",
                title: "Work and Travel Greenheart",
                body: "Трудоустройство из базы работодателей Greenheart",
                src: Icone_1,
                price: "2500$",
                link: "Подробнее",
                href: "/Services"
                }}/>

                <Cards content={{
                    id: "Icone_2",
                class: "cards-footer2 cards-f cards-serv",
                title: "Work and Travel Greenheart",
                body: "Трудоустройство от DagCorporation! Предоставление жилья, встреча в аэропорту, дополнительная поддержка на терретории Америки",
                src: Icone_2,
                price: "2500$",
                link: "Подробнее",
                href: "/Services"
                }}/>

                <Cards content={{
                    id: "Icone_3",
                class: "cards-footer3 cards-f cards-serv",
                title: "Work and Travel Greenheart",
                body: "Трудоустройство от DagCorporation! Предоставление жилья, встреча в аэропорту, дополнительная поддержка на терретории Америки",
                src: Icone_3,
                price: "2500$",
                link: "Подробнее",
                href: "/Services"  
                }}/>
        </div>

            <div className="large_card">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Cards content={{
                    id: "Icone_1",
                    btn_id: "btn1",
                    class: "cards-footer1 cards-f cards-serv1",
                    title: "Work and Travel Greenheart",
                    body: `sit amet consectetur. Adipiscing sed nulla nibh vulputate orci faucibus neque ultrices sapien. Neque in curabitur suscipit ut.
                    Eu malesuada diam proin faucibus in leo non diam. Fermentum sed augue felis tortor id nam ipsum enim scelerisque. Proin aliquam in malesuada pretium elementum. Rutrum placerat urna velit elementum ornare vitae mauris in. Dolor amet sed et egestas at mollis quam enim.
                    Massa nullam mi posuere in interdum facilisis dictum adipiscing. In at sed pulvinar sit vestibulum. Ullamcorper ut nisl in at sollicitudin lectus massa suscipit tincidunt. Etiam in sed praesent tristique. Sagittis scelerisque quis mattis purus.`,
                    src: Icone_1,
                    price: "Учавствовать",
                    link: "Цена: 2500$",
                    onclick: clickBtn1
                    }}/>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
                
            </div>
        </div>

        <div className="services_footer">
          <Footer/>
        </div>
        </div>
    )
}

export default Services;
