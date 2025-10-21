import React from 'react'
import './Footer.css'
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export const Footers = () => {
    return (
        <footer>
            <div className="footer-content">
                {/* <p>© 2024 Your Company. All rights reserved.</p> */}
                <div>
                    <div><IoMdCall />8090792399</div>
                    <div><CiMail />www@gmail.com</div>
                    <div><CiLocationOn />Chandigarh|Punjab</div>
                </div>
                <br></br>
                <div>
                    <p>© 2025 WorldAtla. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}