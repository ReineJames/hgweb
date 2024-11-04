"use client";
import "../styles/Footer.css"
import Image from 'next/image'
import instagramLogo from "../assets/instagram.svg"
import facebookLogo from "../assets/facebook.svg"
import emailLogo from "../assets/email.svg"
import xLogo from "../assets/twitter.svg"

export default function Footer() {
  return (
    <main>
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className="footer-title">PUP HYGEARS</h2>
                    <div className="footer-icons">

                        <a href="https://www.instagram.com/puphygears?igsh=MTJ4N254eXE4MnRlNQ=="><i className="bi bi-instagram"></i>
                        <Image className="logo" src={instagramLogo}></Image> puphygears</a>

                        <a href="https://www.facebook.com/PUPHygears"><i className="bi bi-facebook"></i>
                        <Image className="logo" src={facebookLogo}></Image> PUP Hygears</a>

                        <a href="mailto:puphygears@gmail.com"><i className="bi bi-envelope"></i>
                        <Image className="logo" src={emailLogo}></Image> puphygears@gmail.com</a>

                        <a href="https://x.com/pup_hygears"><i className="bi bi-twitter"></i>
                        <Image className="logo" src={xLogo}></Image> @pup_hygears</a>

                    </div>
                </div>
            </div>
        </div>

        </footer>
      </main>)}