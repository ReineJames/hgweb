"use client";
import "../styles/Hero.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import TeamPhoto1 from "../assets/TeamPhoto1.png"
import TeamPhoto2 from "../assets/TeamPhoto2.png"
import TeamPhoto3 from "../assets/TeamPhoto3.png"

export default function HeroSection() {

  return (
    <Carousel interval={3000} className="carousel">

      <Carousel.Item>
      <Image className="teamPhoto" src={TeamPhoto1}></Image>
        <Carousel.Caption className="heroText">
          <h1>WE ARE HYGEARS!</h1>
          <p>"Hygears Quote"</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image className="teamPhoto" src={TeamPhoto2}></Image>
        <Carousel.Caption className="heroText">
          <h1>WE ARE HYGEARS!</h1>
          <p>"Hygears Quote"</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image className="teamPhoto" src={TeamPhoto3}></Image>
        <Carousel.Caption className="heroText">
          <h1>WE ARE HYGEARS!</h1>
          <p>"Hygears Quote"</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}