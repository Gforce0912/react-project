import React from "react";

function Frame() {
    return(
        <div>
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
        </div>
    )
}



export default Frame;