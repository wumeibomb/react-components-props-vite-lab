import blogData from "../data/blog"
import React from "react";

function About({image, about}) {
    return (
        <aside>
            <img src = {image}
            alt = "blog logo">
            </img>

            if ({image} == "") {
                {image} == "https://via.placeholder.com/215"
            }
            
            <p>{about}</p>
        </aside>
    )

}
export default About