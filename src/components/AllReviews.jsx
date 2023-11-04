import React, {useState} from "react";
import RevLogo from "../img/All-reviews/logo.png"
import RevImg1 from "../img/All-reviews/rev-img1.png";
import RevImg2 from "../img/All-reviews/rev-img2.png";
import RevImg3 from "../img/All-reviews/rev-img3.png";

import revAvatar from "../img/All-reviews/camera.png";
import revAttach from "../img/All-reviews/attach.png";

import Avatar2 from "../img/All-reviews/leila2.jpg";
import Photo1 from "../img/All-reviews/leila1.jpg";
import Photo2 from "../img/All-reviews/rustam1.jpg";
import Photo3 from "../img/All-reviews/rustam2.jpg";


import Arrow from "../img/Arrow.svg";
import Footer from "./Footer";

import AvatarEditor from 'react-avatar-editor';
import Avatar from 'react-avatar';

function AllReviews(){
    const arrow = Arrow;
    const [name, setName] = useState("Павел Абазов");
    const [revBody, setRevBody] = useState(`
    Стоит ли сомневаться перед поездкой в сша по этой программе? Наверно да, но только в выборе города или работы) все остальное очевидно, обращайтесь в агенство Dagcorporetion и вы 100% проведете продуктивное лето!
    `);
    const [rev_img1, setRev_img1] = useState(RevImg1);
    const [rev_img2, setRev_img2] = useState(RevImg2);
    const [rev_img3, setRev_img3] = useState(RevImg3);

    const [nameValue, setNameValue] = useState('Имя');
    const [nameValue2, setNameValue2] = useState('Фамилия');
    const [areaValue, setAreaValue] = useState('');


    const [revLogo, setRevLogo] = useState(RevLogo);

    function reviewsClick(){
        // avatarEdit.innerHTML = `
        //     <AvatarEditor
        //     image={avatarEdit}
        //     width={250}
        //     height={250}
        //     border={10}
        //     color={[255, 255, 255, 0.6]} // RGBA
        //     scale={1.2}
        //     rotate={0}
        // />
        // `
        setRevLogo(Avatar2);
        setName("Лейла");
        setRevBody(`
        Стоит ли сомневаться перед поездкой в сша по этой программе? Наверно да, но только в выборе города или работы) все остальное очевидно, обращайтесь в агенство Dagcorporetion и вы 100% проведете продуктивное лето!
        `)
        setRev_img1(Photo1)
        setRev_img2(Photo2)
        setRev_img3(Photo3)
        
        function reviewsClick(){
            setRevLogo(RevLogo);
            setName("Павел Абазов");
            setRevBody(`
            Стоит ли сомневаться перед поездкой в сша по этой программе? Наверно да, но только в выборе города или работы) все остальное очевидно, обращайтесь в агенство Dagcorporetion и вы 100% проведете продуктивное лето!
            `)
            setRev_img1(RevImg1)
            setRev_img2(RevImg2)
            setRev_img3(RevImg3)
        }
        if(revLogo === Avatar2){
            reviewsClick()
            
        }
    }
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
        <div className="AllReviews"> 
        <       div className="frame_none" id='frames'>
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
                <a href="/"><span>&lt;</span> На главную</a>
            </div>
            <div className="review">
                <button onClick={reviewsClick}><div className="rev_left">&lt;</div></button>
                <div className="rev_img">
                    <img src={revLogo} alt="" />
                    <h4>{name}</h4>
                </div>
                <div className="rev_body"><p>{revBody}</p></div>
                <button onClick={reviewsClick}><div className="rev_right">&gt;</div></button>
            </div>
            <div className="review_imgs">
                <div className="rev_img1">
                    <img className="rev_img_1 img_rev" src={rev_img1} alt="" />
                </div>
                <div className="rev_img2">
                    <img className="rev_img_2 img_rev" src={rev_img2} alt="" />
                </div>
                <div className="rev_img3">
                    <img className="rev_img_3 img_rev" src={rev_img3} alt="" />
                </div>
            </div>
            <div className="AllRevFeedback">
                <hr className="rev_hr1"/>
                <h2>Оставить отзыв</h2>
                <hr className="rev_hr2"/>
            </div>
            <div className="revForm">
                <div className="rev-img">
                    <div className="rev-form_img">
                        <div className="camera">
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
                    <button onClick={revEnter} className="btn rev-btn main-btn-a rev-btn">Оnравить отзыв<span><img src={arrow} alt="" /></span></button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}




export default AllReviews;