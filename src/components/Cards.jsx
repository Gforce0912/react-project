import React, {useState} from "react";
import Arrow from "../img/Arrow.svg";

function Cards(props) {
  const arrow = Arrow;
  let btn1 = document.getElementById('btn1');
  function clickBtn1() {
    document.getElementById('frames').innerHTML = `
    <div className="frame1">
    <div className="frame-inputs">
        <input className="frame1_input1" type="text" />
    </div>
    <br />
    <div className="frame-inputs">
        <input className="frame1_input1" type="text" />
    </div>
    <button className="frame1_btn1">Отправить</button>
</div>
<div className="frame2">
    <h4>Ващ отзыв будет опубликован в <br /> 
        ближайшее время. <br />
        Благодарим вас!
    </h4>
    <button className="frame1_btn1">Закрыть</button>
</div>
<div className="overflows"></div>
    `
  }

    return(
        <div className="Cards" id="cards">
            <div className="card">
                    <img className="icone" src={props.content.src} alt="" />
                    <div className="card__title" id="title"><h2>{props.content.title}</h2></div>
                    <div className="card__body" id="body"><p>{props.content.body}</p></div>
                    <div className={props.content.class}>
                        <div>
                            <a className="cards-link" id="cards_link" href="#">{props.content.link}</a>
                            <hr />
                        </div>
                        <a href={props.content.href}><button id={props.content.btn_id} onClick={props.content.onclick} className="card__btn services_btn"><b>{props.content.price}</b><span><img src={arrow} alt="" /></span></button></a>
                    </div>
            </div>
        </div>
    )
}

export default Cards;
