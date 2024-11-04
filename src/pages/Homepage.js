"use client";
import "../styles/Homepage.css"
import Image from 'next/image'
import profilePic from "../assets/profilePic.png"
import MechanicalEng from "../assets/MechEng.png"
import ElectronicAndCommunicationsEng from "../assets/ElecAndCommsEng.png"
import IndustrialEng from "../assets/IndEng.png"
import ElectronicsEng from "../assets/ElecEng.png"
import ComputerEng from "../assets/CompEng.png"
import sampleProjectImg from "../assets/sampleProjectImage.png"
import project1Image from "../assets/proj1-pic.jpg"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Homepage() {
  return (
    <div className="homepage">


      <div className="description">
        <div className="profile-pic-container">
          <Image className="profile-pic-image" src={profilePic}></Image>
        </div>
        <div className="description-text">
          <p>
          The PUP Hygears is an organization that aims to further enhance the awareness
        of the PUP Students in the field of research and help produce well-trained and
        competent students through real-life training in innovation and production of
        a highly efficient vehicle to help the economy and heighten the technology
        of the country.
          </p>
        </div>
      </div>

      <div className="aboutUsTitle">
        <span className="aboutUsTitleTextContainer">
           <span className="aboutUsTitleText">About Us</span>
        </span>
      </div>

  
      <div className="projects-main-container">

      <div className="projects-main-title">
        Projects and Activities
      </div>

      <Card className="project-item" id="p1">
        <div className="proj-img-container">
          <Image className="proj-img-content" src={project1Image}></Image>
        </div>
      <Card.Body className="proj-body">
        <Card.Title className="project-title">Shell Eco Marathon 2024</Card.Title>
        <Card.Text className="project-description">
            We participated in the annual Shell Eco Marathon 2024, a world’s leading student
            engineering competition that brings together students across the world to design, build and
            operate some of the world’s most energy-efficient vehicles.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className="project-item" id="p2">
      <Card.Body className="proj-body">
        <Card.Title className="project-title">LUNA </Card.Title>
        <Card.Text className="project-description">
        The creation of LUNA, is a testament to the unwavering dedication and passion of every
        member of the PUP Hygears family. From inception to realization, each individual has poured
        their heart and soul into bringing Luna Five to life. As the final chapter of its generation,
        Luna Five is primed to make history
        </Card.Text>
      </Card.Body>
      <div className="proj-img-container">
          <Image className="proj-img-content" src={project1Image}></Image>
        </div>
      </Card>

      </div>

     <div className="members-title">
      Members
     </div>

    <div className="membersDescription">

      <p className="membersDescriptionText">
      The team’s diverse composition across various
        disciplines fosters innovative ideas and solutions,
        driven by a collective passion to make a positive impact and continuously improve.
      </p>

      <div className="seeMembersButtonContainer">
      <Button className="seeMembersButton" variant="primary">See Members</Button>
      </div>
      
    </div>


      <div className="aboutUs">
        <div className="teamMembersTitle">
          <p className="titleText">DIVERSE TEAM MEMBERS</p>
          <div className="titleLine"></div>
        </div>
        <div className="teamMembers">
          <div className="programBox">
            <p className="MechEng">Mechanical Engineering</p>
            <Image src={MechanicalEng}></Image>
          </div>
          <div className="programBox">
            <p className="ElecAndComms">Electronic and Communications Engineering</p>
            <Image src={ElectronicAndCommunicationsEng}></Image>
          </div>
          <div className="programBox">
            <p className="IndEng">Industrial Engineering</p>
            <Image src={IndustrialEng}></Image>
          </div>
          <div className="programBox">
            <p className="ElecEng">Electrical Engineering</p>
            <Image src={ElectronicsEng}></Image>
          </div>
          <div className="programBox">
            <p className="CompEng">Computer Engineering</p>
            <Image src={ComputerEng}></Image>
          </div>
        </div>
      </div>

      <div className="teamMembersDescription">
          <p>
            The team is composed of various students from different programs.
            This includes students from Mechanical Engineering, Electronics and
            Communications Engineering, Industrial Engineering, Electrical Engineering,
            and even from Marketing.
          </p>
          <p>
            This diversity makes the team even greater for it brings a wide variety
            of ideas, which when collaborated turns into one concrete idea. However,
            the main characteristic of this team is the hunger that they have. The
            hunger to improve the current situation of humanity, the hunger to
            contribute to the innovating world, and most importantly, the internal
            hunger in every members to improve themselves.
          </p>
        </div>
        

      </div>
  )
}