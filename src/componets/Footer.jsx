import React from 'react'
import { BiLogoFacebook, BiLogoGithub, BiLogoGoogle, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Footer = () => (
    <footer className="bg-dark text-center text-white mt-5" >
        <div className="container p-4 pb-0">

            <section className="mb-4">

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoFacebook />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoTwitter />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoGoogle />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoInstagram />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoLinkedin />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="">
                    <BiLogoGithub />
                </a>
            </section>

        </div>



        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <a className="text-white" style={{marginLeft:"10px", textDecoration:"none"}} href="https://github.com/ShashankPrajapati13">Shashank Prajapati</a>
        </div>


    </footer>
)

export default Footer