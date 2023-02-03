import React from "react";
import "./card.css"
import Zurag from "../assets/huracan.jpg"
import Zurag1 from "../assets/mustang android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-fyzop-1680x1050.jpg"
import Zurag2 from "../assets/mustang.jpeg"
import Zurag3 from "../assets/LuxuryCorp.jpg"
import Zurag4 from "../assets/When you decide to be a Mercedes man but within your budget - Car.jpg"
import Zurag5 from "../assets/2011 Mercedes Silver Arrow Concept.jpg"
const Card = () =>{
    const data = [
        {
            key:1,
            title:"Huracan",
            description:"үнэ: 340,239,500 ₮",
            img: Zurag,

        },
        {
            key:2,
            img: Zurag1,
            title:"M DOWN JACKETS",
            description:"Үнэ: 800,470,000 ₮",
            

        },
        {
            key:3,
            img: Zurag2,
            title:"Mustang Ford",
            description:"Үнэ: 230,348,000 ₮",
            

        },
        {
            key:4,
            img: Zurag3,
            title:"Luxury Crop",
            description:"Үнэ: 600,348,000 ₮",
            

        },
        {
            key:5,
            img: Zurag4,
            title:"Bolroogiin Benz",
            description:"Үнэ: 200,348,000 ₮",
            

        },
        {
            key:6,
            img: Zurag5,
            title:"Mercedes Silwer Arrow Concert",
            description:"Үнэ: 900,348,000 ₮",
            

        },
       
    ]
    return(
        <div className="grid">
                {
                data.map((row)=>(
                    <div className="text">
                        <img src={row.img} alt="/"/>
                        <h2>{row.title}</h2>
                        <p>{row.description}</p>
                    </div>
                ))
                }
        </div>
    );
};
export default Card