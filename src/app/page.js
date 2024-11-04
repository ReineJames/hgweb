"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Homepage from "@/pages/Homepage"
/*import classes from "./page.module.css";*/
/*import Image from 'next/image'*/

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Homepage/>
      <Footer/>

    </main>
  )
}