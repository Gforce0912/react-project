import React, {useState} from "react";
import Cards from "./Cards";
import Icone_1 from "../img/icone1.svg"
import Icone_2 from "../img/icone2.svg"
import Icone_3 from "../img/icone3.svg"
import Footer from "./Footer";
import Frame from "./Frame";
function Services () {
    const [largeCardsIcon, setLargeCardsIcon] = useState(Icone_1);
    const [largeCardsTitle, setLargeCardsTitle] = useState("Work and Travel Greenheart");
    const [largeCardsBody, setLargeCardsBody] = useState(`sit amet consectetur. Adipiscing sed nulla nibh vulputate orci faucibus neque ultrices sapien. Neque in curabitur suscipit ut.
    Eu malesuada diam proin faucibus in leo non diam. Fermentum sed augue felis tortor id nam ipsum enim scelerisque. Proin aliquam in malesuada pretium elementum. Rutrum placerat urna velit elementum ornare vitae mauris in. Dolor amet sed et egestas at mollis quam enim.
    Massa nullam mi posuere in interdum facilisis dictum adipiscing. In at sed pulvinar sit vestibulum. Ullamcorper ut nisl in at sollicitudin lectus massa suscipit tincidunt. Etiam in sed praesent tristique. Sagittis scelerisque quis mattis purus.`,);









    function slideService(){
        setLargeCardsTitle('RandomText');
        setLargeCardsBody(`oefihoifleriugirseughoserughopse
        urghposeurghposerughpoeirshgoperishgpoesr
        uhgerushgpoesrihgpoersihg
        poersihgseroih`)
        setLargeCardsIcon(Icone_2)
        function slideService(){
        setLargeCardsTitle('RandomText2');
        setLargeCardsBody(`'fiehgieruhgorjghortjhrtj
        hrthijotjhgprjfoiergrogjpeirjgpergeo
        giergerjg0uergerjgreghrepghreojgiergergorgupijhorjhrtj'`)
        setLargeCardsIcon(Icone_3);
        function slideService(){
            setLargeCardsIcon(Icone_3);
            }
            if(largeCardsIcon === Icone_1){
                slideService()
            }
        }
        if(largeCardsIcon === Icone_2){
            slideService()
        }
    }


    return(
        <div>
            <Frame/>
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
                <Cards content={{
                    id: "Icone_1",
                    btn_id: "btn1",
                    class: "cards-footer1 cards-f cards-serv1",
                    title: largeCardsTitle,
                    body: largeCardsBody,
                    src: largeCardsIcon,
                    price: "Учавствовать",
                    link: "Цена: 2500$",
                    
                    }}/>
                    <div className="slider-services">
                        <button onClick={slideService}><span>&lt;</span></button>
                        <button  onClick={slideService}><span>&gt;</span></button>
                    </div>
            </div>
        </div>

        <div className="services_footer">
          <Footer/>
        </div>
        </div>
    )
}

export default Services;
