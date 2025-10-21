import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Home.css';
import { Homeitem } from "../../data";
import { About } from "./About";
import { Contact } from "./Contact";  
import {Country} from "./Country"

export const Home = () => {
    return (
        <>
        <main className="">
            <div className="box">
                <div className="box-content">
                    <h1 className="heading">{Homeitem.heading}</h1>
                    <p className="box-text">{Homeitem.text}</p>
                    <button className="box-button">{Homeitem.buttonText}<FaLongArrowAltRight /></button>
                </div>
                <div className="box-image">
                    <img src={Homeitem.bg} alt="" />
                </div>
            </div>
        </main>
       
       <About/>
      <Country/>
       <Contact/>
        </>
    )
};