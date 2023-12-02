import React, {useState} from "react";
import RevLogo from "../img/All-reviews/logo.png"
import RevImg1 from "../img/All-reviews/rev-img1.png";
import RevImg2 from "../img/All-reviews/rev-img2.png";
import RevImg3 from "../img/All-reviews/rev-img3.png";
import revAvatar from "../img/All-reviews/camera.png";
import revAttach from "../img/All-reviews/attach.png";
import Avatar2 from "../img/All-reviews/rustam1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Navigation } from 'swiper/modules';
import Arrow from "../img/Arrow.svg";
import Footer from "./Footer";
import AvatarEditor from 'react-avatar-editor';
import Avatar from 'react-avatar';

function AllReviews(){
    const [nameValue, setNameValue] = useState('Имя');
    const [nameValue2, setNameValue2] = useState('Фамилия');
    const [areaValue, setAreaValue] = useState('');
    const [frameInputValue1, setFrameInputValue1] = useState('');
    const [frameInputValue2, setFrameInputValue2] = useState('');

    function revEnter() {
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
            document.getElementById('frameInputs').innerHTML = `Ваш отзыв будет опубликован в ближайшее время. Благодарим вас!`;
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
    



    return(
        <div className="Main">
            <div className="AllReviews"> 
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
                <div className="services_head about_head about-grog_head rev_head">
                    <h2>Все отзывы</h2>
                    <hr />
                    <a href="/"><span>&lt;</span> На главную</a>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="revSl">
                                <div className="review">
                                    <div className="rev_img">
                                        <img src={RevLogo} alt="" />
                                        <h4>Павел Абазов</h4>
                                    </div>
                                    <div className="rev_body">
                                        <p>
                                            Стоит ли сомневаться перед поездкой в сша по этой программе? Наверно да, но только в выборе города или работы все остальное очевидно, обращайтесь в агенство Dagcorporetion и вы 100% проведете продуктивное лето!
                                        </p>
                                    </div>
                                </div>
                                <div className="review_imgs">
                                    <div className="rev_img1">
                                        <img className="rev_img_1 img_rev" src={RevImg1} alt="" />
                                    </div>
                                    <div className="rev_img2">
                                        <img className="rev_img_2 img_rev" src={RevImg2} alt="" />
                                    </div>
                                    <div className="rev_img3">
                                        <img className="rev_img_3 img_rev" src={RevImg3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="revSl">
                                <div className="review">
                                    <div className="rev_img">
                                        <img src={Avatar2} alt="" />
                                        <h4>Рустам Магомедов</h4>
                                    </div>
                                    <div className="rev_body">
                                        <p>
                                            Меня зовут Рустам, я крутой senyor программист, мне 500000 лет и я все в этом мире видел
                                        </p>
                                    </div>
                                </div>
                                <div className="review_imgs">
                                    <div className="rev_img1">
                                        <img className="rev_img_1 img_rev" src={RevImg1} alt="" />
                                    </div>
                                    <div className="rev_img2">
                                        <img className="rev_img_2 img_rev" src={RevImg2} alt="" />
                                    </div>
                                    <div className="rev_img3">
                                        <img className="rev_img_3 img_rev" src={RevImg3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="revSl">
                                <div className="review">
                                    <div className="rev_img">
                                        <img src={RevImg1} alt="" />
                                        <h4>Секрет Секретов</h4>
                                    </div>
                                    <div className="rev_body">
                                        <p>
                                            Мне очень понравилось эта программа, прям восхещен!!!
                                        </p>
                                    </div>
                                </div>
                                <div className="review_imgs">
                                    <div className="rev_img1">
                                        <img className="rev_img_1 img_rev" src={RevImg1} alt="" />
                                    </div>
                                    <div className="rev_img2">
                                        <img className="rev_img_2 img_rev" src={RevImg2} alt="" />
                                    </div>
                                    <div className="rev_img3">
                                        <img className="rev_img_3 img_rev" src={RevImg3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                
                <div className="AllRevFeedback">
                    <hr className="rev_hr1"/>
                    <h2>Оставить отзыв</h2>
                    <hr className="rev_hr2"/>
                </div>
                <div className="revForm">
                    <div className="rev-img">
                        <div className="rev-form_img">
                            <div className="camera" id="imgContaner">
                                <Avatar className="AvatarEdit1" name={nameValue} size="70"/>
                                {/* <img src={revAvatar} id="revAvatar" alt="" /> */}
                                <input id="Avatar" className="AvatarEdit"type="file" multiple/>
                            </div>
                            <p>Добавить аватар</p>
                        </div>
                        <div className="rev-form_attach">
                            <img src={revAttach} alt="" />
                            <p>Приложите фото отзыва</p>
                        </div>
                    </div>
                    <div className="rev-Forms">
                        <div className="names">
                            <input className="rev_input1" type="text" value={nameValue} onChange={ev => setNameValue(ev.target.value)}/>
                            <input className="rev_input2" type="text" value={nameValue2} onChange={ev => setNameValue2(ev.target.value)}/>
                        </div>
                        <div className="form-rev">
                            <h4>отзыв</h4>
                            <textarea className="form-rev_" placeholder="Ваш отзыв" value={areaValue} onChange={ev => setAreaValue(ev.target.value)}></textarea>
                            <p>Осталось 250 символов</p>
                        </div>
                        <button onClick={revEnter} className="btn rev-btn main-btn-a rev-btn">Оnравить отзыв<span><img src={Arrow} alt="" /></span></button>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}




export default AllReviews;